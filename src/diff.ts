
// must be a scalar field
export function diffFieldTo<T>(mc: any/**MultiCAS*/, descriptor: any, original: T, modified: T,
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
export function diffTo<T>(mc: any/**MultiCAS*/, descriptor: any, original: T, modified: T): number {
    var d, t, k, array, forig, fmod, diffed = 0//diffed: KV[] = []

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
        //diffed.push({ k: i, v: fmod })
        diffed++
    }

    return diffed
}

// must be a scalar field
export function diffVmFieldTo<T>(mc: any/**MultiCAS*/, descriptor: any, original: T, modified: T,
        field: string | number): boolean {
    var d, t, k, array, forig, fmod,
        $ = descriptor.$,
        i = $ && isNaN(field as any) ? $[field] : String(field)

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
export function diffVmTo<T>(mc: any/**MultiCAS*/, descriptor: any, original: T, modified: T): number {
    var d, t, k, array, forig, fmod, i, $ = descriptor.$, diffed = 0//diffed: KV[] = []

    for (var vi in modified) {
        i = $ ? $[vi] : vi
        if (!i ||
            !(d = descriptor[i]) ||
            !d.m ||
            !(t = d.t) ||
            (fmod = modified[vi]) === (forig = original[i])) continue

        // enum type converted to int
        k = t === 16 ? '8' : String(t)
        if (!(array = mc[k]))
            mc[k] = array = []

        array.push({ '1': parseInt(i, 10), '2': forig, '3': fmod })
        //diffed.push({ k: i, v: fmod })
        diffed++
    }

    return diffed
}

// target is vm
export function mergeVmFrom<T>(src: any, descriptor: any, target: T): T {
    var fd, v
    for (var i in src) {
        v = src[i]
        // only trigger the observable if the value changed
        if ((fd = descriptor[i])) {
            if (v !== target[fd.$]) target[fd.$] = v
        } else if (v !== target[i]) {
            target[i] = v
        }
    }

    return target
}

// target is original
export function mergeOriginalFrom<T>(src: any, descriptor: any, target: T, vm?: any): T {
    var mapping = descriptor.$, k, v
    for (var i in src) {
        if (!(k = mapping[i]) || target[k] === (v = src[i])) continue
        
        target[k] = v
        if (vm) vm[i] = v
    }

    return target
}

export function mergeFrom<T>(src: any, descriptor: any, target: T): T {
    for (var i in src) {
        let v = src[i]
        if (v !== target[i])
            target[i] = v
    }
    
    return target
}