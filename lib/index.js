"use strict";
var MultiCAS;
(function (MultiCAS) {
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
//# sourceMappingURL=index.js.map