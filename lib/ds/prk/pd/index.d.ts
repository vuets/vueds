import { ds } from '../../';
export declare namespace pd {
    /**
     *
     * message PDD1 {
     *   required uint64 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P1 l = 3;
     * }
     */
    interface PDD1 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P1;
    }
    namespace PDD1 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.P1): PDD1;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PDD4 {
     *   required uint64 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P4 l = 3;
     * }
     */
    interface PDD4 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P4;
    }
    namespace PDD4 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.P4): PDD4;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PDD8 {
     *   required uint64 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P8 l = 3;
     * }
     */
    interface PDD8 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P8;
    }
    namespace PDD8 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.P8): PDD8;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PDDD {
     *   required uint64 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PD l = 3;
     * }
     */
    interface PDDD {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PD;
    }
    namespace PDDD {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.PD): PDDD;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PDDK {
     *   required uint64 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PK l = 3;
     * }
     */
    interface PDDK {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PK;
    }
    namespace PDDK {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.PK): PDDK;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PDDS {
     *   required uint64 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PS l = 3;
     * }
     */
    interface PDDS {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PS;
    }
    namespace PDDS {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.PS): PDDS;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PDS1 {
     *   required uint64 p0 = 1;
     *   required string p1 = 2;
     *   required ds.P1 l = 3;
     * }
     */
    interface PDS1 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.P1;
    }
    namespace PDS1 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: string, l: ds.P1): PDS1;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PDS4 {
     *   required uint64 p0 = 1;
     *   required string p1 = 2;
     *   required ds.P4 l = 3;
     * }
     */
    interface PDS4 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.P4;
    }
    namespace PDS4 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: string, l: ds.P4): PDS4;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PDS8 {
     *   required uint64 p0 = 1;
     *   required string p1 = 2;
     *   required ds.P8 l = 3;
     * }
     */
    interface PDS8 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.P8;
    }
    namespace PDS8 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: string, l: ds.P8): PDS8;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PDSD {
     *   required uint64 p0 = 1;
     *   required string p1 = 2;
     *   required ds.PD l = 3;
     * }
     */
    interface PDSD {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.PD;
    }
    namespace PDSD {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: string, l: ds.PD): PDSD;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PDSK {
     *   required uint64 p0 = 1;
     *   required string p1 = 2;
     *   required ds.PK l = 3;
     * }
     */
    interface PDSK {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.PK;
    }
    namespace PDSK {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: string, l: ds.PK): PDSK;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PDSS {
     *   required uint64 p0 = 1;
     *   required string p1 = 2;
     *   required ds.PS l = 3;
     * }
     */
    interface PDSS {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.PS;
    }
    namespace PDSS {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: string, l: ds.PS): PDSS;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PD1 {
     *   required uint64 p0 = 1;
     *   required ds.P1 l = 2;
     * }
     */
    interface PD1 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        l: ds.P1;
    }
    namespace PD1 {
        const enum $f {
            p0 = 1,
            l = 2,
        }
        function $create(p0: number, l: ds.P1): PD1;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PD4 {
     *   required uint64 p0 = 1;
     *   required ds.P4 l = 2;
     * }
     */
    interface PD4 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        l: ds.P4;
    }
    namespace PD4 {
        const enum $f {
            p0 = 1,
            l = 2,
        }
        function $create(p0: number, l: ds.P4): PD4;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PD8 {
     *   required uint64 p0 = 1;
     *   required ds.P8 l = 2;
     * }
     */
    interface PD8 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        l: ds.P8;
    }
    namespace PD8 {
        const enum $f {
            p0 = 1,
            l = 2,
        }
        function $create(p0: number, l: ds.P8): PD8;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PDD {
     *   required uint64 p0 = 1;
     *   required ds.PD l = 2;
     * }
     */
    interface PDD {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        l: ds.PD;
    }
    namespace PDD {
        const enum $f {
            p0 = 1,
            l = 2,
        }
        function $create(p0: number, l: ds.PD): PDD;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PDK {
     *   required uint64 p0 = 1;
     *   required ds.PK l = 2;
     * }
     */
    interface PDK {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        l: ds.PK;
    }
    namespace PDK {
        const enum $f {
            p0 = 1,
            l = 2,
        }
        function $create(p0: number, l: ds.PK): PDK;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PDS {
     *   required uint64 p0 = 1;
     *   required ds.PS l = 2;
     * }
     */
    interface PDS {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        l: ds.PS;
    }
    namespace PDS {
        const enum $f {
            p0 = 1,
            l = 2,
        }
        function $create(p0: number, l: ds.PS): PDS;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PDK1 {
     *   required uint64 p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.P1 l = 3;
     * }
     */
    interface PDK1 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.P1;
    }
    namespace PDK1 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: string, l: ds.P1): PDK1;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PDK4 {
     *   required uint64 p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.P4 l = 3;
     * }
     */
    interface PDK4 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.P4;
    }
    namespace PDK4 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: string, l: ds.P4): PDK4;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PDK8 {
     *   required uint64 p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.P8 l = 3;
     * }
     */
    interface PDK8 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.P8;
    }
    namespace PDK8 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: string, l: ds.P8): PDK8;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PDKD {
     *   required uint64 p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.PD l = 3;
     * }
     */
    interface PDKD {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.PD;
    }
    namespace PDKD {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: string, l: ds.PD): PDKD;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PDKK {
     *   required uint64 p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.PK l = 3;
     * }
     */
    interface PDKK {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.PK;
    }
    namespace PDKK {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: string, l: ds.PK): PDKK;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PDKS {
     *   required uint64 p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.PS l = 3;
     * }
     */
    interface PDKS {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: string;
        /** required: 3 */
        l: ds.PS;
    }
    namespace PDKS {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: string, l: ds.PS): PDKS;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PD11 {
     *   required uint64 p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.P1 l = 3;
     * }
     */
    interface PD11 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P1;
    }
    namespace PD11 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.P1): PD11;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PD14 {
     *   required uint64 p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.P4 l = 3;
     * }
     */
    interface PD14 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P4;
    }
    namespace PD14 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.P4): PD14;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PD18 {
     *   required uint64 p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.P8 l = 3;
     * }
     */
    interface PD18 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P8;
    }
    namespace PD18 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.P8): PD18;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PD1D {
     *   required uint64 p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.PD l = 3;
     * }
     */
    interface PD1D {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PD;
    }
    namespace PD1D {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.PD): PD1D;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PD1K {
     *   required uint64 p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.PK l = 3;
     * }
     */
    interface PD1K {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PK;
    }
    namespace PD1K {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.PK): PD1K;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PD1S {
     *   required uint64 p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.PS l = 3;
     * }
     */
    interface PD1S {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PS;
    }
    namespace PD1S {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.PS): PD1S;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PD81 {
     *   required uint64 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P1 l = 3;
     * }
     */
    interface PD81 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P1;
    }
    namespace PD81 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.P1): PD81;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PD84 {
     *   required uint64 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P4 l = 3;
     * }
     */
    interface PD84 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P4;
    }
    namespace PD84 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.P4): PD84;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PD88 {
     *   required uint64 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P8 l = 3;
     * }
     */
    interface PD88 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P8;
    }
    namespace PD88 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.P8): PD88;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PD8D {
     *   required uint64 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PD l = 3;
     * }
     */
    interface PD8D {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PD;
    }
    namespace PD8D {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.PD): PD8D;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PD8K {
     *   required uint64 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PK l = 3;
     * }
     */
    interface PD8K {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PK;
    }
    namespace PD8K {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.PK): PD8K;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PD8S {
     *   required uint64 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PS l = 3;
     * }
     */
    interface PD8S {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PS;
    }
    namespace PD8S {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.PS): PD8S;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PD41 {
     *   required uint64 p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.P1 l = 3;
     * }
     */
    interface PD41 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P1;
    }
    namespace PD41 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.P1): PD41;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PD44 {
     *   required uint64 p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.P4 l = 3;
     * }
     */
    interface PD44 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P4;
    }
    namespace PD44 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.P4): PD44;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PD48 {
     *   required uint64 p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.P8 l = 3;
     * }
     */
    interface PD48 {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.P8;
    }
    namespace PD48 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.P8): PD48;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PD4D {
     *   required uint64 p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.PD l = 3;
     * }
     */
    interface PD4D {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PD;
    }
    namespace PD4D {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.PD): PD4D;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PD4K {
     *   required uint64 p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.PK l = 3;
     * }
     */
    interface PD4K {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PK;
    }
    namespace PD4K {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.PK): PD4K;
        function $stringify(obj: any): string;
    }
    /**
     *
     * message PD4S {
     *   required uint64 p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.PS l = 3;
     * }
     */
    interface PD4S {
        /** required: 1 */
        p0: number;
        /** required: 2 */
        p1: number;
        /** required: 3 */
        l: ds.PS;
    }
    namespace PD4S {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(p0: number, p1: number, l: ds.PS): PD4S;
        function $stringify(obj: any): string;
    }
}
