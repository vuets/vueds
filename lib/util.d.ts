export declare const bytesToBase64: (bytes: any) => string;
export declare const base64ToBytes: (base64: string) => any;
export declare const regexKey: RegExp, regexInt: RegExp, regexDouble: RegExp, regexTime: RegExp, regexDate: RegExp, regexDateTime: RegExp;
export declare function getUTCOffset(): number;
export declare const UTC_OFFSET: number, HOST_RAW_OFFSET: number, HOST_RAW_OFFSET_SECONDS: number;
export declare function localToUtc(ts: number): number;
export declare function localToUtcSeconds(s: number): number;
export declare function utcToLocal(ts: number): number;
export declare function utcToLocalSeconds(s: number): number;
export declare function getKind(key: string): number;
export declare function isZeroKey(key: string): boolean;
export declare function isKey(key: string, kind?: number): boolean;
export declare function getTs(key: string): number;
export declare function incrementKey(key: string): string;
export declare function decrementKey(key: string): string;
/**
 * Used by generated code.
 */
export declare function qd(num: any, obj: any): any;
