import { MultiCAS } from '../';
export declare namespace ds {
    /**
     *
     * message ParamId {
     *   required uint32 id = 1;
     * }
     */
    interface ParamId {
        /** required: 1 */
        id: number;
    }
    namespace ParamId {
        const enum $f {
            id = 1,
        }
        function $createObservable(): ParamId;
        function $create(id: number): ParamId;
        function $stringify(obj: any): string;
        function $handle(type: number, message: any): number;
        const $descriptor: {
            '1': {
                t: number;
                m: number;
                a: number;
                $: string;
                $n: string;
            };
            $: {
                id: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    /**
     *
     * message ParamKey {
     *   required bytes key = 1;
     *   optional bytes parent_key = 2;
     * }
     */
    interface ParamKey {
        /** required: 1 */
        key: string;
        /** optional: 2 */
        parentKey?: string;
    }
    namespace ParamKey {
        const enum $f {
            key = 1,
            parentKey = 2,
        }
        function $createObservable(): ParamKey;
        function $create(key: string, parentKey?: string): ParamKey;
        function $stringify(obj: any): string;
        function $handle(type: number, message: any): number;
        const $descriptor: {
            '1': {
                t: number;
                m: number;
                a: number;
                $: string;
                $n: string;
            };
            '2': {
                t: number;
                m: number;
                a: number;
                $: string;
                $n: string;
            };
            $: {
                key: number;
                parentKey: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    /**
     *
     * message ParamUpdate {
     *   required bytes key = 1;
     *   required MultiCAS mc = 2;
     *   optional uint32 id = 3;
     * }
     */
    interface ParamUpdate {
        /** required: 1 */
        key: string;
        /** required: 2 */
        mc: MultiCAS;
        /** optional: 3 */
        id?: number;
    }
    namespace ParamUpdate {
        const enum $f {
            key = 1,
            mc = 2,
            id = 3,
        }
        function $createObservable(): ParamUpdate;
        function $create(key: string, mc: MultiCAS, id?: number): ParamUpdate;
        function $stringify(obj: any): string;
        function $handle(type: number, message: any): number;
        const $descriptor: {
            '1': {
                t: number;
                m: number;
                a: number;
                $: string;
                $n: string;
            };
            '2': {
                t: number;
                m: number;
                a: number;
                $: string;
                $n: string;
                d: {};
            };
            '3': {
                t: number;
                m: number;
                a: number;
                $: string;
                $n: string;
            };
            $: {
                key: number;
                mc: number;
                id: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    /**
     *
     * message ParamRangeKey {
     *   required bool desc = 1;
     *   optional uint32 limit = 2;
     *   optional bytes start_key = 3;
     *   optional bytes parent_key = 4;
     * }
     */
    interface ParamRangeKey {
        /** required: 1 */
        desc: boolean;
        /** optional: 2 */
        limit?: number;
        /** optional: 3 */
        startKey?: string;
        /** optional: 4 */
        parentKey?: string;
    }
    namespace ParamRangeKey {
        const enum $f {
            desc = 1,
            limit = 2,
            startKey = 3,
            parentKey = 4,
        }
        function $createObservable(): ParamRangeKey;
        function $create(desc: boolean, limit?: number, startKey?: string, parentKey?: string): ParamRangeKey;
        function $stringify(obj: any): string;
        function $handle(type: number, message: any): number;
        const $descriptor: {
            '1': {
                t: number;
                m: number;
                a: number;
                $: string;
                $n: string;
            };
            '2': {
                t: number;
                m: number;
                a: number;
                $: string;
                $n: string;
            };
            '3': {
                t: number;
                m: number;
                a: number;
                $: string;
                $n: string;
            };
            '4': {
                t: number;
                m: number;
                a: number;
                $: string;
                $n: string;
            };
            $: {
                desc: number;
                limit: number;
                startKey: number;
                parentKey: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    /**
     *
     * message ACResult {
     *   required string name = 1;
     *   required bytes value = 2;
     *   optional uint32 id = 3;
     * }
     */
    interface ACResult {
        /** required: 1 */
        name: string;
        /** required: 2 */
        value: string;
        /** optional: 3 */
        id?: number;
    }
    namespace ACResult {
        /**
         *
         * message PList {
         *   repeated ACResult p = 1;
         * }
         */
        interface PList {
            /** repeated: 1 */
            p?: ACResult[];
        }
        const enum $f {
            name = 1,
            value = 2,
            id = 3,
        }
        function $createObservable(): ACResult;
        function $create(name: string, value: string, id?: number): ACResult;
        function $stringify(obj: any): string;
        function $handle(type: number, message: any): number;
        const $descriptor: {
            '1': {
                t: number;
                m: number;
                a: number;
                $: string;
                $n: string;
            };
            '2': {
                t: number;
                m: number;
                a: number;
                $: string;
                $n: string;
            };
            '3': {
                t: number;
                m: number;
                a: number;
                $: string;
                $n: string;
            };
            $: {
                name: number;
                value: number;
                id: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    /**
     *
     * message P1 {
     *   required int8 value = 1;
     *   optional int8 end = 2;
     *   optional int8 pgstart = 3;
     *   required ParamRangeKey prk = 4;
     * }
     */
    interface P1 {
        /** required: 1 */
        value: number;
        /** optional: 2 */
        end?: number;
        /** optional: 3 */
        pgstart?: number;
        /** required: 4 */
        prk: ParamRangeKey;
    }
    namespace P1 {
        const enum $f {
            value = 1,
            end = 2,
            pgstart = 3,
            prk = 4,
        }
        function $createObservable(): P1;
        function $create(value: number, prk: ParamRangeKey, end?: number, pgstart?: number): P1;
        function $stringify(obj: any): string;
        function $handle(type: number, message: any): number;
        const $descriptor: {
            '1': {
                t: number;
                m: number;
                a: number;
                $: string;
                $n: string;
            };
            '2': {
                t: number;
                m: number;
                a: number;
                $: string;
                $n: string;
            };
            '3': {
                t: number;
                m: number;
                a: number;
                $: string;
                $n: string;
            };
            '4': {
                t: number;
                m: number;
                a: number;
                $: string;
                $n: string;
                d: {
                    '1': {
                        t: number;
                        m: number;
                        a: number;
                        $: string;
                        $n: string;
                    };
                    '2': {
                        t: number;
                        m: number;
                        a: number;
                        $: string;
                        $n: string;
                    };
                    '3': {
                        t: number;
                        m: number;
                        a: number;
                        $: string;
                        $n: string;
                    };
                    '4': {
                        t: number;
                        m: number;
                        a: number;
                        $: string;
                        $n: string;
                    };
                    $: {
                        desc: number;
                        limit: number;
                        startKey: number;
                        parentKey: number;
                    };
                    $handle: (type: number, message: any) => number;
                };
            };
            $: {
                value: number;
                end: number;
                pgstart: number;
                prk: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    /**
     *
     * message P4 {
     *   required uint32 value = 1;
     *   optional uint32 end = 2;
     *   optional uint32 pgstart = 3;
     *   required ParamRangeKey prk = 4;
     * }
     */
    interface P4 {
        /** required: 1 */
        value: number;
        /** optional: 2 */
        end?: number;
        /** optional: 3 */
        pgstart?: number;
        /** required: 4 */
        prk: ParamRangeKey;
    }
    namespace P4 {
        const enum $f {
            value = 1,
            end = 2,
            pgstart = 3,
            prk = 4,
        }
        function $createObservable(): P4;
        function $create(value: number, prk: ParamRangeKey, end?: number, pgstart?: number): P4;
        function $stringify(obj: any): string;
        function $handle(type: number, message: any): number;
        const $descriptor: {
            '1': {
                t: number;
                m: number;
                a: number;
                $: string;
                $n: string;
            };
            '2': {
                t: number;
                m: number;
                a: number;
                $: string;
                $n: string;
            };
            '3': {
                t: number;
                m: number;
                a: number;
                $: string;
                $n: string;
            };
            '4': {
                t: number;
                m: number;
                a: number;
                $: string;
                $n: string;
                d: {
                    '1': {
                        t: number;
                        m: number;
                        a: number;
                        $: string;
                        $n: string;
                    };
                    '2': {
                        t: number;
                        m: number;
                        a: number;
                        $: string;
                        $n: string;
                    };
                    '3': {
                        t: number;
                        m: number;
                        a: number;
                        $: string;
                        $n: string;
                    };
                    '4': {
                        t: number;
                        m: number;
                        a: number;
                        $: string;
                        $n: string;
                    };
                    $: {
                        desc: number;
                        limit: number;
                        startKey: number;
                        parentKey: number;
                    };
                    $handle: (type: number, message: any) => number;
                };
            };
            $: {
                value: number;
                end: number;
                pgstart: number;
                prk: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    /**
     *
     * message P8 {
     *   required uint64 value = 1;
     *   optional uint64 end = 2;
     *   optional uint64 pgstart = 3;
     *   required ParamRangeKey prk = 4;
     * }
     */
    interface P8 {
        /** required: 1 */
        value: number;
        /** optional: 2 */
        end?: number;
        /** optional: 3 */
        pgstart?: number;
        /** required: 4 */
        prk: ParamRangeKey;
    }
    namespace P8 {
        const enum $f {
            value = 1,
            end = 2,
            pgstart = 3,
            prk = 4,
        }
        function $createObservable(): P8;
        function $create(value: number, prk: ParamRangeKey, end?: number, pgstart?: number): P8;
        function $stringify(obj: any): string;
        function $handle(type: number, message: any): number;
        const $descriptor: {
            '1': {
                t: number;
                m: number;
                a: number;
                $: string;
                $n: string;
            };
            '2': {
                t: number;
                m: number;
                a: number;
                $: string;
                $n: string;
            };
            '3': {
                t: number;
                m: number;
                a: number;
                $: string;
                $n: string;
            };
            '4': {
                t: number;
                m: number;
                a: number;
                $: string;
                $n: string;
                d: {
                    '1': {
                        t: number;
                        m: number;
                        a: number;
                        $: string;
                        $n: string;
                    };
                    '2': {
                        t: number;
                        m: number;
                        a: number;
                        $: string;
                        $n: string;
                    };
                    '3': {
                        t: number;
                        m: number;
                        a: number;
                        $: string;
                        $n: string;
                    };
                    '4': {
                        t: number;
                        m: number;
                        a: number;
                        $: string;
                        $n: string;
                    };
                    $: {
                        desc: number;
                        limit: number;
                        startKey: number;
                        parentKey: number;
                    };
                    $handle: (type: number, message: any) => number;
                };
            };
            $: {
                value: number;
                end: number;
                pgstart: number;
                prk: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    /**
     *
     * message PD {
     *   required uint64 value = 1;
     *   optional uint64 end = 2;
     *   optional uint64 pgstart = 3;
     *   required ParamRangeKey prk = 4;
     * }
     */
    interface PD {
        /** required: 1 */
        value: number;
        /** optional: 2 */
        end?: number;
        /** optional: 3 */
        pgstart?: number;
        /** required: 4 */
        prk: ParamRangeKey;
    }
    namespace PD {
        const enum $f {
            value = 1,
            end = 2,
            pgstart = 3,
            prk = 4,
        }
        function $createObservable(): PD;
        function $create(value: number, prk: ParamRangeKey, end?: number, pgstart?: number): PD;
        function $stringify(obj: any): string;
        function $handle(type: number, message: any): number;
        const $descriptor: {
            '1': {
                t: number;
                m: number;
                a: number;
                $: string;
                $n: string;
            };
            '2': {
                t: number;
                m: number;
                a: number;
                $: string;
                $n: string;
            };
            '3': {
                t: number;
                m: number;
                a: number;
                $: string;
                $n: string;
            };
            '4': {
                t: number;
                m: number;
                a: number;
                $: string;
                $n: string;
                d: {
                    '1': {
                        t: number;
                        m: number;
                        a: number;
                        $: string;
                        $n: string;
                    };
                    '2': {
                        t: number;
                        m: number;
                        a: number;
                        $: string;
                        $n: string;
                    };
                    '3': {
                        t: number;
                        m: number;
                        a: number;
                        $: string;
                        $n: string;
                    };
                    '4': {
                        t: number;
                        m: number;
                        a: number;
                        $: string;
                        $n: string;
                    };
                    $: {
                        desc: number;
                        limit: number;
                        startKey: number;
                        parentKey: number;
                    };
                    $handle: (type: number, message: any) => number;
                };
            };
            $: {
                value: number;
                end: number;
                pgstart: number;
                prk: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    /**
     *
     * message PB {
     *   required bytes value = 1;
     *   optional bytes end = 2;
     *   optional bytes pgstart = 3;
     *   required ParamRangeKey prk = 4;
     * }
     */
    interface PB {
        /** required: 1 */
        value: string;
        /** optional: 2 */
        end?: string;
        /** optional: 3 */
        pgstart?: string;
        /** required: 4 */
        prk: ParamRangeKey;
    }
    namespace PB {
        const enum $f {
            value = 1,
            end = 2,
            pgstart = 3,
            prk = 4,
        }
        function $createObservable(): PB;
        function $create(value: string, prk: ParamRangeKey, end?: string, pgstart?: string): PB;
        function $stringify(obj: any): string;
        function $handle(type: number, message: any): number;
        const $descriptor: {
            '1': {
                t: number;
                m: number;
                a: number;
                $: string;
                $n: string;
            };
            '2': {
                t: number;
                m: number;
                a: number;
                $: string;
                $n: string;
            };
            '3': {
                t: number;
                m: number;
                a: number;
                $: string;
                $n: string;
            };
            '4': {
                t: number;
                m: number;
                a: number;
                $: string;
                $n: string;
                d: {
                    '1': {
                        t: number;
                        m: number;
                        a: number;
                        $: string;
                        $n: string;
                    };
                    '2': {
                        t: number;
                        m: number;
                        a: number;
                        $: string;
                        $n: string;
                    };
                    '3': {
                        t: number;
                        m: number;
                        a: number;
                        $: string;
                        $n: string;
                    };
                    '4': {
                        t: number;
                        m: number;
                        a: number;
                        $: string;
                        $n: string;
                    };
                    $: {
                        desc: number;
                        limit: number;
                        startKey: number;
                        parentKey: number;
                    };
                    $handle: (type: number, message: any) => number;
                };
            };
            $: {
                value: number;
                end: number;
                pgstart: number;
                prk: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    /**
     *
     * message PK {
     *   required bytes value = 1;
     *   optional bytes end = 2;
     *   optional bytes pgstart = 3;
     *   required ParamRangeKey prk = 4;
     * }
     */
    interface PK {
        /** required: 1 */
        value: string;
        /** optional: 2 */
        end?: string;
        /** optional: 3 */
        pgstart?: string;
        /** required: 4 */
        prk: ParamRangeKey;
    }
    namespace PK {
        const enum $f {
            value = 1,
            end = 2,
            pgstart = 3,
            prk = 4,
        }
        function $createObservable(): PK;
        function $create(value: string, prk: ParamRangeKey, end?: string, pgstart?: string): PK;
        function $stringify(obj: any): string;
        function $handle(type: number, message: any): number;
        const $descriptor: {
            '1': {
                t: number;
                m: number;
                a: number;
                $: string;
                $n: string;
            };
            '2': {
                t: number;
                m: number;
                a: number;
                $: string;
                $n: string;
            };
            '3': {
                t: number;
                m: number;
                a: number;
                $: string;
                $n: string;
            };
            '4': {
                t: number;
                m: number;
                a: number;
                $: string;
                $n: string;
                d: {
                    '1': {
                        t: number;
                        m: number;
                        a: number;
                        $: string;
                        $n: string;
                    };
                    '2': {
                        t: number;
                        m: number;
                        a: number;
                        $: string;
                        $n: string;
                    };
                    '3': {
                        t: number;
                        m: number;
                        a: number;
                        $: string;
                        $n: string;
                    };
                    '4': {
                        t: number;
                        m: number;
                        a: number;
                        $: string;
                        $n: string;
                    };
                    $: {
                        desc: number;
                        limit: number;
                        startKey: number;
                        parentKey: number;
                    };
                    $handle: (type: number, message: any) => number;
                };
            };
            $: {
                value: number;
                end: number;
                pgstart: number;
                prk: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    /**
     *
     * message PS {
     *   required string value = 1;
     *   optional string end = 2;
     *   optional string pgstart = 3;
     *   required ParamRangeKey prk = 4;
     * }
     */
    interface PS {
        /** required: 1 */
        value: string;
        /** optional: 2 */
        end?: string;
        /** optional: 3 */
        pgstart?: string;
        /** required: 4 */
        prk: ParamRangeKey;
    }
    namespace PS {
        const enum $f {
            value = 1,
            end = 2,
            pgstart = 3,
            prk = 4,
        }
        function $createObservable(): PS;
        function $create(value: string, prk: ParamRangeKey, end?: string, pgstart?: string): PS;
        function $stringify(obj: any): string;
        function $handle(type: number, message: any): number;
        const $descriptor: {
            '1': {
                t: number;
                m: number;
                a: number;
                $: string;
                $n: string;
            };
            '2': {
                t: number;
                m: number;
                a: number;
                $: string;
                $n: string;
            };
            '3': {
                t: number;
                m: number;
                a: number;
                $: string;
                $n: string;
            };
            '4': {
                t: number;
                m: number;
                a: number;
                $: string;
                $n: string;
                d: {
                    '1': {
                        t: number;
                        m: number;
                        a: number;
                        $: string;
                        $n: string;
                    };
                    '2': {
                        t: number;
                        m: number;
                        a: number;
                        $: string;
                        $n: string;
                    };
                    '3': {
                        t: number;
                        m: number;
                        a: number;
                        $: string;
                        $n: string;
                    };
                    '4': {
                        t: number;
                        m: number;
                        a: number;
                        $: string;
                        $n: string;
                    };
                    $: {
                        desc: number;
                        limit: number;
                        startKey: number;
                        parentKey: number;
                    };
                    $handle: (type: number, message: any) => number;
                };
            };
            $: {
                value: number;
                end: number;
                pgstart: number;
                prk: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
}
