import 'whatwg-fetch';
export declare function checkStatus<T>(res: any): T;
export declare function handler<T>(raw: string): T;
export declare function post<T>(url: string, data: string, customHandler?: any): PromiseLike<T>;
export declare function get<T>(url: string, customHandler?: any): PromiseLike<T>;
