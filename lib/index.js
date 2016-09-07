import { regexInt, regexDouble } from './util';
/**
 * Define a property that should not be observed by vue's vm.
 * Returns the value
 */
export function defp(obj, prop, val) {
    Object.defineProperty(obj, prop, {
        enumerable: false,
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
export var MultiCAS;
(function (MultiCAS) {
    function $createObservable() {
        return {};
    }
    MultiCAS.$createObservable = $createObservable;
    function $create() {
        return {};
    }
    MultiCAS.$create = $create;
    function $stringify(obj) {
        return '';
    }
    MultiCAS.$stringify = $stringify;
    MultiCAS.$descriptor = {};
})(MultiCAS || (MultiCAS = {}));
export function escapeValue(v) {
    return v;
}
export function createVprops(descriptor) {
    var vprops = {}, fields = descriptor.$fdf;
    if (!fields)
        return vprops;
    if (descriptor.$) {
        for (var _i = 0, fields_1 = fields; _i < fields_1.length; _i++) {
            var k = fields_1[_i];
            vprops[descriptor[k].$] = null;
        }
    }
    else {
        for (var _a = 0, fields_2 = fields; _a < fields_2.length; _a++) {
            var k = fields_2[_a];
            vprops[k] = null;
        }
    }
    return vprops;
}
export function createStateObject(vprops) {
    return {
        state: 0,
        msg: '',
        vstate: 0,
        vfbs: 0,
        vprops: vprops
    };
}
export function initObservable(target, descriptor) {
    target['_'] = createStateObject(createVprops(descriptor));
    defp(target, '$d', descriptor);
    return target;
}
export function createObservable(descriptor) {
    return initObservable(descriptor.$new(), descriptor);
}
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
// target is pojo
export function mergePojoFrom(src, descriptor, target) {
    var mapping = descriptor.$, k;
    for (var i in src) {
        if ((k = mapping[i]))
            target[k] = src[i];
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
    var d, t, k, array, forig, fmod, diffed = [];
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
        diffed.push({ k: i, v: fmod });
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
    var d, t, k, array, forig, fmod, i, $ = descriptor.$, diffed = [];
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
        diffed.push({ k: i, v: fmod });
    }
    return diffed;
}
// =====================================
// event handling
function postValidate(message, f, fk, msg) {
    var message_ = message._, vprops = message_.vprops, state = message_.state, vfbs = message_.vfbs;
    vprops[fk] = msg;
    if (!(state & 16 /* UPDATE */))
        message_.state = state | 16 /* UPDATE */;
    // reuse state var
    if (msg)
        state = vfbs | (1 << --f);
    else
        state = vfbs & (~(1 << --f) & 0x7fffffff);
    if (vfbs !== state)
        message_.vfbs = state;
}
/**
 * The update arg means if existing data is modified (not creating new data).
 */
export function $change(event, message, field, update) {
    var d = message['$d'], $ = d.$, fk = $ && isNaN(field) ? $[field] : String(field), fd = d[fk];
    if (!fd || fd.t === 2 /* BYTES */)
        return null;
    var f = fd._, prop = fd.$ || fk, el = event.target, msg = null, val;
    switch (fd.t) {
        case 1 /* BOOL */:
            message[prop] = el.type === 'checkbox' ? el.checked : ('1' === el.value);
            break;
        case 16 /* ENUM */:
            val = el.value;
            message[prop] = !val.length ? null : parseInt(val, 10);
            break;
        case 3 /* STRING */:
            if ((val = el.value.trim())) {
                if (!fd.vfn || !(msg = fd.vfn(val)))
                    message.name = val;
            }
            else if (update) {
                el.value = message.name;
            }
            else if (message.name) {
                message.name = null;
                msg = fd.$n + ' is required.';
            }
            break;
        case 4 /* FLOAT */:
        case 5 /* DOUBLE */:
            if ((val = el.value.trim())) {
                if (!regexDouble.test(val))
                    msg = fd.$n + ' is invalid.';
                else if (!fd.vfn)
                    message[prop] = parseFloat(val);
                else if (!(msg = fd.vfn(val = parseFloat(val))))
                    message[prop] = val;
            }
            else if (update) {
                el.value = message[prop];
            }
            else if (message[prop]) {
                message[prop] = null;
                msg = fd.$n + ' is required.';
            }
            break;
        default:
            if ((val = el.value.trim())) {
                if (!regexInt.test(val))
                    msg = fd.$n + ' is invalid.';
                else if (!fd.vfn)
                    message[prop] = parseInt(val, 10);
                else if (!(msg = fd.vfn(val = parseInt(val, 10))))
                    message[prop] = val;
            }
            else if (update) {
                el.value = message[prop];
            }
            else if (message[prop]) {
                message[prop] = null;
                msg = fd.$n + ' is required.';
            }
    }
    postValidate(message, f, prop, msg);
    return msg;
}
//# sourceMappingURL=index.js.map