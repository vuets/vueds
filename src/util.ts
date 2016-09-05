export const hasOwnProperty = Object.prototype.hasOwnProperty
export function noop() { return null }

const base64map = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'

function b_to_b64(bytes: any): string {
    for (var base64: string[] = [], i = 0; i < bytes.length; i += 3) {
        var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2]
        for (var j = 0; j < 4; j++) {
            if (i * 8 + j * 6 <= bytes.length * 8)
                base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F))
            else
                base64.push('=')
        }
    }

    return base64.join('')
}

function b_to_b64_fn(): (bytes: any) => string {
    var b = window['Binary'], b2a = window.btoa, b2s
    if (b && (b2s = b['bytesToString']) && typeof b2s === 'function' && typeof b2a === 'function') {
        return function(bytes: any): string {
            return b2a(b2s(bytes))
        }
    }

    return b_to_b64
}

function b64_to_b(base64: string): any {
    // Remove non-base-64 characters
    base64 = base64.replace(/[^A-Z0-9+\/]/ig, '')

    for (var bytes: number[] = [], i = 0, imod4 = 0; i < base64.length; imod4 = ++i % 4) {
        if (imod4 === 0)
            continue
        
        bytes.push(((base64map.indexOf(base64.charAt(i - 1)) & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2)) | (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)))
    }

    return bytes
}

function b64_to_b_fn(): (base64: string) => any {
    var b = window['Binary'], a2b = window.atob, s2b
    if (b && (s2b = b['stringToBytes']) && typeof s2b === 'function' && typeof a2b === 'function') {
        return function(base64: string): any {
            return s2b(a2b(base64))
        }
    }

    return b64_to_b
}

export const bytesToBase64 = b_to_b64_fn()
export const base64ToBytes = b64_to_b_fn()

const ZERO_KEY = 'AAAAAAAAAAAA'

export const
    regexKey = /^[A-Za-z0-9+/]+$/,
    regexInt = /^-?[0-9]+$/,
    regexDouble = /^-?[0-9]+(\.[0-9]+)?$/,
    regexTime = /^[0-2]?[0-9]\:[0-5][0-9](\:[0-5][0-9])?$/,
    regexDate = /^[1-9][0-9][0-9][0-9]\/[0-9][0-9]\/[0-9][0-9]$/,
    regexDateTime = /^[1-9][0-9][0-9][0-9]\/[0-9][0-9]\/[0-9][0-9] [0-2]?[0-9]\:[0-5][0-9]\:[0-5][0-9]$/

function getDateUTCOffset(date: Date): string {
    var n = date.getTimezoneOffset() * -10 / 6,
        r
    if (n < 0) { 
        r = (n - 10000).toString()
        return r.charAt(0) + r.substr(2)
    } else { 
        r = (n + 10000).toString()
        return '+' + r.substr(1)
    }
}

export function getUTCOffset(): number {
    var date = new Date()
    date.setHours(0)
    date.setMinutes(0)
    date.setSeconds(0)
    date.setMilliseconds(0)
    
    var offset = getDateUTCOffset(date)
    if (offset.indexOf('+') === 0) {
        return parseInt(offset.substring(1, offset.length - 2), 10)
    } else if (offset.indexOf('-') === 0) {
        return -parseInt(offset.substring(1, offset.length - 2), 10)
    } else {
        /*
            * IE in some cases will return this value starting with undefined.  That means
            * negative.
            */
        return -parseInt(offset.substring(10, offset.length - 2), 10)
    }
}

/*export function now(): number {
    return Date.now()
}*/

export const
    MILLIS_PER_DAY = 1000 * 60 * 60 * 24,
    MAX_TIME_IN_MILLIS_PER_DAY = (1000 * 60 * 60 * 24) - 1,
    MILLIS_PER_HOUR = 1000 * 60 * 60,

    UTC_OFFSET = getUTCOffset(),
    HOST_RAW_OFFSET = UTC_OFFSET * 60 * 60 * 1000,
    HOST_RAW_OFFSET_SECONDS = UTC_OFFSET * 60 * 60,
    SECONDS_PER_HOUR = 60 * 60

export function hour(h: number): number {
    return h * SECONDS_PER_HOUR
}

export function minute(m: number): number {
    return m * 60
}

export const MAX_TIME = hour(23) + minute(59) + 59

export function localToUtc(ts: number): number {
    return ts + HOST_RAW_OFFSET
}
export function localToUtcSeconds(s: number): number {
    return s + HOST_RAW_OFFSET_SECONDS
}
export function utcToLocal(ts: number): number {
    return ts - HOST_RAW_OFFSET
}
export function utcToLocalSeconds(s: number): number {
    return s - HOST_RAW_OFFSET_SECONDS
}

export function extractTime(ts: number, date: number) {
    return Math.floor((localToUtc(ts) - date) / 1000)
}

export function isExpired(value: number, duration: number): boolean {
    return Date.now() > (value + duration)
}

export function isExpired24Hrs(value: number): boolean {
    return isExpired(value, MILLIS_PER_DAY)
}

export function startOfDayMS(ts: number): number {
    ts += HOST_RAW_OFFSET
    return ts - (ts % MILLIS_PER_DAY)
}

export function isSameDay(ts1: number, ts2: number): boolean {
    return startOfDayMS(ts1) === startOfDayMS(ts2)
}

export function addDaysTo(ts: number, days: number): number {
    return ts + (MILLIS_PER_DAY * days)
}

export function startOfTodayMS(): number {
    return startOfDayMS(Date.now())
}

/*export function startOfUTCTodayMS(): number {
    return startOfDayMS(Date.now())//startOfDayMS(localDateToUTC(new Date()))
}*/

export function utcNow(): number {
    return Date.now() + HOST_RAW_OFFSET
}

// =====================================

export function getKind(key: string): number {
    let bytes = base64ToBytes(key)
    return bytes[bytes.length - 9] & 0xFF
}

export function isZeroKey(key: string): boolean {
    return ZERO_KEY === key
}

export function isKey(key: string, kind?: number) {
    return regexKey.test(key) && (!kind || kind === getKind(key))
}

function bytesTo6ByteTS(bytes: number[], o: number) {
    var left = (((bytes[o++] & 0xFF) << 24) | ((bytes[o++] & 0xFF) << 16)),
        right = (((bytes[o++] & 0xFF) << 24) | ((bytes[o++] & 0xFF) << 16) | ((bytes[o++] & 0xFF) << 8) | (bytes[o] & 0xFF));

    left = left >>> 0;
    right = right >>> 0;

    // 24 is the max left shift, hence this slow operation.
    for (var i = 0; i < 16; i++)
        left = left * 2;
    
    return left + right;
}

export function getTs(key: string): number {
    let bytes = base64ToBytes(key)
    switch(bytes.length) {
        case 9: return bytesTo6ByteTS(bytes, 1);
        case 18: return bytesTo6ByteTS(bytes, 10);
        default: return 0;
    }
}

export function incrementKey(key: string): string {
    let decoded = base64ToBytes(key)
    decoded[decoded.length-1] |= 0x02
    return bytesToBase64(decoded)
}

export function decrementKey(key: string): string {
    let decoded = base64ToBytes(key)
    decoded[decoded.length-1] &= 0xFE
    return bytesToBase64(decoded)
}

// =====================================

/**
 * Used by generated code.
 */
export function qd(num, obj) {
    return obj.$qd ? '"' + num + '"' : num
}

