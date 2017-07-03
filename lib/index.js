import * as Vue from 'vue';
import * as numeral from 'numeral';
import { defp, bit_clear_and_set, bit_unset, extractMsg, localToUtc, regexInt, regexDouble, regexTime, regexDate, regexDateTime, } from './util';
import { formatTime, formatDate, formatDateTime, isValidDateStr, isValidDateTimeStr } from './datetime_util';
import { diffVmFieldTo, diffVmTo, mergeOriginalFrom } from './diff';
import { MultiCAS } from './ds/mc';
export var nextTick = Vue.nextTick;
function addVpropsTo(so, descriptor, owner, withVal) {
    var prop;
    if (descriptor.$fdf) {
        for (var _i = 0, _a = descriptor.$fdf; _i < _a.length; _i++) {
            var k = _a[_i];
            prop = descriptor[k].$ || k;
            if (!withVal || owner[prop] === '') {
                so[k] = null;
                owner[prop] = null;
            }
            else if (Object.prototype.hasOwnProperty.call(owner, prop)) {
                so[k] = null;
            }
        }
    }
    if (descriptor.$fdikf) {
        for (var _b = 0, _c = descriptor.$fdikf; _b < _c.length; _b++) {
            var k = _c[_b];
            prop = descriptor[k].$ || k;
            if (!withVal || Object.prototype.hasOwnProperty.call(owner, prop)) {
                so[k] = null;
                owner[prop] = null;
            }
        }
    }
    return so;
}
export function initObservable(target, descriptor, withVal) {
    target['_'] = addVpropsTo({
        state: 0,
        msg: '',
        dfbs: 0,
        vfbs: 0,
        rfbs: 0
    }, descriptor, target, withVal);
    defp(target, '$d', descriptor);
    if (!descriptor.$fmf)
        return target;
    for (var _i = 0, _a = descriptor.$fmf; _i < _a.length; _i++) {
        var fk = _a[_i];
        var fd = descriptor[fk];
        initObservable(target[fd.$], fd.d_fn(), withVal);
    }
    return target;
}
/*export function createObservable<T>(descriptor: any): T {
    return initObservable(descriptor.$new(), descriptor)
}*/
export function verifyFormFields(message, descriptor, update, root) {
    var message_ = message._, root_, rfbs, fmf, fd;
    if (root) {
        root_ = root._;
    }
    else {
        root = message;
        root_ = message_;
    }
    if (message_.vfbs) {
        if (root_.msg) {
            root_.state = bit_unset(root_.state, 7 /* MASK_STATUS */);
            root_.msg = '';
        }
        return false;
    }
    if ((fmf = descriptor.$fmf)) {
        for (var _i = 0, fmf_1 = fmf; _i < fmf_1.length; _i++) {
            var fk = fmf_1[_i];
            fd = descriptor[fk];
            if (!verifyFormFields(message[fd.$ || fk], fd.d_fn(), update, root))
                return false;
        }
    }
    if (update || !(rfbs = descriptor.$rfbs) || rfbs === message_.rfbs)
        return true;
    root_.state = bit_clear_and_set(root_.state, 7 /* MASK_STATUS */, 2 /* ERROR */);
    root_.msg = 'All required fields must be provided.';
    return false;
}
export function clearFormFields(message, descriptor) {
    var message_ = message['_'], fmf, fd;
    message_.dfbs = 0;
    message_.rfbs = 0;
    for (var _i = 0, _a = descriptor.$fdf; _i < _a.length; _i++) {
        var fk = _a[_i];
        fd = descriptor[fk];
        message[fd.$ || fk] = null;
    }
    if (!(fmf = descriptor.$fmf))
        return;
    for (var _b = 0, fmf_2 = fmf; _b < fmf_2.length; _b++) {
        var fk = fmf_2[_b];
        fd = descriptor[fk];
        clearFormFields(message[fd.$ || fk], fd.d_fn());
    }
}
export function formUpdate(pojo, pager, original, changes) {
    var pojo_ = pojo['_'], state = pojo_.state, $d = pojo['$d'];
    if ((pager.state & 8 /* LOADING */) || (state & 8 /* LOADING */) || !verifyFormFields(pojo, $d, true))
        return undefined;
    var mc, diffCount = pojo_.dfbs && diffVmTo(mc = MultiCAS.$create(), $d, original, pojo);
    if (!diffCount && !changes) {
        if (!pojo_.msg) {
            pojo_.state = bit_clear_and_set(state, 7 /* MASK_STATUS */, 4 /* WARNING */);
            pojo_.msg = 'No changes were made.';
        }
        return undefined;
    }
    pojo_.state = bit_clear_and_set(state, 7 /* MASK_STATUS */, 8 /* LOADING */);
    pojo_.msg = '';
    pager.state |= 8 /* LOADING */;
    return diffCount ? mc : undefined;
}
export function formUpdateSuccess(pojo, pager, original, selected) {
    var pojo_ = pojo['_'];
    pojo_.state = bit_clear_and_set(pojo_.state, 7 /* MASK_STATUS */ | 8 /* LOADING */, 1 /* SUCCESS */);
    pojo_.msg = 'Successful.';
    pojo_.dfbs = 0;
    mergeOriginalFrom(pojo, pojo['$d'], original, selected);
    pager.state ^= 8 /* LOADING */;
}
export function formPrepare(pojo) {
    var pojo_ = pojo['_'], state = pojo_.state;
    if ((state & 8 /* LOADING */) || !verifyFormFields(pojo, pojo['$d']))
        return false;
    pojo_.state = bit_clear_and_set(state, 7 /* MASK_STATUS */, 8 /* LOADING */);
    pojo_.msg = '';
    return true;
}
export function formClear(pojo) {
    var pojo_ = pojo['_'];
    if (pojo_.msg)
        pojo_.msg = '';
    if (!pojo_.dfbs)
        return pojo_;
    if (pojo_.vfbs)
        pojo_.vfbs = 0;
    clearFormFields(pojo, pojo['$d']);
    return pojo_;
}
export function formSuccess(pojo, msg) {
    var pojo_ = pojo['_'];
    pojo_.state = bit_clear_and_set(pojo_.state, 7 /* MASK_STATUS */ | 8 /* LOADING */, 1 /* SUCCESS */);
    pojo_.msg = msg || 'Successful.';
    clearFormFields(pojo, pojo['$d']);
}
export function formFailed(pojo, errmsg) {
    var pojo_ = pojo['_'];
    pojo_.state = bit_clear_and_set(pojo_.state, 7 /* MASK_STATUS */ | 8 /* LOADING */, 2 /* ERROR */);
    pojo_.msg = !errmsg ? 'Error.' : extractMsg(errmsg);
}
function cbFormFailed(errmsg) {
    formFailed(this, errmsg);
}
export function bindFormFailed(pojo) {
    return cbFormFailed.bind(pojo);
}
export function formUpdateFailed(pojo, pager, errmsg) {
    var pojo_ = pojo['_'];
    pojo_.state = bit_clear_and_set(pojo_.state, 7 /* MASK_STATUS */ | 8 /* LOADING */, 2 /* ERROR */);
    pojo_.msg = !errmsg ? 'Error.' : extractMsg(errmsg);
    pager.state ^= 8 /* LOADING */;
}
function cbFormUpdateFailed(errmsg) {
    formUpdateFailed(this.pojo, this.pager, errmsg);
}
export function bindFormUpdateFailed(scope) {
    return cbFormUpdateFailed.bind(scope);
}
export function toggleUpdateSuccess(pager, pojo_update, skipMerge) {
    var selected = pager.pojo, selected_ = selected['_'], store = pager['store'];
    pager.state ^= 8 /* LOADING */;
    if (!skipMerge)
        mergeOriginalFrom(selected, selected['$d'], store.getOriginal(selected), pojo_update);
    selected_.state = bit_clear_and_set(selected_.state, 7 /* MASK_STATUS */ | 8 /* LOADING */, 1 /* SUCCESS */);
    selected_.msg = 'Update Successful';
    return true;
}
function cbToggleUpdateSuccess() {
    toggleUpdateSuccess(this.pager, this.pojo);
}
export function bindToggleUpdateSuccess(scope) {
    return cbToggleUpdateSuccess.bind(scope);
}
export function toggleUpdateFailed(pager, errmsg) {
    var selected = pager.pojo, selected_ = selected['_'];
    pager.state ^= 8 /* LOADING */;
    selected_.state = bit_clear_and_set(selected_.state, 7 /* MASK_STATUS */ | 8 /* LOADING */, 2 /* ERROR */);
    selected_.msg = !errmsg ? 'Update failed.' : extractMsg(errmsg);
}
function cbToggleUpdateFailed(errmsg) {
    toggleUpdateFailed(this, errmsg);
}
export function bindToggleUpdateFailed(pager) {
    return cbToggleUpdateFailed.bind(pager);
}
export function toggleUpdate(pager, field, pojo, changed) {
    var selected = pojo || pager.pojo, selected_ = selected['_'];
    if ((pager.state & 8 /* LOADING */) || (selected_.state & 8 /* LOADING */))
        return null;
    var d = selected['$d'], fd = d[d.$[field]], store = pager['store'], original = store.getOriginal(selected), mc = MultiCAS.$create();
    if (pojo && pojo !== pager.pojo)
        store.select(pojo, 1 /* CLICKED */);
    if (!changed)
        selected[field] = !selected[field];
    diffVmFieldTo(mc, d, original, selected, fd._);
    pager.state |= 8 /* LOADING */;
    selected_.state |= 8 /* LOADING */;
    if (selected_.msg)
        selected_.msg = '';
    return mc;
}
export function togglePrepare(pager) {
    var selected = pager.pojo, selected_ = selected['_'];
    if ((pager.state & 8 /* LOADING */) || (selected_.state & 8 /* LOADING */))
        return false;
    pager.state |= 8 /* LOADING */;
    selected_.state |= 8 /* LOADING */;
    if (selected_.msg)
        selected_.msg = '';
    return true;
}
// =====================================
// event handling
function postValidate(message, fd, fk, f, flag, message_, dfbs, msg, root, dirty) {
    var root_ = root._, state = message_.state, vfbs = message_.vfbs, rfbs = message_.rfbs, required = fd.m === 2;
    message_[fk] = msg;
    if (!(state & 16 /* UPDATE */))
        message_.state = state | 16 /* UPDATE */;
    if (dirty) {
        if (!(dfbs & flag))
            message_.dfbs |= flag;
    }
    else if (dfbs & flag) {
        message_.dfbs ^= flag;
    }
    if (msg) {
        if (!(vfbs & flag))
            message_.vfbs |= flag;
        if (required && (rfbs & flag))
            message_.rfbs ^= flag;
    }
    else {
        if (vfbs & flag)
            message_.vfbs ^= flag;
        if (required && !(rfbs & flag))
            message_.rfbs |= flag;
    }
    if (root_.msg) {
        root_.state = bit_unset(root_.state, 7 /* MASK_STATUS */);
        root_.msg = '';
    }
}
function validateString(val, message, fd, fk, f, flag, message_, dfbs, prop, el, update, root, cbfn, flags) {
    var msg = null, dirty = !!val, v, sv;
    if (dirty) {
        // backup data
        if (update && (v = message[prop]) !== undefined && v !== message_[prop])
            message_[prop] = v;
        if ((flags & 1 /* SKIP_VALIDATE */) || !fd.vfn || !(msg = fd.vfn(val))) {
            message[prop] = sv = val;
            dirty = !update || val !== message_[prop];
        }
        else {
            message[prop] = undefined;
        }
    }
    else if (update) {
        dirty = !!(flag & dfbs);
        // restore data
        if ((v = message[prop]) === undefined)
            message[prop] = message_[prop];
        else
            el.value = v;
    }
    else if ((v = message[prop]) || v === undefined) {
        el.value = '';
        message[prop] = sv = null;
    }
    else if (el.value) {
        // remove whitespace
        el.value = '';
        return msg;
    }
    postValidate(message, fd, fk, f, flag, message_, dfbs, msg, root, dirty);
    if (!cbfn || sv === undefined || ((flags & 4 /* CB_ONLY_ON_SET */) && sv === null))
        return msg;
    if ((flags & 2 /* CB_NEXT_TICK */))
        nextTick(cbfn);
    else
        cbfn(f, sv, message, fd, root);
    return msg;
}
function validateFloat(val, message, fd, fk, f, flag, message_, dfbs, prop, el, update, root, cbfn, flags) {
    var msg = null, dirty = !!val, v, sv;
    if (dirty) {
        // backup data
        if (update && (v = message[prop]) !== undefined && v !== message_[prop])
            message_[prop] = v;
        if (!regexDouble.test(val)) {
            msg = fd.$n + ' is not a number.';
            message[prop] = undefined;
        }
        else if ((flags & 1 /* SKIP_VALIDATE */) || !fd.vfn) {
            message[prop] = sv = v = parseFloat(val);
            dirty = !update || v !== message_[prop];
        }
        else if (!(msg = fd.vfn(v = parseFloat(val)))) {
            message[prop] = sv = v;
            dirty = !update || v !== message_[prop];
        }
        else {
            message[prop] = undefined;
        }
    }
    else if (update) {
        dirty = !!(flag & dfbs);
        // restore data
        if ((v = message[prop]) === undefined)
            message[prop] = message_[prop];
        else
            el.value = v;
    }
    else if ((v = message[prop]) || v === undefined) {
        el.value = '';
        message[prop] = sv = null;
    }
    else if (el.value) {
        // remove whitespace
        el.value = '';
        return msg;
    }
    postValidate(message, fd, fk, f, flag, message_, dfbs, msg, root, dirty);
    if (!cbfn || sv === undefined || ((flags & 4 /* CB_ONLY_ON_SET */) && sv === null))
        return msg;
    if ((flags & 2 /* CB_NEXT_TICK */))
        nextTick(cbfn);
    else
        cbfn(f, sv, message, fd, root);
    return msg;
}
function validateInt(val, message, fd, fk, f, flag, message_, dfbs, prop, el, update, root, cbfn, flags) {
    var msg = null, dirty = !!val, v, sv;
    if (dirty) {
        // backup data
        if (update && (v = message[prop]) !== undefined && v !== message_[prop])
            message_[prop] = v;
        if (!regexInt.test(val)) {
            msg = fd.$n + ' is not a whole number.';
            message[prop] = undefined;
        }
        else if ((flags & 1 /* SKIP_VALIDATE */) || !fd.vfn) {
            message[prop] = sv = v = parseInt(val, 10);
            dirty = !update || v !== message_[prop];
        }
        else if (!(msg = fd.vfn(v = parseInt(val, 10)))) {
            message[prop] = sv = v;
            dirty = !update || v !== message_[prop];
        }
        else {
            message[prop] = undefined;
        }
    }
    else if (update) {
        dirty = !!(flag & dfbs);
        // restore data
        if ((v = message[prop]) === undefined)
            message[prop] = message_[prop];
        else
            el.value = v;
    }
    else if ((v = message[prop]) || v === undefined) {
        el.value = '';
        message[prop] = sv = null;
    }
    else if (el.value) {
        // remove whitespace
        el.value = '';
        return msg;
    }
    postValidate(message, fd, fk, f, flag, message_, dfbs, msg, root, dirty);
    if (!cbfn || sv === undefined || ((flags & 4 /* CB_ONLY_ON_SET */) && sv === null))
        return msg;
    if ((flags & 2 /* CB_NEXT_TICK */))
        nextTick(cbfn);
    else
        cbfn(f, sv, message, fd, root);
    return msg;
}
function validateTime(val, message, fd, fk, f, flag, message_, dfbs, prop, el, update, root, cbfn, flags) {
    var msg = null, dirty = !!val, v, sv;
    if (dirty) {
        // backup data
        if (update && (v = message[prop]) !== undefined && v !== message_[prop])
            message_[prop] = v;
        if (!regexTime.test(val) || 86399 < (v = numeral().unformat(val.length <= 5 ? (val + ':00') : val))) {
            msg = fd.$n + ' is not a valid time.';
            message[prop] = undefined;
        }
        else if ((flags & 1 /* SKIP_VALIDATE */) || !fd.vfn || !(msg = fd.vfn(v))) {
            message[prop] = sv = v;
            dirty = !update || v !== message_[prop];
        }
        else {
            message[prop] = undefined;
        }
    }
    else if (update) {
        dirty = !!(flag & dfbs);
        // restore data
        if ((v = message[prop]) === undefined)
            message[prop] = message_[prop];
        else
            el.value = formatTime(v);
    }
    else if ((v = message[prop]) || v === undefined) {
        el.value = '';
        message[prop] = sv = null;
    }
    else if (el.value) {
        // remove whitespace
        el.value = '';
        return msg;
    }
    postValidate(message, fd, fk, f, flag, message_, dfbs, msg, root, dirty);
    if (!cbfn || sv === undefined || ((flags & 4 /* CB_ONLY_ON_SET */) && sv === null))
        return msg;
    if ((flags & 2 /* CB_NEXT_TICK */))
        nextTick(cbfn);
    else
        cbfn(f, sv, message, fd, root);
    return msg;
}
function validateDate(e, val, message, fd, fk, f, flag, message_, dfbs, prop, el, update, root, cbfn, flags) {
    var msg = null, dirty = !!val, v, sv;
    if (!e.isTrusted && (v = message[prop])) {
        // dirty
        if ((flags & 1 /* SKIP_VALIDATE */) || !fd.vfn || !(msg = fd.vfn(v))) {
            sv = v;
            dirty = !update || v !== message_[prop];
        }
        else {
            message[prop] = undefined;
        }
    }
    else if (dirty) {
        // backup data
        if (update && (v = message[prop]) !== undefined && v !== message_[prop])
            message_[prop] = v;
        if (!regexDate.test(val) || !(v = isValidDateStr(val)) || !(v = localToUtc(v))) {
            msg = fd.$n + ' is not a valid date.';
            message[prop] = undefined;
        }
        else if ((flags & 1 /* SKIP_VALIDATE */) || !fd.vfn || !(msg = fd.vfn(v))) {
            message[prop] = sv = v;
            dirty = !update || v !== message_[prop];
        }
        else {
            message[prop] = undefined;
        }
    }
    else if (update) {
        dirty = !!(flag & dfbs);
        // restore data
        if ((v = message[prop]) === undefined)
            message[prop] = message_[prop];
        else
            el.value = formatDate(v);
    }
    else if ((v = message[prop]) || v === undefined) {
        el.value = '';
        message[prop] = sv = null;
    }
    else if (el.value) {
        // remove whitespace
        el.value = '';
        return msg;
    }
    postValidate(message, fd, fk, f, flag, message_, dfbs, msg, root, dirty);
    if (!cbfn || sv === undefined || ((flags & 4 /* CB_ONLY_ON_SET */) && sv === null))
        return msg;
    if ((flags & 2 /* CB_NEXT_TICK */))
        nextTick(cbfn);
    else
        cbfn(f, sv, message, fd, root);
    return msg;
}
function validateDateTime(val, message, fd, fk, f, flag, message_, dfbs, prop, el, update, root, cbfn, flags) {
    var msg = null, dirty = !!val, v, sv;
    if (dirty) {
        // backup data
        if (update && (v = message[prop]) !== undefined && v !== message_[prop])
            message_[prop] = v;
        if (!regexDateTime.test(val) || !(v = isValidDateTimeStr(val)) || !(v = localToUtc(v))) {
            msg = fd.$n + ' is not a valid date and time.';
            message[prop] = undefined;
        }
        else if ((flags & 1 /* SKIP_VALIDATE */) || !fd.vfn || !(msg = fd.vfn(v))) {
            message[prop] = sv = v;
            dirty = !update || v !== message_[prop];
        }
        else {
            message[prop] = undefined;
        }
    }
    else if (update) {
        dirty = !!(flag & dfbs);
        // restore data
        if ((v = message[prop]) === undefined)
            message[prop] = message_[prop];
        else
            el.value = formatDateTime(v);
    }
    else if ((v = message[prop]) || v === undefined) {
        el.value = '';
        message[prop] = sv = null;
    }
    else if (el.value) {
        // remove whitespace
        el.value = '';
        return msg;
    }
    postValidate(message, fd, fk, f, flag, message_, dfbs, msg, root, dirty);
    if (!cbfn || sv === undefined || ((flags & 4 /* CB_ONLY_ON_SET */) && sv === null))
        return msg;
    if ((flags & 2 /* CB_NEXT_TICK */))
        nextTick(cbfn);
    else
        cbfn(f, sv, message, fd, root);
    return msg;
}
/**
 * The update arg means if existing data is modified (not creating new data).
 */
export function $change(e, message, field, update, root, cbfn, flags) {
    var d = message['$d'], $ = d.$, fk = $ && isNaN(field) ? $[field] : String(field), fd = d[fk];
    if (!fd || fd.t === 2 /* BYTES */)
        return null;
    if (!root)
        root = message;
    // normalize
    if (flags === undefined)
        flags = 0;
    var message_ = message['_'], dfbs = message_.dfbs, f = fd._, flag = 1 << (f - 1), prop = fd.$ || fk, el = e.target, msg = null, val;
    switch (fd.t) {
        case 1 /* BOOL */:
            // re-use update var as dirty
            if (el.nodeName !== 'SELECT') {
                message[prop] = val = el.checked;
                update = !(flag & dfbs);
            }
            else if (update || el.value) {
                message[prop] = val = ('1' === el.value);
                update = !(flag & dfbs);
            }
            else {
                message[prop] = val = null;
                update = false;
            }
            postValidate(message, fd, fk, f, flag, message_, dfbs, msg, root, update);
            if (!cbfn || ((flags & 4 /* CB_ONLY_ON_SET */) && val === null))
                break;
            if ((flags & 2 /* CB_NEXT_TICK */))
                nextTick(cbfn);
            else
                cbfn(f, val, message, fd, root);
            break;
        case 16 /* ENUM */:
            // re-use update var as dirty
            if (!update) {
                val = (update = !!el.value.length) ? parseInt(el.value, 10) : null;
            }
            else if (!(flag & dfbs)) {
                // first update, dirty state
                message_[prop] = val = parseInt(el.value, 10);
            }
            else if (message_[prop] === (val = parseInt(el.value, 10))) {
                // restored to original value, no longer dirty
                update = false;
            }
            message[prop] = val;
            postValidate(message, fd, fk, f, flag, message_, dfbs, msg, root, update);
            if (!cbfn || ((flags & 4 /* CB_ONLY_ON_SET */) && val === null))
                break;
            if ((flags & 2 /* CB_NEXT_TICK */))
                nextTick(cbfn);
            else
                cbfn(f, val, message, fd, root);
            break;
        case 3 /* STRING */:
            msg = validateString(el.value.trim(), message, fd, fk, f, flag, message_, dfbs, prop, el, update, root, cbfn, flags);
            break;
        case 4 /* FLOAT */:
        case 5 /* DOUBLE */:
            msg = validateFloat(el.value.trim(), message, fd, fk, f, flag, message_, dfbs, prop, el, update, root, cbfn, flags);
            break;
        default:
            switch (fd.o || 0) {
                case 1:// time
                    msg = validateTime(el.value.trim(), message, fd, fk, f, flag, message_, dfbs, prop, el, update, root, cbfn, flags);
                    break;
                case 2:// date
                    msg = validateDate(e, el.value.trim(), message, fd, fk, f, flag, message_, dfbs, prop, el, update, root, cbfn, flags);
                    break;
                case 4:// datetime
                    msg = validateDateTime(el.value.trim(), message, fd, fk, f, flag, message_, dfbs, prop, el, update, root, cbfn, flags);
                    break;
                default:
                    msg = validateInt(el.value.trim(), message, fd, fk, f, flag, message_, dfbs, prop, el, update, root, cbfn, flags);
            }
    }
    return msg;
}
//# sourceMappingURL=index.js.map