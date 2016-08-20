import * as Vue from 'vue'

export interface MultiCAS {

}
export namespace MultiCAS {
    export function $createObservable(): MultiCAS {
        return null
    }
    export function $create(): MultiCAS {
        return {}
    }
    export function $stringify(obj: any): string {
        return ''
    }
    export const $descriptor = {

    }
}

export interface KV {
    k: string
    v: any
}

export function escapeValue(v: string): string {
    return v
}

// target is vm
export function mergeVmFrom<T>(src: any, descriptor: any, target: T): T {
    var fd
    for (var i in src) {
        if ((fd = descriptor[i])) target[fd.$] = src[i]
        else target[i] = src[i]
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

export function writeKVsTo<T>(target: T, kvs: KV[]): T {
    for (let kv of kvs) {
        target[kv.k] = kv.v
    }

    return target
}

// must be a scalar field
export function diffFieldTo<T>(mc: MultiCAS, descriptor: any, original: T, modified: T,
        field: number): boolean {
    var d, t, k, array, forig, fmod,
        i = String(field)

    if (!i ||
        !(d = descriptor[i]) ||
        !d.m ||
        !(t = d.t) ||
        (fmod = modified[i]) === (forig = original[i])) return false

    // enum type converted to int
    k = t === 16 ? '8' : String(t)
    if (!(array = mc[k]))
        mc[k] = array = []

    array.push({ '1': parseInt(i, 10), '2': forig, '3': fmod })

    return true
}

// only the scalar fields are diffed
export function diffTo<T>(mc: MultiCAS, descriptor: any, original: T, modified: T): KV[] {
    var d, t, k, array, forig, fmod, diffed: KV[] = []

    for (var i in modified) {
        if (!(d = descriptor[i]) ||
            !d.m ||
            !(t = d.t) ||
            (fmod = modified[i]) === (forig = original[i])) continue

        // enum type converted to int
        k = t === 16 ? '8' : String(t)
        if (!(array = mc[k]))
            mc[k] = array = []

        array.push({ '1': parseInt(i, 10), '2': forig, '3': fmod })
        diffed.push({ k: i, v: fmod })
    }

    return diffed
}

// must be a scalar field
export function diffVmFieldTo<T>(mc: MultiCAS, descriptor: any, original: T, modified: T,
        field: string | number): boolean {
    var d, t, k, array, forig, fmod,
        i = isNaN(field as any) ? descriptor.$[field] : String(field)

    if (!i ||
        !(d = descriptor[i]) ||
        !d.m ||
        !(t = d.t) ||
        (fmod = modified[d.$]) === (forig = original[i])) return false

    // enum type converted to int
    k = t === 16 ? '8' : String(t)
    if (!(array = mc[k]))
        mc[k] = array = []

    array.push({ '1': parseInt(i, 10), '2': forig, '3': fmod })

    return true
}

// only the scalar fields are diffed
export function diffVmTo<T>(mc: MultiCAS, descriptor: any, original: T, modified: T): KV[] {
    var d, t, k, array, forig, fmod, i, diffed: KV[] = []

    for (var vi in modified) {
        if (!(i = descriptor.$[vi]) ||
            !(d = descriptor[i]) ||
            !d.m ||
            !(t = d.t) ||
            (fmod = modified[vi]) === (forig = original[i])) continue

        // enum type converted to int
        k = t === 16 ? '8' : String(t)
        if (!(array = mc[k]))
            mc[k] = array = []

        array.push({ '1': parseInt(i, 10), '2': forig, '3': fmod })
        diffed.push({ k: i, v: fmod })
    }

    return diffed
}

