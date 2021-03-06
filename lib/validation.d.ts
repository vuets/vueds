export declare function isAsciiOnly(value: string): boolean;
export declare function isValidAsciiOnly(value: string | string[]): boolean;
export declare function isAsciiPrintable(value: string): boolean;
export declare function isValidAsciiPrintable(value: string | string[]): boolean;
export declare function isAsciiSafeHtml(value: string): boolean;
export declare function isValidAsciiSafeHtml(value: string | string[]): boolean;
export declare function isValidId(id: number): boolean;
export declare function isValidKey(key: string | string[], kind?: number): boolean;
export declare function isValidKeyUnique(keys: string[], kind: number, unique: number): boolean;
/** placeholder */
export declare function isValidUnique(list: any[], kindOrUnique: number, unique?: number): boolean;
export declare function isValidMin(value: number, min: number): boolean;
export declare function isValidMax(value: number, max: number): boolean;
export declare function isValidRange(value: number, min: number, max: number): boolean;
export declare function isValidTime(value: number): boolean;
export declare function isValidDate(value: number): boolean;
export declare function isValidEmail(value: string): boolean;
export declare function isValidFutureTS(value: number, unit?: number, min?: number, max?: number): boolean;
export declare function isValidFutureOrToday(value: number, min?: number, max?: number): boolean;
export declare function isValidFuture(value: number, min?: number, max?: number): boolean;
export declare function isValidLength(value: string, min: number, max: number): boolean;
export declare function isValidGT(value: number, param: number): boolean;
export declare function isValidNotBlank(value: string): boolean;
export declare function isValidNotEmpty(value: string | any[]): boolean;
export declare function isValidNotNull(value: any): boolean;
export declare function isValidNull(value: any): boolean;
export declare function isValidNotNullNotEmpty(value: any[]): boolean;
export declare function isValidPastTS(value: number, unit?: number, min?: number, max?: number): boolean;
export declare function isValidPastOrToday(value: number, min?: number, max?: number): boolean;
export declare function isValidPast(value: number, min?: number, max?: number): boolean;
export declare function isValidPattern(value: string, pattern: RegExp): boolean;
export declare function isValidSafeHtml(value: string): boolean;
export declare function isValidScriptAssert(value: string): boolean;
export declare function isValidSize(value: any[] | string, min: number, max: number): boolean;
