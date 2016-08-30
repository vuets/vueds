/**
 * Define a property that should not be observed by vue's vm.
 * Returns the value
 */
export declare function defp<T>(obj: any, prop: string, val: T): T;
export interface MultiCAS {
}
export declare namespace MultiCAS {
    function $createObservable(): MultiCAS;
    function $create(): MultiCAS;
    function $stringify(obj: any): string;
    const $descriptor: {};
}
export interface KV {
    k: string;
    v: any;
}
export declare function escapeValue(v: string): string;
export declare function mergeVmFrom<T>(src: any, descriptor: any, target: T): T;
export declare function mergePojoFrom<T>(src: any, descriptor: any, target: T): T;
export declare function writeKVsTo<T>(target: T, kvs: KV[]): T;
export declare function diffFieldTo<T>(mc: MultiCAS, descriptor: any, original: T, modified: T, field: number): boolean;
export declare function diffTo<T>(mc: MultiCAS, descriptor: any, original: T, modified: T): KV[];
export declare function diffVmFieldTo<T>(mc: MultiCAS, descriptor: any, original: T, modified: T, field: string | number): boolean;
export declare function diffVmTo<T>(mc: MultiCAS, descriptor: any, original: T, modified: T): KV[];
