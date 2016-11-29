import 'whatwg-fetch';
export interface HasToken {
    token: string;
}
export declare type AuthOk = (token: string) => void;
export declare type AuthHandler = (cb: AuthOk) => void;
export declare function checkStatus<T>(res: any): T;
export declare function handler<T>(raw: string): T;
export declare function setAuthHandler(handler: AuthHandler): void;
export declare function post<T>(url: string, data: string, customHandler?: any): PromiseLike<T>;
export declare function get<T>(url: string, opts?: any, customHandler?: any): PromiseLike<T>;
