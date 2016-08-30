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
        else if (v !== (target[i])) {
            target[i] = v;
        }
    }
    return target;
}
// target is pojo
export function mergePojoFrom(src, descriptor, target) {
    var str2int = descriptor.$, k;
    for (var i in src) {
        if ((k = str2int[i]))
            target[String(k)] = src[i];
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
    var d, t, k, array, forig, fmod, i = isNaN(field) ? descriptor.$[field] : String(field);
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
    var d, t, k, array, forig, fmod, i, diffed = [];
    for (var vi in modified) {
        if (!(i = descriptor.$[vi]) ||
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
//# sourceMappingURL=index.js.map