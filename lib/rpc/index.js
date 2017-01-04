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
var config = {
    auth$$: undefined,
    get$$: get$$,
    post$$: post$$
};
window['rpc_config'] = config;
export function setAuthHandler(handler) {
    config.auth$$ = handler;
}
function post$$(location, data) {
    var authHandler = config.auth$$, opts = {
        method: 'POST',
        body: data
    };
    return authHandler ?
        new P(authHandler, location, opts, handler) :
        fetch(location, opts).then(checkStatus).then(handler);
}
export function post(location, data) {
    return config.post$$(location, data);
}
function get$$(location, opts) {
    var authHandler = config.auth$$;
    return authHandler ?
        new P(authHandler, location, opts, handler) :
        fetch(location, opts).then(checkStatus).then(handler);
}
export function get(location, opts) {
    return config.get$$(location, opts);
}
var P = (function () {
    function P(ah, url, opts, h) {
        this.ah = ah;
        this.url = url;
        this.opts = opts;
        this.h = h;
        this.handlers = [];
        this.cbFail = null;
        this.authOk = null;
    }
    P.prototype.then = function (resolve, reject) {
        if (this.cbFail) {
            console.warn('Cannot add a resolve/reject handler once a reject handler is provided.');
        }
        else if (resolve) {
            this.handlers.push(resolve);
        }
        else {
            this.handlers.push(reject);
            this.run();
        }
        return this;
    };
    P.prototype.catch = function (reject) {
        if (this.cbFail) {
            console.warn('Only one reject handler is allowed.');
        }
        else {
            this.handlers.push(reject);
            this.run();
        }
        return this;
    };
    P.prototype.run = function (token) {
        var url = this.url;
        if (token)
            url = url.substring(0, url.lastIndexOf('=') + 1) + token;
        var f = fetch(url, this.opts).then(checkStatus).then(this.h), array = this.handlers, last = array.length - 1, i = 0;
        while (i < last)
            f.then(array[i++]);
        f.then(undefined, this.cbFail || (this.cbFail = this.fail.bind(this)));
    };
    P.prototype.fail = function (err) {
        // check unauthorized
        if (!this.ah || (err !== 401 && (!Array.isArray(err) || err[0] !== 3)))
            this.handlers[this.handlers.length - 1](err);
        else
            this.ah(this.authOk || (this.authOk = this.run.bind(this)));
    };
    return P;
}());
export { P };
//# sourceMappingURL=index.js.map