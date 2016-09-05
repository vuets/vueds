export var hasOwnProperty = Object.prototype.hasOwnProperty;
export function noop() { return null; }
var base64map = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
function b_to_b64(bytes) {
    for (var base64 = [], i = 0; i < bytes.length; i += 3) {
        var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
        for (var j = 0; j < 4; j++) {
            if (i * 8 + j * 6 <= bytes.length * 8)
                base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F));
            else
                base64.push('=');
        }
    }
    return base64.join('');
}
function b_to_b64_fn() {
    var b = window['Binary'], b2a = window.btoa, b2s;
    if (b && (b2s = b['bytesToString']) && typeof b2s === 'function' && typeof b2a === 'function') {
        return function (bytes) {
            return b2a(b2s(bytes));
        };
    }
    return b_to_b64;
}
function b64_to_b(base64) {
    // Remove non-base-64 characters
    base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');
    for (var bytes = [], i = 0, imod4 = 0; i < base64.length; imod4 = ++i % 4) {
        if (imod4 === 0)
            continue;
        bytes.push(((base64map.indexOf(base64.charAt(i - 1)) & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2)) | (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));
    }
    return bytes;
}
function b64_to_b_fn() {
    var b = window['Binary'], a2b = window.atob, s2b;
    if (b && (s2b = b['stringToBytes']) && typeof s2b === 'function' && typeof a2b === 'function') {
        return function (base64) {
            return s2b(a2b(base64));
        };
    }
    return b64_to_b;
}
export var bytesToBase64 = b_to_b64_fn();
export var base64ToBytes = b64_to_b_fn();
var ZERO_KEY = 'AAAAAAAAAAAA';
export var regexKey = /^[A-Za-z0-9+/]+$/, regexInt = /^-?[0-9]+$/, regexDouble = /^-?[0-9]+(\.[0-9]+)?$/, regexTime = /^[0-2]?[0-9]\:[0-5][0-9](\:[0-5][0-9])?$/, regexDate = /^[1-9][0-9][0-9][0-9]\/[0-9][0-9]\/[0-9][0-9]$/, regexDateTime = /^[1-9][0-9][0-9][0-9]\/[0-9][0-9]\/[0-9][0-9] [0-2]?[0-9]\:[0-5][0-9]\:[0-5][0-9]$/;
function getDateUTCOffset(date) {
    var n = date.getTimezoneOffset() * -10 / 6, r;
    if (n < 0) {
        r = (n - 10000).toString();
        return r.charAt(0) + r.substr(2);
    }
    else {
        r = (n + 10000).toString();
        return '+' + r.substr(1);
    }
}
export function getUTCOffset() {
    var date = new Date();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    var offset = getDateUTCOffset(date);
    if (offset.indexOf('+') === 0) {
        return parseInt(offset.substring(1, offset.length - 2), 10);
    }
    else if (offset.indexOf('-') === 0) {
        return -parseInt(offset.substring(1, offset.length - 2), 10);
    }
    else {
        /*
            * IE in some cases will return this value starting with undefined.  That means
            * negative.
            */
        return -parseInt(offset.substring(10, offset.length - 2), 10);
    }
}
/*export function now(): number {
    return Date.now()
}*/
export var MILLIS_PER_DAY = 1000 * 60 * 60 * 24, MAX_TIME_IN_MILLIS_PER_DAY = (1000 * 60 * 60 * 24) - 1, MILLIS_PER_HOUR = 1000 * 60 * 60, UTC_OFFSET = getUTCOffset(), HOST_RAW_OFFSET = UTC_OFFSET * 60 * 60 * 1000, HOST_RAW_OFFSET_SECONDS = UTC_OFFSET * 60 * 60, SECONDS_PER_HOUR = 60 * 60;
export function hour(h) {
    return h * SECONDS_PER_HOUR;
}
export function minute(m) {
    return m * 60;
}
export var MAX_TIME = hour(23) + minute(59) + 59;
export function localToUtc(ts) {
    return ts + HOST_RAW_OFFSET;
}
export function localToUtcSeconds(s) {
    return s + HOST_RAW_OFFSET_SECONDS;
}
export function utcToLocal(ts) {
    return ts - HOST_RAW_OFFSET;
}
export function utcToLocalSeconds(s) {
    return s - HOST_RAW_OFFSET_SECONDS;
}
export function extractTime(ts, date) {
    return Math.floor((localToUtc(ts) - date) / 1000);
}
export function isExpired(value, duration) {
    return Date.now() > (value + duration);
}
export function isExpired24Hrs(value) {
    return isExpired(value, MILLIS_PER_DAY);
}
export function startOfDayMS(ts) {
    ts += HOST_RAW_OFFSET;
    return ts - (ts % MILLIS_PER_DAY);
}
export function isSameDay(ts1, ts2) {
    return startOfDayMS(ts1) === startOfDayMS(ts2);
}
export function addDaysTo(ts, days) {
    return ts + (MILLIS_PER_DAY * days);
}
export function startOfTodayMS() {
    return startOfDayMS(Date.now());
}
/*export function startOfUTCTodayMS(): number {
    return startOfDayMS(Date.now())//startOfDayMS(localDateToUTC(new Date()))
}*/
export function utcNow() {
    return Date.now() + HOST_RAW_OFFSET;
}
// =====================================
export function getKind(key) {
    var bytes = base64ToBytes(key);
    return bytes[bytes.length - 9] & 0xFF;
}
export function isZeroKey(key) {
    return ZERO_KEY === key;
}
export function isKey(key, kind) {
    return regexKey.test(key) && (!kind || kind === getKind(key));
}
function bytesTo6ByteTS(bytes, o) {
    var left = (((bytes[o++] & 0xFF) << 24) | ((bytes[o++] & 0xFF) << 16)), right = (((bytes[o++] & 0xFF) << 24) | ((bytes[o++] & 0xFF) << 16) | ((bytes[o++] & 0xFF) << 8) | (bytes[o] & 0xFF));
    left = left >>> 0;
    right = right >>> 0;
    // 24 is the max left shift, hence this slow operation.
    for (var i = 0; i < 16; i++)
        left = left * 2;
    return left + right;
}
export function getTs(key) {
    var bytes = base64ToBytes(key);
    switch (bytes.length) {
        case 9: return bytesTo6ByteTS(bytes, 1);
        case 18: return bytesTo6ByteTS(bytes, 10);
        default: return 0;
    }
}
export function incrementKey(key) {
    var decoded = base64ToBytes(key);
    decoded[decoded.length - 1] |= 0x02;
    return bytesToBase64(decoded);
}
export function decrementKey(key) {
    var decoded = base64ToBytes(key);
    decoded[decoded.length - 1] &= 0xFE;
    return bytesToBase64(decoded);
}
// =====================================
/**
 * Used by generated code.
 */
export function qd(num, obj) {
    return obj.$qd ? '"' + num + '"' : num;
}
//# sourceMappingURL=util.js.map