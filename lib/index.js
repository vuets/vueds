"use strict";
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