import { ds } from '../../';
export declare namespace p8 {
    /**
     *
     * message P881 {
     *   required uint64 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P1 l = 3;
     * }
     */
    interface P881 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P1;
    }
    namespace P881 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.P1): P881;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message P884 {
     *   required uint64 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P4 l = 3;
     * }
     */
    interface P884 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P4;
    }
    namespace P884 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.P4): P884;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message P888 {
     *   required uint64 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P8 l = 3;
     * }
     */
    interface P888 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P8;
    }
    namespace P888 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.P8): P888;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message P88D {
     *   required uint64 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PD l = 3;
     * }
     */
    interface P88D {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PD;
    }
    namespace P88D {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.PD): P88D;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message P88K {
     *   required uint64 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PK l = 3;
     * }
     */
    interface P88K {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PK;
    }
    namespace P88K {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.PK): P88K;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message P88S {
     *   required uint64 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PS l = 3;
     * }
     */
    interface P88S {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PS;
    }
    namespace P88S {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.PS): P88S;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message P811 {
     *   required uint64 p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.P1 l = 3;
     * }
     */
    interface P811 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P1;
    }
    namespace P811 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.P1): P811;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message P814 {
     *   required uint64 p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.P4 l = 3;
     * }
     */
    interface P814 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P4;
    }
    namespace P814 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.P4): P814;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message P818 {
     *   required uint64 p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.P8 l = 3;
     * }
     */
    interface P818 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P8;
    }
    namespace P818 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.P8): P818;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message P81D {
     *   required uint64 p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.PD l = 3;
     * }
     */
    interface P81D {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PD;
    }
    namespace P81D {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.PD): P81D;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message P81K {
     *   required uint64 p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.PK l = 3;
     * }
     */
    interface P81K {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PK;
    }
    namespace P81K {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.PK): P81K;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message P81S {
     *   required uint64 p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.PS l = 3;
     * }
     */
    interface P81S {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PS;
    }
    namespace P81S {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.PS): P81S;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message P841 {
     *   required uint64 p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.P1 l = 3;
     * }
     */
    interface P841 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P1;
    }
    namespace P841 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.P1): P841;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message P844 {
     *   required uint64 p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.P4 l = 3;
     * }
     */
    interface P844 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P4;
    }
    namespace P844 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.P4): P844;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message P848 {
     *   required uint64 p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.P8 l = 3;
     * }
     */
    interface P848 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P8;
    }
    namespace P848 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.P8): P848;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message P84D {
     *   required uint64 p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.PD l = 3;
     * }
     */
    interface P84D {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PD;
    }
    namespace P84D {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.PD): P84D;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message P84K {
     *   required uint64 p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.PK l = 3;
     * }
     */
    interface P84K {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PK;
    }
    namespace P84K {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.PK): P84K;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message P84S {
     *   required uint64 p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.PS l = 3;
     * }
     */
    interface P84S {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PS;
    }
    namespace P84S {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.PS): P84S;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message P81 {
     *   required uint64 p0 = 1;
     *   required ds.P1 l = 2;
     * }
     */
    interface P81 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        l: ds.P1;
    }
    namespace P81 {
        const enum $f {
            p0 = 1,
            l = 2,
        }
        function $create(p0: number, l: ds.P1): P81;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message P84 {
     *   required uint64 p0 = 1;
     *   required ds.P4 l = 2;
     * }
     */
    interface P84 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        l: ds.P4;
    }
    namespace P84 {
        const enum $f {
            p0 = 1,
            l = 2,
        }
        function $create(p0: number, l: ds.P4): P84;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message P88 {
     *   required uint64 p0 = 1;
     *   required ds.P8 l = 2;
     * }
     */
    interface P88 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        l: ds.P8;
    }
    namespace P88 {
        const enum $f {
            p0 = 1,
            l = 2,
        }
        function $create(p0: number, l: ds.P8): P88;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message P8D {
     *   required uint64 p0 = 1;
     *   required ds.PD l = 2;
     * }
     */
    interface P8D {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        l: ds.PD;
    }
    namespace P8D {
        const enum $f {
            p0 = 1,
            l = 2,
        }
        function $create(p0: number, l: ds.PD): P8D;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message P8K {
     *   required uint64 p0 = 1;
     *   required ds.PK l = 2;
     * }
     */
    interface P8K {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        l: ds.PK;
    }
    namespace P8K {
        const enum $f {
            p0 = 1,
            l = 2,
        }
        function $create(p0: number, l: ds.PK): P8K;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message P8S {
     *   required uint64 p0 = 1;
     *   required ds.PS l = 2;
     * }
     */
    interface P8S {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        l: ds.PS;
    }
    namespace P8S {
        const enum $f {
            p0 = 1,
            l = 2,
        }
        function $create(p0: number, l: ds.PS): P8S;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message P8S1 {
     *   required uint64 p0 = 1;
     *   required string p1 = 2;
     *   required ds.P1 l = 3;
     * }
     */
    interface P8S1 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.P1;
    }
    namespace P8S1 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: string, l: ds.P1): P8S1;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message P8S4 {
     *   required uint64 p0 = 1;
     *   required string p1 = 2;
     *   required ds.P4 l = 3;
     * }
     */
    interface P8S4 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.P4;
    }
    namespace P8S4 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: string, l: ds.P4): P8S4;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message P8S8 {
     *   required uint64 p0 = 1;
     *   required string p1 = 2;
     *   required ds.P8 l = 3;
     * }
     */
    interface P8S8 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.P8;
    }
    namespace P8S8 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: string, l: ds.P8): P8S8;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message P8SD {
     *   required uint64 p0 = 1;
     *   required string p1 = 2;
     *   required ds.PD l = 3;
     * }
     */
    interface P8SD {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.PD;
    }
    namespace P8SD {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: string, l: ds.PD): P8SD;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message P8SK {
     *   required uint64 p0 = 1;
     *   required string p1 = 2;
     *   required ds.PK l = 3;
     * }
     */
    interface P8SK {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.PK;
    }
    namespace P8SK {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: string, l: ds.PK): P8SK;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message P8SS {
     *   required uint64 p0 = 1;
     *   required string p1 = 2;
     *   required ds.PS l = 3;
     * }
     */
    interface P8SS {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.PS;
    }
    namespace P8SS {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: string, l: ds.PS): P8SS;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message P8D1 {
     *   required uint64 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P1 l = 3;
     * }
     */
    interface P8D1 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P1;
    }
    namespace P8D1 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.P1): P8D1;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message P8D4 {
     *   required uint64 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P4 l = 3;
     * }
     */
    interface P8D4 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P4;
    }
    namespace P8D4 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.P4): P8D4;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message P8D8 {
     *   required uint64 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P8 l = 3;
     * }
     */
    interface P8D8 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P8;
    }
    namespace P8D8 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.P8): P8D8;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message P8DD {
     *   required uint64 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PD l = 3;
     * }
     */
    interface P8DD {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PD;
    }
    namespace P8DD {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.PD): P8DD;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message P8DK {
     *   required uint64 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PK l = 3;
     * }
     */
    interface P8DK {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PK;
    }
    namespace P8DK {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.PK): P8DK;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message P8DS {
     *   required uint64 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PS l = 3;
     * }
     */
    interface P8DS {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PS;
    }
    namespace P8DS {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.PS): P8DS;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message P8K1 {
     *   required uint64 p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.P1 l = 3;
     * }
     */
    interface P8K1 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.P1;
    }
    namespace P8K1 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: string, l: ds.P1): P8K1;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message P8K4 {
     *   required uint64 p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.P4 l = 3;
     * }
     */
    interface P8K4 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.P4;
    }
    namespace P8K4 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: string, l: ds.P4): P8K4;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message P8K8 {
     *   required uint64 p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.P8 l = 3;
     * }
     */
    interface P8K8 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.P8;
    }
    namespace P8K8 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: string, l: ds.P8): P8K8;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message P8KD {
     *   required uint64 p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.PD l = 3;
     * }
     */
    interface P8KD {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.PD;
    }
    namespace P8KD {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: string, l: ds.PD): P8KD;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message P8KK {
     *   required uint64 p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.PK l = 3;
     * }
     */
    interface P8KK {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.PK;
    }
    namespace P8KK {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: string, l: ds.PK): P8KK;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message P8KS {
     *   required uint64 p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.PS l = 3;
     * }
     */
    interface P8KS {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.PS;
    }
    namespace P8KS {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: string, l: ds.PS): P8KS;
        function $stringify(obj: any): string;
    }
}
