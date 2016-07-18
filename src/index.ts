import * as Vue from 'vue'

// target is vm
export function mergeVmFrom(src: any, int2str: any, target: any): void {
    for (var i in src) {
        target[int2str[i]] = src[i]
    }
}

// target is pojo
export function mergePojoFrom(src: any, str2int: any, target: any): void {
    var k
    for (var i in src) {
        if ((k = str2int[i])) target[String(k)] = src[i]
    }
}

