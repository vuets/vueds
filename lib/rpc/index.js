import * as axios from 'axios';
var defaultConfig = { headers: { 'Content-Type': 'application/json;charset=utf-8' } };
function handler(res) {
    var e = res.headers['e'];
    if (!e)
        throw 'Malformed response.';
    if (parseInt(e, 10))
        throw JSON.parse(res['request']['responseText'])['1'];
    return res.data;
}
export function post(url, data, config) {
    return axios.post(url, data, config || defaultConfig).then(handler);
}
export function get(url) {
    return axios.get(url).then(handler);
}
//# sourceMappingURL=index.js.map