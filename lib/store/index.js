import { ds } from '../ds/';
import { mergeVmFrom } from '../';
var base64map = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
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
export var bytesToBase64 = b_to_b64_fn();
export var base64ToBytes = b64_to_b_fn();
// TODO usage
function extractMessage(err) {
    var str = JSON.parse(err)['1'];
    return Array.isArray(str) ? str.join('\n') : str;
}
export function shallowCopyTo(target, src) {
    for (var i in src)
        target[i] = src[i];
}
function shallowCopyFrom(src, descriptor, target) {
    for (var i in src)
        target[i] = src[i];
    return target;
}
export function incrementKey(key) {
    var decoded = base64ToBytes(key);
    decoded[decoded.length - 1] |= 0x02;
    return bytesToBase64(decoded);
}
export function decrementKey(key) {
    var decoded = base64ToBytes(key);
    decoded[decoded.length - 1] &= 0xFE;
    return bytesToBase64(decoded);
}
/**
 * Define a property that should not be observed by vue's vm.
 */
export function defp(obj, prop, val /*, observable: boolean = false*/) {
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
export function setp(obj, prop, val) {
    obj[prop] = val;
    return obj;
}
export function nullifyAll(obj, descriptor) {
    if (descriptor === void 0) { descriptor = null; }
    if (!descriptor) {
        for (var i in obj)
            obj[i] = null;
        return;
    }
    var $ = descriptor.$;
    for (var i in obj) {
        if ($[i])
            obj[i] = null;
    }
}
export function resolveNextPageIndex(pager, idx) {
    return pager.page !== pager.page_count ? idx : Math.min(idx, (pager.size % pager.array.length) - 1);
}
export var c;
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
})(c || (c = {}));
export function $is_set(state, value) {
    return 0 !== (value & state);
}
export function $bit_unset(obj, name, value) {
    obj[name] &= ~value & 2147483647;
}
export function $bit_toggle(obj, name, value) {
    obj[name] = value ^ obj[name];
}
export function $bit_clear_and_set(obj, name, clear, set) {
    obj[name] = set | (~clear & 2147483647 & obj[name]);
}
export var PojoStore = (function () {
    function PojoStore(fetchedArray, options) {
        this.options = options;
        this.mainArray = fetchedArray;
        this.array = fetchedArray;
        var observedArray = [], descriptor = options.descriptor, size = fetchedArray.length, pageSize = options.pageSize, page = 0, remaining = pageSize > size ? pageSize - size : 0;
        this.fnMergeFrom = descriptor.$ ? mergeVmFrom : shallowCopyFrom;
        for (var i = 0; i < pageSize; i++) {
            var so = {
                state: 0,
                lstate: 0,
                msg: '',
                vstate: 0,
                vcount: 0,
                vprops: {}
            };
            var p = options.createObservable(so);
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
    PojoStore.prototype.getLastSeenObj = function () {
        return this.mainArray.length === 0 ? null : this.mainArray[0];
    };
    PojoStore.prototype.isEmpty = function () {
        return this.array.length === 0;
    };
    PojoStore.prototype.size = function () {
        return this.array.length;
    };
    PojoStore.prototype.isMainArray = function () {
        return this.mainArray === this.array;
    };
    PojoStore.prototype.repaint = function () {
        return this.$populate(3 /* RETAIN */, 0, this.isMainArray(), -1, this.pager.page);
    };
    PojoStore.prototype.populate = function (type, flags, main, idxSelected) {
        return this.$populate(type, flags, main, idxSelected, this.pager.page);
    };
    PojoStore.prototype.$populate = function (type, flags, main, idxSelected, page) {
        var pager = this.pager, toPopulate = pager.array, array = main ? this.mainArray : this.array, desc = $is_set(pager.state, 16 /* DESC */), foundPrev = false, pageSize = toPopulate.length, size = array.length, options = this.options, descriptor = options.descriptor, fnMergeFrom = this.fnMergeFrom, k = options.keyProperty;
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
        var pages = (page * pageSize) + pageSize, remaining = pages > size ? pages - size : 0, populatePages = page * pageSize, len = Math.min(pageSize, size - populatePages), start = desc ? populatePages : -populatePages;
        var target, target_, message, selected = null, prevKey = type >= 3 /* RETAIN */ ? pager.prev_key : null, i = 0;
        for (var state = 0; i < len; i++) {
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
    };
    PojoStore.prototype.select = function (current, flags, idx) {
        var pager = this.pager;
        pager.index_selected = idx;
        return this.$select(current, flags, idx, pager.page, true);
    };
    PojoStore.prototype.$select = function (current, flags, idx, page, selectWithoutPopulate) {
        var pager = this.pager, prevKey = pager.prev_key, options = this.options, k = options.keyProperty, current_ = current['_'];
        if (prevKey) {
            var previous = pager.pojo, previous_ = previous['_'], state = previous_[c.STATE];
            if ((state & 8 /* LOADING */))
                return c.PREVENT_BOTH;
            var sameSlot = current === previous, same = sameSlot && (!selectWithoutPopulate || current[k] === prevKey), refresh = !same || 2 /* REFRESH */ === (flags & 2 /* REFRESH */);
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
        var ret = options.onSelect(current, flags);
        pager.pojo = current;
        pager.prev_key = current[k];
        pager.prev_page = page;
        pager.prev_vstate = current_[c.VSTATE];
        if (selectWithoutPopulate)
            current_[c.LSTATE] = 1 /* INCLUDED */ | 2 /* SELECTED */;
        return ret;
    };
    PojoStore.prototype.populateAndSelect = function (storeIdx, flags) {
        var pager = this.pager, array = pager.array, pageSize = array.length, currentPage = pager.page, state = pager.state;
        if (!(state & 16 /* DESC */))
            storeIdx = this.size() - storeIdx - 1;
        var page = storeIdx / pageSize, selectIdx = page === 0 ? storeIdx : (storeIdx % pageSize);
        if (currentPage !== page)
            pager.page = page;
        this.$populate(2 /* SELECT */, flags, this.isMainArray(), selectIdx, pager.page);
    };
    PojoStore.prototype.notifyAndSelect = function (storeIdx, flags) {
        this.pager.size = this.size();
        this.populateAndSelect(storeIdx, flags);
    };
    PojoStore.prototype.notify = function (type, flags) {
        if (type === void 0) { type = 3 /* RETAIN */; }
        if (flags === void 0) { flags = 0 /* NONE */; }
        this.pager.size = this.size();
        this.$populate(type, flags, this.isMainArray(), -1, this.pager.page);
    };
    /**
     * Add the entity and select it afterwards.
     */
    PojoStore.prototype.addAndSelect = function (entity, latest, flags) {
        var main = this.isMainArray(), array = this.array, options = this.options;
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
    };
    PojoStore.prototype.get = function (index) {
        return this.array[index];
    };
    PojoStore.prototype.getStoreIndex = function (selected) {
        return this.$getStoreIndex(selected['$index']);
    };
    PojoStore.prototype.$getStoreIndex = function (index) {
        var pager = this.pager, toPopulate = pager.array, desc = $is_set(pager.state, 16 /* DESC */), populatePages = pager.page * toPopulate.length;
        return desc ? populatePages + index : this.size() - populatePages - index - 1;
    };
    PojoStore.prototype.getSelectedOriginal = function () {
        var selected = this.pager.pojo;
        return !selected ? null : this.get(this.getStoreIndex(selected['$index']));
    };
    PojoStore.prototype.getOriginal = function (selected) {
        return this.get(this.getStoreIndex(selected['$index']));
    };
    PojoStore.prototype.remove = function (index) {
        var options = this.options, entity = this.array.splice(index, 1)[0];
        if (options.onRemove)
            options.onRemove(entity, this.isMainArray());
        this.notify(3 /* RETAIN */, 0);
        return entity;
    };
    PojoStore.prototype.clear = function () {
        var options = this.options, removed = this.array.splice(0, this.array.length);
        if (options.onRemoveArray)
            options.onRemoveArray(removed, this.mainArray === this.array);
        this.notify(1 /* RESET */, 0);
    };
    PojoStore.prototype.add = function (entity, latest, mainOnly) {
        var options = this.options, targetArray = mainOnly ? this.mainArray : this.array;
        if (latest)
            targetArray.unshift(entity);
        else
            targetArray.push(entity);
        if (options.onAdd)
            options.onAdd(entity, this.mainArray === targetArray, latest);
        if (!mainOnly || this.array === targetArray)
            this.notify(3 /* RETAIN */, 0);
    };
    PojoStore.prototype.addAll = function (array, latest, mainOnly) {
        if (!array || array.length === 0)
            return false;
        var options = this.options, targetArray = mainOnly ? this.mainArray : this.array, main = this.mainArray === targetArray;
        if (targetArray.length === 0)
            latest = !latest;
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var message = array_1[_i];
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
    };
    /**
     * Resets the internal arrays and does not notify nor call onRemoveArray
     */
    PojoStore.prototype.reinit = function (array) {
        this.mainArray = array;
        this.array = array;
        var onAdd = this.options.onAdd;
        if (onAdd) {
            for (var _i = 0, array_2 = array; _i < array_2.length; _i++) {
                var p = array_2[_i];
                onAdd(p, true, true);
            }
        }
        return this;
    };
    /**
     * Resets the internal arrays and calls the listener methods.
     */
    PojoStore.prototype.reset = function (array, notify) {
        if (notify === void 0) { notify = true; }
        var options = this.options, onAdd = options.onAdd, removed = this.mainArray;
        this.mainArray = array;
        this.array = array;
        if (options.onRemoveArray)
            options.onRemoveArray(removed, true);
        if (onAdd) {
            for (var _i = 0, array_3 = array; _i < array_3.length; _i++) {
                var message = array_3[_i];
                onAdd(message, true, true);
            }
        }
        if (notify)
            this.notify(1 /* RESET */, 0);
    };
    /**
     * Simply sets the array.  No notifications/etc.
     */
    PojoStore.prototype.setArray = function (array) {
        this.array = array;
    };
    /**
     * Sets the array and notifies.
     */
    PojoStore.prototype.replace = function (array, type, flags) {
        if (type === void 0) { type = 1 /* RESET */; }
        if (flags === void 0) { flags = 0 /* NONE */; }
        this.array = array;
        this.notify(type, flags);
    };
    /**
     * Returns true if an item was removed.
     */
    PojoStore.prototype.update = function (updateArray) {
        var options = this.options, descriptor = options.descriptor, fnMergeFrom = this.fnMergeFrom, main = this.isMainArray(), pager = this.pager, toPopulate = pager.array, desc = $is_set(pager.state, 16 /* DESC */), page = pager.page, size = this.size();
        var removedArray;
        if (!updateArray || updateArray.length === 0) {
            if (size <= toPopulate.length) {
                if (options.onRemoveArray)
                    options.onRemoveArray(this.array, main);
                this.mainArray = this.array = [];
                this.notify(1 /* RESET */, 0);
                return true;
            }
            var populatePages_1 = page * toPopulate.length;
            if (desc)
                removedArray = this.array.splice(populatePages_1, size - populatePages_1);
            else
                removedArray = this.array.splice(0, size - populatePages_1);
            if (options.onRemoveArray)
                options.onRemoveArray(removedArray, main);
            this.notify(1 /* RESET */, 0);
            return true;
        }
        var updateLen = updateArray.length, populateLen = toPopulate.length, populatePages = page * populateLen, k = options.keyProperty, i = 0, removed = 0, idx = desc ? populatePages + i : size - populatePages - i - 1;
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
        var onAdd = options.onAdd, array = this.array, ret = removed !== 0;
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
    };
    PojoStore.prototype.getStartObj = function () {
        var pager = this.pager, masked = 224 /* MASK_RPC */ & pager.state;
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
    };
    PojoStore.prototype.newRangeKeyForReload = function () {
        return this.$newRangeKeyForReload($is_set(this.pager.state, 16 /* DESC */));
    };
    PojoStore.prototype.$newRangeKeyForReload = function (desc) {
        var pager = this.pager, options = this.options, k = options.keyProperty, toPopulate = pager.array, size = this.size(), page = pager.page, pageSize = toPopulate.length, pages = (page * pageSize) + pageSize, remaining = pages > size ? pages - size : 0, visibleItemCount = pageSize - remaining, key = toPopulate[0][k], kh = options.kh;
        // TODO set functions as object field
        var startKey;
        if (kh) {
            startKey = desc ? kh.inc(key) : kh.dec(key);
        }
        else {
            startKey = desc ? incrementKey(key) : decrementKey(key);
        }
        return ds.ParamRangeKey.$create(desc, visibleItemCount, startKey);
    };
    PojoStore.prototype.newRangeKeyForLoadNewer = function () {
        var toPopulate = this.pager.array;
        if (this.isEmpty())
            return ds.ParamRangeKey.$create(true, toPopulate.length + 1);
        return ds.ParamRangeKey.$create(false, toPopulate.length, this.get(0)[this.options.keyProperty]);
    };
    PojoStore.prototype.newRangeKeyForLoadOlder = function () {
        var toPopulate = this.pager.array;
        return ds.ParamRangeKey.$create(true, toPopulate.length, this.get(this.size() - 1)[this.options.keyProperty]);
    };
    PojoStore.prototype.requestNewer = function () {
        var pager = this.pager;
        pager.state |= 32 /* LOAD_NEWER */;
        this.options.fetch(this.newRangeKeyForLoadNewer(), pager);
    };
    PojoStore.prototype.requestOlder = function () {
        var pager = this.pager;
        pager.state |= 64 /* LOAD_OLDER */;
        this.options.fetch(this.newRangeKeyForLoadOlder(), pager);
    };
    PojoStore.prototype.reload = function () {
        var pager = this.pager;
        pager.state |= 128 /* RELOAD */;
        this.options.fetch(this.newRangeKeyForReload(), pager);
    };
    PojoStore.prototype.$reload = function (desc) {
        var pager = this.pager;
        if (desc)
            pager.state |= (128 /* RELOAD */ | 16 /* DESC */);
        else
            $bit_clear_and_set(pager, c.STATE, 16 /* DESC */, 128 /* RELOAD */);
        this.options.fetch(this.$newRangeKeyForReload(desc), pager);
    };
    PojoStore.prototype.addNewer = function (array) {
        this.addAll(array, true, false);
    };
    PojoStore.prototype.addOlder = function (array) {
        this.addAll(array, false, false);
    };
    // next tick
    PojoStore.prototype.$$requestNewer = function (pager) {
        var _this = this;
        Vue.nextTick(function () { return _this.requestNewer(); });
    };
    PojoStore.prototype.$$requestOlder = function (pager) {
        var _this = this;
        Vue.nextTick(function () { return _this.requestOlder(); });
    };
    PojoStore.prototype.$$reload = function (pager) {
        var _this = this;
        Vue.nextTick(function () { return _this.reload(); });
    };
    PojoStore.prototype.$$notify = function () {
        var _this = this;
        Vue.nextTick(function () { return _this.notify(); });
    };
    PojoStore.prototype.callbackFromFetch = function (array) {
        var pager = this.pager, masked = 224 /* MASK_RPC */ & pager.state;
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
    };
    return PojoStore;
}());
//# sourceMappingURL=index.js.map