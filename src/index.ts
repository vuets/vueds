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
    export const $descriptor = {
    
    }
}

export function escapeValue(v: string): string {
    return v
}

// target is vm
export function mergeVmFrom<T>(src: any, descriptor: any, target: T): T {
    var fd
    for (var i in src) {
        if ((fd = descriptor[i])) target[fd.$] = src[i]
    }
    
    return target
}

// target is pojo
export function mergePojoFrom<T>(src: any, descriptor: any, target: T): T {
    var str2int = descriptor.$, k
    for (var i in src) {
        if ((k = str2int[i])) target[String(k)] = src[i]
    }

    return target
}

