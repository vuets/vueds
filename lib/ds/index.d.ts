import { MultiCAS } from '../';
export declare namespace ds {
    interface ParamId {
        id: number;
    }
    namespace ParamId {
        const enum $f {
            id = 1,
        }
        function $create(): ParamId;
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
    interface ParamKey {
        key: string;
        parentKey?: string;
    }
    namespace ParamKey {
        const enum $f {
            key = 1,
            parentKey = 2,
        }
        function $create(): ParamKey;
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
    interface ParamUpdate {
        key: string;
        mc: MultiCAS;
        id?: number;
    }
    namespace ParamUpdate {
        const enum $f {
            key = 1,
            mc = 2,
            id = 3,
        }
        function $create(): ParamUpdate;
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
    interface ParamRangeKey {
        desc: boolean;
        limit?: number;
        startKey?: string;
        parentKey?: string;
    }
    namespace ParamRangeKey {
        const enum $f {
            desc = 1,
            limit = 2,
            startKey = 3,
            parentKey = 4,
        }
        function $create(): ParamRangeKey;
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
    interface ACResult {
        name: string;
        value: string;
        id?: number;
    }
    namespace ACResult {
        interface PList {
            p?: ACResult[];
        }
        const enum $f {
            name = 1,
            value = 2,
            id = 3,
        }
        function $create(): ACResult;
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
    interface P1 {
        value: number;
        end?: number;
        pgstart?: number;
        prk: ParamRangeKey;
    }
    namespace P1 {
        const enum $f {
            value = 1,
            end = 2,
            pgstart = 3,
            prk = 4,
        }
        function $create(): P1;
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
    interface P4 {
        value: number;
        end?: number;
        pgstart?: number;
        prk: ParamRangeKey;
    }
    namespace P4 {
        const enum $f {
            value = 1,
            end = 2,
            pgstart = 3,
            prk = 4,
        }
        function $create(): P4;
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
    interface P8 {
        value: number;
        end?: number;
        pgstart?: number;
        prk: ParamRangeKey;
    }
    namespace P8 {
        const enum $f {
            value = 1,
            end = 2,
            pgstart = 3,
            prk = 4,
        }
        function $create(): P8;
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
    interface PD {
        value: number;
        end?: number;
        pgstart?: number;
        prk: ParamRangeKey;
    }
    namespace PD {
        const enum $f {
            value = 1,
            end = 2,
            pgstart = 3,
            prk = 4,
        }
        function $create(): PD;
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
    interface PB {
        value: string;
        end?: string;
        pgstart?: string;
        prk: ParamRangeKey;
    }
    namespace PB {
        const enum $f {
            value = 1,
            end = 2,
            pgstart = 3,
            prk = 4,
        }
        function $create(): PB;
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
    interface PK {
        value: string;
        end?: string;
        pgstart?: string;
        prk: ParamRangeKey;
    }
    namespace PK {
        const enum $f {
            value = 1,
            end = 2,
            pgstart = 3,
            prk = 4,
        }
        function $create(): PK;
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
    interface PS {
        value: string;
        end?: string;
        pgstart?: string;
        prk: ParamRangeKey;
    }
    namespace PS {
        const enum $f {
            value = 1,
            end = 2,
            pgstart = 3,
            prk = 4,
        }
        function $create(): PS;
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
