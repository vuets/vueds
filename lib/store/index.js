"use strict";
const _1 = require('../ds/');
const _2 = require('../');
const base64map = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
function b_to_b64(bytes) {
    for (var base64 = [], i = 0; i < bytes.length; i += 3) {
        var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
        for (var j = 0; j < 4; j++) {
            if (i * 8 + j * 6 <= bytes.length * 8)
                base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F));
            else
                base64.push('=');
        }
    }
    return base64.join('');
}
function b_to_b64_fn() {
    var b = window['Binary'], b2a = window.btoa, b2s;
    if (b && (b2s = b['bytesToString']) && typeof b2s === 'function' && typeof b2a === 'function') {
        return function (bytes) {
            return b2a(b2s(bytes));
        };
    }
    return b_to_b64;
}
function b64_to_b(base64) {
    // Remove non-base-64 characters
    base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');
    for (var bytes = [], i = 0, imod4 = 0; i < base64.length; imod4 = ++i % 4) {
        if (imod4 === 0)
            continue;
        bytes.push(((base64map.indexOf(base64.charAt(i - 1)) & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2)) | (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));
    }
    return bytes;
}
function b64_to_b_fn() {
    var b = window['Binary'], a2b = window.atob, s2b;
    if (b && (s2b = b['stringToBytes']) && typeof s2b === 'function' && typeof a2b === 'function') {
        return function (base64) {
            return s2b(a2b(base64));
        };
    }
    return b64_to_b;
}
exports.bytesToBase64 = b_to_b64_fn();
exports.base64ToBytes = b64_to_b_fn();
// TODO usage
function extractMessage(err) {
    var str = JSON.parse(err)['1'];
    return Array.isArray(str) ? str.join('\n') : str;
}
function shallowCopyTo(target, src) {
    for (var i in src)
        target[i] = src[i];
}
exports.shallowCopyTo = shallowCopyTo;
function shallowCopyFrom(src, descriptor, target) {
    for (var i in src)
        target[i] = src[i];
    return target;
}
function incrementKey(key) {
    let decoded = exports.base64ToBytes(key);
    decoded[decoded.length - 1] |= 0x02;
    return exports.bytesToBase64(decoded);
}
exports.incrementKey = incrementKey;
function decrementKey(key) {
    let decoded = exports.base64ToBytes(key);
    decoded[decoded.length - 1] &= 0xFE;
    return exports.bytesToBase64(decoded);
}
exports.decrementKey = decrementKey;
/**
 * Define a property that should not be observed by vue's vm.
 */
function defp(obj, prop, val /*, observable: boolean = false*/) {
    /*if (observable) {
        obj[prop] = val
        return obj
    }*/
    Object.defineProperty(obj, prop, {
        enumerable: false,
        value: val
    });
    return obj;
}
exports.defp = defp;
function setp(obj, prop, val) {
    obj[prop] = val;
    return obj;
}
exports.setp = setp;
function nullifyAll(obj, descriptor = null) {
    if (!descriptor) {
        for (var i in obj)
            obj[i] = null;
        return;
    }
    let $ = descriptor.$;
    for (var i in obj) {
        if ($[i])
            obj[i] = null;
    }
}
exports.nullifyAll = nullifyAll;
function resolveNextPageIndex(pager, idx) {
    return pager.page !== pager.page_count ? idx : Math.min(idx, (pager.size % pager.array.length) - 1);
}
exports.resolveNextPageIndex = resolveNextPageIndex;
var c;
(function (c) {
    c.STATE = "state";
    c.MSG = "msg";
    c.LSTATE = "lstate"; // list state
    c.VSTATE = "vstate"; // validation state
    c.VCOUNT = "vcount";
    c.VPROPS = "vprops";
    c.DESCRIPTOR = "$d";
    c.PREV_KEY = "$prev_key";
    c.PREV_PAGE = "$prev_page";
    c.PREV_VSTATE = "$prev_vstate";
    c.PREVENT_NONE = 0;
    c.PREVENT_DEFAULT = 1;
    c.PREVENT_PROPAGATION = 2;
    c.PREVENT_BOTH = 3;
})(c = exports.c || (exports.c = {}));
function $is_set(state, value) {
    return 0 !== (value & state);
}
exports.$is_set = $is_set;
function $bit_unset(obj, name, value) {
    obj[name] &= ~value & 2147483647;
}
exports.$bit_unset = $bit_unset;
function $bit_toggle(obj, name, value) {
    obj[name] = value ^ obj[name];
}
exports.$bit_toggle = $bit_toggle;
function $bit_clear_and_set(obj, name, clear, set) {
    obj[name] = set | (~clear & 2147483647 & obj[name]);
}
exports.$bit_clear_and_set = $bit_clear_and_set;
class PojoStore {
    constructor(fetchedArray, options) {
        this.options = options;
        this.mainArray = fetchedArray;
        this.array = fetchedArray;
        let observedArray = [], descriptor = options.descriptor, size = fetchedArray.length, pageSize = options.pageSize, page = 0, remaining = pageSize > size ? pageSize - size : 0;
        this.fnMergeFrom = descriptor.$ ? _2.mergeVmFrom : shallowCopyFrom;
        for (let i = 0; i < pageSize; i++) {
            let so = {
                state: 0,
                lstate: 0,
                msg: '',
                vstate: 0,
                vcount: 0,
                vprops: {}
            };
            let p = options.createObservable(so);
            p['_'] = so;
            defp(p, c.DESCRIPTOR, descriptor);
            observedArray.push(p);
        }
        this.pager = {
            size: size,
            state: options.desc ? 16 /* DESC */ : 0,
            msg: '',
            array: observedArray,
            index_selected: -1,
            index_hidden: pageSize,
            q_index: 0,
            prev_key: null,
            prev_page: page,
            prev_vstate: 0,
            page: page,
            page_count: size / pageSize,
            page_vcount: 0,
            page_from: 1,
            page_to: pageSize - remaining
        };
        defp(this.pager, 'store', this);
    }
    getLastSeenObj() {
        return this.mainArray.length === 0 ? null : this.mainArray[0];
    }
    isEmpty() {
        return this.array.length === 0;
    }
    size() {
        return this.array.length;
    }
    isMainArray() {
        return this.mainArray === this.array;
    }
    repaint() {
        return this.$populate(3 /* RETAIN */, 0, this.isMainArray(), -1, this.pager.page);
    }
    populate(type, flags, main, idxSelected) {
        return this.$populate(type, flags, main, idxSelected, this.pager.page);
    }
    $populate(type, flags, main, idxSelected, page) {
        let pager = this.pager, toPopulate = pager.array, array = main ? this.mainArray : this.array, desc = $is_set(pager.state, 16 /* DESC */), foundPrev = false, pageSize = toPopulate.length, size = array.length, options = this.options, descriptor = options.descriptor, fnMergeFrom = this.fnMergeFrom, k = options.keyProperty;
        if (size === 0) {
            if (!desc) {
                pager.state |= 16 /* DESC */;
                desc = true;
            }
            if (page)
                pager.page = page = 0;
        }
        else if (page !== 0 && (page * pageSize) >= size) {
            pager.page = page = 0;
        }
        let pages = (page * pageSize) + pageSize, remaining = pages > size ? pages - size : 0, populatePages = page * pageSize, len = Math.min(pageSize, size - populatePages), start = desc ? populatePages : -populatePages;
        var target, target_, message, selected = null, prevKey = type >= 3 /* RETAIN */ ? pager.prev_key : null, i = 0;
        for (let state = 0; i < len; i++) {
            target = toPopulate[i];
            target_ = target['_'];
            message = array[start + (desc ? i : size - i - 1)];
            if (idxSelected === i) {
                state = 2 /* SELECTED */;
                selected = target;
            }
            else if (!(state = 2 /* SELECTED */ & target_[c.LSTATE])) {
                if (prevKey != null && prevKey === message[k]) {
                    state = 2 /* SELECTED */;
                    selected = target;
                    idxSelected = i;
                    prevKey = null;
                    foundPrev = true;
                }
            }
            else if (type < 3 /* RETAIN */ || selected || prevKey !== message[k]) {
                state = 0;
                target_[c.VSTATE] = 0;
                target_[c.MSG] = null;
            }
            else {
                selected = target;
                idxSelected = i;
                prevKey = null;
            }
            fnMergeFrom(message, descriptor, target);
            if (options.onPopulate)
                options.onPopulate(message, main, target, i);
            target_[c.LSTATE] = 1 /* INCLUDED */ | state;
        }
        pager.index_selected = idxSelected;
        pager.index_hidden = i;
        var visibleCount = pageSize;
        while (i < pageSize) {
            toPopulate[i++]['_'][c.LSTATE] = 0 /* NONE */;
            visibleCount--;
        }
        pager.page_vcount = visibleCount;
        pager.page_count = (size - 1) / pageSize;
        pager.page_from = (page * pageSize) + 1;
        pager.page_to = (page * pageSize) + (pageSize - remaining);
        if (!selected)
            return 0;
        if (type !== 3 /* RETAIN */)
            return this.$select(selected, flags, idxSelected, page, false);
        if (selected !== pager.pojo)
            pager.pojo = selected;
        if (foundPrev)
            selected['_'][c.VSTATE] = pager[c.PREV_VSTATE];
        return 0;
    }
    select(current, flags, idx) {
        let pager = this.pager;
        pager.index_selected = idx;
        return this.$select(current, flags, idx, pager.page, true);
    }
    $select(current, flags, idx, page, selectWithoutPopulate) {
        let pager = this.pager, prevKey = pager.prev_key, options = this.options, k = options.keyProperty, current_ = current['_'];
        if (prevKey) {
            let previous = pager.pojo, previous_ = previous['_'], state = previous_[c.STATE];
            if ((state & 8 /* LOADING */))
                return c.PREVENT_BOTH;
            let sameSlot = current === previous, same = sameSlot && (!selectWithoutPopulate || current[k] === prevKey), refresh = !same || 2 /* REFRESH */ === (flags & 2 /* REFRESH */);
            if (!refresh) {
            }
            else if ((state & 16 /* UPDATE */)) {
                previous_[c.MSG] = null;
                previous_[c.VCOUNT] = 0;
                nullifyAll(current_[c.VPROPS]);
            }
            else if ((state & 7 /* MASK_STATUS */)) {
                previous_[c.MSG] = null;
            }
            if (same)
                return options.onSelect(current, flags);
            if (!sameSlot) {
                if (selectWithoutPopulate)
                    $bit_unset(previous_, c.LSTATE, 2 /* SELECTED */);
                previous_[c.VSTATE] = 0;
            }
        }
        let ret = options.onSelect(current, flags);
        pager.pojo = current;
        pager.prev_key = current[k];
        pager.prev_page = page;
        pager.prev_vstate = current_[c.VSTATE];
        if (selectWithoutPopulate)
            current_[c.LSTATE] = 1 /* INCLUDED */ | 2 /* SELECTED */;
        return ret;
    }
    populateAndSelect(storeIdx, flags) {
        let pager = this.pager, array = pager.array, pageSize = array.length, currentPage = pager.page, state = pager.state;
        if (!(state & 16 /* DESC */))
            storeIdx = this.size() - storeIdx - 1;
        let page = storeIdx / pageSize, selectIdx = page === 0 ? storeIdx : (storeIdx % pageSize);
        if (currentPage !== page)
            pager.page = page;
        this.$populate(2 /* SELECT */, flags, this.isMainArray(), selectIdx, pager.page);
    }
    notifyAndSelect(storeIdx, flags) {
        this.pager.size = this.size();
        this.populateAndSelect(storeIdx, flags);
    }
    notify(type = 3 /* RETAIN */, flags = 0 /* NONE */) {
        this.pager.size = this.size();
        this.$populate(type, flags, this.isMainArray(), -1, this.pager.page);
    }
    /**
     * Add the entity and select it afterwards.
     */
    addAndSelect(entity, latest, flags) {
        let main = this.isMainArray(), array = this.array, options = this.options;
        var idx;
        if (latest) {
            idx = 0;
            array.unshift(entity);
        }
        else {
            idx = array.length;
            array.push(entity);
        }
        if (options.onAdd)
            options.onAdd(entity, main, latest);
        this.notifyAndSelect(idx, flags);
    }
    get(index) {
        return this.array[index];
    }
    getStoreIndex(selected) {
        return this.$getStoreIndex(selected['$index']);
    }
    $getStoreIndex(index) {
        let pager = this.pager, toPopulate = pager.array, desc = $is_set(pager.state, 16 /* DESC */), populatePages = pager.page * toPopulate.length;
        return desc ? populatePages + index : this.size() - populatePages - index - 1;
    }
    getSelectedOriginal() {
        var selected = this.pager.pojo;
        return !selected ? null : this.get(this.getStoreIndex(selected['$index']));
    }
    getOriginal(selected) {
        return this.get(this.getStoreIndex(selected['$index']));
    }
    remove(index) {
        let options = this.options, entity = this.array.splice(index, 1)[0];
        if (options.onRemove)
            options.onRemove(entity, this.isMainArray());
        this.notify(3 /* RETAIN */, 0);
        return entity;
    }
    clear() {
        let options = this.options, removed = this.array.splice(0, this.array.length);
        if (options.onRemoveArray)
            options.onRemoveArray(removed, this.mainArray === this.array);
        this.notify(1 /* RESET */, 0);
    }
    add(entity, latest, mainOnly) {
        let options = this.options, targetArray = mainOnly ? this.mainArray : this.array;
        if (latest)
            targetArray.unshift(entity);
        else
            targetArray.push(entity);
        if (options.onAdd)
            options.onAdd(entity, this.mainArray === targetArray, latest);
        if (!mainOnly || this.array === targetArray)
            this.notify(3 /* RETAIN */, 0);
    }
    addAll(array, latest, mainOnly) {
        if (!array || array.length === 0)
            return false;
        let options = this.options, targetArray = mainOnly ? this.mainArray : this.array, main = this.mainArray === targetArray;
        if (targetArray.length === 0)
            latest = !latest;
        for (let message of array) {
            if (latest)
                targetArray.unshift(message);
            else
                targetArray.push(message);
            if (options.onAdd)
                options.onAdd(message, main, latest);
        }
        if (!mainOnly || this.array === targetArray)
            this.notify(3 /* RETAIN */, 0);
        return true;
    }
    /**
     * Resets the internal arrays and does not notify nor call onRemoveArray
     */
    reinit(array) {
        this.mainArray = array;
        this.array = array;
        let onAdd = this.options.onAdd;
        if (onAdd) {
            for (let p of array)
                onAdd(p, true, true);
        }
        return this;
    }
    /**
     * Resets the internal arrays and calls the listener methods.
     */
    reset(array, notify = true) {
        let options = this.options, onAdd = options.onAdd, removed = this.mainArray;
        this.mainArray = array;
        this.array = array;
        if (options.onRemoveArray)
            options.onRemoveArray(removed, true);
        if (onAdd) {
            for (let message of array)
                onAdd(message, true, true);
        }
        if (notify)
            this.notify(1 /* RESET */, 0);
    }
    /**
     * Simply sets the array.  No notifications/etc.
     */
    setArray(array) {
        this.array = array;
    }
    /**
     * Sets the array and notifies.
     */
    replace(array, type = 1 /* RESET */, flags = 0 /* NONE */) {
        this.array = array;
        this.notify(type, flags);
    }
    /**
     * Returns true if an item was removed.
     */
    update(updateArray) {
        let options = this.options, descriptor = options.descriptor, fnMergeFrom = this.fnMergeFrom, main = this.isMainArray(), pager = this.pager, toPopulate = pager.array, desc = $is_set(pager.state, 16 /* DESC */), page = pager.page, size = this.size();
        var removedArray;
        if (!updateArray || updateArray.length === 0) {
            if (size <= toPopulate.length) {
                if (options.onRemoveArray)
                    options.onRemoveArray(this.array, main);
                this.mainArray = this.array = [];
                this.notify(1 /* RESET */, 0);
                return true;
            }
            let populatePages = page * toPopulate.length;
            if (desc)
                removedArray = this.array.splice(populatePages, size - populatePages);
            else
                removedArray = this.array.splice(0, size - populatePages);
            if (options.onRemoveArray)
                options.onRemoveArray(removedArray, main);
            this.notify(1 /* RESET */, 0);
            return true;
        }
        let updateLen = updateArray.length, populateLen = toPopulate.length, populatePages = page * populateLen, k = options.keyProperty, i = 0, removed = 0, idx = desc ? populatePages + i : size - populatePages - i - 1;
        var update, message;
        for (;;) {
            update = updateArray[i];
            message = this.array[idx];
            if (update[k] === message[k]) {
                i++;
                if (!options.onUpdate || options.onUpdate(message, main, update))
                    fnMergeFrom(update, descriptor, message);
                if (desc) {
                    idx = populatePages + i;
                    if (idx === size)
                        break;
                }
                else {
                    idx = size - populatePages - i - 1;
                    if (idx === -1)
                        break;
                }
                if (i !== updateLen)
                    continue;
                if (updateLen === populateLen)
                    break;
                removedArray = this.array.splice(idx, 1);
                removed++;
                size--;
                if (options.onRemove)
                    options.onRemove(removedArray[0], main);
                break;
            }
            removedArray = this.array.splice(idx, 1);
            removed++;
            size--;
            if (options.onRemove)
                options.onRemove(removedArray[0], main);
            if (!desc) {
                idx = size - populatePages - i - 1;
                if (idx === -1)
                    break;
            }
            else if (idx === size) {
                break;
            }
        }
        let onAdd = options.onAdd, array = this.array, ret = removed !== 0;
        while (i < updateLen) {
            message = updateArray[i++];
            if (desc)
                array.push(message);
            else
                array.unshift(message);
            if (onAdd)
                onAdd(message, main, !desc);
        }
        if (ret)
            pager.size = this.size();
        this.$populate(4 /* RESELECT */, 3 /* CLICKED_UPDATE */ | 2 /* REFRESH */, this.isMainArray(), -1, pager.page);
        return ret;
    }
    getStartObj() {
        let pager = this.pager, masked = 224 /* MASK_RPC */ & pager.state;
        switch (masked) {
            case 32 /* LOAD_NEWER */:
                return this.get(0);
            case 64 /* LOAD_OLDER */:
                return this.get(this.size() - 1);
            case 128 /* RELOAD */:
                return pager.array[0];
            default:
                return null;
        }
    }
    newRangeKeyForReload() {
        return this.$newRangeKeyForReload($is_set(this.pager.state, 16 /* DESC */));
    }
    $newRangeKeyForReload(desc) {
        let pager = this.pager, options = this.options, k = options.keyProperty, toPopulate = pager.array, size = this.size(), page = pager.page, pageSize = toPopulate.length, pages = (page * pageSize) + pageSize, remaining = pages > size ? pages - size : 0, visibleItemCount = pageSize - remaining, key = toPopulate[0][k], kh = options.kh;
        // TODO set functions as object field
        var startKey;
        if (kh) {
            startKey = desc ? kh.inc(key) : kh.dec(key);
        }
        else {
            startKey = desc ? incrementKey(key) : decrementKey(key);
        }
        return _1.ds.ParamRangeKey.$create(desc, visibleItemCount, startKey);
    }
    newRangeKeyForLoadNewer() {
        let toPopulate = this.pager.array;
        if (this.isEmpty())
            return _1.ds.ParamRangeKey.$create(true, toPopulate.length + 1);
        return _1.ds.ParamRangeKey.$create(false, toPopulate.length, this.get(0)[this.options.keyProperty]);
    }
    newRangeKeyForLoadOlder() {
        let toPopulate = this.pager.array;
        return _1.ds.ParamRangeKey.$create(true, toPopulate.length, this.get(this.size() - 1)[this.options.keyProperty]);
    }
    requestNewer() {
        let pager = this.pager;
        pager.state |= 32 /* LOAD_NEWER */;
        this.options.fetch(this.newRangeKeyForLoadNewer(), pager);
    }
    requestOlder() {
        let pager = this.pager;
        pager.state |= 64 /* LOAD_OLDER */;
        this.options.fetch(this.newRangeKeyForLoadOlder(), pager);
    }
    reload() {
        let pager = this.pager;
        pager.state |= 128 /* RELOAD */;
        this.options.fetch(this.newRangeKeyForReload(), pager);
    }
    $reload(desc) {
        let pager = this.pager;
        if (desc)
            pager.state |= (128 /* RELOAD */ | 16 /* DESC */);
        else
            $bit_clear_and_set(pager, c.STATE, 16 /* DESC */, 128 /* RELOAD */);
        this.options.fetch(this.$newRangeKeyForReload(desc), pager);
    }
    addNewer(array) {
        this.addAll(array, true, false);
    }
    addOlder(array) {
        this.addAll(array, false, false);
    }
    // next tick
    $$requestNewer(pager) {
        Vue.nextTick(() => this.requestNewer());
    }
    $$requestOlder(pager) {
        Vue.nextTick(() => this.requestOlder());
    }
    $$reload(pager) {
        Vue.nextTick(() => this.reload());
    }
    $$notify() {
        Vue.nextTick(() => this.notify());
    }
    callbackFromFetch(array) {
        let pager = this.pager, masked = 224 /* MASK_RPC */ & pager.state;
        $bit_unset(pager, c.STATE, 224 /* MASK_RPC */);
        switch (masked) {
            case 32 /* LOAD_NEWER */:
                this.addAll(array, true, false);
                break;
            case 64 /* LOAD_OLDER */:
                this.addAll(array, false, false);
                break;
            case 128 /* RELOAD */:
                this.update(array);
                break;
        }
    }
}
exports.PojoStore = PojoStore;
//# sourceMappingURL=index.js.map