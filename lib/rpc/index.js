import 'whatwg-fetch';
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
        return data.length === 2 ? data[1] : data;
    }
    if (first !== '-')
        throw new Error('Malformed response.');
    if (raw.charAt(1) !== '[')
        throw new Error(text);
    throw JSON.parse(text);
}
var authHandler = null;
export function setAuthHandler(handler) {
    authHandler = handler;
}
export function post(url, data, customHandler) {
    var opts = {
        method: 'POST',
        body: data
    };
    return authHandler ?
        new P(authHandler, url, opts, customHandler || handler) :
        fetch(url, opts).then(checkStatus).then(customHandler || handler);
}
export function get(url, opts, customHandler) {
    return authHandler ?
        new P(authHandler, url, opts, customHandler || handler) :
        fetch(url, opts).then(checkStatus).then(customHandler || handler);
}
var P = (function () {
    function P(ah, url, opts, h) {
        this.ah = ah;
        this.url = url;
        this.opts = opts;
        this.h = h;
        this.resolvers = [];
    }
    P.prototype.then = function (resolve, reject) {
        if (resolve) {
            this.resolvers.push(resolve);
        }
        else {
            this.resolvers.push(reject);
            this.run();
        }
        return this;
    };
    P.prototype.catch = function (reject) {
        this.resolvers.push(reject);
        this.run();
        return this;
    };
    P.prototype.run = function (token) {
        var url = this.url;
        if (token)
            url = url.substring(0, url.lastIndexOf('=') + 1) + token;
        var f = fetch(url, this.opts).then(checkStatus).then(this.h), array = this.resolvers, last = array.length - 1, i = 0;
        while (i < last)
            f.then(array[i++]);
        f.then(undefined, this.cbFail || (this.cbFail = this.fail.bind(this)));
    };
    P.prototype.fail = function (err) {
        if (err === 401)
            this.ah(this.authOk || (this.authOk = this.run.bind(this)));
        else
            this.resolvers[this.resolvers.length - 1](err);
    };
    return P;
}());
//# sourceMappingURL=index.js.map