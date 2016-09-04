export declare const hasOwnProperty: (v: string) => boolean;
export declare const bytesToBase64: (bytes: any) => string;
export declare const base64ToBytes: (base64: string) => any;
export declare const regexKey: RegExp, regexInt: RegExp, regexDouble: RegExp, regexTime: RegExp, regexDate: RegExp, regexDateTime: RegExp;
export declare function getUTCOffset(): number;
export declare const MILLIS_PER_DAY: number, MAX_TIME_IN_MILLIS_PER_DAY: number, MILLIS_PER_HOUR: number, UTC_OFFSET: number, HOST_RAW_OFFSET: number, HOST_RAW_OFFSET_SECONDS: number, SECONDS_PER_HOUR: number;
export declare function hour(h: number): number;
export declare function minute(m: number): number;
export declare const MAX_TIME: number;
export declare function localToUtc(ts: number): number;
export declare function localToUtcSeconds(s: number): number;
export declare function utcToLocal(ts: number): number;
export declare function utcToLocalSeconds(s: number): number;
export declare function extractTime(ts: number, date: number): number;
export declare function isExpired(value: number, duration: number): boolean;
export declare function isExpired24Hrs(value: number): boolean;
export declare function startOfDayMS(ts: number): number;
export declare function isSameDay(ts1: number, ts2: number): boolean;
export declare function addDaysTo(ts: number, days: number): number;
export declare function startOfTodayMS(): number;
export declare function utcNow(): number;
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
