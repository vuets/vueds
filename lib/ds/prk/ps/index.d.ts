import { ds } from '../../';
export declare namespace ps {
    /**
     *
     * message PSK1 {
     *   required string p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.P1 l = 3;
     * }
     */
    interface PSK1 {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.P1;
    }
    namespace PSK1 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: string, l: ds.P1): PSK1;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PSK4 {
     *   required string p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.P4 l = 3;
     * }
     */
    interface PSK4 {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.P4;
    }
    namespace PSK4 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: string, l: ds.P4): PSK4;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PSK8 {
     *   required string p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.P8 l = 3;
     * }
     */
    interface PSK8 {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.P8;
    }
    namespace PSK8 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: string, l: ds.P8): PSK8;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PSKD {
     *   required string p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.PD l = 3;
     * }
     */
    interface PSKD {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.PD;
    }
    namespace PSKD {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: string, l: ds.PD): PSKD;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PSKK {
     *   required string p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.PK l = 3;
     * }
     */
    interface PSKK {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.PK;
    }
    namespace PSKK {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: string, l: ds.PK): PSKK;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PSKS {
     *   required string p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.PS l = 3;
     * }
     */
    interface PSKS {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.PS;
    }
    namespace PSKS {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: string, l: ds.PS): PSKS;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PS111 {
     *   required string p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required ds.P1 l = 4;
     * }
     */
    interface PS111 {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        l: ds.P1;
    }
    namespace PS111 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(p0: string, p1: number, p2: number, l: ds.P1): PS111;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PS114 {
     *   required string p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required ds.P4 l = 4;
     * }
     */
    interface PS114 {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        l: ds.P4;
    }
    namespace PS114 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(p0: string, p1: number, p2: number, l: ds.P4): PS114;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PS118 {
     *   required string p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required ds.P8 l = 4;
     * }
     */
    interface PS118 {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        l: ds.P8;
    }
    namespace PS118 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(p0: string, p1: number, p2: number, l: ds.P8): PS118;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PS11D {
     *   required string p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required ds.PD l = 4;
     * }
     */
    interface PS11D {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        l: ds.PD;
    }
    namespace PS11D {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(p0: string, p1: number, p2: number, l: ds.PD): PS11D;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PS11K {
     *   required string p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required ds.PK l = 4;
     * }
     */
    interface PS11K {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        l: ds.PK;
    }
    namespace PS11K {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(p0: string, p1: number, p2: number, l: ds.PK): PS11K;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PS11S {
     *   required string p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required ds.PS l = 4;
     * }
     */
    interface PS11S {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        p2: number;
        /** required: 4 */
        l: ds.PS;
    }
    namespace PS11S {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(p0: string, p1: number, p2: number, l: ds.PS): PS11S;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PSD1 {
     *   required string p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P1 l = 3;
     * }
     */
    interface PSD1 {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P1;
    }
    namespace PSD1 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: number, l: ds.P1): PSD1;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PSD4 {
     *   required string p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P4 l = 3;
     * }
     */
    interface PSD4 {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P4;
    }
    namespace PSD4 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: number, l: ds.P4): PSD4;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PSD8 {
     *   required string p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P8 l = 3;
     * }
     */
    interface PSD8 {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P8;
    }
    namespace PSD8 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: number, l: ds.P8): PSD8;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PSDD {
     *   required string p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PD l = 3;
     * }
     */
    interface PSDD {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PD;
    }
    namespace PSDD {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: number, l: ds.PD): PSDD;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PSDK {
     *   required string p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PK l = 3;
     * }
     */
    interface PSDK {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PK;
    }
    namespace PSDK {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: number, l: ds.PK): PSDK;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PSDS {
     *   required string p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PS l = 3;
     * }
     */
    interface PSDS {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PS;
    }
    namespace PSDS {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: number, l: ds.PS): PSDS;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PS41 {
     *   required string p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.P1 l = 3;
     * }
     */
    interface PS41 {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P1;
    }
    namespace PS41 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: number, l: ds.P1): PS41;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PS44 {
     *   required string p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.P4 l = 3;
     * }
     */
    interface PS44 {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P4;
    }
    namespace PS44 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: number, l: ds.P4): PS44;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PS48 {
     *   required string p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.P8 l = 3;
     * }
     */
    interface PS48 {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P8;
    }
    namespace PS48 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: number, l: ds.P8): PS48;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PS4D {
     *   required string p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.PD l = 3;
     * }
     */
    interface PS4D {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PD;
    }
    namespace PS4D {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: number, l: ds.PD): PS4D;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PS4K {
     *   required string p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.PK l = 3;
     * }
     */
    interface PS4K {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PK;
    }
    namespace PS4K {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: number, l: ds.PK): PS4K;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PS4S {
     *   required string p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.PS l = 3;
     * }
     */
    interface PS4S {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PS;
    }
    namespace PS4S {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: number, l: ds.PS): PS4S;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PSS1 {
     *   required string p0 = 1;
     *   required string p1 = 2;
     *   required ds.P1 l = 3;
     * }
     */
    interface PSS1 {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.P1;
    }
    namespace PSS1 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: string, l: ds.P1): PSS1;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PSS4 {
     *   required string p0 = 1;
     *   required string p1 = 2;
     *   required ds.P4 l = 3;
     * }
     */
    interface PSS4 {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.P4;
    }
    namespace PSS4 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: string, l: ds.P4): PSS4;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PSS8 {
     *   required string p0 = 1;
     *   required string p1 = 2;
     *   required ds.P8 l = 3;
     * }
     */
    interface PSS8 {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.P8;
    }
    namespace PSS8 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: string, l: ds.P8): PSS8;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PSSD {
     *   required string p0 = 1;
     *   required string p1 = 2;
     *   required ds.PD l = 3;
     * }
     */
    interface PSSD {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.PD;
    }
    namespace PSSD {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: string, l: ds.PD): PSSD;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PSSK {
     *   required string p0 = 1;
     *   required string p1 = 2;
     *   required ds.PK l = 3;
     * }
     */
    interface PSSK {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.PK;
    }
    namespace PSSK {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: string, l: ds.PK): PSSK;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PSSS {
     *   required string p0 = 1;
     *   required string p1 = 2;
     *   required ds.PS l = 3;
     * }
     */
    interface PSSS {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.PS;
    }
    namespace PSSS {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: string, l: ds.PS): PSSS;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PS11 {
     *   required string p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.P1 l = 3;
     * }
     */
    interface PS11 {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P1;
    }
    namespace PS11 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: number, l: ds.P1): PS11;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PS14 {
     *   required string p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.P4 l = 3;
     * }
     */
    interface PS14 {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P4;
    }
    namespace PS14 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: number, l: ds.P4): PS14;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PS18 {
     *   required string p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.P8 l = 3;
     * }
     */
    interface PS18 {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P8;
    }
    namespace PS18 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: number, l: ds.P8): PS18;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PS1D {
     *   required string p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.PD l = 3;
     * }
     */
    interface PS1D {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PD;
    }
    namespace PS1D {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: number, l: ds.PD): PS1D;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PS1K {
     *   required string p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.PK l = 3;
     * }
     */
    interface PS1K {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PK;
    }
    namespace PS1K {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: number, l: ds.PK): PS1K;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PS1S {
     *   required string p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.PS l = 3;
     * }
     */
    interface PS1S {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PS;
    }
    namespace PS1S {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: number, l: ds.PS): PS1S;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PS81 {
     *   required string p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P1 l = 3;
     * }
     */
    interface PS81 {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P1;
    }
    namespace PS81 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: number, l: ds.P1): PS81;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PS84 {
     *   required string p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P4 l = 3;
     * }
     */
    interface PS84 {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P4;
    }
    namespace PS84 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: number, l: ds.P4): PS84;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PS88 {
     *   required string p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P8 l = 3;
     * }
     */
    interface PS88 {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P8;
    }
    namespace PS88 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: number, l: ds.P8): PS88;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PS8D {
     *   required string p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PD l = 3;
     * }
     */
    interface PS8D {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PD;
    }
    namespace PS8D {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: number, l: ds.PD): PS8D;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PS8K {
     *   required string p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PK l = 3;
     * }
     */
    interface PS8K {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PK;
    }
    namespace PS8K {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: number, l: ds.PK): PS8K;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PS8S {
     *   required string p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PS l = 3;
     * }
     */
    interface PS8S {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PS;
    }
    namespace PS8S {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: string, p1: number, l: ds.PS): PS8S;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PS1 {
     *   required string p0 = 1;
     *   required ds.P1 l = 2;
     * }
     */
    interface PS1 {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        l: ds.P1;
    }
    namespace PS1 {
        const enum $f {
            p0 = 1,
            l = 2,
        }
        function $create(p0: string, l: ds.P1): PS1;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PS4 {
     *   required string p0 = 1;
     *   required ds.P4 l = 2;
     * }
     */
    interface PS4 {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        l: ds.P4;
    }
    namespace PS4 {
        const enum $f {
            p0 = 1,
            l = 2,
        }
        function $create(p0: string, l: ds.P4): PS4;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PS8 {
     *   required string p0 = 1;
     *   required ds.P8 l = 2;
     * }
     */
    interface PS8 {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        l: ds.P8;
    }
    namespace PS8 {
        const enum $f {
            p0 = 1,
            l = 2,
        }
        function $create(p0: string, l: ds.P8): PS8;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PSD {
     *   required string p0 = 1;
     *   required ds.PD l = 2;
     * }
     */
    interface PSD {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        l: ds.PD;
    }
    namespace PSD {
        const enum $f {
            p0 = 1,
            l = 2,
        }
        function $create(p0: string, l: ds.PD): PSD;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PSK {
     *   required string p0 = 1;
     *   required ds.PK l = 2;
     * }
     */
    interface PSK {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        l: ds.PK;
    }
    namespace PSK {
        const enum $f {
            p0 = 1,
            l = 2,
        }
        function $create(p0: string, l: ds.PK): PSK;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PSS {
     *   required string p0 = 1;
     *   required ds.PS l = 2;
     * }
     */
    interface PSS {
        /** required: 1 */
        p0: string;
        /** required: 2 */
        l: ds.PS;
    }
    namespace PSS {
        const enum $f {
            p0 = 1,
            l = 2,
        }
        function $create(p0: string, l: ds.PS): PSS;
        function $stringify(obj: any): string;
    }
}
