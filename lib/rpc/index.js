import 'whatwg-fetch';
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
export function checkStatus(res) {
    var status = res.status;
    if (status < 200 || status > 299)
        throw status;
    return res.text();
}
export function handler(raw) {
    var first = raw.charAt(0), text = raw.substring(1, raw.length - 2), data;
    if (first === '+') {
        data = JSON.parse(text);
        if (data[0])
            throw data;
        return data[1];
    }
    if (first !== '-')
        throw new Error('Malformed response.');
    if (raw.charAt(1) !== '[')
        throw new Error(text);
    throw JSON.parse(text);
}
export function post(url, data, customHandler) {
    return fetch(url, {
        method: 'POST',
        body: data
    }).then(checkStatus).then(customHandler || handler);
    //return axios.post(url, data, config || defaultConfig).then(handler)
}
export function get(url, customHandler) {
    return fetch(url).then(checkStatus).then(customHandler || handler);
    //return axios.get(url).then(handler)
}
//# sourceMappingURL=index.js.map