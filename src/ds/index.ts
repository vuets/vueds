// Generated by fbsgen from p/ds

import { MultiCAS, escapeValue } from '../'


export namespace ds {
    export interface ParamId {
        id: number
    }
    export namespace ParamId {
        export const enum $f {
            id = 1
        }
        export function $createObservable(): ParamId {
            return {
                id: 0
            }
        }

        export function $create(id: number): ParamId {
            return {
                id: id
            }
        }
        export function $stringify(obj: any): string {
            var buf = [],
                _1 = obj.id;

            if (_1 != null)
                buf.push('"1":' + _1);

            return 0 === buf.length ? '{}' : '{' + buf.join(',') + '}';
        }
        export function $handle(type: number, message: any): number {
            // TODO
            return 0
        }
        export const $descriptor = {
            '1': {t: 10, m: 2, a: 0, $: 'id', $n: 'TODO name for display'},
            $: {
                id: 1
            },
            $handle: $handle
        }

    }


    export interface ParamKey {
        key: string
        parentKey?: string
    }
    export namespace ParamKey {
        export const enum $f {
            key = 1,
            parentKey = 2
        }
        export function $createObservable(): ParamKey {
            return {
                key: "",
                parentKey: ""
            }
        }

        export function $create(key: string, parentKey: string = null): ParamKey {
            return {
                key: key,
                parentKey: parentKey
            }
        }
        export function $stringify(obj: any): string {
            var buf = [],
                _1 = obj.key,
                _2 = obj.parentKey;

            if (_1)
                buf.push('"1":"' + _1 + '"');
            if (_2)
                buf.push('"2":"' + _2 + '"');

            return 0 === buf.length ? '{}' : '{' + buf.join(',') + '}';
        }
        export function $handle(type: number, message: any): number {
            // TODO
            return 0
        }
        export const $descriptor = {
            '1': {t: 2, m: 2, a: 0, $: 'key', $n: 'TODO name for display'},
            '2': {t: 2, m: 1, a: 0, $: 'parentKey', $n: 'TODO name for display'},
            $: {
                key: 1,
                parentKey: 2
            },
            $handle: $handle
        }

    }


    export interface ParamUpdate {
        key: string
        mc: MultiCAS
        id?: number
    }
    export namespace ParamUpdate {
        export const enum $f {
            key = 1,
            mc = 2,
            id = 3
        }
        export function $createObservable(): ParamUpdate {
            return {
                key: "",
                mc: MultiCAS.$createObservable(),
                id: 0
            }
        }

        export function $create(key: string, mc: MultiCAS, id: number = null): ParamUpdate {
            return {
                key: key,
                mc: mc,
                id: id
            }
        }
        export function $stringify(obj: any): string {
            var buf = [],
                _1 = obj.key,
                _2 = obj.mc,
                _3 = obj.id;

            if (_1)
                buf.push('"1":"' + _1 + '"');
            if (_2)
                buf.push('"2":' + MultiCAS.$stringify(_2));

            if (_3 != null)
                buf.push('"3":' + _3);

            return 0 === buf.length ? '{}' : '{' + buf.join(',') + '}';
        }
        export function $handle(type: number, message: any): number {
            // TODO
            return 0
        }
        export const $descriptor = {
            '1': {t: 2, m: 2, a: 0, $: 'key', $n: 'TODO name for display'},
            '2': {t: 0, m: 2, a: 0, $: 'mc', $n: 'TODO name for display', d: MultiCAS.$descriptor},
            '3': {t: 10, m: 1, a: 0, $: 'id', $n: 'TODO name for display'},
            $: {
                key: 1,
                mc: 2,
                id: 3
            },
            $handle: $handle
        }

    }


    export interface ParamRangeKey {
        desc: boolean
        limit?: number
        startKey?: string
        parentKey?: string
    }
    export namespace ParamRangeKey {
        export const enum $f {
            desc = 1,
            limit = 2,
            startKey = 3,
            parentKey = 4
        }
        export function $createObservable(): ParamRangeKey {
            return {
                desc: false,
                limit: 0,
                startKey: "",
                parentKey: ""
            }
        }

        export function $create(desc: boolean, limit: number = null, startKey: string = null, parentKey: string = null): ParamRangeKey {
            return {
                desc: desc,
                limit: limit,
                startKey: startKey,
                parentKey: parentKey
            }
        }
        export function $stringify(obj: any): string {
            var buf = [],
                _1 = obj.desc,
                _2 = obj.limit,
                _3 = obj.startKey,
                _4 = obj.parentKey;

            if (_1 != null)
                buf.push('"1":' + _1);
            if (_2 != null)
                buf.push('"2":' + _2);
            if (_3)
                buf.push('"3":"' + _3 + '"');
            if (_4)
                buf.push('"4":"' + _4 + '"');

            return 0 === buf.length ? '{}' : '{' + buf.join(',') + '}';
        }
        export function $handle(type: number, message: any): number {
            // TODO
            return 0
        }
        export const $descriptor = {
            '1': {t: 1, m: 2, a: 0, $: 'desc', $n: 'TODO name for display'},
            '2': {t: 6, m: 1, a: 0, $: 'limit', $n: 'TODO name for display'},
            '3': {t: 2, m: 1, a: 0, $: 'startKey', $n: 'TODO name for display'},
            '4': {t: 2, m: 1, a: 0, $: 'parentKey', $n: 'TODO name for display'},
            $: {
                desc: 1,
                limit: 2,
                startKey: 3,
                parentKey: 4
            },
            $handle: $handle
        }

    }


    export interface ACResult {
        name: string
        value: string
        id?: number
    }
    export namespace ACResult {
        export interface PList {
            p?: ACResult[]
        }

        export const enum $f {
            name = 1,
            value = 2,
            id = 3
        }
        export function $createObservable(): ACResult {
            return {
                name: "",
                value: "",
                id: 0
            }
        }

        export function $create(name: string, value: string, id: number = null): ACResult {
            return {
                name: name,
                value: value,
                id: id
            }
        }
        export function $stringify(obj: any): string {
            var buf = [],
                _1 = obj.name,
                _2 = obj.value,
                _3 = obj.id;

            if (_1)
                buf.push('"1":"' + _1 + '"');
            if (_2)
                buf.push('"2":"' + _2 + '"');
            if (_3 != null)
                buf.push('"3":' + _3);

            return 0 === buf.length ? '{}' : '{' + buf.join(',') + '}';
        }
        export function $handle(type: number, message: any): number {
            // TODO
            return 0
        }
        export const $descriptor = {
            '1': {t: 3, m: 2, a: 0, $: 'name', $n: 'TODO name for display'},
            '2': {t: 2, m: 2, a: 0, $: 'value', $n: 'TODO name for display'},
            '3': {t: 10, m: 1, a: 0, $: 'id', $n: 'TODO name for display'},
            $: {
                name: 1,
                value: 2,
                id: 3
            },
            $handle: $handle
        }

    }


    export interface P1 {
        value: number
        end?: number
        pgstart?: number
        prk: ParamRangeKey
    }
    export namespace P1 {
        export const enum $f {
            value = 1,
            end = 2,
            pgstart = 3,
            prk = 4
        }
        export function $createObservable(): P1 {
            return {
                value: 0,
                end: 0,
                pgstart: 0,
                prk: ParamRangeKey.$createObservable()
            }
        }

        export function $create(value: number, prk: ParamRangeKey, end: number = null, pgstart: number = null): P1 {
            return {
                value: value,
                end: end,
                pgstart: pgstart,
                prk: prk
            }
        }
        export function $stringify(obj: any): string {
            var buf = [],
                _1 = obj.value,
                _2 = obj.end,
                _3 = obj.pgstart,
                _4 = obj.prk;

            if (_1 != null)
                buf.push('"1":' + _1);
            if (_2 != null)
                buf.push('"2":' + _2);
            if (_3 != null)
                buf.push('"3":' + _3);
            if (_4)
                buf.push('"4":' + ParamRangeKey.$stringify(_4));


            return 0 === buf.length ? '{}' : '{' + buf.join(',') + '}';
        }
        export function $handle(type: number, message: any): number {
            // TODO
            return 0
        }
        export const $descriptor = {
            '1': {t: 8, m: 2, a: 0, $: 'value', $n: 'TODO name for display'},
            '2': {t: 8, m: 1, a: 0, $: 'end', $n: 'TODO name for display'},
            '3': {t: 8, m: 1, a: 0, $: 'pgstart', $n: 'TODO name for display'},
            '4': {t: 0, m: 2, a: 0, $: 'prk', $n: 'TODO name for display', d: ParamRangeKey.$descriptor},
            $: {
                value: 1,
                end: 2,
                pgstart: 3,
                prk: 4
            },
            $handle: $handle
        }

    }


    export interface P4 {
        value: number
        end?: number
        pgstart?: number
        prk: ParamRangeKey
    }
    export namespace P4 {
        export const enum $f {
            value = 1,
            end = 2,
            pgstart = 3,
            prk = 4
        }
        export function $createObservable(): P4 {
            return {
                value: 0,
                end: 0,
                pgstart: 0,
                prk: ParamRangeKey.$createObservable()
            }
        }

        export function $create(value: number, prk: ParamRangeKey, end: number = null, pgstart: number = null): P4 {
            return {
                value: value,
                end: end,
                pgstart: pgstart,
                prk: prk
            }
        }
        export function $stringify(obj: any): string {
            var buf = [],
                _1 = obj.value,
                _2 = obj.end,
                _3 = obj.pgstart,
                _4 = obj.prk;

            if (_1 != null)
                buf.push('"1":' + _1);
            if (_2 != null)
                buf.push('"2":' + _2);
            if (_3 != null)
                buf.push('"3":' + _3);
            if (_4)
                buf.push('"4":' + ParamRangeKey.$stringify(_4));


            return 0 === buf.length ? '{}' : '{' + buf.join(',') + '}';
        }
        export function $handle(type: number, message: any): number {
            // TODO
            return 0
        }
        export const $descriptor = {
            '1': {t: 6, m: 2, a: 0, $: 'value', $n: 'TODO name for display'},
            '2': {t: 6, m: 1, a: 0, $: 'end', $n: 'TODO name for display'},
            '3': {t: 6, m: 1, a: 0, $: 'pgstart', $n: 'TODO name for display'},
            '4': {t: 0, m: 2, a: 0, $: 'prk', $n: 'TODO name for display', d: ParamRangeKey.$descriptor},
            $: {
                value: 1,
                end: 2,
                pgstart: 3,
                prk: 4
            },
            $handle: $handle
        }

    }


    export interface P8 {
        value: number
        end?: number
        pgstart?: number
        prk: ParamRangeKey
    }
    export namespace P8 {
        export const enum $f {
            value = 1,
            end = 2,
            pgstart = 3,
            prk = 4
        }
        export function $createObservable(): P8 {
            return {
                value: 0,
                end: 0,
                pgstart: 0,
                prk: ParamRangeKey.$createObservable()
            }
        }

        export function $create(value: number, prk: ParamRangeKey, end: number = null, pgstart: number = null): P8 {
            return {
                value: value,
                end: end,
                pgstart: pgstart,
                prk: prk
            }
        }
        export function $stringify(obj: any): string {
            var buf = [],
                _1 = obj.value,
                _2 = obj.end,
                _3 = obj.pgstart,
                _4 = obj.prk;

            if (_1 != null)
                buf.push('"1":' + _1);
            if (_2 != null)
                buf.push('"2":' + _2);
            if (_3 != null)
                buf.push('"3":' + _3);
            if (_4)
                buf.push('"4":' + ParamRangeKey.$stringify(_4));


            return 0 === buf.length ? '{}' : '{' + buf.join(',') + '}';
        }
        export function $handle(type: number, message: any): number {
            // TODO
            return 0
        }
        export const $descriptor = {
            '1': {t: 11, m: 2, a: 0, $: 'value', $n: 'TODO name for display'},
            '2': {t: 11, m: 1, a: 0, $: 'end', $n: 'TODO name for display'},
            '3': {t: 11, m: 1, a: 0, $: 'pgstart', $n: 'TODO name for display'},
            '4': {t: 0, m: 2, a: 0, $: 'prk', $n: 'TODO name for display', d: ParamRangeKey.$descriptor},
            $: {
                value: 1,
                end: 2,
                pgstart: 3,
                prk: 4
            },
            $handle: $handle
        }

    }


    export interface PD {
        value: number
        end?: number
        pgstart?: number
        prk: ParamRangeKey
    }
    export namespace PD {
        export const enum $f {
            value = 1,
            end = 2,
            pgstart = 3,
            prk = 4
        }
        export function $createObservable(): PD {
            return {
                value: 0,
                end: 0,
                pgstart: 0,
                prk: ParamRangeKey.$createObservable()
            }
        }

        export function $create(value: number, prk: ParamRangeKey, end: number = null, pgstart: number = null): PD {
            return {
                value: value,
                end: end,
                pgstart: pgstart,
                prk: prk
            }
        }
        export function $stringify(obj: any): string {
            var buf = [],
                _1 = obj.value,
                _2 = obj.end,
                _3 = obj.pgstart,
                _4 = obj.prk;

            if (_1 != null)
                buf.push('"1":' + _1);
            if (_2 != null)
                buf.push('"2":' + _2);
            if (_3 != null)
                buf.push('"3":' + _3);
            if (_4)
                buf.push('"4":' + ParamRangeKey.$stringify(_4));


            return 0 === buf.length ? '{}' : '{' + buf.join(',') + '}';
        }
        export function $handle(type: number, message: any): number {
            // TODO
            return 0
        }
        export const $descriptor = {
            '1': {t: 11, m: 2, a: 0, $: 'value', $n: 'TODO name for display'},
            '2': {t: 11, m: 1, a: 0, $: 'end', $n: 'TODO name for display'},
            '3': {t: 11, m: 1, a: 0, $: 'pgstart', $n: 'TODO name for display'},
            '4': {t: 0, m: 2, a: 0, $: 'prk', $n: 'TODO name for display', d: ParamRangeKey.$descriptor},
            $: {
                value: 1,
                end: 2,
                pgstart: 3,
                prk: 4
            },
            $handle: $handle
        }

    }


    export interface PB {
        value: string
        end?: string
        pgstart?: string
        prk: ParamRangeKey
    }
    export namespace PB {
        export const enum $f {
            value = 1,
            end = 2,
            pgstart = 3,
            prk = 4
        }
        export function $createObservable(): PB {
            return {
                value: "",
                end: "",
                pgstart: "",
                prk: ParamRangeKey.$createObservable()
            }
        }

        export function $create(value: string, prk: ParamRangeKey, end: string = null, pgstart: string = null): PB {
            return {
                value: value,
                end: end,
                pgstart: pgstart,
                prk: prk
            }
        }
        export function $stringify(obj: any): string {
            var buf = [],
                _1 = obj.value,
                _2 = obj.end,
                _3 = obj.pgstart,
                _4 = obj.prk;

            if (_1)
                buf.push('"1":"' + _1 + '"');
            if (_2)
                buf.push('"2":"' + _2 + '"');
            if (_3)
                buf.push('"3":"' + _3 + '"');
            if (_4)
                buf.push('"4":' + ParamRangeKey.$stringify(_4));


            return 0 === buf.length ? '{}' : '{' + buf.join(',') + '}';
        }
        export function $handle(type: number, message: any): number {
            // TODO
            return 0
        }
        export const $descriptor = {
            '1': {t: 2, m: 2, a: 0, $: 'value', $n: 'TODO name for display'},
            '2': {t: 2, m: 1, a: 0, $: 'end', $n: 'TODO name for display'},
            '3': {t: 2, m: 1, a: 0, $: 'pgstart', $n: 'TODO name for display'},
            '4': {t: 0, m: 2, a: 0, $: 'prk', $n: 'TODO name for display', d: ParamRangeKey.$descriptor},
            $: {
                value: 1,
                end: 2,
                pgstart: 3,
                prk: 4
            },
            $handle: $handle
        }

    }


    export interface PK {
        value: string
        end?: string
        pgstart?: string
        prk: ParamRangeKey
    }
    export namespace PK {
        export const enum $f {
            value = 1,
            end = 2,
            pgstart = 3,
            prk = 4
        }
        export function $createObservable(): PK {
            return {
                value: "",
                end: "",
                pgstart: "",
                prk: ParamRangeKey.$createObservable()
            }
        }

        export function $create(value: string, prk: ParamRangeKey, end: string = null, pgstart: string = null): PK {
            return {
                value: value,
                end: end,
                pgstart: pgstart,
                prk: prk
            }
        }
        export function $stringify(obj: any): string {
            var buf = [],
                _1 = obj.value,
                _2 = obj.end,
                _3 = obj.pgstart,
                _4 = obj.prk;

            if (_1)
                buf.push('"1":"' + _1 + '"');
            if (_2)
                buf.push('"2":"' + _2 + '"');
            if (_3)
                buf.push('"3":"' + _3 + '"');
            if (_4)
                buf.push('"4":' + ParamRangeKey.$stringify(_4));


            return 0 === buf.length ? '{}' : '{' + buf.join(',') + '}';
        }
        export function $handle(type: number, message: any): number {
            // TODO
            return 0
        }
        export const $descriptor = {
            '1': {t: 2, m: 2, a: 0, $: 'value', $n: 'TODO name for display'},
            '2': {t: 2, m: 1, a: 0, $: 'end', $n: 'TODO name for display'},
            '3': {t: 2, m: 1, a: 0, $: 'pgstart', $n: 'TODO name for display'},
            '4': {t: 0, m: 2, a: 0, $: 'prk', $n: 'TODO name for display', d: ParamRangeKey.$descriptor},
            $: {
                value: 1,
                end: 2,
                pgstart: 3,
                prk: 4
            },
            $handle: $handle
        }

    }


    export interface PS {
        value: string
        end?: string
        pgstart?: string
        prk: ParamRangeKey
    }
    export namespace PS {
        export const enum $f {
            value = 1,
            end = 2,
            pgstart = 3,
            prk = 4
        }
        export function $createObservable(): PS {
            return {
                value: "",
                end: "",
                pgstart: "",
                prk: ParamRangeKey.$createObservable()
            }
        }

        export function $create(value: string, prk: ParamRangeKey, end: string = null, pgstart: string = null): PS {
            return {
                value: value,
                end: end,
                pgstart: pgstart,
                prk: prk
            }
        }
        export function $stringify(obj: any): string {
            var buf = [],
                _1 = obj.value,
                _2 = obj.end,
                _3 = obj.pgstart,
                _4 = obj.prk;

            if (_1)
                buf.push('"1":"' + _1 + '"');
            if (_2)
                buf.push('"2":"' + _2 + '"');
            if (_3)
                buf.push('"3":"' + _3 + '"');
            if (_4)
                buf.push('"4":' + ParamRangeKey.$stringify(_4));


            return 0 === buf.length ? '{}' : '{' + buf.join(',') + '}';
        }
        export function $handle(type: number, message: any): number {
            // TODO
            return 0
        }
        export const $descriptor = {
            '1': {t: 3, m: 2, a: 0, $: 'value', $n: 'TODO name for display'},
            '2': {t: 3, m: 1, a: 0, $: 'end', $n: 'TODO name for display'},
            '3': {t: 3, m: 1, a: 0, $: 'pgstart', $n: 'TODO name for display'},
            '4': {t: 0, m: 2, a: 0, $: 'prk', $n: 'TODO name for display', d: ParamRangeKey.$descriptor},
            $: {
                value: 1,
                end: 2,
                pgstart: 3,
                prk: 4
            },
            $handle: $handle
        }

    }




}
