import * as axios from 'axios'

const defaultConfig = { headers: { 'Content-Type': 'application/json;charset=utf-8' } }

function handler<T>(res): T {
    let e = res.headers['e']
    if (!e) throw 'Malformed response.'
    if (parseInt(e, 10)) throw JSON.parse(res['request']['responseText'])['1']

    return res.data
}

export function post<T>(url: string, data: string, config?: any): PromiseLike<T> {
    return axios.post(url, data, config || defaultConfig).then(handler)
}

export function get<T>(url: string): PromiseLike<T> {
    return axios.get(url).then(handler)
}