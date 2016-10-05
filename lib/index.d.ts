import { MultiCAS } from './ds/mc';
/**
 * Define a property that should not be observed by vue's vm.
 * Returns the value
 */
export declare function defp<T>(obj: any, prop: string, val: T): T;
/**
 * Nullify property.
 * Also useful for lazy observable properties that bypasses typescript's strictNullChecks config.
 */
export declare function nullp(obj: any, prop: string): void;
export declare const enum FieldType {
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
    ENUM = 16,
}
export declare const enum PojoState {
    NONE = 0,
    SUCCESS = 1,
    ERROR = 2,
    WARNING = 4,
    LOADING = 8,
    UPDATE = 16,
    MASK_STATUS = 7,
}
/**
 * Pojo state object.
 */
export interface PojoSO {
    state: number;
    msg: string;
    vstate: number;
    vfbs: number;
    rfbs: number;
}
export declare const enum EventFlags {
    PREVENT_NONE = 0,
    PREVENT_DEFAULT = 1,
    PREVENT_PROPAGATION = 2,
    PREVENT_BOTH = 3,
    CAPTURING = 4,
}
export interface KV {
    k: string;
    v: any;
}
export declare function initObservable<T>(target: T, descriptor: any, update?: boolean): T;
export declare function mergeVmFrom<T>(src: any, descriptor: any, target: T): T;
export declare function mergePojoFrom<T>(src: any, descriptor: any, target: T): T;
export declare function writeKVsTo<T>(target: T, kvs: KV[]): T;
export declare function diffFieldTo<T>(mc: MultiCAS, descriptor: any, original: T, modified: T, field: number): boolean;
export declare function diffTo<T>(mc: MultiCAS, descriptor: any, original: T, modified: T): number;
export declare function diffVmFieldTo<T>(mc: MultiCAS, descriptor: any, original: T, modified: T, field: string | number): boolean;
export declare function diffVmTo<T>(mc: MultiCAS, descriptor: any, original: T, modified: T): number;
export declare function verifyFormFields(message: any, descriptor: any, update?: boolean, root?: any): boolean;
export declare function clearFormFields(message: any, descriptor: any): void;
export declare function formPrepare(pojo: any, update?: boolean): boolean;
export declare function formSuccess(pojo: any, update?: boolean): void;
export declare function formFailed(pojo: any, errmsg: any): void;
export declare function bindFormFailed(pojo: any): any;
/**
 * The update arg means if existing data is modified (not creating new data).
 */
export declare function $change(e: any, message: any, field: string | number, update: boolean, root: any): string | null;
