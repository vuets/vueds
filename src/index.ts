import * as Vue from 'vue'
import * as numeral from 'numeral'
import {
    regexInt, regexDouble, regexTime, regexDate, regexDateTime, localToUtc,
    bit_clear_and_set, $bit_clear_and_set, bit_unset
} from './util'
import { formatTime, formatDate, formatDateTime, isValidDateStr, isValidDateTimeStr } from './datetime_util'
import { MultiCAS } from './ds/mc'

/**
 * Define a property that should not be observed by vue's vm.
 * Returns the value
 */
export function defp<T>(obj: any, prop: string, val: T): T {
    Object.defineProperty(obj, prop, {
        enumerable: false,
        configurable: true,
        value: val
    })

    return val
}
/**
 * Nullify property.
 * Also useful for lazy observable properties that bypasses typescript's strictNullChecks config.
 */
export function nullp(obj: any, prop: string) {
    obj[prop] = null
}

export const enum FieldType {
    MESSAGE = 0,
    BOOL = 1,
    BYTES = 2,
    STRING = 3,
    FLOAT = 4,
    DOUBLE = 5,
    UINT32 = 6,
    UINT64 = 7,
    INT32 = 8,
    INT64 = 9,
    FIXED32 = 10,
    FIXED64 = 11,
    SINT32 = 12,
    SINT64 = 13,
    SFIXED32 = 14,
    SFIXED64 = 15,
    ENUM = 16
}

export const enum PojoState {
    NONE = 0,
    SUCCESS = 1,
    ERROR = 2,
    WARNING = 4,
    LOADING = 8,
    
    UPDATE = 16,

    MASK_STATUS = SUCCESS | ERROR | WARNING
}

export interface HasState {
    state: number
}

/**
 * Pojo state object.
 */
export interface PojoSO extends HasState {
    msg: string
    vstate: number
    dfbs: number // dirty
    vfbs: number // validation
    rfbs: number // required
}

export const enum EventFlags {
    PREVENT_NONE = 0,
    PREVENT_DEFAULT = 1,
    PREVENT_PROPAGATION = 2,
    PREVENT_BOTH = 3,
    CAPTURING = 4
}

export interface KV {
    k: string
    v: any
}

function addVpropsTo<T>(so: T, descriptor: any, owner: any): T {
    if (descriptor.$fdf) {
        for (let k of descriptor.$fdf) {
            so[k] = null
            if (owner)
                owner[descriptor[k].$ || k] = null
        }
    }

    if (descriptor.$fdikf) {
        for (let k of descriptor.$fdikf) {
            so[k] = null
            if (owner)
                owner[descriptor[k].$ || k] = null
        }
    }
    
    return so
}

export function initObservable<T>(target: T, descriptor: any, update?: boolean): T {
    target['_'] = addVpropsTo({
        state: 0,
        msg: '',
        vstate: 0,
        dfbs: 0,
        vfbs: 0,
        rfbs: 0
    }, descriptor, update ? null : target)

    defp(target, '$d', descriptor)
    if (!descriptor.$fmf)
        return target

    for (let fk of descriptor.$fmf) {
        let fd = descriptor[fk]
        initObservable(target[fd.$], fd.d_fn(), update)
    }
    return target
}

/*export function createObservable<T>(descriptor: any): T {
    return initObservable(descriptor.$new(), descriptor)
}*/

// target is vm
export function mergeVmFrom<T>(src: any, descriptor: any, target: T): T {
    var fd, v
    for (var i in src) {
        v = src[i]
        // only trigger the observable if the value changed
        if ((fd = descriptor[i])) {
            if (v !== target[fd.$]) target[fd.$] = v
        } else if (v !== target[i]) {
            target[i] = v
        }
    }

    return target
}

// target is original
export function mergeOriginalFrom<T>(src: any, descriptor: any, target: T, vm?: any): T {
    var mapping = descriptor.$, k, v
    for (var i in src) {
        if (!(k = mapping[i]) || target[k] === (v = src[i])) continue
        
        target[k] = v
        if (vm) vm[i] = v
    }

    return target
}

export function writeKVsTo<T>(target: T, kvs: KV[]): T {
    for (let kv of kvs) {
        target[kv.k] = kv.v
    }

    return target
}

// must be a scalar field
export function diffFieldTo<T>(mc: MultiCAS, descriptor: any, original: T, modified: T,
        field: number): boolean {
    var d, t, k, array, forig, fmod,
        i = String(field)

    if (!i ||
        !(d = descriptor[i]) ||
        !d.m ||
        !(t = d.t) ||
        (fmod = modified[i]) === (forig = original[i])) return false

    // enum type converted to int
    k = t === 16 ? '8' : String(t)
    if (!(array = mc[k]))
        mc[k] = array = []

    array.push({ '1': parseInt(i, 10), '2': forig, '3': fmod })

    return true
}

// only the scalar fields are diffed
export function diffTo<T>(mc: MultiCAS, descriptor: any, original: T, modified: T): number {
    var d, t, k, array, forig, fmod, diffed = 0//diffed: KV[] = []

    for (var i in modified) {
        if (!(d = descriptor[i]) ||
            !d.m ||
            !(t = d.t) ||
            (fmod = modified[i]) === (forig = original[i])) continue

        // enum type converted to int
        k = t === 16 ? '8' : String(t)
        if (!(array = mc[k]))
            mc[k] = array = []

        array.push({ '1': parseInt(i, 10), '2': forig, '3': fmod })
        //diffed.push({ k: i, v: fmod })
        diffed++
    }

    return diffed
}

// must be a scalar field
export function diffVmFieldTo<T>(mc: MultiCAS, descriptor: any, original: T, modified: T,
        field: string | number): boolean {
    var d, t, k, array, forig, fmod,
        $ = descriptor.$,
        i = $ && isNaN(field as any) ? $[field] : String(field)

    if (!i ||
        !(d = descriptor[i]) ||
        !d.m ||
        !(t = d.t) ||
        (fmod = modified[d.$]) === (forig = original[i])) return false

    // enum type converted to int
    k = t === 16 ? '8' : String(t)
    if (!(array = mc[k]))
        mc[k] = array = []

    array.push({ '1': parseInt(i, 10), '2': forig, '3': fmod })

    return true
}

// only the scalar fields are diffed
export function diffVmTo<T>(mc: MultiCAS, descriptor: any, original: T, modified: T): number {
    var d, t, k, array, forig, fmod, i, $ = descriptor.$, diffed = 0//diffed: KV[] = []

    for (var vi in modified) {
        i = $ ? $[vi] : vi
        if (!i ||
            !(d = descriptor[i]) ||
            !d.m ||
            !(t = d.t) ||
            (fmod = modified[vi]) === (forig = original[i])) continue

        // enum type converted to int
        k = t === 16 ? '8' : String(t)
        if (!(array = mc[k]))
            mc[k] = array = []

        array.push({ '1': parseInt(i, 10), '2': forig, '3': fmod })
        //diffed.push({ k: i, v: fmod })
        diffed++
    }

    return diffed
}

export function verifyFormFields(message: any, descriptor: any, update?: boolean, root?: any): boolean {
    let message_ = message._ as PojoSO,
        root_: PojoSO,
        rfbs: number,
        fmf: string[],
        fd
    
    if (root) {
        root_ = root._ as PojoSO
    } else {
        root = message
        root_ = message_
    }

    if (message_.vfbs) {
        if (root_.msg) {
            root_.state = bit_unset(root_.state, PojoState.MASK_STATUS)
            root_.msg = ''
        }
        
        return false
    }

    if ((fmf = descriptor.$fmf)) {
        for (let fk of fmf) {
            fd = descriptor[fk]
            if (!verifyFormFields(message[fd.$ || fk], fd.d_fn(), update, root))
                return false
        }
    }

    if (update || !(rfbs = descriptor.$rfbs) || rfbs === message_.rfbs)
        return true
    
    if (!root_.msg) {
        root_.state = bit_clear_and_set(root_.state, PojoState.MASK_STATUS, PojoState.ERROR)
        root_.msg = 'All required fields must be provided.'
    }
    
    return false
}

export function clearFormFields(message: any, descriptor: any) {
    let message_ = message['_'] as PojoSO,
        fmf,
        fd
    
    message_.dfbs = 0
    message_.rfbs = 0
    for (let fk of descriptor.$fdf) {
        fd = descriptor[fk]
        message[fd.$ || fk] = null
    }
    
    if (!(fmf = descriptor.$fmf))
        return
    
    for (let fk of fmf) {
        fd = descriptor[fk]
        clearFormFields(message[fd.$ || fk], fd.d_fn())
    }
}

export function formUpdate(pojo: any, pager: HasState, original: any, changes?: any): MultiCAS|undefined {
    let pojo_ = pojo['_'] as PojoSO,
        state = pojo_.state,
        $d = pojo['$d']
    
    if ((state & PojoState.LOADING) || !verifyFormFields(pojo, $d, true))
        return undefined
    
    let mc = MultiCAS.$create(),
        diffCount = diffVmTo(mc, $d, original, pojo)
    if (!diffCount && !changes) {
        if (!pojo_.msg) {
            pojo_.state = bit_clear_and_set(state, PojoState.MASK_STATUS, PojoState.WARNING)
            pojo_.msg = 'No changes were made.'
        }
        
        return undefined
    }

    pojo_.state = bit_clear_and_set(state, PojoState.MASK_STATUS, PojoState.LOADING)
    pojo_.msg = ''

    // TODO move PagerState to this file
    pager.state |= 8 // LOADING - to disable controls

    return diffCount ? mc : undefined
}

export function formUpdateSuccess(pojo: any, pager: HasState, original: any, selected?: any) {
    let pojo_ = pojo['_'] as PojoSO
    
    pojo_.state = bit_clear_and_set(pojo_.state, PojoState.LOADING, PojoState.SUCCESS)
    pojo_.msg = 'Successful.'
    pojo_.dfbs = 0
    
    mergeOriginalFrom(pojo, pojo['$d'], original, selected)
    
    // TODO move PagerState to this file
    pager.state ^= 8 // LOADING
}

export function formPrepare(pojo: any) {
    let pojo_ = pojo['_'] as PojoSO,
        state = pojo_.state
    
    if ((state & PojoState.LOADING) || !verifyFormFields(pojo, pojo['$d']))
        return false
    
    pojo_.state = bit_clear_and_set(state, PojoState.MASK_STATUS, PojoState.LOADING)
    pojo_.msg = ''

    return true
}

export function formClear(pojo: any): PojoSO {
    let pojo_ = pojo['_'] as PojoSO

    if (pojo_.msg)
        pojo_.msg = ''
    
    if (!pojo_.dfbs)
        return pojo_
    
    if (pojo_.vfbs)
        pojo_.vfbs = 0
    
    clearFormFields(pojo, pojo['$d'])
    
    return pojo_
}

export function formSuccess(pojo: any) {
    let pojo_ = pojo['_'] as PojoSO
    
    pojo_.state = bit_clear_and_set(pojo_.state, PojoState.LOADING, PojoState.SUCCESS)
    pojo_.msg = 'Successful.'
    
    clearFormFields(pojo, pojo['$d'])
}

export function formFailed(pojo: any, errmsg: any) {
    let pojo_ = pojo['_'] as PojoSO
    
    pojo_.state = bit_clear_and_set(pojo_.state, PojoState.LOADING, PojoState.ERROR)
    pojo_.msg = !errmsg ? 'Error.' : String(errmsg)
}

function cbFormFailed(this: any, errmsg: any) {
    formFailed(this, errmsg)
}

export function bindFormFailed(pojo: any): any {
    return cbFormFailed.bind(pojo)
}

export interface FormUpdate {
    pojo: any
    pager: HasState
}

export function formUpdateFailed(pojo: any, pager: HasState, errmsg: any) {
    let pojo_ = pojo['_'] as PojoSO
    
    pojo_.state = bit_clear_and_set(pojo_.state, PojoState.LOADING, PojoState.ERROR)
    pojo_.msg = !errmsg ? 'Error.' : String(errmsg)

    // TODO move PagerState to this file
    pager.state ^= 8 // LOADING
}

function cbFormUpdateFailed(this: FormUpdate, errmsg: any) {
    formUpdateFailed(this.pojo, errmsg, this.pager)
}

export function bindFormUpdateFailed(scope: FormUpdate): any {
    return cbFormUpdateFailed.bind(scope)
}

// =====================================
// event handling

function postValidate(message: any, fd: any, fk: string, f: number, flag: number, 
        message_: PojoSO, dfbs: number, msg, root: any, dirty: boolean) {
    let root_ = root._ as PojoSO,
        state = message_.state,
        vfbs = message_.vfbs,
        rfbs = message_.rfbs,
        required = fd.m === 2
    
    message_[fk] = msg
    
    if (!(state & PojoState.UPDATE))
        message_.state = state | PojoState.UPDATE
    
    if (dirty) {
        if (!(dfbs & flag))
            message_.dfbs |= flag
    } else if (dfbs & flag) {
        message_.dfbs ^= flag
    }

    if (msg) {
        if (!(vfbs & flag))
            message_.vfbs |= flag
        if (required && (rfbs & flag))
            message_.rfbs ^= flag
    } else {
        if (vfbs & flag)
            message_.vfbs ^= flag
        if (required && !(rfbs & flag))
            message_.rfbs |= flag
    }

    if (root_.msg) {
        root_.state = bit_unset(root_.state, PojoState.MASK_STATUS)
        root_.msg = ''
    }
}

function validateString(val: string, message: any, fd: any, fk, f: number, flag: number, message_: PojoSO, dfbs: number, 
        prop: string, el: any, update: boolean, root: any): string|null {
    let msg: string|null = null,
        dirty = !!val,
        v
    if (dirty) {
        // backup data
        if (update && (v = message[prop]) !== undefined && v !== message_[prop])
            message_[prop] = v
        
        if (!fd.vfn || !(msg = fd.vfn(val))) {
            message[prop] = val
            dirty = !update || val !== message_[prop]
        } else {
            message[prop] = undefined
        }
    } else if (update) {
        dirty = !!(flag & dfbs)
        // restore data
        if ((v = message[prop]) === undefined)
            message[prop] = v = message_[prop]
        else
            el.value = v
    } else if ((v = message[prop]) || v === undefined) {
        el.value = ''
        message[prop] = null
    } else if (el.value) {
        // remove whitespace
        el.value = ''
        return msg
    }

    postValidate(message, fd, fk, f, flag, message_, dfbs, msg, root, dirty)
    return msg
}

function validateFloat(val: any, message: any, fd: any, fk, f: number, flag: number, message_: PojoSO, dfbs: number, 
        prop: string, el: any, update: boolean, root: any): string|null {
    let msg: string|null = null,
        dirty = !!val,
        v
    if (dirty) {
        // backup data
        if (update && (v = message[prop]) !== undefined && v !== message_[prop])
            message_[prop] = v
        
        if (!regexDouble.test(val)) {
            msg = fd.$n + ' is not a number.'
            message[prop] = undefined
        } else if (!fd.vfn) {
            message[prop] = v = parseFloat(val)
            dirty = !update || v !== message_[prop]
        } else if (!(msg = fd.vfn(v = parseFloat(val)))) {
            message[prop] = v
            dirty = !update || v !== message_[prop]
        } else {
            message[prop] = undefined
        }
    } else if (update) {
        dirty = !!(flag & dfbs)
        // restore data
        if ((v = message[prop]) === undefined)
            message[prop] = v = message_[prop]
        else
            el.value = v
    } else if ((v = message[prop]) || v === undefined) {
        el.value = ''
        message[prop] = null
    } else if (el.value) {
        // remove whitespace
        el.value = ''
        return msg
    }

    postValidate(message, fd, fk, f, flag, message_, dfbs, msg, root, dirty)
    return msg
}

function validateInt(val: any, message: any, fd: any, fk, f: number, flag: number, message_: PojoSO, dfbs: number, 
        prop: string, el: any, update: boolean, root: any): string|null {
    let msg: string|null = null,
        dirty = !!val,
        v
    if (dirty) {
        // backup data
        if (update && (v = message[prop]) !== undefined && v !== message_[prop])
            message_[prop] = v
        
        if (!regexInt.test(val)) {
            msg = fd.$n + ' is not a whole number.'
            message[prop] = undefined
        } else if (!fd.vfn) {
            message[prop] = v = parseInt(val, 10)
            dirty = !update || v !== message_[prop]
        } else if (!(msg = fd.vfn(v = parseInt(val, 10)))) {
            message[prop] = v
            dirty = !update || v !== message_[prop]
        } else {
            message[prop] = undefined
        }
    } else if (update) {
        dirty = !!(flag & dfbs)
        // restore data
        if ((v = message[prop]) === undefined)
            message[prop] = v = message_[prop]
        else
            el.value = v
    } else if ((v = message[prop]) || v === undefined) {
        el.value = ''
        message[prop] = null
    } else if (el.value) {
        // remove whitespace
        el.value = ''
        return msg
    }

    postValidate(message, fd, fk, f, flag, message_, dfbs, msg, root, dirty)
    return msg
}

function validateTime(val: any, message: any, fd: any, fk, f: number, flag: number, message_: PojoSO, dfbs: number, 
        prop: string, el: any, update: boolean, root: any): string|null {
    let msg: string|null = null,
        dirty = !!val,
        v
    if (dirty) {
        // backup data
        if (update && (v = message[prop]) !== undefined && v !== message_[prop])
            message_[prop] = v
        
        if (!regexTime.test(val) || 86399 < (v = numeral().unformat(val.length <= 5 ? (val + ':00') : val))) {
            msg = fd.$n + ' is not a valid time.'
            message[prop] = undefined
        } else if (!fd.vfn || !(msg = fd.vfn(v))) {
            message[prop] = v
            dirty = !update || v !== message_[prop]
        } else {
            message[prop] = undefined
        }
    } else if (update) {
        dirty = !!(flag & dfbs)
        // restore data
        if ((v = message[prop]) === undefined)
            message[prop] = v = message_[prop]
        else
            el.value = formatTime(v)
    } else if ((v = message[prop]) || v === undefined) {
        el.value = ''
        message[prop] = null
    } else if (el.value) {
        // remove whitespace
        el.value = ''
        return msg
    }

    postValidate(message, fd, fk, f, flag, message_, dfbs, msg, root, dirty)
    return msg
}

function validateDate(val: any, message: any, fd: any, fk, f: number, flag: number, message_: PojoSO, dfbs: number, 
        prop: string, el: any, update: boolean, root: any): string|null {
    let msg: string|null = null,
        dirty = !!val,
        v
    if (dirty) {
        // backup data
        if (update && (v = message[prop]) !== undefined && v !== message_[prop])
            message_[prop] = v
        
        if (!regexDate.test(val) || !(v = isValidDateStr(val)) || !(v = localToUtc(v))) {
            msg = fd.$n + ' is not a valid date.'
            message[prop] = undefined
        } else if (!fd.vfn || !(msg = fd.vfn(v))) {
            message[prop] = v
            dirty = !update || v !== message_[prop]
        } else {
            message[prop] = undefined
        }
    } else if (update) {
        dirty = !!(flag & dfbs)
        // restore data
        if ((v = message[prop]) === undefined)
            message[prop] = v = message_[prop]
        else
            el.value = formatDate(v)
    } else if ((v = message[prop]) || v === undefined) {
        el.value = ''
        message[prop] = null
    } else if (el.value) {
        // remove whitespace
        el.value = ''
        return msg
    }

    postValidate(message, fd, fk, f, flag, message_, dfbs, msg, root, dirty)
    return msg
}

function validateDateTime(val: any, message: any, fd: any, fk, f: number, flag: number, message_: PojoSO, dfbs: number, 
        prop: string, el: any, update: boolean, root: any): string|null {
    let msg: string|null = null,
        dirty = !!val,
        v
    if (dirty) {
        // backup data
        if (update && (v = message[prop]) !== undefined && v !== message_[prop])
            message_[prop] = v
        
        if (!regexDateTime.test(val) || !(v = isValidDateTimeStr(val)) || !(v = localToUtc(v))) {
            msg = fd.$n + ' is not a valid date and time.'
            message[prop] = undefined
        } else if (!fd.vfn || !(msg = fd.vfn(v))) {
            message[prop] = v
            dirty = !update || v !== message_[prop]
        } else {
            message[prop] = undefined
        }
    } else if (update) {
        dirty = !!(flag & dfbs)
        // restore data
        if ((v = message[prop]) === undefined)
            message[prop] = v = message_[prop]
        else
            el.value = formatDateTime(v)
    } else if ((v = message[prop]) || v === undefined) {
        el.value = ''
        message[prop] = null
    } else if (el.value) {
        // remove whitespace
        el.value = ''
        return msg
    }

    postValidate(message, fd, fk, f, flag, message_, dfbs, msg, root, dirty)
    return msg
}

/**
 * The update arg means if existing data is modified (not creating new data).
 */
export function $change(e, message: any, field: string|number, update: boolean, root: any): string|null {
    let d = message['$d'],
        $ = d.$,
        fk = $ && isNaN(field as any) ? $[field] : String(field),
        fd = d[fk]
    
    if (!fd || fd.t === FieldType.BYTES)
        return null
    
    let message_ = message['_'] as PojoSO,
        dfbs = message_.dfbs,
        f = fd._,
        flag = 1 << (f - 1),
        prop = fd.$ || fk,
        el = e.target,
        msg: string|null = null,
        val
    
    switch (fd.t) {
        case FieldType.BOOL:
            message[prop] = el.type === 'checkbox' ? el.checked : ('1' === el.value)
            postValidate(message, fd, fk, f, flag, message_, dfbs, msg, root, !(flag & dfbs))
            break
        case FieldType.ENUM:
            // re-use update var as dirty
            if (!update) {
                val = (update = !!el.value.length) ? parseInt(el.value, 10) : null
            } else if (!(flag & dfbs)) {
                // first update, dirty state
                message_[prop] = val = parseInt(el.value, 10)
            } else if (message_[prop] === (val = parseInt(el.value, 10))) {
                // restored to original value, no longer dirty
                update = false
            }
            message[prop] = val
            postValidate(message, fd, fk, f, flag, message_, message_.dfbs, msg, root, update)
            break
        case FieldType.STRING:
            msg = validateString(el.value.trim(), message, fd, fk, f, flag, message_, dfbs, prop, el, update, root)
            break
        case FieldType.FLOAT:
        case FieldType.DOUBLE:
            msg = validateFloat(el.value.trim(), message, fd, fk, f, flag, message_, dfbs, prop, el, update, root)
            break
        default:
            switch (fd.o || 0) {
                case 1: // time
                    msg = validateTime(el.value.trim(), message, fd, fk, f, flag, message_, dfbs, prop, el, update, root)
                    break
                case 2: // date
                    msg = validateDate(el.value.trim(), message, fd, fk, f, flag, message_, dfbs, prop, el, update, root)
                    break
                case 4: // datetime
                    msg = validateDateTime(el.value.trim(), message, fd, fk, f, flag, message_, dfbs, prop, el, update, root)
                    break
                default:
                    msg = validateInt(el.value.trim(), message, fd, fk, f, flag, message_, dfbs, prop, el, update, root)
            }
    }
    
    return msg
}
