import * as axios from 'axios';
var defaultConfig = { headers: { 'Content-Type': 'application/json;charset=utf-8' } };
function handler(res) {
    var raw = res['request']['responseText'], first = raw.charAt(0), text = raw.substring(1, raw.length - 2), data;
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
export function post(url, data, config) {
    return axios.post(url, data, config || defaultConfig).then(handler);
}
export function get(url) {
    return axios.get(url).then(handler);
}
//# sourceMappingURL=index.js.map