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

export type AuthOk = (token: string) => void
export type AuthHandler = (cb: AuthOk) => void;
export type GetHandler = <T>(location: string, opts?: any) => PromiseLike<T>
export type PostHandler = <T>(location: string, data: string) => PromiseLike<T>

export function checkStatus<T>(res: any): T {
    let status = res.status
    if (status < 200 || status > 299)
        throw status
    
    return res.text()
}

export function handler<T>(raw: string): T {
    let first = raw.charAt(0),
        data
    
    if (first === '+') {
        data = JSON.parse(raw.substring(1, raw.length - 2))
        if (data[0])
            throw data
        
        return data.length === 2 ? data[1] : data
    }

    if (first !== '-')
        throw new Error('Malformed response.')
    
    if (raw.charAt(1) !== '[')
        throw new Error(raw.substring(1, raw.length - 2))
    
    throw JSON.parse(raw.substring(1, raw.length - 2))
}

export interface Config {
    auth$$?: AuthHandler,
    get$$: GetHandler,
    post$$: PostHandler
}

export class P {
    handlers: any[] = []
    cbFail: any = null
    authOk: AuthOk|null = null
    constructor(private url: string, private opts: any, private ih: any, private ah?: AuthHandler) {

    }

    then(resolve, reject): P {
        if (this.cbFail) {
            console.warn('Cannot add a resolve/reject handler once a reject handler is provided.')
        } else if (resolve) {
            this.handlers.push(resolve)
        } else {
            this.handlers.push(reject)
            this.run()
        }
        return this
    }

    catch(reject): P {
        if (this.cbFail) {
            console.warn('Only one reject handler is allowed.')
        } else {
            this.handlers.push(reject)
            this.run()
        }

        return this
    }

    run(token?: string): void {
        let url = this.url
        if (token)
            url = url.substring(0, url.lastIndexOf('=') + 1) + token
        
        let f = fetch(url, this.opts).then(this.ih).then(handler),
            array = this.handlers,
            last = array.length - 1,
            i = 0
        while (i < last)
            f.then(array[i++])
        
        f.then(undefined, this.cbFail || (this.cbFail = this.fail.bind(this)))
    }

    fail(err) {
        // check unauthorized
        if (!this.ah || (err !== 401 && (!Array.isArray(err) || err[0] !== 3)))
            this.handlers[this.handlers.length - 1](err)
        else
            this.ah(this.authOk || (this.authOk = this.run.bind(this)))
    }
}

const config_default = {
    auth$$: undefined,
    get$$,
    post$$
} as Config

window['rpc_config_d'] = config_default

const config: Config = window['rpc_config'] || config_default

export function setAuthHandler(handler: AuthHandler) {
    config.auth$$ = handler
}

function post$$<T>(location: string, data: string, delegate?: boolean, initialHandler?: any): PromiseLike<T> {
    let authHandler = config.auth$$,
        opts = {
            method: 'POST',
            body: data
        }
    
    return delegate || authHandler ?
        new P(location, opts, initialHandler || checkStatus, authHandler) : 
        fetch(location, opts).then(initialHandler || checkStatus).then(handler)
}

export function post<T>(location: string, data: string): PromiseLike<T> {
    return config.post$$(location, data)
}

function get$$<T>(location: string, opts?: any, delegate?: boolean, initialHandler?: any): PromiseLike<T> {
    let authHandler = config.auth$$
    
    return delegate || authHandler ?
        new P(location, opts, initialHandler || checkStatus, authHandler) : 
        fetch(location, opts).then(initialHandler || checkStatus).then(handler)
}

export function get<T>(location: string, opts?: any): PromiseLike<T> {
    return config.get$$(location, opts)
}