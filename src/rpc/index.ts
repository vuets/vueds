import * as axios from 'axios'

const defaultConfig = { headers: { 'Content-Type': 'application/json;charset=utf-8' } }

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
}

export function post<T>(url: string, data: string, config?: any): PromiseLike<T> {
    return axios.post(url, data, config || defaultConfig).then(handler)
}

export function get<T>(url: string): PromiseLike<T> {
    return axios.get(url).then(handler)
}
