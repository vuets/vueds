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
})(MultiCAS = exports.MultiCAS || (exports.MultiCAS = {}));
function escapeValue(v) {
    return v;
}
exports.escapeValue = escapeValue;
// target is vm
function mergeVmFrom(src, int2str, target) {
    for (var i in src) {
        target[int2str[i]] = src[i];
    }
    return target;
}
exports.mergeVmFrom = mergeVmFrom;
// target is pojo
function mergePojoFrom(src, str2int, target) {
    var k;
    for (var i in src) {
        if ((k = str2int[i]))
            target[String(k)] = src[i];
    }
    return target;
}
exports.mergePojoFrom = mergePojoFrom;
//# sourceMappingURL=index.js.map