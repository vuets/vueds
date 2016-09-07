import * as Vue from 'vue'
import { regexInt, regexDouble } from './util'

/**
 * Define a property that should not be observed by vue's vm.
 * Returns the value
 */
export function defp<T>(obj: any, prop: string, val: T): T {
    Object.defineProperty(obj, prop, {
        enumerable: false,
        value: val
    })

    return val
}
/**
 * Nullify property.
 * Also useful for lazy observable properties that bypasses typescript's strictNullChecks config.
 */
export function nullp(obj: any, prop: string) {
    obj[prop] = null
}

export const enum FieldType {
    MESSAGE = 0,
    BOOL = 1,
    BYTES = 2,
    STRING = 3,
    FLOAT = 4,
    DOUBLE = 5,
    UINT32 = 6,
    UINT64 = 7,
    INT32 = 8,
    INT64 = 9,
    FIXED32 = 10,
    FIXED64 = 11,
    SINT32 = 12,
    SINT64 = 13,
    SFIXED32 = 14,
    SFIXED64 = 15,
    ENUM = 16
}

export const enum PojoState {
    NONE = 0,
    SUCCESS = 1,
    ERROR = 2,
    WARNING = 4,
    LOADING = 8,
    
    UPDATE = 16,

    MASK_STATUS = SUCCESS | ERROR | WARNING
}

export const enum EventFlags {
    PREVENT_NONE = 0,
    PREVENT_DEFAULT = 1,
    PREVENT_PROPAGATION = 2,
    PREVENT_BOTH = 3,
    CAPTURING = 4
}

export interface MultiCAS {

}
export namespace MultiCAS {
    export function $createObservable(): MultiCAS {
        return {}
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

export function createVprops<T>(descriptor: any): any {
    let vprops = {},
        fields = descriptor.$fdf
    
    if (!fields)
        return vprops
    
    if (descriptor.$) {
        for (let k of fields) vprops[descriptor[k].$] = null
    } else {
        for (let k of fields) vprops[k] = null
    }
    
    return vprops
}

export function createStateObject(vprops: any): any {
    return {
        state: 0,
        msg: '',
        vstate: 0,
        vfbs: 0,
        vprops
    }
}

export function initObservable<T>(target: T, descriptor: any): T {
    target['_'] = createStateObject(createVprops(descriptor))
    defp(target, '$d', descriptor)
    return target
}

export function createObservable<T>(descriptor: any): T {
    return initObservable(descriptor.$new(), descriptor)
}

// target is vm
export function mergeVmFrom<T>(src: any, descriptor: any, target: T): T {
    var fd
    for (var i in src) {
        let v = src[i]
        // only trigger the observable if the value changed
        if ((fd = descriptor[i])) {
            if (v !== target[fd.$]) target[fd.$] = v
        } else if (v !== target[i]) {
            target[i] = v
        }
    }

    return target
}

// target is pojo
export function mergePojoFrom<T>(src: any, descriptor: any, target: T): T {
    var mapping = descriptor.$, k
    for (var i in src) {
        if ((k = mapping[i])) target[k] = src[i]
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
export function diffVmTo<T>(mc: MultiCAS, descriptor: any, original: T, modified: T): KV[] {
    var d, t, k, array, forig, fmod, i, $ = descriptor.$, diffed: KV[] = []

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
        diffed.push({ k: i, v: fmod })
    }

    return diffed
}

// =====================================
// event handling

function postValidate(message, f, fk, msg) {
    let message_ = message._,
        vprops = message_.vprops,
        state = message_.state,
        vfbs = message_.vfbs
    
    vprops[fk] = msg

    if (!(state & PojoState.UPDATE))
        message_.state = state | PojoState.UPDATE

    // reuse state var
    if (msg)
        state = vfbs | (1 << --f)
    else
        state = vfbs & (~(1 << --f) & 0x7fffffff)

    if (vfbs !== state)
        message_.vfbs = state
}

/**
 * The update arg means if existing data is modified (not creating new data).
 */
export function $change(event, message, field: string|number, update: boolean): string|null {
    let d = message['$d'],
        $ = d.$,
        fk = $ && isNaN(field as any) ? $[field] : String(field),
        fd = d[fk]
    
    if (!fd || fd.t === FieldType.BYTES)
        return null
    
    let f = fd._,
        prop = fd.$ || fk,
        el = event.target,
        msg: string|null = null,
        val
    
    switch (fd.t) {
        case FieldType.BOOL:
            message[prop] = el.type === 'checkbox' ? el.checked : ('1' === el.value)
            break
        case FieldType.ENUM:
            message[prop] = parseInt(el.value, 10)
            break
        case FieldType.STRING:
            if ((val = el.value.trim())) {
                if (!fd.vfn || !(msg = fd.vfn(val)))
                    message.name = val
            } else if (update) {
                el.value = message.name
            } else if (message.name) {
                message.name = null
                msg = fd.$n + ' is required.'
            }
            break
        case FieldType.FLOAT:
        case FieldType.DOUBLE:
            if ((val = el.value.trim())) {
                if (!regexDouble.test(val))
                    msg = fd.$n + ' is invalid.'
                else if (!fd.vfn)
                    message[prop] = parseFloat(val)
                else if (!(msg = fd.vfn(val = parseFloat(val))))
                    message[prop] = val
            } else if (update) {
                el.value = message[prop]
            } else if (message[prop]) {
                message[prop] = null
                msg = fd.$n + ' is required.'
            }
            break
        default:
            if ((val = el.value.trim())) {
                if (!regexInt.test(val))
                    msg = fd.$n + ' is invalid.'
                else if (!fd.vfn)
                    message[prop] = parseInt(val, 10)
                else if (!(msg = fd.vfn(val = parseInt(val, 10))))
                    message[prop] = val
            } else if (update) {
                el.value = message[prop]
            } else if (message[prop]) {
                message[prop] = null
                msg = fd.$n + ' is required.'
            }
    }

    postValidate(message, f, prop, msg)
    return msg
}
