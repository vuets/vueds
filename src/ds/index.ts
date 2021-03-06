// Generated by fbsgen from p/ds


import { $change } from '../'
import { $escape } from '../util'
import mc_ from './mc'

export namespace ds {
    export import MultiCAS = mc_
    /**
     * ```
     * 
     * message ParamId {
     *   required uint32 id = 1;
     * }
     * ```
     */
    export interface ParamId {
        /** required: 1 */
        id: number
    }
    export namespace ParamId {
        export const enum $f {
            id = 1
        }

        export function $create(id: number): ParamId {
            return {
                id: id
            }
        }
        export function $stringify(obj: any): string {
            var buf: string[] = [],
                _1 = obj.id;

            if (_1 != null)
                buf.push('"1":' + _1);

            return 0 === buf.length ? '{}' : '{' + buf.join(',') + '}';
        }
        export function $createObservable(): ParamId {
            return {
                id: 0,
                _: null//, $d: null
            } as ParamId
        }
        export const $descriptor = {
            $rfbs: 1, $rfdf: ['1'],
            $fdf: ['1'],
            '1': {_: 1, t: 10, m: 2, a: 0, $: 'id', $n: 'Id'},
            $: {
                id: '1'
            }, $new: $createObservable, $change
        }

    }


    /**
     * ```
     * 
     * message ParamKey {
     *   required bytes key = 1;
     *   optional bytes parent_key = 2;
     * }
     * ```
     */
    export interface ParamKey {
        /** required: 1 */
        key: string
        /** optional: 2 */
        parentKey?: string
    }
    export namespace ParamKey {
        export const enum $f {
            key = 1,
            parentKey = 2
        }

        export function $create(key: string, parentKey?: string): ParamKey {
            return {
                key: key,
                parentKey: parentKey
            }
        }
        export function $stringify(obj: any): string {
            var buf: string[] = [],
                _1 = obj.key,
                _2 = obj.parentKey;

            if (_1)
                buf.push('"1":"' + _1 + '"');
            if (_2)
                buf.push('"2":"' + _2 + '"');

            return 0 === buf.length ? '{}' : '{' + buf.join(',') + '}';
        }
        export function $createObservable(): ParamKey {
            return {
                key: "",
                parentKey: "",
                _: null//, $d: null
            } as ParamKey
        }
        export const $descriptor = {
            $rfbs: 0,
            $fdikf: ['2'],
            '1': {_: 1, t: 2, m: 2, a: 0, $: 'key', $n: 'Key'},
            '2': {_: 2, t: 2, m: 1, a: 0, $: 'parentKey', $n: 'Parent Key'},
            $: {
                key: '1',
                parentKey: '2'
            }, $new: $createObservable, $change
        }

    }


    /**
     * ```
     * 
     * message ParamUpdate {
     *   required bytes key = 1;
     *   required MultiCAS mc = 2;
     *   optional uint32 id = 3;
     * }
     * ```
     */
    export interface ParamUpdate {
        /** required: 1 */
        key: string
        /** required: 2 */
        mc: MultiCAS
        /** optional: 3 */
        id?: number
    }
    export namespace ParamUpdate {
        export const enum $f {
            key = 1,
            mc = 2,
            id = 3
        }

        export function $create(key: string, mc: MultiCAS, id?: number): ParamUpdate {
            return {
                key: key,
                mc: mc,
                id: id
            }
        }
        export function $stringify(obj: any): string {
            var buf: string[] = [],
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
        export function $createObservable(): ParamUpdate {
            return {
                key: "",
                mc: MultiCAS.$createObservable(),
                id: 0,
                _: null//, $d: null
            } as ParamUpdate
        }
        export const $descriptor = {
            $rfbs: 0,
            $fdf: ['3'],
            $fmf: ['2'],
            '1': {_: 1, t: 2, m: 2, a: 0, $: 'key', $n: 'Key'},
            '2': {_: 2, t: 0, m: 2, a: 0, $: 'mc', $n: 'Mc', d_fn: () => MultiCAS.$descriptor},
            '3': {_: 3, t: 10, m: 1, a: 0, $: 'id', $n: 'Id'},
            $: {
                key: '1',
                mc: '2',
                id: '3'
            }, $new: $createObservable, $change
        }

    }


    /**
     * ```
     * 
     * message ParamRangeKey {
     *   required bool desc = 1;
     *   optional uint32 limit = 2;
     *   optional bytes start_key = 3;
     *   optional bytes parent_key = 4;
     * }
     * ```
     */
    export interface ParamRangeKey {
        /** required: 1 */
        desc: boolean
        /** optional: 2 */
        limit?: number
        /** optional: 3 */
        startKey?: string
        /** optional: 4 */
        parentKey?: string
    }
    export namespace ParamRangeKey {
        export const enum $f {
            desc = 1,
            limit = 2,
            startKey = 3,
            parentKey = 4
        }

        export function $create(desc: boolean, limit?: number, startKey?: string, parentKey?: string): ParamRangeKey {
            return {
                desc: desc,
                limit: limit,
                startKey: startKey,
                parentKey: parentKey
            }
        }
        export function $stringify(obj: any): string {
            var buf: string[] = [],
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
        export function $createObservable(): ParamRangeKey {
            return {
                desc: false,
                limit: 0,
                startKey: "",
                parentKey: "",
                _: null//, $d: null
            } as ParamRangeKey
        }
        export const $descriptor = {
            $rfbs: 1, $rfdf: ['1'],
            $fdf: ['1','2'],
            $fdikf: ['3','4'],
            '1': {_: 1, t: 1, m: 2, a: 0, $: 'desc', $n: 'Desc'},
            '2': {_: 2, t: 6, m: 1, a: 0, $: 'limit', $n: 'Limit'},
            '3': {_: 3, t: 2, m: 1, a: 0, $: 'startKey', $n: 'Start Key'},
            '4': {_: 4, t: 2, m: 1, a: 0, $: 'parentKey', $n: 'Parent Key'},
            $: {
                desc: '1',
                limit: '2',
                startKey: '3',
                parentKey: '4'
            }, $new: $createObservable, $change
        }

    }


    /**
     * ```
     * 
     * message ACResult {
     *   required string name = 1;
     *   required bytes value = 2;
     *   optional uint32 id = 3;
     * }
     * ```
     */
    export interface ACResult {
        /** required: 1 */
        name: string
        /** required: 2 */
        value: string
        /** optional: 3 */
        id?: number
    }
    export namespace ACResult {
        /**
         * ```
         * 
         * message PList {
         *   repeated ACResult p = 1;
         * }
         * ```
         */
        export interface PList {
            /** repeated: 1 */
            p?: ACResult[]
        }

        export const enum $f {
            name = 1,
            value = 2,
            id = 3
        }

        export function $create(name: string, value: string, id?: number): ACResult {
            return {
                name: name,
                value: value,
                id: id
            }
        }
        export function $stringify(obj: any): string {
            var buf: string[] = [],
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
        export function $createObservable(): ACResult {
            return {
                name: "",
                value: "",
                id: 0,
                _: null//, $d: null
            } as ACResult
        }
        export const $descriptor = {
            $rfbs: 1, $rfdf: ['1'],
            $fdf: ['1','3'],
            '1': {_: 1, t: 3, m: 2, a: 0, $: 'name', $n: 'Name'},
            '2': {_: 2, t: 2, m: 2, a: 0, $: 'value', $n: 'Value'},
            '3': {_: 3, t: 10, m: 1, a: 0, $: 'id', $n: 'Id'},
            $: {
                name: '1',
                value: '2',
                id: '3'
            }, $new: $createObservable, $change
        }

    }


    /**
     * ```
     * 
     * message P1 {
     *   required int8 value = 1;
     *   optional int8 end = 2;
     *   optional int8 pgstart = 3;
     *   required ParamRangeKey prk = 4;
     * }
     * ```
     */
    export interface P1 {
        /** required: 1 */
        value: number
        /** optional: 2 */
        end?: number
        /** optional: 3 */
        pgstart?: number
        /** required: 4 */
        prk: ParamRangeKey
    }
    export namespace P1 {
        export const enum $f {
            value = 1,
            end = 2,
            pgstart = 3,
            prk = 4
        }

        export function $create(value: number, prk: ParamRangeKey, end?: number, pgstart?: number): P1 {
            return {
                value: value,
                end: end,
                pgstart: pgstart,
                prk: prk
            }
        }
        export function $stringify(obj: any): string {
            var buf: string[] = [],
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
        export function $createObservable(): P1 {
            return {
                value: 0,
                end: 0,
                pgstart: 0,
                prk: ParamRangeKey.$createObservable(),
                _: null//, $d: null
            } as P1
        }
        export const $descriptor = {
            $rfbs: 1, $rfdf: ['1'],
            $fdf: ['1','2','3'],
            $fmf: ['4'],
            '1': {_: 1, t: 8, m: 2, a: 0, $: 'value', $n: 'Value'},
            '2': {_: 2, t: 8, m: 1, a: 0, $: 'end', $n: 'End'},
            '3': {_: 3, t: 8, m: 1, a: 0, $: 'pgstart', $n: 'Pgstart'},
            '4': {_: 4, t: 0, m: 2, a: 0, $: 'prk', $n: 'Prk', d_fn: () => ParamRangeKey.$descriptor},
            $: {
                value: '1',
                end: '2',
                pgstart: '3',
                prk: '4'
            }, $new: $createObservable, $change
        }

    }


    /**
     * ```
     * 
     * message P4 {
     *   required uint32 value = 1;
     *   optional uint32 end = 2;
     *   optional uint32 pgstart = 3;
     *   required ParamRangeKey prk = 4;
     * }
     * ```
     */
    export interface P4 {
        /** required: 1 */
        value: number
        /** optional: 2 */
        end?: number
        /** optional: 3 */
        pgstart?: number
        /** required: 4 */
        prk: ParamRangeKey
    }
    export namespace P4 {
        export const enum $f {
            value = 1,
            end = 2,
            pgstart = 3,
            prk = 4
        }

        export function $create(value: number, prk: ParamRangeKey, end?: number, pgstart?: number): P4 {
            return {
                value: value,
                end: end,
                pgstart: pgstart,
                prk: prk
            }
        }
        export function $stringify(obj: any): string {
            var buf: string[] = [],
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
        export function $createObservable(): P4 {
            return {
                value: 0,
                end: 0,
                pgstart: 0,
                prk: ParamRangeKey.$createObservable(),
                _: null//, $d: null
            } as P4
        }
        export const $descriptor = {
            $rfbs: 1, $rfdf: ['1'],
            $fdf: ['1','2','3'],
            $fmf: ['4'],
            '1': {_: 1, t: 6, m: 2, a: 0, $: 'value', $n: 'Value'},
            '2': {_: 2, t: 6, m: 1, a: 0, $: 'end', $n: 'End'},
            '3': {_: 3, t: 6, m: 1, a: 0, $: 'pgstart', $n: 'Pgstart'},
            '4': {_: 4, t: 0, m: 2, a: 0, $: 'prk', $n: 'Prk', d_fn: () => ParamRangeKey.$descriptor},
            $: {
                value: '1',
                end: '2',
                pgstart: '3',
                prk: '4'
            }, $new: $createObservable, $change
        }

    }


    /**
     * ```
     * 
     * message P8 {
     *   required uint64 value = 1;
     *   optional uint64 end = 2;
     *   optional uint64 pgstart = 3;
     *   required ParamRangeKey prk = 4;
     * }
     * ```
     */
    export interface P8 {
        /** required: 1 */
        value: number
        /** optional: 2 */
        end?: number
        /** optional: 3 */
        pgstart?: number
        /** required: 4 */
        prk: ParamRangeKey
    }
    export namespace P8 {
        export const enum $f {
            value = 1,
            end = 2,
            pgstart = 3,
            prk = 4
        }

        export function $create(value: number, prk: ParamRangeKey, end?: number, pgstart?: number): P8 {
            return {
                value: value,
                end: end,
                pgstart: pgstart,
                prk: prk
            }
        }
        export function $stringify(obj: any): string {
            var buf: string[] = [],
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
        export function $createObservable(): P8 {
            return {
                value: 0,
                end: 0,
                pgstart: 0,
                prk: ParamRangeKey.$createObservable(),
                _: null//, $d: null
            } as P8
        }
        export const $descriptor = {
            $rfbs: 1, $rfdf: ['1'],
            $fdf: ['1','2','3'],
            $fmf: ['4'],
            '1': {_: 1, t: 11, m: 2, a: 0, $: 'value', $n: 'Value'},
            '2': {_: 2, t: 11, m: 1, a: 0, $: 'end', $n: 'End'},
            '3': {_: 3, t: 11, m: 1, a: 0, $: 'pgstart', $n: 'Pgstart'},
            '4': {_: 4, t: 0, m: 2, a: 0, $: 'prk', $n: 'Prk', d_fn: () => ParamRangeKey.$descriptor},
            $: {
                value: '1',
                end: '2',
                pgstart: '3',
                prk: '4'
            }, $new: $createObservable, $change
        }

    }


    /**
     * ```
     * 
     * message PD {
     *   required uint64 value = 1;
     *   optional uint64 end = 2;
     *   optional uint64 pgstart = 3;
     *   required ParamRangeKey prk = 4;
     * }
     * ```
     */
    export interface PD {
        /** required: 1 */
        value: number
        /** optional: 2 */
        end?: number
        /** optional: 3 */
        pgstart?: number
        /** required: 4 */
        prk: ParamRangeKey
    }
    export namespace PD {
        export const enum $f {
            value = 1,
            end = 2,
            pgstart = 3,
            prk = 4
        }

        export function $create(value: number, prk: ParamRangeKey, end?: number, pgstart?: number): PD {
            return {
                value: value,
                end: end,
                pgstart: pgstart,
                prk: prk
            }
        }
        export function $stringify(obj: any): string {
            var buf: string[] = [],
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
        export function $createObservable(): PD {
            return {
                value: 0,
                end: 0,
                pgstart: 0,
                prk: ParamRangeKey.$createObservable(),
                _: null//, $d: null
            } as PD
        }
        export const $descriptor = {
            $rfbs: 1, $rfdf: ['1'],
            $fdf: ['1','2','3'],
            $fmf: ['4'],
            '1': {_: 1, t: 11, m: 2, a: 0, $: 'value', $n: 'Value'},
            '2': {_: 2, t: 11, m: 1, a: 0, $: 'end', $n: 'End'},
            '3': {_: 3, t: 11, m: 1, a: 0, $: 'pgstart', $n: 'Pgstart'},
            '4': {_: 4, t: 0, m: 2, a: 0, $: 'prk', $n: 'Prk', d_fn: () => ParamRangeKey.$descriptor},
            $: {
                value: '1',
                end: '2',
                pgstart: '3',
                prk: '4'
            }, $new: $createObservable, $change
        }

    }


    /**
     * ```
     * 
     * message PB {
     *   required bytes value = 1;
     *   optional bytes end = 2;
     *   optional bytes pgstart = 3;
     *   required ParamRangeKey prk = 4;
     * }
     * ```
     */
    export interface PB {
        /** required: 1 */
        value: string
        /** optional: 2 */
        end?: string
        /** optional: 3 */
        pgstart?: string
        /** required: 4 */
        prk: ParamRangeKey
    }
    export namespace PB {
        export const enum $f {
            value = 1,
            end = 2,
            pgstart = 3,
            prk = 4
        }

        export function $create(value: string, prk: ParamRangeKey, end?: string, pgstart?: string): PB {
            return {
                value: value,
                end: end,
                pgstart: pgstart,
                prk: prk
            }
        }
        export function $stringify(obj: any): string {
            var buf: string[] = [],
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
        export function $createObservable(): PB {
            return {
                value: "",
                end: "",
                pgstart: "",
                prk: ParamRangeKey.$createObservable(),
                _: null//, $d: null
            } as PB
        }
        export const $descriptor = {
            $rfbs: 0,
            $fmf: ['4'],
            '1': {_: 1, t: 2, m: 2, a: 0, $: 'value', $n: 'Value'},
            '2': {_: 2, t: 2, m: 1, a: 0, $: 'end', $n: 'End'},
            '3': {_: 3, t: 2, m: 1, a: 0, $: 'pgstart', $n: 'Pgstart'},
            '4': {_: 4, t: 0, m: 2, a: 0, $: 'prk', $n: 'Prk', d_fn: () => ParamRangeKey.$descriptor},
            $: {
                value: '1',
                end: '2',
                pgstart: '3',
                prk: '4'
            }, $new: $createObservable, $change
        }

    }


    /**
     * ```
     * 
     * message PK {
     *   required bytes value = 1;
     *   optional bytes end = 2;
     *   optional bytes pgstart = 3;
     *   required ParamRangeKey prk = 4;
     * }
     * ```
     */
    export interface PK {
        /** required: 1 */
        value: string
        /** optional: 2 */
        end?: string
        /** optional: 3 */
        pgstart?: string
        /** required: 4 */
        prk: ParamRangeKey
    }
    export namespace PK {
        export const enum $f {
            value = 1,
            end = 2,
            pgstart = 3,
            prk = 4
        }

        export function $create(value: string, prk: ParamRangeKey, end?: string, pgstart?: string): PK {
            return {
                value: value,
                end: end,
                pgstart: pgstart,
                prk: prk
            }
        }
        export function $stringify(obj: any): string {
            var buf: string[] = [],
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
        export function $createObservable(): PK {
            return {
                value: "",
                end: "",
                pgstart: "",
                prk: ParamRangeKey.$createObservable(),
                _: null//, $d: null
            } as PK
        }
        export const $descriptor = {
            $rfbs: 0,
            $fmf: ['4'],
            '1': {_: 1, t: 2, m: 2, a: 0, $: 'value', $n: 'Value'},
            '2': {_: 2, t: 2, m: 1, a: 0, $: 'end', $n: 'End'},
            '3': {_: 3, t: 2, m: 1, a: 0, $: 'pgstart', $n: 'Pgstart'},
            '4': {_: 4, t: 0, m: 2, a: 0, $: 'prk', $n: 'Prk', d_fn: () => ParamRangeKey.$descriptor},
            $: {
                value: '1',
                end: '2',
                pgstart: '3',
                prk: '4'
            }, $new: $createObservable, $change
        }

    }


    /**
     * ```
     * 
     * message PS {
     *   required string value = 1;
     *   optional string end = 2;
     *   optional string pgstart = 3;
     *   required ParamRangeKey prk = 4;
     * }
     * ```
     */
    export interface PS {
        /** required: 1 */
        value: string
        /** optional: 2 */
        end?: string
        /** optional: 3 */
        pgstart?: string
        /** required: 4 */
        prk: ParamRangeKey
    }
    export namespace PS {
        export const enum $f {
            value = 1,
            end = 2,
            pgstart = 3,
            prk = 4
        }

        export function $create(value: string, prk: ParamRangeKey, end?: string, pgstart?: string): PS {
            return {
                value: value,
                end: end,
                pgstart: pgstart,
                prk: prk
            }
        }
        export function $stringify(obj: any): string {
            var buf: string[] = [],
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
        export function $createObservable(): PS {
            return {
                value: "",
                end: "",
                pgstart: "",
                prk: ParamRangeKey.$createObservable(),
                _: null//, $d: null
            } as PS
        }
        export const $descriptor = {
            $rfbs: 1, $rfdf: ['1'],
            $fdf: ['1','2','3'],
            $fmf: ['4'],
            '1': {_: 1, t: 3, m: 2, a: 0, $: 'value', $n: 'Value'},
            '2': {_: 2, t: 3, m: 1, a: 0, $: 'end', $n: 'End'},
            '3': {_: 3, t: 3, m: 1, a: 0, $: 'pgstart', $n: 'Pgstart'},
            '4': {_: 4, t: 0, m: 2, a: 0, $: 'prk', $n: 'Prk', d_fn: () => ParamRangeKey.$descriptor},
            $: {
                value: '1',
                end: '2',
                pgstart: '3',
                prk: '4'
            }, $new: $createObservable, $change
        }

    }




}

