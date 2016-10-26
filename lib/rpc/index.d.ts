export declare function handler<T>(res: any): T;
export declare function post<T>(url: string, data: string, config?: any): PromiseLike<T>;
export declare function get<T>(url: string): PromiseLike<T>;
