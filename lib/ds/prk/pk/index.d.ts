import { ds } from '../../';
export declare namespace pk {
    /**
     * ```
     *
     * message PK111 {
     *   required bytes p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required ds.P1 l = 4;
     * }
     * ```
     */
    interface PK111 {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        l: ds.P1;
    }
    namespace PK111 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(p0: string, p1: number, p2: number, l: ds.P1): PK111;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message PK114 {
     *   required bytes p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required ds.P4 l = 4;
     * }
     * ```
     */
    interface PK114 {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        l: ds.P4;
    }
    namespace PK114 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(p0: string, p1: number, p2: number, l: ds.P4): PK114;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message PK118 {
     *   required bytes p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required ds.P8 l = 4;
     * }
     * ```
     */
    interface PK118 {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        l: ds.P8;
    }
    namespace PK118 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(p0: string, p1: number, p2: number, l: ds.P8): PK118;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message PK11D {
     *   required bytes p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required ds.PD l = 4;
     * }
     * ```
     */
    interface PK11D {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        l: ds.PD;
    }
    namespace PK11D {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(p0: string, p1: number, p2: number, l: ds.PD): PK11D;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message PK11K {
     *   required bytes p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required ds.PK l = 4;
     * }
     * ```
     */
    interface PK11K {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        l: ds.PK;
    }
    namespace PK11K {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(p0: string, p1: number, p2: number, l: ds.PK): PK11K;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message PK11S {
     *   required bytes p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required ds.PS l = 4;
     * }
     * ```
     */
    interface PK11S {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        l: ds.PS;
    }
    namespace PK11S {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(p0: string, p1: number, p2: number, l: ds.PS): PK11S;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message PK81 {
     *   required bytes p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P1 l = 3;
     * }
     * ```
     */
    interface PK81 {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P1;
    }
    namespace PK81 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: number, l: ds.P1): PK81;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message PK84 {
     *   required bytes p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P4 l = 3;
     * }
     * ```
     */
    interface PK84 {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P4;
    }
    namespace PK84 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: number, l: ds.P4): PK84;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message PK88 {
     *   required bytes p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P8 l = 3;
     * }
     * ```
     */
    interface PK88 {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P8;
    }
    namespace PK88 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: number, l: ds.P8): PK88;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message PK8D {
     *   required bytes p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PD l = 3;
     * }
     * ```
     */
    interface PK8D {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PD;
    }
    namespace PK8D {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: number, l: ds.PD): PK8D;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message PK8K {
     *   required bytes p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PK l = 3;
     * }
     * ```
     */
    interface PK8K {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PK;
    }
    namespace PK8K {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: number, l: ds.PK): PK8K;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message PK8S {
     *   required bytes p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PS l = 3;
     * }
     * ```
     */
    interface PK8S {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PS;
    }
    namespace PK8S {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: number, l: ds.PS): PK8S;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message PK1111 {
     *   required bytes p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required ds.P1 l = 5;
     * }
     * ```
     */
    interface PK1111 {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        l: ds.P1;
    }
    namespace PK1111 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            l = 5,
        }
        function $create(p0: string, p1: number, p2: number, p3: number, l: ds.P1): PK1111;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message PK1114 {
     *   required bytes p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required ds.P4 l = 5;
     * }
     * ```
     */
    interface PK1114 {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        l: ds.P4;
    }
    namespace PK1114 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            l = 5,
        }
        function $create(p0: string, p1: number, p2: number, p3: number, l: ds.P4): PK1114;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message PK1118 {
     *   required bytes p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required ds.P8 l = 5;
     * }
     * ```
     */
    interface PK1118 {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        l: ds.P8;
    }
    namespace PK1118 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            l = 5,
        }
        function $create(p0: string, p1: number, p2: number, p3: number, l: ds.P8): PK1118;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message PK111D {
     *   required bytes p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required ds.PD l = 5;
     * }
     * ```
     */
    interface PK111D {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        l: ds.PD;
    }
    namespace PK111D {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            l = 5,
        }
        function $create(p0: string, p1: number, p2: number, p3: number, l: ds.PD): PK111D;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message PK111K {
     *   required bytes p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required ds.PK l = 5;
     * }
     * ```
     */
    interface PK111K {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        l: ds.PK;
    }
    namespace PK111K {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            l = 5,
        }
        function $create(p0: string, p1: number, p2: number, p3: number, l: ds.PK): PK111K;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message PK111S {
     *   required bytes p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required ds.PS l = 5;
     * }
     * ```
     */
    interface PK111S {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        p3: number;
        /** required: 5 */
        l: ds.PS;
    }
    namespace PK111S {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            p3 = 4,
            l = 5,
        }
        function $create(p0: string, p1: number, p2: number, p3: number, l: ds.PS): PK111S;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message PK11 {
     *   required bytes p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.P1 l = 3;
     * }
     * ```
     */
    interface PK11 {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P1;
    }
    namespace PK11 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: number, l: ds.P1): PK11;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message PK14 {
     *   required bytes p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.P4 l = 3;
     * }
     * ```
     */
    interface PK14 {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P4;
    }
    namespace PK14 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: number, l: ds.P4): PK14;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message PK18 {
     *   required bytes p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.P8 l = 3;
     * }
     * ```
     */
    interface PK18 {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P8;
    }
    namespace PK18 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: number, l: ds.P8): PK18;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message PK1D {
     *   required bytes p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.PD l = 3;
     * }
     * ```
     */
    interface PK1D {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PD;
    }
    namespace PK1D {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: number, l: ds.PD): PK1D;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message PK1K {
     *   required bytes p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.PK l = 3;
     * }
     * ```
     */
    interface PK1K {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PK;
    }
    namespace PK1K {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: number, l: ds.PK): PK1K;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message PK1S {
     *   required bytes p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.PS l = 3;
     * }
     * ```
     */
    interface PK1S {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PS;
    }
    namespace PK1S {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: number, l: ds.PS): PK1S;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message PKK1 {
     *   required bytes p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.P1 l = 3;
     * }
     * ```
     */
    interface PKK1 {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.P1;
    }
    namespace PKK1 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: string, l: ds.P1): PKK1;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message PKK4 {
     *   required bytes p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.P4 l = 3;
     * }
     * ```
     */
    interface PKK4 {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.P4;
    }
    namespace PKK4 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: string, l: ds.P4): PKK4;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message PKK8 {
     *   required bytes p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.P8 l = 3;
     * }
     * ```
     */
    interface PKK8 {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.P8;
    }
    namespace PKK8 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: string, l: ds.P8): PKK8;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message PKKD {
     *   required bytes p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.PD l = 3;
     * }
     * ```
     */
    interface PKKD {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.PD;
    }
    namespace PKKD {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: string, l: ds.PD): PKKD;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message PKKK {
     *   required bytes p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.PK l = 3;
     * }
     * ```
     */
    interface PKKK {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.PK;
    }
    namespace PKKK {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: string, l: ds.PK): PKKK;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message PKKS {
     *   required bytes p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.PS l = 3;
     * }
     * ```
     */
    interface PKKS {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.PS;
    }
    namespace PKKS {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: string, l: ds.PS): PKKS;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message PK1 {
     *   required bytes p0 = 1;
     *   required ds.P1 l = 2;
     * }
     * ```
     */
    interface PK1 {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        l: ds.P1;
    }
    namespace PK1 {
        const enum $f {
            p0 = 1,
            l = 2,
        }
        function $create(p0: string, l: ds.P1): PK1;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message PK4 {
     *   required bytes p0 = 1;
     *   required ds.P4 l = 2;
     * }
     * ```
     */
    interface PK4 {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        l: ds.P4;
    }
    namespace PK4 {
        const enum $f {
            p0 = 1,
            l = 2,
        }
        function $create(p0: string, l: ds.P4): PK4;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message PK8 {
     *   required bytes p0 = 1;
     *   required ds.P8 l = 2;
     * }
     * ```
     */
    interface PK8 {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        l: ds.P8;
    }
    namespace PK8 {
        const enum $f {
            p0 = 1,
            l = 2,
        }
        function $create(p0: string, l: ds.P8): PK8;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message PKD {
     *   required bytes p0 = 1;
     *   required ds.PD l = 2;
     * }
     * ```
     */
    interface PKD {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        l: ds.PD;
    }
    namespace PKD {
        const enum $f {
            p0 = 1,
            l = 2,
        }
        function $create(p0: string, l: ds.PD): PKD;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message PKK {
     *   required bytes p0 = 1;
     *   required ds.PK l = 2;
     * }
     * ```
     */
    interface PKK {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        l: ds.PK;
    }
    namespace PKK {
        const enum $f {
            p0 = 1,
            l = 2,
        }
        function $create(p0: string, l: ds.PK): PKK;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message PKS {
     *   required bytes p0 = 1;
     *   required ds.PS l = 2;
     * }
     * ```
     */
    interface PKS {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        l: ds.PS;
    }
    namespace PKS {
        const enum $f {
            p0 = 1,
            l = 2,
        }
        function $create(p0: string, l: ds.PS): PKS;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message PKD1 {
     *   required bytes p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P1 l = 3;
     * }
     * ```
     */
    interface PKD1 {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P1;
    }
    namespace PKD1 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: number, l: ds.P1): PKD1;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message PKD4 {
     *   required bytes p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P4 l = 3;
     * }
     * ```
     */
    interface PKD4 {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P4;
    }
    namespace PKD4 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: number, l: ds.P4): PKD4;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message PKD8 {
     *   required bytes p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P8 l = 3;
     * }
     * ```
     */
    interface PKD8 {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P8;
    }
    namespace PKD8 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: number, l: ds.P8): PKD8;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message PKDD {
     *   required bytes p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PD l = 3;
     * }
     * ```
     */
    interface PKDD {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PD;
    }
    namespace PKDD {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: number, l: ds.PD): PKDD;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message PKDK {
     *   required bytes p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PK l = 3;
     * }
     * ```
     */
    interface PKDK {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PK;
    }
    namespace PKDK {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: number, l: ds.PK): PKDK;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message PKDS {
     *   required bytes p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PS l = 3;
     * }
     * ```
     */
    interface PKDS {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PS;
    }
    namespace PKDS {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: number, l: ds.PS): PKDS;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message PK41 {
     *   required bytes p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.P1 l = 3;
     * }
     * ```
     */
    interface PK41 {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P1;
    }
    namespace PK41 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: number, l: ds.P1): PK41;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message PK44 {
     *   required bytes p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.P4 l = 3;
     * }
     * ```
     */
    interface PK44 {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P4;
    }
    namespace PK44 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: number, l: ds.P4): PK44;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message PK48 {
     *   required bytes p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.P8 l = 3;
     * }
     * ```
     */
    interface PK48 {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P8;
    }
    namespace PK48 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: number, l: ds.P8): PK48;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message PK4D {
     *   required bytes p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.PD l = 3;
     * }
     * ```
     */
    interface PK4D {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PD;
    }
    namespace PK4D {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: number, l: ds.PD): PK4D;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message PK4K {
     *   required bytes p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.PK l = 3;
     * }
     * ```
     */
    interface PK4K {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PK;
    }
    namespace PK4K {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: number, l: ds.PK): PK4K;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message PK4S {
     *   required bytes p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.PS l = 3;
     * }
     * ```
     */
    interface PK4S {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PS;
    }
    namespace PK4S {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: number, l: ds.PS): PK4S;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message PKS1 {
     *   required bytes p0 = 1;
     *   required string p1 = 2;
     *   required ds.P1 l = 3;
     * }
     * ```
     */
    interface PKS1 {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.P1;
    }
    namespace PKS1 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: string, l: ds.P1): PKS1;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message PKS4 {
     *   required bytes p0 = 1;
     *   required string p1 = 2;
     *   required ds.P4 l = 3;
     * }
     * ```
     */
    interface PKS4 {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.P4;
    }
    namespace PKS4 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: string, l: ds.P4): PKS4;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message PKS8 {
     *   required bytes p0 = 1;
     *   required string p1 = 2;
     *   required ds.P8 l = 3;
     * }
     * ```
     */
    interface PKS8 {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.P8;
    }
    namespace PKS8 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: string, l: ds.P8): PKS8;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message PKSD {
     *   required bytes p0 = 1;
     *   required string p1 = 2;
     *   required ds.PD l = 3;
     * }
     * ```
     */
    interface PKSD {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.PD;
    }
    namespace PKSD {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: string, l: ds.PD): PKSD;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message PKSK {
     *   required bytes p0 = 1;
     *   required string p1 = 2;
     *   required ds.PK l = 3;
     * }
     * ```
     */
    interface PKSK {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.PK;
    }
    namespace PKSK {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: string, l: ds.PK): PKSK;
        function $stringify(obj: any): string;
    }
    /**
     * ```
     *
     * message PKSS {
     *   required bytes p0 = 1;
     *   required string p1 = 2;
     *   required ds.PS l = 3;
     * }
     * ```
     */
    interface PKSS {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.PS;
    }
    namespace PKSS {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: string, l: ds.PS): PKSS;
        function $stringify(obj: any): string;
    }
}
