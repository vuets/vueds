import 'whatwg-fetch';
export interface HasToken {
    token: string;
}
export declare type AuthOk = (token: string) => void;
export declare type AuthHandler = (cb: AuthOk) => void;
export declare type GetHandler = <T>(location: string, opts?: any) => PromiseLike<T>;
export declare type PostHandler = <T>(location: string, data: string) => PromiseLike<T>;
export declare function checkStatus<T>(res: any): T;
export declare function handler<T>(raw: string): T;
export interface Config {
    auth$$?: AuthHandler;
    get$$: GetHandler;
    post$$: PostHandler;
}
export declare function setAuthHandler(handler: AuthHandler): void;
export declare function post<T>(location: string, data: string): PromiseLike<T>;
export declare function get<T>(location: string, opts?: any): PromiseLike<T>;
export declare class P {
    private ah;
    private url;
    private opts;
    private h;
    handlers: any[];
    cbFail: any;
    authOk: AuthOk | null;
    constructor(ah: AuthHandler | null, url: string, opts: any, h: any);
    then(resolve: any, reject: any): P;
    catch(reject: any): P;
    run(token?: string): void;
    fail(err: any): void;
}
