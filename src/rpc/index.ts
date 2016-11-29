import 'whatwg-fetch'

declare function fetch(path: string, opts?: any): any;

export interface HasToken {
    token: string
}

/*const defaultConfig = { headers: { 'Content-Type': 'application/json;charset=utf-8' } }

export function handler<T>(res): T {
    let raw: string = res['request']['responseText'],
        first = raw.charAt(0),
        text = raw.substring(1, raw.length - 2),
        data
    
    if (first === '+') {
        data = JSON.parse(text)
        if (data[0])
            throw data
        return data[1]
    }

    if (first !== '-')
        throw new Error('Malformed response.')
    
    if (raw.charAt(1) !== '[')
        throw new Error(text)
    
    throw JSON.parse(text)
}*/

export type AuthOk = (token: string) => void;
export type AuthHandler = (cb: AuthOk) => void;

export function checkStatus<T>(res: any): T {
    let status = res.status
    if (status < 200 || status > 299)
        throw status
    
    return res.text()
}

export function handler<T>(raw: string): T {
    let first = raw.charAt(0),
        text = raw.substring(1, raw.length - 2),
        data
    
    if (first === '+') {
        data = JSON.parse(text)
        if (data[0])
            throw data
        
        return data.length === 2 ? data[1] : data
    }

    if (first !== '-')
        throw new Error('Malformed response.')
    
    if (raw.charAt(1) !== '[')
        throw new Error(text)
    
    throw JSON.parse(text)
}

var authHandler: AuthHandler|null = null

export function setAuthHandler(handler: AuthHandler) {
    authHandler = handler
}

export function post<T>(url: string, data: string, customHandler?: any): PromiseLike<T> {
    let opts = {
        method: 'POST',
        body: data
    }
    return authHandler ?
        new P(authHandler, url, opts, customHandler || handler) : 
        fetch(url, opts).then(checkStatus).then(customHandler || handler)
}

export function get<T>(url: string, opts?: any, customHandler?: any): PromiseLike<T> {
    return authHandler ?
        new P(authHandler, url, opts, customHandler || handler) : 
        fetch(url, opts).then(checkStatus).then(customHandler || handler)
}

class P {
    resolvers: any[] = []
    cbFail: any
    authOk: AuthOk
    constructor(private ah: AuthHandler, private url: string, private opts: any, private h: any) {

    }

    then(resolve, reject): P {
        if (resolve) {
            this.resolvers.push(resolve)
        } else {
            this.resolvers.push(reject)
            this.run()
        }
        return this
    }

    catch(reject): P {
        this.resolvers.push(reject)
        this.run()
        return this
    }

    run(token?: string): void {
        let url = this.url
        if (token)
            url = url.substring(0, url.lastIndexOf('=') + 1) + token
        
        let f = fetch(url, this.opts).then(checkStatus).then(this.h),
            array = this.resolvers,
            last = array.length - 1,
            i = 0
        while (i < last)
            f.then(array[i++])
        
        f.then(undefined, this.cbFail || (this.cbFail = this.fail.bind(this)))
    }

    fail(err) {
        if (err === 401)
            this.ah(this.authOk || (this.authOk = this.run.bind(this)))
        else
            this.resolvers[this.resolvers.length - 1](err)
    }
}