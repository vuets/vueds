// must be a scalar field
export function diffFieldTo(mc /**MultiCAS*/, descriptor, original, modified, field) {
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
export function diffTo(mc /**MultiCAS*/, descriptor, original, modified) {
    var d, t, k, array, forig, fmod, diffed = 0; //diffed: KV[] = []
    for (var _i = 0, _a = Object.keys(modified); _i < _a.length; _i++) {
        var i = _a[_i];
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
export function diffVmFieldTo(mc /**MultiCAS*/, descriptor, original, modified, field) {
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
export function diffVmTo(mc /**MultiCAS*/, descriptor, original, modified) {
    var d, t, k, array, forig, fmod, i, $ = descriptor.$, diffed = 0; //diffed: KV[] = []
    for (var _i = 0, _a = Object.keys(modified); _i < _a.length; _i++) {
        var vi = _a[_i];
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
// target is vm
export function mergeVmFrom(src, descriptor, target) {
    var fd, v;
    for (var _i = 0, _a = Object.keys(src); _i < _a.length; _i++) {
        var i = _a[_i];
        v = src[i];
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
    for (var _i = 0, _a = Object.keys(src); _i < _a.length; _i++) {
        var i = _a[_i];
        if (!(k = mapping[i]) || target[k] === (v = src[i]))
            continue;
        target[k] = v;
        if (vm)
            vm[i] = v;
    }
    return target;
}
export function mergeFrom(src, descriptor, target) {
    for (var _i = 0, _a = Object.keys(src); _i < _a.length; _i++) {
        var i = _a[_i];
        var v = src[i];
        if (v !== target[i])
            target[i] = v;
    }
    return target;
}
//# sourceMappingURL=diff.js.map