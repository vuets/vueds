import { HasState, PojoSO } from './types';
import { MultiCAS } from './ds/mc';
export declare const nextTick: (callback: Function) => any;
export declare function initObservable<T>(target: T, descriptor: any, withVal?: boolean): T;
export declare function verifyFormFields(message: any, descriptor: any, update?: boolean, root?: any): boolean;
export declare function clearFormFields(message: any, descriptor: any): void;
export declare function formUpdate(pojo: any, pager: HasState, original: any, changes?: any): MultiCAS | undefined;
export declare function formUpdateSuccess(pojo: any, pager: HasState, original: any, selected?: any): void;
export declare function formPrepare(pojo: any): boolean;
export declare function formClear(pojo: any): PojoSO;
export declare function formSuccess(pojo: any, msg?: string): void;
export declare function formFailed(pojo: any, errmsg: any): void;
export declare function bindFormFailed(pojo: any): any;
export interface FormUpdate {
    pojo: any;
    pager: HasState;
}
export declare function formUpdateFailed(pojo: any, pager: HasState, errmsg: any): void;
export declare function bindFormUpdateFailed(scope: FormUpdate): any;
export declare function toggleUpdateSuccess(pager: any, pojo_update: any, skipMerge?: boolean): boolean;
export declare function bindToggleUpdateSuccess(scope: FormUpdate): any;
export declare function toggleUpdateFailed(pager: any, errmsg: any): void;
export declare function bindToggleUpdateFailed(pager: any): any;
export declare function toggleUpdate(pager: any, field: string, pojo?: any, changed?: boolean): MultiCAS | null;
export declare function togglePrepare(pager: any): boolean;
export declare const enum ChangeFlags {
    SKIP_VALIDATE = 1,
    CB_NEXT_TICK = 2,
    CB_ONLY_ON_SET = 4,
}
/**
 * The update arg means if existing data is modified (not creating new data).
 */
export declare function $change(e: any, message: any, field: string | number, update: boolean, root: any, cbfn?: any, flags?: number): string | null;
