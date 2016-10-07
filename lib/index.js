import * as numeral from 'numeral';
import { regexInt, regexDouble, regexTime, regexDate, regexDateTime, localToUtc, bit_clear_and_set, bit_unset } from './util';
import { formatTime, formatDate, formatDateTime, isValidDateStr, isValidDateTimeStr } from './datetime_util';
import { MultiCAS } from './ds/mc';
/**
 * Define a property that should not be observed by vue's vm.
 * Returns the value
 */
export function defp(obj, prop, val) {
    Object.defineProperty(obj, prop, {
        enumerable: false,
        configurable: true,
        value: val
    });
    return val;
}
/**
 * Nullify property.
 * Also useful for lazy observable properties that bypasses typescript's strictNullChecks config.
 */
export function nullp(obj, prop) {
    obj[prop] = null;
}
function addVpropsTo(so, descriptor, owner) {
    if (descriptor.$fdf) {
        for (var _i = 0, _a = descriptor.$fdf; _i < _a.length; _i++) {
            var k = _a[_i];
            so[k] = null;
            if (owner)
                owner[descriptor[k].$ || k] = null;
        }
    }
    if (descriptor.$fdikf) {
        for (var _b = 0, _c = descriptor.$fdikf; _b < _c.length; _b++) {
            var k = _c[_b];
            so[k] = null;
            if (owner)
                owner[descriptor[k].$ || k] = null;
        }
    }
    return so;
}
export function initObservable(target, descriptor, update) {
    target['_'] = addVpropsTo({
        state: 0,
        msg: '',
        vstate: 0,
        sfbs: 0,
        vfbs: 0,
        rfbs: 0
    }, descriptor, update ? null : target);
    defp(target, '$d', descriptor);
    if (!descriptor.$fmf)
        return target;
    for (var _i = 0, _a = descriptor.$fmf; _i < _a.length; _i++) {
        var fk = _a[_i];
        var fd = descriptor[fk];
        initObservable(target[fd.$], fd.d_fn(), update);
    }
    return target;
}
/*export function createObservable<T>(descriptor: any): T {
    return initObservable(descriptor.$new(), descriptor)
}*/
// target is vm
export function mergeVmFrom(src, descriptor, target) {
    var fd;
    for (var i in src) {
        var v = src[i];
        // only trigger the observable if the value changed
        if ((fd = descriptor[i])) {
            if (v !== target[fd.$])
                target[fd.$] = v;
        }
        else if (v !== target[i]) {
            target[i] = v;
        }
    }
    return target;
}
// target is original
export function mergeOriginalFrom(src, descriptor, target, vm) {
    var mapping = descriptor.$, k, v;
    for (var i in src) {
        if (!(k = mapping[i]) || target[k] === (v = src[i]))
            continue;
        target[k] = v;
        if (vm)
            vm[i] = v;
    }
    return target;
}
export function writeKVsTo(target, kvs) {
    for (var _i = 0, kvs_1 = kvs; _i < kvs_1.length; _i++) {
        var kv = kvs_1[_i];
        target[kv.k] = kv.v;
    }
    return target;
}
// must be a scalar field
export function diffFieldTo(mc, descriptor, original, modified, field) {
    var d, t, k, array, forig, fmod, i = String(field);
    if (!i ||
        !(d = descriptor[i]) ||
        !d.m ||
        !(t = d.t) ||
        (fmod = modified[i]) === (forig = original[i]))
        return false;
    // enum type converted to int
    k = t === 16 ? '8' : String(t);
    if (!(array = mc[k]))
        mc[k] = array = [];
    array.push({ '1': parseInt(i, 10), '2': forig, '3': fmod });
    return true;
}
// only the scalar fields are diffed
export function diffTo(mc, descriptor, original, modified) {
    var d, t, k, array, forig, fmod, diffed = 0; //diffed: KV[] = []
    for (var i in modified) {
        if (!(d = descriptor[i]) ||
            !d.m ||
            !(t = d.t) ||
            (fmod = modified[i]) === (forig = original[i]))
            continue;
        // enum type converted to int
        k = t === 16 ? '8' : String(t);
        if (!(array = mc[k]))
            mc[k] = array = [];
        array.push({ '1': parseInt(i, 10), '2': forig, '3': fmod });
        //diffed.push({ k: i, v: fmod })
        diffed++;
    }
    return diffed;
}
// must be a scalar field
export function diffVmFieldTo(mc, descriptor, original, modified, field) {
    var d, t, k, array, forig, fmod, $ = descriptor.$, i = $ && isNaN(field) ? $[field] : String(field);
    if (!i ||
        !(d = descriptor[i]) ||
        !d.m ||
        !(t = d.t) ||
        (fmod = modified[d.$]) === (forig = original[i]))
        return false;
    // enum type converted to int
    k = t === 16 ? '8' : String(t);
    if (!(array = mc[k]))
        mc[k] = array = [];
    array.push({ '1': parseInt(i, 10), '2': forig, '3': fmod });
    return true;
}
// only the scalar fields are diffed
export function diffVmTo(mc, descriptor, original, modified) {
    var d, t, k, array, forig, fmod, i, $ = descriptor.$, diffed = 0; //diffed: KV[] = []
    for (var vi in modified) {
        i = $ ? $[vi] : vi;
        if (!i ||
            !(d = descriptor[i]) ||
            !d.m ||
            !(t = d.t) ||
            (fmod = modified[vi]) === (forig = original[i]))
            continue;
        // enum type converted to int
        k = t === 16 ? '8' : String(t);
        if (!(array = mc[k]))
            mc[k] = array = [];
        array.push({ '1': parseInt(i, 10), '2': forig, '3': fmod });
        //diffed.push({ k: i, v: fmod })
        diffed++;
    }
    return diffed;
}
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
    if (!root_.msg) {
        root_.state = bit_clear_and_set(root_.state, 7 /* MASK_STATUS */, 2 /* ERROR */);
        root_.msg = 'All required fields must be provided.';
    }
    return false;
}
export function clearFormFields(message, descriptor) {
    var message_ = message['_'], fmf, fd;
    message_.sfbs = 0;
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
export function formUpdate(pojo, pager, original) {
    var pojo_ = pojo['_'], state = pojo_.state, $d = pojo['$d'];
    if ((state & 8 /* LOADING */) || !verifyFormFields(pojo, $d, true))
        return null;
    var mc = MultiCAS.$create();
    if (!diffVmTo(mc, $d, original, pojo)) {
        if (!pojo_.msg) {
            pojo_.state = bit_clear_and_set(state, 7 /* MASK_STATUS */, 4 /* WARNING */);
            pojo_.msg = 'No changes were made.';
        }
        return null;
    }
    pojo_.state = bit_clear_and_set(state, 7 /* MASK_STATUS */, 8 /* LOADING */);
    pojo_.msg = '';
    // TODO move PagerState to this file
    pager.state |= 8; // LOADING - to disable controls
    return mc;
}
export function formUpdateSuccess(pojo, pager, original, selected) {
    var pojo_ = pojo['_'];
    pojo_.state = bit_clear_and_set(pojo_.state, 8 /* LOADING */, 1 /* SUCCESS */);
    pojo_.msg = 'Successful.';
    pojo_.sfbs = 0;
    mergeOriginalFrom(pojo, pojo['$d'], original, selected);
    // TODO move PagerState to this file
    pager.state ^= 8; // LOADING
}
export function formPrepare(pojo) {
    var pojo_ = pojo['_'], state = pojo_.state;
    if ((state & 8 /* LOADING */) || !verifyFormFields(pojo, pojo['$d']))
        return false;
    pojo_.state = bit_clear_and_set(state, 7 /* MASK_STATUS */, 8 /* LOADING */);
    pojo_.msg = '';
    return true;
}
export function formSuccess(pojo) {
    var pojo_ = pojo['_'];
    pojo_.state = bit_clear_and_set(pojo_.state, 8 /* LOADING */, 1 /* SUCCESS */);
    pojo_.msg = 'Successful.';
    clearFormFields(pojo, pojo['$d']);
}
export function formFailed(pojo, errmsg) {
    var pojo_ = pojo['_'];
    pojo_.state = bit_clear_and_set(pojo_.state, 8 /* LOADING */, 2 /* ERROR */);
    pojo_.msg = !errmsg ? 'Error.' : String(errmsg);
}
function cbFormFailed(errmsg) {
    formFailed(this, errmsg);
}
export function bindFormFailed(pojo) {
    return cbFormFailed.bind(pojo);
}
export function formUpdateFailed(pojo, pager, errmsg) {
    var pojo_ = pojo['_'];
    pojo_.state = bit_clear_and_set(pojo_.state, 8 /* LOADING */, 2 /* ERROR */);
    pojo_.msg = !errmsg ? 'Error.' : String(errmsg);
    // TODO move PagerState to this file
    pager.state ^= 8; // LOADING
}
function cbFormUpdateFailed(errmsg) {
    formUpdateFailed(this.pojo, errmsg, this.pager);
}
export function bindFormUpdateFailed(scope) {
    return cbFormUpdateFailed.bind(scope);
}
// =====================================
// event handling
function postValidate(message, fd, f, fk, msg, root, set) {
    var message_ = message._, root_ = root._, state = message_.state, sfbs = message_.sfbs, vfbs = message_.vfbs, rfbs = message_.rfbs, required = fd.m === 2, flag = 1 << (f - 1);
    message_[fk] = msg;
    if (!(state & 16 /* UPDATE */))
        message_.state = state | 16 /* UPDATE */;
    if (set) {
        if (!(sfbs & flag))
            message_.sfbs |= flag;
    }
    else if (sfbs & flag) {
        message_.sfbs ^= flag;
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
function validateString(val, fd, f, fk, message, prop, el, update, root) {
    var msg = null, set = !!val;
    if (set) {
        if (!fd.vfn || !(msg = fd.vfn(val)))
            message[prop] = val;
        else
            message[prop] = undefined;
    }
    else if (update) {
        el.value = message[prop];
    }
    else if (message[prop]) {
        el.value = '';
        message[prop] = null;
    }
    else if (el.value) {
        // remove whitespace
        el.value = '';
        return msg;
    }
    postValidate(message, fd, f, fk, msg, root, set);
    return msg;
}
function validateFloat(val, fd, f, fk, message, prop, el, update, root) {
    var msg = null, set = !!val;
    if (set) {
        if (!regexDouble.test(val))
            msg = fd.$n + ' is invalid.';
        else if (!fd.vfn)
            message[prop] = parseFloat(val);
        else if (!(msg = fd.vfn(val = parseFloat(val))))
            message[prop] = val;
        else
            message[prop] = undefined;
    }
    else if (update) {
        el.value = message[prop];
    }
    else if (message[prop]) {
        el.value = '';
        message[prop] = null;
    }
    else if (el.value) {
        // remove whitespace
        el.value = '';
        return msg;
    }
    postValidate(message, fd, f, fk, msg, root, set);
    return msg;
}
function validateInt(val, fd, f, fk, message, prop, el, update, root) {
    var msg = null, set = !!val;
    if (set) {
        if (!regexInt.test(val))
            msg = fd.$n + ' is invalid.';
        else if (!fd.vfn)
            message[prop] = parseInt(val, 10);
        else if (!(msg = fd.vfn(val = parseInt(val, 10))))
            message[prop] = val;
        else
            message[prop] = undefined;
    }
    else if (update) {
        el.value = message[prop];
    }
    else if (message[prop]) {
        el.value = '';
        message[prop] = null;
    }
    else if (el.value) {
        // remove whitespace
        el.value = '';
        return msg;
    }
    postValidate(message, fd, f, fk, msg, root, set);
    return msg;
}
function validateTime(val, fd, f, fk, message, prop, el, update, root) {
    var msg = null, set = !!val, v;
    if (set) {
        if (!regexTime.test(val) || 86399 < (v = numeral().unformat(val.length <= 5 ? (val + ':00') : val)))
            msg = fd.$n + ' is invalid.';
        else if (!fd.vfn || !(msg = fd.vfn(v)))
            message[prop] = v;
        else
            message[prop] = undefined;
    }
    else if (update) {
        el.value = formatTime(message[prop]);
    }
    else if (message[prop]) {
        el.value = '';
        message[prop] = null;
    }
    else if (el.value) {
        // remove whitespace
        el.value = '';
        return msg;
    }
    postValidate(message, fd, f, fk, msg, root, set);
    return msg;
}
function validateDate(val, fd, f, fk, message, prop, el, update, root) {
    var msg = null, set = !!val, v;
    if (set) {
        if (!regexDate.test(val) || !(v = isValidDateStr(val)) || !(v = localToUtc(v)))
            msg = fd.$n + ' is invalid.';
        else if (!fd.vfn || !(msg = fd.vfn(v)))
            message[prop] = v;
        else
            message[prop] = undefined;
    }
    else if (update) {
        el.value = formatDate(message[prop]);
    }
    else if (message[prop]) {
        el.value = '';
        message[prop] = null;
    }
    else if (el.value) {
        // remove whitespace
        el.value = '';
        return msg;
    }
    postValidate(message, fd, f, fk, msg, root, set);
    return msg;
}
function validateDateTime(val, fd, f, fk, message, prop, el, update, root) {
    var msg = null, set = !!val, v;
    if (set) {
        if (!regexDateTime.test(val) || !(v = isValidDateTimeStr(val)) || !(v = localToUtc(v)))
            msg = fd.$n + ' is invalid.';
        else if (!fd.vfn || !(msg = fd.vfn(v)))
            message[prop] = v;
        else
            message[prop] = undefined;
    }
    else if (update) {
        el.value = formatDateTime(message[prop]);
    }
    else if (message[prop]) {
        el.value = '';
        message[prop] = null;
    }
    else if (el.value) {
        // remove whitespace
        el.value = '';
        return msg;
    }
    postValidate(message, fd, f, fk, msg, root, set);
    return msg;
}
/**
 * The update arg means if existing data is modified (not creating new data).
 */
export function $change(e, message, field, update, root) {
    var d = message['$d'], $ = d.$, fk = $ && isNaN(field) ? $[field] : String(field), fd = d[fk];
    if (!fd || fd.t === 2 /* BYTES */)
        return null;
    var f = fd._, prop = fd.$ || fk, el = e.target, msg = null, val;
    switch (fd.t) {
        case 1 /* BOOL */:
            val = el.type === 'checkbox' ? el.checked : ('1' === el.value);
            message[prop] = val;
            postValidate(message, fd, f, fk, msg, root, update || val);
            break;
        case 16 /* ENUM */:
            val = el.value;
            message[prop] = !val.length ? null : parseInt(val, 10);
            postValidate(message, fd, f, fk, msg, root, update || val.length !== 0);
            break;
        case 3 /* STRING */:
            msg = validateString(el.value.trim(), fd, f, fk, message, prop, el, update, root);
            break;
        case 4 /* FLOAT */:
        case 5 /* DOUBLE */:
            msg = validateFloat(el.value.trim(), fd, f, fk, message, prop, el, update, root);
            break;
        default:
            switch (fd.o || 0) {
                case 1:
                    msg = validateTime(el.value.trim(), fd, f, fk, message, prop, el, update, root);
                    break;
                case 2:
                    msg = validateDate(el.value.trim(), fd, f, fk, message, prop, el, update, root);
                    break;
                case 4:
                    msg = validateDateTime(el.value.trim(), fd, f, fk, message, prop, el, update, root);
                    break;
                default:
                    msg = validateInt(el.value.trim(), fd, f, fk, message, prop, el, update, root);
            }
    }
    return msg;
}
//# sourceMappingURL=index.js.map