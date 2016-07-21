export interface MultiCAS {
}
export declare namespace MultiCAS {
    function $create(): MultiCAS;
    function $stringify(obj: any): string;
    const $descriptor: {};
}
export declare function escapeValue(v: string): string;
export declare function mergeVmFrom<T>(src: any, descriptor: any, target: T): T;
export declare function mergePojoFrom<T>(src: any, descriptor: any, target: T): T;
