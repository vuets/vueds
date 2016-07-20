export interface MultiCAS {
}
export declare namespace MultiCAS {
    function $create(): MultiCAS;
    function $stringify(obj: any): string;
}
export declare function escapeValue(v: string): string;
export declare function mergeVmFrom<T>(src: any, int2str: any, target: T): T;
export declare function mergePojoFrom<T>(src: any, str2int: any, target: T): T;
