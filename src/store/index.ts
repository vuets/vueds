import { ds } from '../ds/'
import { HasState, mergeVmFrom, defp, PojoState, EventFlags, PojoSO } from '../'
import { bit_clear_and_set, bit_unset, incrementKey, decrementKey } from '../util'

//export const STATE = "state"
//export const LSTATE = "lstate" // list state

export const DESCRIPTOR = "$d"
export const INDEX = "$index"

export const PREV_KEY = "$prev_key"
export const PREV_PAGE = "$prev_page"
export const PREV_ISTATE = "$prev_istate"

// TODO usage
function extractMessage(err: any): string {
    var str = JSON.parse(err)['1']
    return Array.isArray(str) ? str.join('\n') : str
}

export function shallowCopyTo<T>(target: T, src: T): T {
    for (var i in src)
        target[i] = src[i]
    
    return target
}

function shallowCopyFrom<T>(src: any, descriptor: any, target: T): T {
    for (var i in src)
        target[i] = src[i]
    
    return target
}

/*export function nullifyAll(obj: any) {
    for (var i in obj) {
        if (obj[i] !== null) obj[i] = null
    }
}*/

export interface KeyHandler {
    inc(key: string): string
    dec(key: string): string
}

export const enum SelectionType {
    NONE = 0,
    RESET = 1,
    /** Do not reference this, for internal use only */
    SELECT = 2,
    RETAIN = 3,
    RESELECT = 4
}

export const enum SelectionFlags {
    NONE = 0,
    CLICKED = 1,
    REFRESH = 2,
    CLICKED_UPDATE = 4,
    FORCE = 8,

    MASK_FORCE_OR_UPDATE = FORCE | CLICKED_UPDATE
}

export const enum PojoListState {
    NONE = 0,
    INCLUDED = 1,
    SELECTED = 2,
    REFRESH = 4,

    MASK_SELECTED_REFRESH = SELECTED | REFRESH
}

export const enum PagerState {
    NONE = 0,
    SUCCESS = 1,
    ERROR = 2,
    WARNING = 4,
    LOADING = 8,

    DESC = 16,
    LOAD_NEWER = 32,
    LOAD_OLDER = 64,
    RELOAD = 128,

    LOCAL_SEARCH = 256,

    MASK_STATUS = SUCCESS | ERROR | WARNING,
    MASK_RPC = LOAD_NEWER | LOAD_OLDER | RELOAD,
    MASK_RPC_DISABLE = LOADING | LOCAL_SEARCH
}

export interface Pager extends HasState {
    size: number // the total number of fetched items
    msg: string
    array: any[]
    index_selected: number
    index_hidden: number
    q_index: number

    prev_key: string|null
    prev_page: number
    prev_istate: number

    page: number
    page_count: number
    page_vcount: number // visible count
    page_from: number
    page_to: number

    pojo?: any
}

export function resolveNextPageIndex(page: number, idx: number, pager: Pager): number {
    return page !== pager.page_count ? idx : Math.min(idx, (pager.size % pager.array.length) - 1)
}

export interface ItemSO extends PojoSO {
    lstate: number
}

export type MergeFn<T> = (src: any, descriptor: any, target: T) => T

export interface PagerOptions<T> {
    pageSize: number
    descriptor: any
    desc?: boolean
    keyProperty?: string
    $keyProperty?: string
    kh?: KeyHandler
    merge_fn?: MergeFn<T>
    page?(next: boolean, pager: Pager)

    /** create Pojo With Defaults */
    createObservable(so: ItemSO, idx: number): T
    fetch(req: ds.ParamRangeKey, pager: Pager)
    
    onSelect(message: T, flags: SelectionFlags): number
    

    // TODO
    // addRows?(array: T[], count: number): boolean

    // event listener
    onAdd?(message: T, main: boolean, latest: boolean)
    onUpdate?(message: T, main: boolean, update: T): boolean
    onRemove?(message: T, main: boolean)
    onRemoveArray?(array: Array<T>, main: boolean)
    onPopulate?(message: T, main: boolean, target: T, index: number)

}

export function nullifyVprops(so: ItemSO, descriptor: any) {
    if (!descriptor.$fdf)
        return so
    
    for (let k of descriptor.$fdf) {
        if (so[k] !== null) so[k] = null
    }
}

function addVpropsTo(so: ItemSO, descriptor: any): ItemSO {
    if (descriptor.$fdf) {
        for (let k of descriptor.$fdf) {
            so[k] = null
        }
    }

    if (descriptor.$fdikf) {
        for (let k of descriptor.$fdikf) {
            so[k] = null
        }
    }
    
    return so
}

function createObservable<T>(options: PagerOptions<T>, index: number, pager: Pager, 
    descriptor: any, so: any): T {
    let p = options.createObservable(so, index)
    p['_'] = so
    Object.defineProperties(p, {
        $d: { value: descriptor, enumerable: false, configurable: true },
        $index: { value: index, enumerable: false, configurable: true },
        $pager: { value: pager, enumerable: false, configurable: true }
    })
    return p
}

export class PojoStore<T> {

    pager: Pager
    k: string
    $k: string
    startObj: T
    array: Array<T>
    mainArray: Array<T>

    private fnMergeFrom: MergeFn<T>

    constructor(fetchedArray: Array<T>, public options: PagerOptions<T>) {
        this.mainArray = fetchedArray
        this.array = fetchedArray
        this.k = options.keyProperty || '1'
        this.$k = options.$keyProperty || 'key'

        let observedArray: Array<T> = [],
            descriptor = options.descriptor,
            size = fetchedArray.length,
            pageSize = options.pageSize,
            page = 0,
            remaining = pageSize > size ? pageSize - size : 0,
            pager: Pager
        
        this.fnMergeFrom = options.merge_fn || (descriptor.$ ? mergeVmFrom : shallowCopyFrom)
        
        this.pager = pager = {
            size: size,
            state: options.desc ? PagerState.DESC : 0,
            msg: '',
            array: observedArray,
            index_selected: -1,
            index_hidden: pageSize,
            q_index: 0,
            
            prev_key: null,
            prev_page: page,
            prev_istate: 0,

            page: page,
            page_count: size / pageSize,
            page_vcount: 0,
            page_from: 1,
            page_to: pageSize - remaining

            //pojo: null
        }
        //defp(pager, 'pojo', null)

        let so = addVpropsTo({
            state: 0,
            msg: '',
            dfbs: 0,
            vfbs: 0,
            rfbs: 0,
            lstate: 0
        }, descriptor)
        observedArray.push(createObservable(options, 0, pager, descriptor, so))
        for (let i = 1; i < pageSize; i++) {
            // shallow copy the shared object
            // TODO Object.assign({}, so)
            observedArray.push(createObservable(options, i, pager, descriptor, shallowCopyTo({}, so)))
        }

        defp(pager, 'store', this)
    }

    getLastSeenObj(): T|null {
        return this.mainArray.length === 0 ? null : this.mainArray[0]
    }

    isEmpty(): boolean {
        return this.array.length === 0
    }

    size(): number {
        return this.array.length
    }

    isMainArray() {
        return this.mainArray === this.array
    }

    isSameArray(array) {
        return this.mainArray === array
    }

    repaint(): number {
        return this.$populate(SelectionType.RETAIN, 0, this.isMainArray(), -1, this.pager.page)
    }

    populate(type: SelectionType, flags: SelectionFlags, idxSelected: number): number {
        return this.$populate(type, flags, this.isMainArray(), idxSelected, this.pager.page)
    }

    $populate(type: SelectionType, flags: SelectionFlags, main: boolean,
        idxSelected: number, page: number): any {
        
        let pager = this.pager,
            toPopulate = pager.array as Array<T>,
            array = main ? this.mainArray : this.array,
            desc = !!(pager.state & PagerState.DESC),
            foundPrev = false,
            pageSize = toPopulate.length,
            size = array.length,
            options = this.options,
            descriptor = options.descriptor,
            fnMergeFrom = this.fnMergeFrom,
            k = this.k
        
        if (size === 0) {
            if (!desc) {
                pager.state |= PagerState.DESC
                desc = true
            }

            if (page) pager.page = page = 0
        } else if (page !== 0 && (page * pageSize) >= size) {
            pager.page = page = 0
        }

        let pages = (page * pageSize) + pageSize,
            remaining = pages > size ? pages - size : 0,
            populatePages = page * pageSize,
            len = Math.min(pageSize, size - populatePages),
            start = desc ? populatePages : -populatePages
        
        var target: T,
            target_: ItemSO,
            message: T,
            selected: T|null = null,
            prevKey: string|null = type >= SelectionType.RETAIN ? pager.prev_key : null,
            i = 0
        
        for (let state = 0; i < len; i++) {
            target = toPopulate[i]
            target_ = target['_'] as ItemSO
            message = array[start + (desc ? i : size - i - 1)]

            if (idxSelected === i) {
                state = PojoListState.SELECTED
                selected = target
            } else if (!(state = PojoListState.SELECTED & target_.lstate)) {
                if (prevKey != null && prevKey === message[k]) {

                    state = PojoListState.SELECTED
                    selected = target
                    idxSelected = i

                    prevKey = null

                    foundPrev = true
                }
            } else if (type < SelectionType.RETAIN || selected || prevKey !== message[k]) {
                state = 0
                target_.state = 0
                target_.msg = ''
            } else {
                selected = target
                idxSelected = i

                prevKey = null
            }

            fnMergeFrom(message, descriptor, target)

            if (options.onPopulate)
                options.onPopulate(message, main, target, i)
            
            target_.lstate = PojoListState.INCLUDED | state
        }

        pager.index_selected = idxSelected
        pager.index_hidden = i

        var visibleCount = pageSize
        while (i < pageSize) {
            toPopulate[i++]['_'].lstate = PojoListState.NONE
            visibleCount--
        }

        pager.page_vcount = visibleCount
        pager.page_count = Math.floor((size - 1) / pageSize)
        pager.page_from = (page * pageSize) + 1
        pager.page_to = (page * pageSize) + (pageSize - remaining)

        if (!selected)
            return 0

        if (type !== SelectionType.RETAIN)
            return this.$select(selected, flags, idxSelected, page, false)

        if (selected !== pager.pojo)
            pager.pojo = selected

        if (foundPrev)
            selected['_'].state = pager[PREV_ISTATE]

        return 0
    }

    select(current: T, flags: SelectionFlags, idx?: number): number {
        let pager = this.pager,
            index = idx !== undefined ? idx : current['$index']
        pager.index_selected = index
        return this.$select(current, flags, index, pager.page, true)
    }

    $select(current: T, flags: SelectionFlags, idx: number,
        page: number, selectWithoutPopulate: boolean): number {

        let pager = this.pager,
            prevKey = pager.prev_key,
            options = this.options,
            k = this.k,
            current_ = current['_'] as ItemSO
        
        if (prevKey) {
            let previous: T = pager.pojo,
                previous_ = previous['_'] as ItemSO,
                state: number = previous_.state
            
            if ((state & PojoState.LOADING))
                return EventFlags.PREVENT_BOTH

            let sameSlot = current === previous,
                same = sameSlot && (!selectWithoutPopulate || current[k] === prevKey),
                refresh = !same || SelectionFlags.REFRESH === (flags & SelectionFlags.REFRESH)

            if (!refresh) {
                // do nothing
            } else if ((state & PojoState.UPDATE)) {
                if (previous_.vfbs) {
                    previous_.vfbs = 0
                    previous_.msg = ''
                    nullifyVprops(current_, options.descriptor)
                } else if (previous_.msg) {
                    previous_.msg = ''
                }
                // state intentionally not modified
            } else if ((state & PojoState.MASK_STATUS)) {
                previous_.msg = ''
                // state intentionally not modified
            }

            if (same) {
                if (selectWithoutPopulate && (flags & SelectionFlags.FORCE))
                    current_.lstate = PojoListState.INCLUDED | PojoListState.SELECTED
                
                return options.onSelect(current, flags)
            }

            if (!sameSlot) {
                if (selectWithoutPopulate)
                    previous_.lstate = bit_unset(previous_.lstate, PojoListState.SELECTED)
                
                previous_.state = 0
            }
        }

        let ret = options.onSelect(current, flags)
        
        pager.pojo = current
        pager.prev_key = current[this.$k] || current[k]
        pager.prev_page = page
        pager.prev_istate = current_.state

        if (selectWithoutPopulate)
            current_.lstate = PojoListState.INCLUDED | PojoListState.SELECTED
        
        return ret
    }

    populateAndSelect(storeIdx: number, flags: SelectionFlags) {
        let pager = this.pager,
            array = pager.array as Array<T>,
            pageSize = array.length,
            currentPage = pager.page,
            state = pager.state

        if (!(state & PagerState.DESC))
            storeIdx = this.size() - storeIdx - 1

        let page = storeIdx / pageSize,
            selectIdx = page === 0 ? storeIdx : (storeIdx % pageSize)

        if (currentPage !== page)
            pager.page = page

        this.$populate(SelectionType.SELECT, flags, this.isMainArray(), selectIdx, pager.page)
    }

    notifyAndSelect(storeIdx: number, flags: SelectionFlags) {
        this.pager.size = this.size()
        this.populateAndSelect(storeIdx, flags)
    }

    notify(type: SelectionType = SelectionType.RETAIN, flags: SelectionFlags = SelectionFlags.NONE) {
        this.pager.size = this.size()
        this.$populate(type, flags, this.isMainArray(), -1, this.pager.page)
    }

    /**
     * Add the entity and select it afterwards.
     */
    addAndSelect(entity: T, latest: boolean, flags: SelectionFlags) {
        let main = this.isMainArray(),
            array = this.array,
            options = this.options

        var idx: number
        if (latest) {
            idx = 0
            array.unshift(entity)
        } else {
            idx = array.length
            array.push(entity)
        }

        if (options.onAdd)
            options.onAdd(entity, main, latest)
        
        this.notifyAndSelect(idx, flags)
    }

    get(index: number): T {
        return this.array[index]
    }

    getStoreIndex(selected: T): number {
        return this.$getStoreIndex(selected[INDEX])
    }

    $getStoreIndex(index: number): number {
        let pager = this.pager,
            toPopulate = pager.array as Array<T>,
            desc = !!(pager.state & PagerState.DESC),
            populatePages = pager.page * toPopulate.length

        return desc ? populatePages + index : this.size() - populatePages - index - 1
    }

    getSelectedOriginal(): T|null {
        var selected = this.pager.pojo
        return !selected ? null : this.get(this.getStoreIndex(selected[INDEX]))
    }
    
    getOriginal(selected: T): T {
        return this.get(this.$getStoreIndex(selected[INDEX]))
    }

    remove(index: number): T {
        let options = this.options,
            entity: T = this.array.splice(index, 1)[0]
        
        if (options.onRemove)
            options.onRemove(entity, this.isMainArray())
        
        this.notify(SelectionType.RETAIN, 0)
        
        return entity
    }

    clear() {
        let options = this.options,
            removed = this.array.splice(0, this.array.length)

        if (options.onRemoveArray)
            options.onRemoveArray(removed, this.mainArray === this.array)
        
        this.notify(SelectionType.RESET, 0)
    }

    add(entity: T, latest: boolean, mainOnly: boolean) {
        let options = this.options,
            targetArray = mainOnly ? this.mainArray : this.array

        if (latest)
            targetArray.unshift(entity)
        else
            targetArray.push(entity)

        if (options.onAdd)
            options.onAdd(entity, this.mainArray === targetArray, latest)

        if (!mainOnly || this.array === targetArray)
            this.notify(SelectionType.RETAIN, 0)
    }

    addAll(array: Array<T>, latest: boolean, mainOnly: boolean): boolean {
        if (!array || array.length === 0)
            return false
        
        let options = this.options, 
            targetArray = mainOnly ? this.mainArray : this.array,
            main = this.mainArray === targetArray
        
        if (targetArray.length === 0)
            latest = !latest
        
        for (let message of array) {
            if (latest)
                targetArray.unshift(message)
            else
                targetArray.push(message)

            if (options.onAdd)
                options.onAdd(message, main, latest)
        }

        if (!mainOnly || this.array === targetArray)
            this.notify(SelectionType.RETAIN, 0)

        return true
    }

    /**
     * Resets the internal arrays and does not notify nor call onRemoveArray
     */
    reinit(array: Array<T>): PojoStore<T> {
        this.mainArray = array
        this.array = array

        let onAdd = this.options.onAdd
        if (onAdd) {
            for (let p of array) onAdd(p, true, true)
        }
        
        return this
    }

    /**
     * Resets the internal arrays and calls the listener methods.
     */
    reset(array: Array<T>, notify: boolean = true) {
        let options = this.options, 
            onAdd = options.onAdd,
            removed = this.mainArray
        
        this.mainArray = array
        this.array = array

        if (options.onRemoveArray)
            options.onRemoveArray(removed, true)
        
        if (onAdd) {
            for (let message of array)
                onAdd(message, true, true)
        }

        if (notify)
            this.notify(SelectionType.RESET, 0)
    }

    /**
     * Simply sets the array.  No notifications/etc
     */
    setArray(array: Array<T>) {
        this.array = array
    }

    /**
     * Sets the array and notifies.
     */
    replace(array: Array<T>, type: SelectionType = SelectionType.RESET, flags: SelectionFlags = SelectionFlags.NONE) {
        this.array = array
        this.notify(type, flags)
    }

    /**
     * Returns true if an item was removed.
     */
    update(updateArray: Array<T>): boolean {
        let options = this.options,
            descriptor = options.descriptor,
            fnMergeFrom = this.fnMergeFrom,
            main = this.isMainArray(),
            pager = this.pager,
            toPopulate = pager.array as Array<T>,
            desc = !!(pager.state & PagerState.DESC),
            page = pager.page,
            size = this.size()
        
        var removedArray: Array<T>
        if (!updateArray || updateArray.length === 0) {

            if (size <= toPopulate.length) {

                if (options.onRemoveArray)
                    options.onRemoveArray(this.array, main)

                this.mainArray = this.array = []

                this.notify(SelectionType.RESET, 0)
                return true
            }

            let populatePages: number = page * toPopulate.length

            if (desc)
                removedArray = this.array.splice(populatePages, size - populatePages)
            else
                removedArray = this.array.splice(0, size - populatePages)

            if (options.onRemoveArray)
                options.onRemoveArray(removedArray, main)

            this.notify(SelectionType.RESET, 0)

            return true
        }

        let updateLen = updateArray.length,
            populateLen = toPopulate.length,
            populatePages = page * populateLen,
            k = this.k,
            i = 0,
            removed = 0,
            idx = desc ? populatePages + i : size - populatePages - i - 1
        
        var update: T, 
            message: T
        
        for (;;) {
            update = updateArray[i]
            message = this.array[idx]
            if (update[k] === message[k]) {
                i++

                if (!options.onUpdate || options.onUpdate(message, main, update))
                    fnMergeFrom(update, descriptor, message)
                
                if (desc) {
                    idx = populatePages + i

                    if (idx === size)
                        break
                } else {
                    idx = size - populatePages - i - 1

                    if (idx === -1)
                        break
                }

                if (i !== updateLen)
                    continue

                if (updateLen === populateLen)
                    break
                removedArray = this.array.splice(idx, 1)
                removed++
                size--

                if (options.onRemove)
                    options.onRemove(removedArray[0], main)

                break
            }

            removedArray = this.array.splice(idx, 1)
            removed++
            size--

            if (options.onRemove)
                options.onRemove(removedArray[0], main)

            if (!desc) {
                idx = size - populatePages - i - 1

                if (idx === -1)
                    break
            } else if (idx === size) {
                break
            }
        }

        let onAdd = options.onAdd,
            array = this.array,
            ret = removed !== 0

        while (i < updateLen) {
            message = updateArray[i++]
            if (desc)
                array.push(message)
            else
                array.unshift(message)

            if (onAdd)
                onAdd(message, main, !desc)
        }

        if (ret)
            pager.size = this.size()
        
        this.$populate(SelectionType.RESELECT, SelectionFlags.CLICKED_UPDATE | SelectionFlags.REFRESH, 
            this.isMainArray(), -1, pager.page)
        
        return ret
    }

    getStartObj(): T|null {
        let pager = this.pager,
            masked = PagerState.MASK_RPC & pager.state
        switch (masked) {
            case PagerState.LOAD_NEWER:
                return this.get(0)
            case PagerState.LOAD_OLDER:
                return this.get(this.size() - 1)
            case PagerState.RELOAD:
                return pager.array[0]
            default:
                return null
        }
    }

    newRangeKeyForReload(): ds.ParamRangeKey {
        return this.$newRangeKeyForReload(!!(this.pager.state & PagerState.DESC))
    }

    $newRangeKeyForReload(desc: boolean): ds.ParamRangeKey {
        let pager = this.pager,
            options = this.options,
            toPopulate = pager.array as Array<T>,
            size = this.size(),
            page = pager.page,
            pageSize = toPopulate.length,
            pages = (page * pageSize) + pageSize,
            remaining = pages > size ? pages - size : 0,
            visibleItemCount = pageSize - remaining,
            first = toPopulate[0],
            // keyProperty initially applies to the non-observable pojo
            key: string = first[this.$k] || first[this.k],
            kh = options.kh
        
        this.startObj = first
        // TODO set functions as object field
        var startKey: string
        if (kh) {
            startKey = desc ? kh.inc(key) : kh.dec(key)
        } else {
            startKey = desc ? incrementKey(key) : decrementKey(key)
        }

        return ds.ParamRangeKey.$create(desc, visibleItemCount, startKey)
    }

    newRangeKeyForLoadNewer(): ds.ParamRangeKey {
        let toPopulate = this.pager.array as Array<T>

        if (this.isEmpty())
            return ds.ParamRangeKey.$create(true, toPopulate.length + 1)
        
        let first = this.get(0)
        this.startObj = first
        return ds.ParamRangeKey.$create(false, toPopulate.length, first[this.k])
    }

    newRangeKeyForLoadOlder(): ds.ParamRangeKey {
        let toPopulate = this.pager.array as Array<T>,
            last = this.get(this.size() - 1)

        this.startObj = last
        return ds.ParamRangeKey.$create(true, toPopulate.length, last[this.k])
    }

    requestNewer() {
        let pager = this.pager,
            pageFn = this.options.page
        if (pageFn) {
            pageFn(!this.options.desc, pager)
            return
        }
        
        if (pager.msg)
            pager.msg = ''
        
        pager.state = bit_clear_and_set(pager.state, PagerState.MASK_STATUS, 
            PagerState.LOADING | PagerState.LOAD_NEWER)
        
        this.options.fetch(this.newRangeKeyForLoadNewer(), pager)
    }

    requestOlder() {
        let pager = this.pager,
            pageFn = this.options.page
        if (pageFn) {
            pageFn(!!this.options.desc, pager)
            return
        }
        
        if (pager.msg)
            pager.msg = ''
        
        pager.state = bit_clear_and_set(pager.state, PagerState.MASK_STATUS, 
            PagerState.LOADING | PagerState.LOAD_OLDER)
        
        this.options.fetch(this.newRangeKeyForLoadOlder(), pager)
    }

    reload() {
        if (this.options.page) return

        let pager = this.pager
        
        if (pager.msg)
            pager.msg = ''
        
        pager.state = bit_clear_and_set(pager.state, PagerState.MASK_STATUS, 
            PagerState.LOADING | PagerState.RELOAD)
        
        this.options.fetch(this.newRangeKeyForReload(), pager)
    }

    $reload(desc: boolean) {
        let pager = this.pager,
            clear = PagerState.MASK_STATUS,
            set = PagerState.LOADING | PagerState.RELOAD
        
        if (desc)
            set |= PagerState.DESC
        else
            clear |= PagerState.DESC
        
        if (pager.msg)
            pager.msg = ''
        
        pager.state = bit_clear_and_set(pager.state, clear, set)
        
        this.options.fetch(this.$newRangeKeyForReload(desc), pager)
    }

    addNewer(array: Array<T>) {
        this.addAll(array, true, false)
    }

    addOlder(array: Array<T>) {
        this.addAll(array, false, false)
    }

    pagePrevOrLoad(flags: number): number {
        let pager = this.pager,
            pageFn = this.options.page
        if (pageFn) {
            pageFn(false, pager)
            return EventFlags.PREVENT_BOTH
        }

        if (pager.page) {
            // goto previous
            //e.preventDefault()
            pager.page--
            if (flags & 16) {
                this.populate(SelectionType.SELECT, 0, pager.index_selected)
            } else {
                this.repaint()
            }
            return EventFlags.PREVENT_BOTH
        }

        if (pager.state & PagerState.MASK_RPC_DISABLE)
            return EventFlags.PREVENT_PROPAGATION

        if (pager.state & PagerState.DESC) {
            this.requestNewer()
        } else if (pager.index_hidden) {
            this.requestOlder()
        } else {
            return EventFlags.PREVENT_PROPAGATION
        }

        return EventFlags.PREVENT_BOTH
    }

    pageNextOrLoad(flags: number): number {
        let pager = this.pager,
            pageFn = this.options.page
        if (pageFn) {
            pageFn(true, pager)
            return EventFlags.PREVENT_BOTH
        }

        let page = pager.page
        if (page < pager.page_count) {
            // goto next
            //e.preventDefault()
            page = ++pager.page
            if (flags & 16)
                this.populate(SelectionType.SELECT, 0, resolveNextPageIndex(page, pager.index_selected, pager))
            else
                this.repaint()
            
            return EventFlags.PREVENT_BOTH
        }

        let state = pager.state
        // page push
        if (state & PagerState.MASK_RPC_DISABLE || !pager.index_hidden)
            return EventFlags.PREVENT_PROPAGATION

        if (state & PagerState.DESC)
            this.requestOlder()
        else
            this.requestNewer()
        
        return EventFlags.PREVENT_BOTH
    }

    // next tick

    $$requestNewer(pager: Pager) {
        Vue.nextTick(() => this.requestNewer())
    }

    $$requestOlder(pager: Pager) {
        Vue.nextTick(() => this.requestOlder())
    }

    $$reload(pager: Pager) {
        Vue.nextTick(() => this.reload())
    }
    
    $$notify() {
        Vue.nextTick(() => this.notify())
    }

    cbFetchSuccess(array: Array<T>) {
        let pager = this.pager, 
            masked = PagerState.MASK_RPC & pager.state
        
        pager.state = bit_unset(pager.state, PagerState.MASK_RPC | PagerState.LOADING)

        switch (masked) {
            case PagerState.LOAD_NEWER:
                this.addAll(array, true, false)
                break
            case PagerState.LOAD_OLDER:
                this.addAll(array, false, false)
                break
            case PagerState.RELOAD:
                this.update(array)
                break
        }
    }

    cbFetchFailed(errmsg: any) {
        let pager = this.pager
        pager.state = bit_clear_and_set(pager.state, PagerState.MASK_RPC | PagerState.LOADING, PagerState.ERROR)
        pager.msg = !errmsg ? 'Failed.' : String(errmsg)
    }
}

function fetchSuccess(this: PojoStore<any>, data: any) {
    this.cbFetchSuccess(data['1'])
    return true
}

function fetchFailed(this: PojoStore<any>, errmsg: any) {
    this.cbFetchFailed(errmsg)
}

export function bindFetchSuccess(pstore: PojoStore<any>): any {
    return fetchSuccess.bind(pstore)
}

export function bindFetchFailed(pstore: PojoStore<any>): any {
    return fetchFailed.bind(pstore)
}
