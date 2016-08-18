import { ds } from '../../';
export declare namespace ps {
    interface PSK1 {
        p0: string;
        p1: string;
        l: ds.P1;
    }
    namespace PSK1 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(): PSK1;
        function create(p0: string, p1: string, l: ds.P1): PSK1;
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
            };
            $fdf: string[];
            $: {
                p0: number;
                p1: number;
                l: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    interface PSK4 {
        p0: string;
        p1: string;
        l: ds.P4;
    }
    namespace PSK4 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(): PSK4;
        function create(p0: string, p1: string, l: ds.P4): PSK4;
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
            };
            $fdf: string[];
            $: {
                p0: number;
                p1: number;
                l: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    interface PSK8 {
        p0: string;
        p1: string;
        l: ds.P8;
    }
    namespace PSK8 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(): PSK8;
        function create(p0: string, p1: string, l: ds.P8): PSK8;
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
            };
            $fdf: string[];
            $: {
                p0: number;
                p1: number;
                l: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    interface PSKD {
        p0: string;
        p1: string;
        l: ds.PD;
    }
    namespace PSKD {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(): PSKD;
        function create(p0: string, p1: string, l: ds.PD): PSKD;
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
            };
            $fdf: string[];
            $: {
                p0: number;
                p1: number;
                l: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    interface PSKK {
        p0: string;
        p1: string;
        l: ds.PK;
    }
    namespace PSKK {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(): PSKK;
        function create(p0: string, p1: string, l: ds.PK): PSKK;
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
            };
            $fdf: string[];
            $: {
                p0: number;
                p1: number;
                l: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    interface PSKS {
        p0: string;
        p1: string;
        l: ds.PS;
    }
    namespace PSKS {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(): PSKS;
        function create(p0: string, p1: string, l: ds.PS): PSKS;
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
            };
            $fdf: string[];
            $: {
                p0: number;
                p1: number;
                l: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    interface PS111 {
        p0: string;
        p1: number;
        p2: number;
        l: ds.P1;
    }
    namespace PS111 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(): PS111;
        function create(p0: string, p1: number, p2: number, l: ds.P1): PS111;
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
            };
            $fdf: string[];
            $: {
                p0: number;
                p1: number;
                p2: number;
                l: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    interface PS114 {
        p0: string;
        p1: number;
        p2: number;
        l: ds.P4;
    }
    namespace PS114 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(): PS114;
        function create(p0: string, p1: number, p2: number, l: ds.P4): PS114;
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
            };
            $fdf: string[];
            $: {
                p0: number;
                p1: number;
                p2: number;
                l: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    interface PS118 {
        p0: string;
        p1: number;
        p2: number;
        l: ds.P8;
    }
    namespace PS118 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(): PS118;
        function create(p0: string, p1: number, p2: number, l: ds.P8): PS118;
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
            };
            $fdf: string[];
            $: {
                p0: number;
                p1: number;
                p2: number;
                l: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    interface PS11D {
        p0: string;
        p1: number;
        p2: number;
        l: ds.PD;
    }
    namespace PS11D {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(): PS11D;
        function create(p0: string, p1: number, p2: number, l: ds.PD): PS11D;
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
            };
            $fdf: string[];
            $: {
                p0: number;
                p1: number;
                p2: number;
                l: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    interface PS11K {
        p0: string;
        p1: number;
        p2: number;
        l: ds.PK;
    }
    namespace PS11K {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(): PS11K;
        function create(p0: string, p1: number, p2: number, l: ds.PK): PS11K;
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
            };
            $fdf: string[];
            $: {
                p0: number;
                p1: number;
                p2: number;
                l: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    interface PS11S {
        p0: string;
        p1: number;
        p2: number;
        l: ds.PS;
    }
    namespace PS11S {
        const enum $f {
            p0 = 1,
            p1 = 2,
            p2 = 3,
            l = 4,
        }
        function $create(): PS11S;
        function create(p0: string, p1: number, p2: number, l: ds.PS): PS11S;
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
            };
            $fdf: string[];
            $: {
                p0: number;
                p1: number;
                p2: number;
                l: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    interface PSD1 {
        p0: string;
        p1: number;
        l: ds.P1;
    }
    namespace PSD1 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(): PSD1;
        function create(p0: string, p1: number, l: ds.P1): PSD1;
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
            };
            $fdf: string[];
            $: {
                p0: number;
                p1: number;
                l: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    interface PSD4 {
        p0: string;
        p1: number;
        l: ds.P4;
    }
    namespace PSD4 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(): PSD4;
        function create(p0: string, p1: number, l: ds.P4): PSD4;
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
            };
            $fdf: string[];
            $: {
                p0: number;
                p1: number;
                l: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    interface PSD8 {
        p0: string;
        p1: number;
        l: ds.P8;
    }
    namespace PSD8 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(): PSD8;
        function create(p0: string, p1: number, l: ds.P8): PSD8;
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
            };
            $fdf: string[];
            $: {
                p0: number;
                p1: number;
                l: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    interface PSDD {
        p0: string;
        p1: number;
        l: ds.PD;
    }
    namespace PSDD {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(): PSDD;
        function create(p0: string, p1: number, l: ds.PD): PSDD;
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
            };
            $fdf: string[];
            $: {
                p0: number;
                p1: number;
                l: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    interface PSDK {
        p0: string;
        p1: number;
        l: ds.PK;
    }
    namespace PSDK {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(): PSDK;
        function create(p0: string, p1: number, l: ds.PK): PSDK;
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
            };
            $fdf: string[];
            $: {
                p0: number;
                p1: number;
                l: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    interface PSDS {
        p0: string;
        p1: number;
        l: ds.PS;
    }
    namespace PSDS {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(): PSDS;
        function create(p0: string, p1: number, l: ds.PS): PSDS;
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
            };
            $fdf: string[];
            $: {
                p0: number;
                p1: number;
                l: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    interface PS41 {
        p0: string;
        p1: number;
        l: ds.P1;
    }
    namespace PS41 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(): PS41;
        function create(p0: string, p1: number, l: ds.P1): PS41;
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
            };
            $fdf: string[];
            $: {
                p0: number;
                p1: number;
                l: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    interface PS44 {
        p0: string;
        p1: number;
        l: ds.P4;
    }
    namespace PS44 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(): PS44;
        function create(p0: string, p1: number, l: ds.P4): PS44;
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
            };
            $fdf: string[];
            $: {
                p0: number;
                p1: number;
                l: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    interface PS48 {
        p0: string;
        p1: number;
        l: ds.P8;
    }
    namespace PS48 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(): PS48;
        function create(p0: string, p1: number, l: ds.P8): PS48;
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
            };
            $fdf: string[];
            $: {
                p0: number;
                p1: number;
                l: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    interface PS4D {
        p0: string;
        p1: number;
        l: ds.PD;
    }
    namespace PS4D {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(): PS4D;
        function create(p0: string, p1: number, l: ds.PD): PS4D;
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
            };
            $fdf: string[];
            $: {
                p0: number;
                p1: number;
                l: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    interface PS4K {
        p0: string;
        p1: number;
        l: ds.PK;
    }
    namespace PS4K {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(): PS4K;
        function create(p0: string, p1: number, l: ds.PK): PS4K;
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
            };
            $fdf: string[];
            $: {
                p0: number;
                p1: number;
                l: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    interface PS4S {
        p0: string;
        p1: number;
        l: ds.PS;
    }
    namespace PS4S {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(): PS4S;
        function create(p0: string, p1: number, l: ds.PS): PS4S;
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
            };
            $fdf: string[];
            $: {
                p0: number;
                p1: number;
                l: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    interface PSS1 {
        p0: string;
        p1: string;
        l: ds.P1;
    }
    namespace PSS1 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(): PSS1;
        function create(p0: string, p1: string, l: ds.P1): PSS1;
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
            };
            $fdf: string[];
            $: {
                p0: number;
                p1: number;
                l: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    interface PSS4 {
        p0: string;
        p1: string;
        l: ds.P4;
    }
    namespace PSS4 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(): PSS4;
        function create(p0: string, p1: string, l: ds.P4): PSS4;
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
            };
            $fdf: string[];
            $: {
                p0: number;
                p1: number;
                l: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    interface PSS8 {
        p0: string;
        p1: string;
        l: ds.P8;
    }
    namespace PSS8 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(): PSS8;
        function create(p0: string, p1: string, l: ds.P8): PSS8;
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
            };
            $fdf: string[];
            $: {
                p0: number;
                p1: number;
                l: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    interface PSSD {
        p0: string;
        p1: string;
        l: ds.PD;
    }
    namespace PSSD {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(): PSSD;
        function create(p0: string, p1: string, l: ds.PD): PSSD;
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
            };
            $fdf: string[];
            $: {
                p0: number;
                p1: number;
                l: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    interface PSSK {
        p0: string;
        p1: string;
        l: ds.PK;
    }
    namespace PSSK {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(): PSSK;
        function create(p0: string, p1: string, l: ds.PK): PSSK;
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
            };
            $fdf: string[];
            $: {
                p0: number;
                p1: number;
                l: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    interface PSSS {
        p0: string;
        p1: string;
        l: ds.PS;
    }
    namespace PSSS {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(): PSSS;
        function create(p0: string, p1: string, l: ds.PS): PSSS;
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
            };
            $fdf: string[];
            $: {
                p0: number;
                p1: number;
                l: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    interface PS11 {
        p0: string;
        p1: number;
        l: ds.P1;
    }
    namespace PS11 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(): PS11;
        function create(p0: string, p1: number, l: ds.P1): PS11;
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
            };
            $fdf: string[];
            $: {
                p0: number;
                p1: number;
                l: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    interface PS14 {
        p0: string;
        p1: number;
        l: ds.P4;
    }
    namespace PS14 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(): PS14;
        function create(p0: string, p1: number, l: ds.P4): PS14;
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
            };
            $fdf: string[];
            $: {
                p0: number;
                p1: number;
                l: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    interface PS18 {
        p0: string;
        p1: number;
        l: ds.P8;
    }
    namespace PS18 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(): PS18;
        function create(p0: string, p1: number, l: ds.P8): PS18;
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
            };
            $fdf: string[];
            $: {
                p0: number;
                p1: number;
                l: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    interface PS1D {
        p0: string;
        p1: number;
        l: ds.PD;
    }
    namespace PS1D {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(): PS1D;
        function create(p0: string, p1: number, l: ds.PD): PS1D;
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
            };
            $fdf: string[];
            $: {
                p0: number;
                p1: number;
                l: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    interface PS1K {
        p0: string;
        p1: number;
        l: ds.PK;
    }
    namespace PS1K {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(): PS1K;
        function create(p0: string, p1: number, l: ds.PK): PS1K;
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
            };
            $fdf: string[];
            $: {
                p0: number;
                p1: number;
                l: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    interface PS1S {
        p0: string;
        p1: number;
        l: ds.PS;
    }
    namespace PS1S {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(): PS1S;
        function create(p0: string, p1: number, l: ds.PS): PS1S;
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
            };
            $fdf: string[];
            $: {
                p0: number;
                p1: number;
                l: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    interface PS81 {
        p0: string;
        p1: number;
        l: ds.P1;
    }
    namespace PS81 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(): PS81;
        function create(p0: string, p1: number, l: ds.P1): PS81;
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
            };
            $fdf: string[];
            $: {
                p0: number;
                p1: number;
                l: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    interface PS84 {
        p0: string;
        p1: number;
        l: ds.P4;
    }
    namespace PS84 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(): PS84;
        function create(p0: string, p1: number, l: ds.P4): PS84;
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
            };
            $fdf: string[];
            $: {
                p0: number;
                p1: number;
                l: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    interface PS88 {
        p0: string;
        p1: number;
        l: ds.P8;
    }
    namespace PS88 {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(): PS88;
        function create(p0: string, p1: number, l: ds.P8): PS88;
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
            };
            $fdf: string[];
            $: {
                p0: number;
                p1: number;
                l: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    interface PS8D {
        p0: string;
        p1: number;
        l: ds.PD;
    }
    namespace PS8D {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(): PS8D;
        function create(p0: string, p1: number, l: ds.PD): PS8D;
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
            };
            $fdf: string[];
            $: {
                p0: number;
                p1: number;
                l: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    interface PS8K {
        p0: string;
        p1: number;
        l: ds.PK;
    }
    namespace PS8K {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(): PS8K;
        function create(p0: string, p1: number, l: ds.PK): PS8K;
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
            };
            $fdf: string[];
            $: {
                p0: number;
                p1: number;
                l: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    interface PS8S {
        p0: string;
        p1: number;
        l: ds.PS;
    }
    namespace PS8S {
        const enum $f {
            p0 = 1,
            p1 = 2,
            l = 3,
        }
        function $create(): PS8S;
        function create(p0: string, p1: number, l: ds.PS): PS8S;
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
            };
            $fdf: string[];
            $: {
                p0: number;
                p1: number;
                l: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    interface PS1 {
        p0: string;
        l: ds.P1;
    }
    namespace PS1 {
        const enum $f {
            p0 = 1,
            l = 2,
        }
        function $create(): PS1;
        function create(p0: string, l: ds.P1): PS1;
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
            };
            $fdf: string[];
            $: {
                p0: number;
                l: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    interface PS4 {
        p0: string;
        l: ds.P4;
    }
    namespace PS4 {
        const enum $f {
            p0 = 1,
            l = 2,
        }
        function $create(): PS4;
        function create(p0: string, l: ds.P4): PS4;
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
            };
            $fdf: string[];
            $: {
                p0: number;
                l: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    interface PS8 {
        p0: string;
        l: ds.P8;
    }
    namespace PS8 {
        const enum $f {
            p0 = 1,
            l = 2,
        }
        function $create(): PS8;
        function create(p0: string, l: ds.P8): PS8;
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
            };
            $fdf: string[];
            $: {
                p0: number;
                l: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    interface PSD {
        p0: string;
        l: ds.PD;
    }
    namespace PSD {
        const enum $f {
            p0 = 1,
            l = 2,
        }
        function $create(): PSD;
        function create(p0: string, l: ds.PD): PSD;
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
            };
            $fdf: string[];
            $: {
                p0: number;
                l: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    interface PSK {
        p0: string;
        l: ds.PK;
    }
    namespace PSK {
        const enum $f {
            p0 = 1,
            l = 2,
        }
        function $create(): PSK;
        function create(p0: string, l: ds.PK): PSK;
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
            };
            $fdf: string[];
            $: {
                p0: number;
                l: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
    interface PSS {
        p0: string;
        l: ds.PS;
    }
    namespace PSS {
        const enum $f {
            p0 = 1,
            l = 2,
        }
        function $create(): PSS;
        function create(p0: string, l: ds.PS): PSS;
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
            };
            $fdf: string[];
            $: {
                p0: number;
                l: number;
            };
            $handle: (type: number, message: any) => number;
        };
    }
}
