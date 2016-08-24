"use strict";
var MultiCAS;
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
})(MultiCAS = exports.MultiCAS || (exports.MultiCAS = {}));
function escapeValue(v) {
    return v;
}
exports.escapeValue = escapeValue;
// target is vm
function mergeVmFrom(src, descriptor, target) {
    var fd;
    for (var i in src) {
        if ((fd = descriptor[i]))
            target[fd.$] = src[i];
        else
            target[i] = src[i];
    }
    return target;
}
exports.mergeVmFrom = mergeVmFrom;
// target is pojo
function mergePojoFrom(src, descriptor, target) {
    var str2int = descriptor.$, k;
    for (var i in src) {
        if ((k = str2int[i]))
            target[String(k)] = src[i];
    }
    return target;
}
exports.mergePojoFrom = mergePojoFrom;
function writeKVsTo(target, kvs) {
    for (var _i = 0, kvs_1 = kvs; _i < kvs_1.length; _i++) {
        var kv = kvs_1[_i];
        target[kv.k] = kv.v;
    }
    return target;
}
exports.writeKVsTo = writeKVsTo;
// must be a scalar field
function diffFieldTo(mc, descriptor, original, modified, field) {
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
exports.diffFieldTo = diffFieldTo;
// only the scalar fields are diffed
function diffTo(mc, descriptor, original, modified) {
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
exports.diffTo = diffTo;
// must be a scalar field
function diffVmFieldTo(mc, descriptor, original, modified, field) {
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
exports.diffVmFieldTo = diffVmFieldTo;
// only the scalar fields are diffed
function diffVmTo(mc, descriptor, original, modified) {
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
exports.diffVmTo = diffVmTo;
//# sourceMappingURL=index.js.map