import { ds } from '../../';
export declare namespace p1 {
    /**
     * ```
     *
     * message P181 {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P1 l = 3;
     * }
     * ```
     */
    interface P181 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P1;
    }
    namespace P181 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.P1): P181;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P184 {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P4 l = 3;
     * }
     * ```
     */
    interface P184 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P4;
    }
    namespace P184 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.P4): P184;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P188 {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P8 l = 3;
     * }
     * ```
     */
    interface P188 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P8;
    }
    namespace P188 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.P8): P188;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P18D {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PD l = 3;
     * }
     * ```
     */
    interface P18D {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PD;
    }
    namespace P18D {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.PD): P18D;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P18K {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PK l = 3;
     * }
     * ```
     */
    interface P18K {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PK;
    }
    namespace P18K {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.PK): P18K;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P18S {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PS l = 3;
     * }
     * ```
     */
    interface P18S {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PS;
    }
    namespace P18S {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.PS): P18S;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P111411 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required uint32 p3 = 4;
     *   required int8 p4 = 5;
     *   required ds.P1 l = 6;
     * }
     * ```
     */
    interface P111411 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        p4: number;
        /** required: 6 */
        l: ds.P1;
    }
    namespace P111411 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            p4 = 5,
            l = 6,
        }
        function $create(p0: number, p1: number, p2: number, p3: number, p4: number, l: ds.P1): P111411;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P111414 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required uint32 p3 = 4;
     *   required int8 p4 = 5;
     *   required ds.P4 l = 6;
     * }
     * ```
     */
    interface P111414 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        p4: number;
        /** required: 6 */
        l: ds.P4;
    }
    namespace P111414 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            p4 = 5,
            l = 6,
        }
        function $create(p0: number, p1: number, p2: number, p3: number, p4: number, l: ds.P4): P111414;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P111418 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required uint32 p3 = 4;
     *   required int8 p4 = 5;
     *   required ds.P8 l = 6;
     * }
     * ```
     */
    interface P111418 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        p4: number;
        /** required: 6 */
        l: ds.P8;
    }
    namespace P111418 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            p4 = 5,
            l = 6,
        }
        function $create(p0: number, p1: number, p2: number, p3: number, p4: number, l: ds.P8): P111418;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P11141D {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required uint32 p3 = 4;
     *   required int8 p4 = 5;
     *   required ds.PD l = 6;
     * }
     * ```
     */
    interface P11141D {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        p4: number;
        /** required: 6 */
        l: ds.PD;
    }
    namespace P11141D {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            p4 = 5,
            l = 6,
        }
        function $create(p0: number, p1: number, p2: number, p3: number, p4: number, l: ds.PD): P11141D;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P11141K {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required uint32 p3 = 4;
     *   required int8 p4 = 5;
     *   required ds.PK l = 6;
     * }
     * ```
     */
    interface P11141K {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        p4: number;
        /** required: 6 */
        l: ds.PK;
    }
    namespace P11141K {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            p4 = 5,
            l = 6,
        }
        function $create(p0: number, p1: number, p2: number, p3: number, p4: number, l: ds.PK): P11141K;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P11141S {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required uint32 p3 = 4;
     *   required int8 p4 = 5;
     *   required ds.PS l = 6;
     * }
     * ```
     */
    interface P11141S {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        p4: number;
        /** required: 6 */
        l: ds.PS;
    }
    namespace P11141S {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            p4 = 5,
            l = 6,
        }
        function $create(p0: number, p1: number, p2: number, p3: number, p4: number, l: ds.PS): P11141S;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1D111 {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required ds.P1 l = 5;
     * }
     * ```
     */
    interface P1D111 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        l: ds.P1;
    }
    namespace P1D111 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            l = 5,
        }
        function $create(p0: number, p1: number, p2: number, p3: number, l: ds.P1): P1D111;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1D114 {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required ds.P4 l = 5;
     * }
     * ```
     */
    interface P1D114 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        l: ds.P4;
    }
    namespace P1D114 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            l = 5,
        }
        function $create(p0: number, p1: number, p2: number, p3: number, l: ds.P4): P1D114;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1D118 {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required ds.P8 l = 5;
     * }
     * ```
     */
    interface P1D118 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        l: ds.P8;
    }
    namespace P1D118 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            l = 5,
        }
        function $create(p0: number, p1: number, p2: number, p3: number, l: ds.P8): P1D118;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1D11D {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required ds.PD l = 5;
     * }
     * ```
     */
    interface P1D11D {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        l: ds.PD;
    }
    namespace P1D11D {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            l = 5,
        }
        function $create(p0: number, p1: number, p2: number, p3: number, l: ds.PD): P1D11D;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1D11K {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required ds.PK l = 5;
     * }
     * ```
     */
    interface P1D11K {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        l: ds.PK;
    }
    namespace P1D11K {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            l = 5,
        }
        function $create(p0: number, p1: number, p2: number, p3: number, l: ds.PK): P1D11K;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1D11S {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required ds.PS l = 5;
     * }
     * ```
     */
    interface P1D11S {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        l: ds.PS;
    }
    namespace P1D11S {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            l = 5,
        }
        function $create(p0: number, p1: number, p2: number, p3: number, l: ds.PS): P1D11S;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P141 {
     *   required int8 p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.P1 l = 3;
     * }
     * ```
     */
    interface P141 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P1;
    }
    namespace P141 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.P1): P141;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P144 {
     *   required int8 p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.P4 l = 3;
     * }
     * ```
     */
    interface P144 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P4;
    }
    namespace P144 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.P4): P144;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P148 {
     *   required int8 p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.P8 l = 3;
     * }
     * ```
     */
    interface P148 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P8;
    }
    namespace P148 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.P8): P148;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P14D {
     *   required int8 p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.PD l = 3;
     * }
     * ```
     */
    interface P14D {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PD;
    }
    namespace P14D {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.PD): P14D;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P14K {
     *   required int8 p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.PK l = 3;
     * }
     * ```
     */
    interface P14K {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PK;
    }
    namespace P14K {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.PK): P14K;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P14S {
     *   required int8 p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.PS l = 3;
     * }
     * ```
     */
    interface P14S {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PS;
    }
    namespace P14S {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.PS): P14S;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1S1 {
     *   required int8 p0 = 1;
     *   required string p1 = 2;
     *   required ds.P1 l = 3;
     * }
     * ```
     */
    interface P1S1 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.P1;
    }
    namespace P1S1 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: string, l: ds.P1): P1S1;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1S4 {
     *   required int8 p0 = 1;
     *   required string p1 = 2;
     *   required ds.P4 l = 3;
     * }
     * ```
     */
    interface P1S4 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.P4;
    }
    namespace P1S4 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: string, l: ds.P4): P1S4;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1S8 {
     *   required int8 p0 = 1;
     *   required string p1 = 2;
     *   required ds.P8 l = 3;
     * }
     * ```
     */
    interface P1S8 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.P8;
    }
    namespace P1S8 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: string, l: ds.P8): P1S8;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1SD {
     *   required int8 p0 = 1;
     *   required string p1 = 2;
     *   required ds.PD l = 3;
     * }
     * ```
     */
    interface P1SD {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.PD;
    }
    namespace P1SD {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: string, l: ds.PD): P1SD;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1SK {
     *   required int8 p0 = 1;
     *   required string p1 = 2;
     *   required ds.PK l = 3;
     * }
     * ```
     */
    interface P1SK {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.PK;
    }
    namespace P1SK {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: string, l: ds.PK): P1SK;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1SS {
     *   required int8 p0 = 1;
     *   required string p1 = 2;
     *   required ds.PS l = 3;
     * }
     * ```
     */
    interface P1SS {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.PS;
    }
    namespace P1SS {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: string, l: ds.PS): P1SS;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1K1 {
     *   required int8 p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.P1 l = 3;
     * }
     * ```
     */
    interface P1K1 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.P1;
    }
    namespace P1K1 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: string, l: ds.P1): P1K1;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1K4 {
     *   required int8 p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.P4 l = 3;
     * }
     * ```
     */
    interface P1K4 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.P4;
    }
    namespace P1K4 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: string, l: ds.P4): P1K4;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1K8 {
     *   required int8 p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.P8 l = 3;
     * }
     * ```
     */
    interface P1K8 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.P8;
    }
    namespace P1K8 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: string, l: ds.P8): P1K8;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1KD {
     *   required int8 p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.PD l = 3;
     * }
     * ```
     */
    interface P1KD {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.PD;
    }
    namespace P1KD {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: string, l: ds.PD): P1KD;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1KK {
     *   required int8 p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.PK l = 3;
     * }
     * ```
     */
    interface P1KK {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.PK;
    }
    namespace P1KK {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: string, l: ds.PK): P1KK;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1KS {
     *   required int8 p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.PS l = 3;
     * }
     * ```
     */
    interface P1KS {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.PS;
    }
    namespace P1KS {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: string, l: ds.PS): P1KS;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1D1 {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P1 l = 3;
     * }
     * ```
     */
    interface P1D1 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P1;
    }
    namespace P1D1 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.P1): P1D1;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1D4 {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P4 l = 3;
     * }
     * ```
     */
    interface P1D4 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P4;
    }
    namespace P1D4 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.P4): P1D4;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1D8 {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P8 l = 3;
     * }
     * ```
     */
    interface P1D8 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P8;
    }
    namespace P1D8 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.P8): P1D8;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1DD {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PD l = 3;
     * }
     * ```
     */
    interface P1DD {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PD;
    }
    namespace P1DD {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.PD): P1DD;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1DK {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PK l = 3;
     * }
     * ```
     */
    interface P1DK {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PK;
    }
    namespace P1DK {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.PK): P1DK;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1DS {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PS l = 3;
     * }
     * ```
     */
    interface P1DS {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PS;
    }
    namespace P1DS {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.PS): P1DS;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1D11 {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required int8 p2 = 3;
     *   required ds.P1 l = 4;
     * }
     * ```
     */
    interface P1D11 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        l: ds.P1;
    }
    namespace P1D11 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(p0: number, p1: number, p2: number, l: ds.P1): P1D11;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1D14 {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required int8 p2 = 3;
     *   required ds.P4 l = 4;
     * }
     * ```
     */
    interface P1D14 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        l: ds.P4;
    }
    namespace P1D14 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(p0: number, p1: number, p2: number, l: ds.P4): P1D14;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1D18 {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required int8 p2 = 3;
     *   required ds.P8 l = 4;
     * }
     * ```
     */
    interface P1D18 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        l: ds.P8;
    }
    namespace P1D18 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(p0: number, p1: number, p2: number, l: ds.P8): P1D18;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1D1D {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required int8 p2 = 3;
     *   required ds.PD l = 4;
     * }
     * ```
     */
    interface P1D1D {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        l: ds.PD;
    }
    namespace P1D1D {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(p0: number, p1: number, p2: number, l: ds.PD): P1D1D;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1D1K {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required int8 p2 = 3;
     *   required ds.PK l = 4;
     * }
     * ```
     */
    interface P1D1K {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        l: ds.PK;
    }
    namespace P1D1K {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(p0: number, p1: number, p2: number, l: ds.PK): P1D1K;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1D1S {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required int8 p2 = 3;
     *   required ds.PS l = 4;
     * }
     * ```
     */
    interface P1D1S {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        l: ds.PS;
    }
    namespace P1D1S {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(p0: number, p1: number, p2: number, l: ds.PS): P1D1S;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P11111 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required ds.P1 l = 5;
     * }
     * ```
     */
    interface P11111 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        l: ds.P1;
    }
    namespace P11111 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            l = 5,
        }
        function $create(p0: number, p1: number, p2: number, p3: number, l: ds.P1): P11111;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P11114 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required ds.P4 l = 5;
     * }
     * ```
     */
    interface P11114 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        l: ds.P4;
    }
    namespace P11114 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            l = 5,
        }
        function $create(p0: number, p1: number, p2: number, p3: number, l: ds.P4): P11114;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P11118 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required ds.P8 l = 5;
     * }
     * ```
     */
    interface P11118 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        l: ds.P8;
    }
    namespace P11118 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            l = 5,
        }
        function $create(p0: number, p1: number, p2: number, p3: number, l: ds.P8): P11118;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1111D {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required ds.PD l = 5;
     * }
     * ```
     */
    interface P1111D {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        l: ds.PD;
    }
    namespace P1111D {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            l = 5,
        }
        function $create(p0: number, p1: number, p2: number, p3: number, l: ds.PD): P1111D;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1111K {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required ds.PK l = 5;
     * }
     * ```
     */
    interface P1111K {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        l: ds.PK;
    }
    namespace P1111K {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            l = 5,
        }
        function $create(p0: number, p1: number, p2: number, p3: number, l: ds.PK): P1111K;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1111S {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required ds.PS l = 5;
     * }
     * ```
     */
    interface P1111S {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        l: ds.PS;
    }
    namespace P1111S {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            l = 5,
        }
        function $create(p0: number, p1: number, p2: number, p3: number, l: ds.PS): P1111S;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P111 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.P1 l = 3;
     * }
     * ```
     */
    interface P111 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P1;
    }
    namespace P111 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.P1): P111;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P114 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.P4 l = 3;
     * }
     * ```
     */
    interface P114 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P4;
    }
    namespace P114 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.P4): P114;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P118 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.P8 l = 3;
     * }
     * ```
     */
    interface P118 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P8;
    }
    namespace P118 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.P8): P118;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P11D {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.PD l = 3;
     * }
     * ```
     */
    interface P11D {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PD;
    }
    namespace P11D {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.PD): P11D;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P11K {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.PK l = 3;
     * }
     * ```
     */
    interface P11K {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PK;
    }
    namespace P11K {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.PK): P11K;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P11S {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.PS l = 3;
     * }
     * ```
     */
    interface P11S {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PS;
    }
    namespace P11S {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.PS): P11S;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P111K1 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required bytes p3 = 4;
     *   required ds.P1 l = 5;
     * }
     * ```
     */
    interface P111K1 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: string;
        /** required: 5 */
        l: ds.P1;
    }
    namespace P111K1 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            l = 5,
        }
        function $create(p0: number, p1: number, p2: number, p3: string, l: ds.P1): P111K1;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P111K4 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required bytes p3 = 4;
     *   required ds.P4 l = 5;
     * }
     * ```
     */
    interface P111K4 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: string;
        /** required: 5 */
        l: ds.P4;
    }
    namespace P111K4 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            l = 5,
        }
        function $create(p0: number, p1: number, p2: number, p3: string, l: ds.P4): P111K4;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P111K8 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required bytes p3 = 4;
     *   required ds.P8 l = 5;
     * }
     * ```
     */
    interface P111K8 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: string;
        /** required: 5 */
        l: ds.P8;
    }
    namespace P111K8 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            l = 5,
        }
        function $create(p0: number, p1: number, p2: number, p3: string, l: ds.P8): P111K8;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P111KD {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required bytes p3 = 4;
     *   required ds.PD l = 5;
     * }
     * ```
     */
    interface P111KD {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: string;
        /** required: 5 */
        l: ds.PD;
    }
    namespace P111KD {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            l = 5,
        }
        function $create(p0: number, p1: number, p2: number, p3: string, l: ds.PD): P111KD;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P111KK {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required bytes p3 = 4;
     *   required ds.PK l = 5;
     * }
     * ```
     */
    interface P111KK {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: string;
        /** required: 5 */
        l: ds.PK;
    }
    namespace P111KK {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            l = 5,
        }
        function $create(p0: number, p1: number, p2: number, p3: string, l: ds.PK): P111KK;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P111KS {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required bytes p3 = 4;
     *   required ds.PS l = 5;
     * }
     * ```
     */
    interface P111KS {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: string;
        /** required: 5 */
        l: ds.PS;
    }
    namespace P111KS {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            l = 5,
        }
        function $create(p0: number, p1: number, p2: number, p3: string, l: ds.PS): P111KS;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1141 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required uint32 p2 = 3;
     *   required ds.P1 l = 4;
     * }
     * ```
     */
    interface P1141 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        l: ds.P1;
    }
    namespace P1141 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(p0: number, p1: number, p2: number, l: ds.P1): P1141;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1144 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required uint32 p2 = 3;
     *   required ds.P4 l = 4;
     * }
     * ```
     */
    interface P1144 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        l: ds.P4;
    }
    namespace P1144 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(p0: number, p1: number, p2: number, l: ds.P4): P1144;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1148 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required uint32 p2 = 3;
     *   required ds.P8 l = 4;
     * }
     * ```
     */
    interface P1148 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        l: ds.P8;
    }
    namespace P1148 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(p0: number, p1: number, p2: number, l: ds.P8): P1148;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P114D {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required uint32 p2 = 3;
     *   required ds.PD l = 4;
     * }
     * ```
     */
    interface P114D {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        l: ds.PD;
    }
    namespace P114D {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(p0: number, p1: number, p2: number, l: ds.PD): P114D;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P114K {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required uint32 p2 = 3;
     *   required ds.PK l = 4;
     * }
     * ```
     */
    interface P114K {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        l: ds.PK;
    }
    namespace P114K {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(p0: number, p1: number, p2: number, l: ds.PK): P114K;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P114S {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required uint32 p2 = 3;
     *   required ds.PS l = 4;
     * }
     * ```
     */
    interface P114S {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        l: ds.PS;
    }
    namespace P114S {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(p0: number, p1: number, p2: number, l: ds.PS): P114S;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P11K1 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required bytes p2 = 3;
     *   required ds.P1 l = 4;
     * }
     * ```
     */
    interface P11K1 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: string;
        /** required: 4 */
        l: ds.P1;
    }
    namespace P11K1 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(p0: number, p1: number, p2: string, l: ds.P1): P11K1;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P11K4 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required bytes p2 = 3;
     *   required ds.P4 l = 4;
     * }
     * ```
     */
    interface P11K4 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: string;
        /** required: 4 */
        l: ds.P4;
    }
    namespace P11K4 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(p0: number, p1: number, p2: string, l: ds.P4): P11K4;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P11K8 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required bytes p2 = 3;
     *   required ds.P8 l = 4;
     * }
     * ```
     */
    interface P11K8 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: string;
        /** required: 4 */
        l: ds.P8;
    }
    namespace P11K8 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(p0: number, p1: number, p2: string, l: ds.P8): P11K8;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P11KD {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required bytes p2 = 3;
     *   required ds.PD l = 4;
     * }
     * ```
     */
    interface P11KD {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: string;
        /** required: 4 */
        l: ds.PD;
    }
    namespace P11KD {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(p0: number, p1: number, p2: string, l: ds.PD): P11KD;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P11KK {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required bytes p2 = 3;
     *   required ds.PK l = 4;
     * }
     * ```
     */
    interface P11KK {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: string;
        /** required: 4 */
        l: ds.PK;
    }
    namespace P11KK {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(p0: number, p1: number, p2: string, l: ds.PK): P11KK;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P11KS {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required bytes p2 = 3;
     *   required ds.PS l = 4;
     * }
     * ```
     */
    interface P11KS {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: string;
        /** required: 4 */
        l: ds.PS;
    }
    namespace P11KS {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(p0: number, p1: number, p2: string, l: ds.PS): P11KS;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1DK1 {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required bytes p2 = 3;
     *   required ds.P1 l = 4;
     * }
     * ```
     */
    interface P1DK1 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: string;
        /** required: 4 */
        l: ds.P1;
    }
    namespace P1DK1 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(p0: number, p1: number, p2: string, l: ds.P1): P1DK1;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1DK4 {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required bytes p2 = 3;
     *   required ds.P4 l = 4;
     * }
     * ```
     */
    interface P1DK4 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: string;
        /** required: 4 */
        l: ds.P4;
    }
    namespace P1DK4 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(p0: number, p1: number, p2: string, l: ds.P4): P1DK4;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1DK8 {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required bytes p2 = 3;
     *   required ds.P8 l = 4;
     * }
     * ```
     */
    interface P1DK8 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: string;
        /** required: 4 */
        l: ds.P8;
    }
    namespace P1DK8 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(p0: number, p1: number, p2: string, l: ds.P8): P1DK8;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1DKD {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required bytes p2 = 3;
     *   required ds.PD l = 4;
     * }
     * ```
     */
    interface P1DKD {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: string;
        /** required: 4 */
        l: ds.PD;
    }
    namespace P1DKD {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(p0: number, p1: number, p2: string, l: ds.PD): P1DKD;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1DKK {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required bytes p2 = 3;
     *   required ds.PK l = 4;
     * }
     * ```
     */
    interface P1DKK {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: string;
        /** required: 4 */
        l: ds.PK;
    }
    namespace P1DKK {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(p0: number, p1: number, p2: string, l: ds.PK): P1DKK;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1DKS {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required bytes p2 = 3;
     *   required ds.PS l = 4;
     * }
     * ```
     */
    interface P1DKS {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: string;
        /** required: 4 */
        l: ds.PS;
    }
    namespace P1DKS {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(p0: number, p1: number, p2: string, l: ds.PS): P1DKS;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P14441 {
     *   required int8 p0 = 1;
     *   required uint32 p1 = 2;
     *   required uint32 p2 = 3;
     *   required uint32 p3 = 4;
     *   required ds.P1 l = 5;
     * }
     * ```
     */
    interface P14441 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        l: ds.P1;
    }
    namespace P14441 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            l = 5,
        }
        function $create(p0: number, p1: number, p2: number, p3: number, l: ds.P1): P14441;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P14444 {
     *   required int8 p0 = 1;
     *   required uint32 p1 = 2;
     *   required uint32 p2 = 3;
     *   required uint32 p3 = 4;
     *   required ds.P4 l = 5;
     * }
     * ```
     */
    interface P14444 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        l: ds.P4;
    }
    namespace P14444 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            l = 5,
        }
        function $create(p0: number, p1: number, p2: number, p3: number, l: ds.P4): P14444;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P14448 {
     *   required int8 p0 = 1;
     *   required uint32 p1 = 2;
     *   required uint32 p2 = 3;
     *   required uint32 p3 = 4;
     *   required ds.P8 l = 5;
     * }
     * ```
     */
    interface P14448 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        l: ds.P8;
    }
    namespace P14448 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            l = 5,
        }
        function $create(p0: number, p1: number, p2: number, p3: number, l: ds.P8): P14448;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1444D {
     *   required int8 p0 = 1;
     *   required uint32 p1 = 2;
     *   required uint32 p2 = 3;
     *   required uint32 p3 = 4;
     *   required ds.PD l = 5;
     * }
     * ```
     */
    interface P1444D {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        l: ds.PD;
    }
    namespace P1444D {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            l = 5,
        }
        function $create(p0: number, p1: number, p2: number, p3: number, l: ds.PD): P1444D;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1444K {
     *   required int8 p0 = 1;
     *   required uint32 p1 = 2;
     *   required uint32 p2 = 3;
     *   required uint32 p3 = 4;
     *   required ds.PK l = 5;
     * }
     * ```
     */
    interface P1444K {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        l: ds.PK;
    }
    namespace P1444K {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            l = 5,
        }
        function $create(p0: number, p1: number, p2: number, p3: number, l: ds.PK): P1444K;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1444S {
     *   required int8 p0 = 1;
     *   required uint32 p1 = 2;
     *   required uint32 p2 = 3;
     *   required uint32 p3 = 4;
     *   required ds.PS l = 5;
     * }
     * ```
     */
    interface P1444S {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        l: ds.PS;
    }
    namespace P1444S {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            l = 5,
        }
        function $create(p0: number, p1: number, p2: number, p3: number, l: ds.PS): P1444S;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P111111 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required int8 p4 = 5;
     *   required ds.P1 l = 6;
     * }
     * ```
     */
    interface P111111 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        p4: number;
        /** required: 6 */
        l: ds.P1;
    }
    namespace P111111 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            p4 = 5,
            l = 6,
        }
        function $create(p0: number, p1: number, p2: number, p3: number, p4: number, l: ds.P1): P111111;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P111114 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required int8 p4 = 5;
     *   required ds.P4 l = 6;
     * }
     * ```
     */
    interface P111114 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        p4: number;
        /** required: 6 */
        l: ds.P4;
    }
    namespace P111114 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            p4 = 5,
            l = 6,
        }
        function $create(p0: number, p1: number, p2: number, p3: number, p4: number, l: ds.P4): P111114;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P111118 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required int8 p4 = 5;
     *   required ds.P8 l = 6;
     * }
     * ```
     */
    interface P111118 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        p4: number;
        /** required: 6 */
        l: ds.P8;
    }
    namespace P111118 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            p4 = 5,
            l = 6,
        }
        function $create(p0: number, p1: number, p2: number, p3: number, p4: number, l: ds.P8): P111118;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P11111D {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required int8 p4 = 5;
     *   required ds.PD l = 6;
     * }
     * ```
     */
    interface P11111D {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        p4: number;
        /** required: 6 */
        l: ds.PD;
    }
    namespace P11111D {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            p4 = 5,
            l = 6,
        }
        function $create(p0: number, p1: number, p2: number, p3: number, p4: number, l: ds.PD): P11111D;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P11111K {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required int8 p4 = 5;
     *   required ds.PK l = 6;
     * }
     * ```
     */
    interface P11111K {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        p4: number;
        /** required: 6 */
        l: ds.PK;
    }
    namespace P11111K {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            p4 = 5,
            l = 6,
        }
        function $create(p0: number, p1: number, p2: number, p3: number, p4: number, l: ds.PK): P11111K;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P11111S {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required int8 p4 = 5;
     *   required ds.PS l = 6;
     * }
     * ```
     */
    interface P11111S {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        p4: number;
        /** required: 6 */
        l: ds.PS;
    }
    namespace P11111S {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            p4 = 5,
            l = 6,
        }
        function $create(p0: number, p1: number, p2: number, p3: number, p4: number, l: ds.PS): P11111S;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1D1111 {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required int8 p4 = 5;
     *   required ds.P1 l = 6;
     * }
     * ```
     */
    interface P1D1111 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        p4: number;
        /** required: 6 */
        l: ds.P1;
    }
    namespace P1D1111 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            p4 = 5,
            l = 6,
        }
        function $create(p0: number, p1: number, p2: number, p3: number, p4: number, l: ds.P1): P1D1111;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1D1114 {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required int8 p4 = 5;
     *   required ds.P4 l = 6;
     * }
     * ```
     */
    interface P1D1114 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        p4: number;
        /** required: 6 */
        l: ds.P4;
    }
    namespace P1D1114 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            p4 = 5,
            l = 6,
        }
        function $create(p0: number, p1: number, p2: number, p3: number, p4: number, l: ds.P4): P1D1114;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1D1118 {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required int8 p4 = 5;
     *   required ds.P8 l = 6;
     * }
     * ```
     */
    interface P1D1118 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        p4: number;
        /** required: 6 */
        l: ds.P8;
    }
    namespace P1D1118 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            p4 = 5,
            l = 6,
        }
        function $create(p0: number, p1: number, p2: number, p3: number, p4: number, l: ds.P8): P1D1118;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1D111D {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required int8 p4 = 5;
     *   required ds.PD l = 6;
     * }
     * ```
     */
    interface P1D111D {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        p4: number;
        /** required: 6 */
        l: ds.PD;
    }
    namespace P1D111D {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            p4 = 5,
            l = 6,
        }
        function $create(p0: number, p1: number, p2: number, p3: number, p4: number, l: ds.PD): P1D111D;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1D111K {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required int8 p4 = 5;
     *   required ds.PK l = 6;
     * }
     * ```
     */
    interface P1D111K {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        p4: number;
        /** required: 6 */
        l: ds.PK;
    }
    namespace P1D111K {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            p4 = 5,
            l = 6,
        }
        function $create(p0: number, p1: number, p2: number, p3: number, p4: number, l: ds.PK): P1D111K;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1D111S {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required int8 p4 = 5;
     *   required ds.PS l = 6;
     * }
     * ```
     */
    interface P1D111S {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        p4: number;
        /** required: 6 */
        l: ds.PS;
    }
    namespace P1D111S {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            p4 = 5,
            l = 6,
        }
        function $create(p0: number, p1: number, p2: number, p3: number, p4: number, l: ds.PS): P1D111S;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P111141 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required uint32 p4 = 5;
     *   required ds.P1 l = 6;
     * }
     * ```
     */
    interface P111141 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        p4: number;
        /** required: 6 */
        l: ds.P1;
    }
    namespace P111141 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            p4 = 5,
            l = 6,
        }
        function $create(p0: number, p1: number, p2: number, p3: number, p4: number, l: ds.P1): P111141;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P111144 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required uint32 p4 = 5;
     *   required ds.P4 l = 6;
     * }
     * ```
     */
    interface P111144 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        p4: number;
        /** required: 6 */
        l: ds.P4;
    }
    namespace P111144 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            p4 = 5,
            l = 6,
        }
        function $create(p0: number, p1: number, p2: number, p3: number, p4: number, l: ds.P4): P111144;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P111148 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required uint32 p4 = 5;
     *   required ds.P8 l = 6;
     * }
     * ```
     */
    interface P111148 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        p4: number;
        /** required: 6 */
        l: ds.P8;
    }
    namespace P111148 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            p4 = 5,
            l = 6,
        }
        function $create(p0: number, p1: number, p2: number, p3: number, p4: number, l: ds.P8): P111148;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P11114D {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required uint32 p4 = 5;
     *   required ds.PD l = 6;
     * }
     * ```
     */
    interface P11114D {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        p4: number;
        /** required: 6 */
        l: ds.PD;
    }
    namespace P11114D {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            p4 = 5,
            l = 6,
        }
        function $create(p0: number, p1: number, p2: number, p3: number, p4: number, l: ds.PD): P11114D;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P11114K {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required uint32 p4 = 5;
     *   required ds.PK l = 6;
     * }
     * ```
     */
    interface P11114K {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        p4: number;
        /** required: 6 */
        l: ds.PK;
    }
    namespace P11114K {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            p4 = 5,
            l = 6,
        }
        function $create(p0: number, p1: number, p2: number, p3: number, p4: number, l: ds.PK): P11114K;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P11114S {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required uint32 p4 = 5;
     *   required ds.PS l = 6;
     * }
     * ```
     */
    interface P11114S {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        p4: number;
        /** required: 6 */
        l: ds.PS;
    }
    namespace P11114S {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            p4 = 5,
            l = 6,
        }
        function $create(p0: number, p1: number, p2: number, p3: number, p4: number, l: ds.PS): P11114S;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P11 {
     *   required int8 p0 = 1;
     *   required ds.P1 l = 2;
     * }
     * ```
     */
    interface P11 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        l: ds.P1;
    }
    namespace P11 {
        const enum $f {
            p0 = 1,
            l = 2,
        }
        function $create(p0: number, l: ds.P1): P11;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P14 {
     *   required int8 p0 = 1;
     *   required ds.P4 l = 2;
     * }
     * ```
     */
    interface P14 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        l: ds.P4;
    }
    namespace P14 {
        const enum $f {
            p0 = 1,
            l = 2,
        }
        function $create(p0: number, l: ds.P4): P14;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P18 {
     *   required int8 p0 = 1;
     *   required ds.P8 l = 2;
     * }
     * ```
     */
    interface P18 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        l: ds.P8;
    }
    namespace P18 {
        const enum $f {
            p0 = 1,
            l = 2,
        }
        function $create(p0: number, l: ds.P8): P18;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1D {
     *   required int8 p0 = 1;
     *   required ds.PD l = 2;
     * }
     * ```
     */
    interface P1D {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        l: ds.PD;
    }
    namespace P1D {
        const enum $f {
            p0 = 1,
            l = 2,
        }
        function $create(p0: number, l: ds.PD): P1D;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1K {
     *   required int8 p0 = 1;
     *   required ds.PK l = 2;
     * }
     * ```
     */
    interface P1K {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        l: ds.PK;
    }
    namespace P1K {
        const enum $f {
            p0 = 1,
            l = 2,
        }
        function $create(p0: number, l: ds.PK): P1K;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1S {
     *   required int8 p0 = 1;
     *   required ds.PS l = 2;
     * }
     * ```
     */
    interface P1S {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        l: ds.PS;
    }
    namespace P1S {
        const enum $f {
            p0 = 1,
            l = 2,
        }
        function $create(p0: number, l: ds.PS): P1S;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P111K11 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required bytes p3 = 4;
     *   required int8 p4 = 5;
     *   required ds.P1 l = 6;
     * }
     * ```
     */
    interface P111K11 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: string;
        /** required: 5 */
        p4: number;
        /** required: 6 */
        l: ds.P1;
    }
    namespace P111K11 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            p4 = 5,
            l = 6,
        }
        function $create(p0: number, p1: number, p2: number, p3: string, p4: number, l: ds.P1): P111K11;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P111K14 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required bytes p3 = 4;
     *   required int8 p4 = 5;
     *   required ds.P4 l = 6;
     * }
     * ```
     */
    interface P111K14 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: string;
        /** required: 5 */
        p4: number;
        /** required: 6 */
        l: ds.P4;
    }
    namespace P111K14 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            p4 = 5,
            l = 6,
        }
        function $create(p0: number, p1: number, p2: number, p3: string, p4: number, l: ds.P4): P111K14;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P111K18 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required bytes p3 = 4;
     *   required int8 p4 = 5;
     *   required ds.P8 l = 6;
     * }
     * ```
     */
    interface P111K18 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: string;
        /** required: 5 */
        p4: number;
        /** required: 6 */
        l: ds.P8;
    }
    namespace P111K18 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            p4 = 5,
            l = 6,
        }
        function $create(p0: number, p1: number, p2: number, p3: string, p4: number, l: ds.P8): P111K18;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P111K1D {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required bytes p3 = 4;
     *   required int8 p4 = 5;
     *   required ds.PD l = 6;
     * }
     * ```
     */
    interface P111K1D {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: string;
        /** required: 5 */
        p4: number;
        /** required: 6 */
        l: ds.PD;
    }
    namespace P111K1D {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            p4 = 5,
            l = 6,
        }
        function $create(p0: number, p1: number, p2: number, p3: string, p4: number, l: ds.PD): P111K1D;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P111K1K {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required bytes p3 = 4;
     *   required int8 p4 = 5;
     *   required ds.PK l = 6;
     * }
     * ```
     */
    interface P111K1K {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: string;
        /** required: 5 */
        p4: number;
        /** required: 6 */
        l: ds.PK;
    }
    namespace P111K1K {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            p4 = 5,
            l = 6,
        }
        function $create(p0: number, p1: number, p2: number, p3: string, p4: number, l: ds.PK): P111K1K;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P111K1S {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required bytes p3 = 4;
     *   required int8 p4 = 5;
     *   required ds.PS l = 6;
     * }
     * ```
     */
    interface P111K1S {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: string;
        /** required: 5 */
        p4: number;
        /** required: 6 */
        l: ds.PS;
    }
    namespace P111K1S {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            p4 = 5,
            l = 6,
        }
        function $create(p0: number, p1: number, p2: number, p3: string, p4: number, l: ds.PS): P111K1S;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1441 {
     *   required int8 p0 = 1;
     *   required uint32 p1 = 2;
     *   required uint32 p2 = 3;
     *   required ds.P1 l = 4;
     * }
     * ```
     */
    interface P1441 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        l: ds.P1;
    }
    namespace P1441 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(p0: number, p1: number, p2: number, l: ds.P1): P1441;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1444 {
     *   required int8 p0 = 1;
     *   required uint32 p1 = 2;
     *   required uint32 p2 = 3;
     *   required ds.P4 l = 4;
     * }
     * ```
     */
    interface P1444 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        l: ds.P4;
    }
    namespace P1444 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(p0: number, p1: number, p2: number, l: ds.P4): P1444;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1448 {
     *   required int8 p0 = 1;
     *   required uint32 p1 = 2;
     *   required uint32 p2 = 3;
     *   required ds.P8 l = 4;
     * }
     * ```
     */
    interface P1448 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        l: ds.P8;
    }
    namespace P1448 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(p0: number, p1: number, p2: number, l: ds.P8): P1448;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P144D {
     *   required int8 p0 = 1;
     *   required uint32 p1 = 2;
     *   required uint32 p2 = 3;
     *   required ds.PD l = 4;
     * }
     * ```
     */
    interface P144D {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        l: ds.PD;
    }
    namespace P144D {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(p0: number, p1: number, p2: number, l: ds.PD): P144D;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P144K {
     *   required int8 p0 = 1;
     *   required uint32 p1 = 2;
     *   required uint32 p2 = 3;
     *   required ds.PK l = 4;
     * }
     * ```
     */
    interface P144K {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        l: ds.PK;
    }
    namespace P144K {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(p0: number, p1: number, p2: number, l: ds.PK): P144K;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P144S {
     *   required int8 p0 = 1;
     *   required uint32 p1 = 2;
     *   required uint32 p2 = 3;
     *   required ds.PS l = 4;
     * }
     * ```
     */
    interface P144S {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        l: ds.PS;
    }
    namespace P144S {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(p0: number, p1: number, p2: number, l: ds.PS): P144S;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1111 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required ds.P1 l = 4;
     * }
     * ```
     */
    interface P1111 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        l: ds.P1;
    }
    namespace P1111 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(p0: number, p1: number, p2: number, l: ds.P1): P1111;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1114 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required ds.P4 l = 4;
     * }
     * ```
     */
    interface P1114 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        l: ds.P4;
    }
    namespace P1114 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(p0: number, p1: number, p2: number, l: ds.P4): P1114;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1118 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required ds.P8 l = 4;
     * }
     * ```
     */
    interface P1118 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        l: ds.P8;
    }
    namespace P1118 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(p0: number, p1: number, p2: number, l: ds.P8): P1118;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P111D {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required ds.PD l = 4;
     * }
     * ```
     */
    interface P111D {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        l: ds.PD;
    }
    namespace P111D {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(p0: number, p1: number, p2: number, l: ds.PD): P111D;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P111K {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required ds.PK l = 4;
     * }
     * ```
     */
    interface P111K {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        l: ds.PK;
    }
    namespace P111K {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(p0: number, p1: number, p2: number, l: ds.PK): P111K;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P111S {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required ds.PS l = 4;
     * }
     * ```
     */
    interface P111S {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        l: ds.PS;
    }
    namespace P111S {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(p0: number, p1: number, p2: number, l: ds.PS): P111S;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P11S1 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required string p2 = 3;
     *   required ds.P1 l = 4;
     * }
     * ```
     */
    interface P11S1 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: string;
        /** required: 4 */
        l: ds.P1;
    }
    namespace P11S1 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(p0: number, p1: number, p2: string, l: ds.P1): P11S1;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P11S4 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required string p2 = 3;
     *   required ds.P4 l = 4;
     * }
     * ```
     */
    interface P11S4 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: string;
        /** required: 4 */
        l: ds.P4;
    }
    namespace P11S4 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(p0: number, p1: number, p2: string, l: ds.P4): P11S4;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P11S8 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required string p2 = 3;
     *   required ds.P8 l = 4;
     * }
     * ```
     */
    interface P11S8 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: string;
        /** required: 4 */
        l: ds.P8;
    }
    namespace P11S8 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(p0: number, p1: number, p2: string, l: ds.P8): P11S8;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P11SD {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required string p2 = 3;
     *   required ds.PD l = 4;
     * }
     * ```
     */
    interface P11SD {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: string;
        /** required: 4 */
        l: ds.PD;
    }
    namespace P11SD {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(p0: number, p1: number, p2: string, l: ds.PD): P11SD;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P11SK {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required string p2 = 3;
     *   required ds.PK l = 4;
     * }
     * ```
     */
    interface P11SK {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: string;
        /** required: 4 */
        l: ds.PK;
    }
    namespace P11SK {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(p0: number, p1: number, p2: string, l: ds.PK): P11SK;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P11SS {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required string p2 = 3;
     *   required ds.PS l = 4;
     * }
     * ```
     */
    interface P11SS {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: string;
        /** required: 4 */
        l: ds.PS;
    }
    namespace P11SS {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(p0: number, p1: number, p2: string, l: ds.PS): P11SS;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1DK11 {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required bytes p2 = 3;
     *   required int8 p3 = 4;
     *   required ds.P1 l = 5;
     * }
     * ```
     */
    interface P1DK11 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: string;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        l: ds.P1;
    }
    namespace P1DK11 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            l = 5,
        }
        function $create(p0: number, p1: number, p2: string, p3: number, l: ds.P1): P1DK11;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1DK14 {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required bytes p2 = 3;
     *   required int8 p3 = 4;
     *   required ds.P4 l = 5;
     * }
     * ```
     */
    interface P1DK14 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: string;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        l: ds.P4;
    }
    namespace P1DK14 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            l = 5,
        }
        function $create(p0: number, p1: number, p2: string, p3: number, l: ds.P4): P1DK14;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1DK18 {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required bytes p2 = 3;
     *   required int8 p3 = 4;
     *   required ds.P8 l = 5;
     * }
     * ```
     */
    interface P1DK18 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: string;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        l: ds.P8;
    }
    namespace P1DK18 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            l = 5,
        }
        function $create(p0: number, p1: number, p2: string, p3: number, l: ds.P8): P1DK18;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1DK1D {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required bytes p2 = 3;
     *   required int8 p3 = 4;
     *   required ds.PD l = 5;
     * }
     * ```
     */
    interface P1DK1D {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: string;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        l: ds.PD;
    }
    namespace P1DK1D {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            l = 5,
        }
        function $create(p0: number, p1: number, p2: string, p3: number, l: ds.PD): P1DK1D;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1DK1K {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required bytes p2 = 3;
     *   required int8 p3 = 4;
     *   required ds.PK l = 5;
     * }
     * ```
     */
    interface P1DK1K {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: string;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        l: ds.PK;
    }
    namespace P1DK1K {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            l = 5,
        }
        function $create(p0: number, p1: number, p2: string, p3: number, l: ds.PK): P1DK1K;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1DK1S {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required bytes p2 = 3;
     *   required int8 p3 = 4;
     *   required ds.PS l = 5;
     * }
     * ```
     */
    interface P1DK1S {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: string;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        l: ds.PS;
    }
    namespace P1DK1S {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            l = 5,
        }
        function $create(p0: number, p1: number, p2: string, p3: number, l: ds.PS): P1DK1S;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P11141 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required uint32 p3 = 4;
     *   required ds.P1 l = 5;
     * }
     * ```
     */
    interface P11141 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        l: ds.P1;
    }
    namespace P11141 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            l = 5,
        }
        function $create(p0: number, p1: number, p2: number, p3: number, l: ds.P1): P11141;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P11144 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required uint32 p3 = 4;
     *   required ds.P4 l = 5;
     * }
     * ```
     */
    interface P11144 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        l: ds.P4;
    }
    namespace P11144 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            l = 5,
        }
        function $create(p0: number, p1: number, p2: number, p3: number, l: ds.P4): P11144;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P11148 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required uint32 p3 = 4;
     *   required ds.P8 l = 5;
     * }
     * ```
     */
    interface P11148 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        l: ds.P8;
    }
    namespace P11148 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            l = 5,
        }
        function $create(p0: number, p1: number, p2: number, p3: number, l: ds.P8): P11148;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1114D {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required uint32 p3 = 4;
     *   required ds.PD l = 5;
     * }
     * ```
     */
    interface P1114D {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        l: ds.PD;
    }
    namespace P1114D {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            l = 5,
        }
        function $create(p0: number, p1: number, p2: number, p3: number, l: ds.PD): P1114D;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1114K {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required uint32 p3 = 4;
     *   required ds.PK l = 5;
     * }
     * ```
     */
    interface P1114K {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        l: ds.PK;
    }
    namespace P1114K {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            l = 5,
        }
        function $create(p0: number, p1: number, p2: number, p3: number, l: ds.PK): P1114K;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message P1114S {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required uint32 p3 = 4;
     *   required ds.PS l = 5;
     * }
     * ```
     */
    interface P1114S {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        l: ds.PS;
    }
    namespace P1114S {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            l = 5,
        }
        function $create(p0: number, p1: number, p2: number, p3: number, l: ds.PS): P1114S;
        function $stringify(obj: any): string;
    }
}
