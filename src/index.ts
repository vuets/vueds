import * as Vue from 'vue'

export interface MultiCAS {

}
export namespace MultiCAS {
    export function $create(): MultiCAS {
        return {}
    }
    export function $stringify(obj: any): string {
        return ''
    }
}

export function escapeValue(v: string): string {
    return v
}

// target is vm
export function mergeVmFrom<T>(src: any, int2str: any, target: T): T {
    for (var i in src) {
        target[int2str[i]] = src[i]
    }
    
    return target
}

// target is pojo
export function mergePojoFrom<T>(src: any, str2int: any, target: T): T {
    var k
    for (var i in src) {
        if ((k = str2int[i])) target[String(k)] = src[i]
    }

    return target
}

