/// <reference types="vue" />
import { ds } from '../ds/';
export declare const STATE: string;
export declare const LSTATE: string;
export declare const VSTATE: string;
export declare const DESCRIPTOR: string;
export declare const INDEX: string;
export declare const PREV_KEY: string;
export declare const PREV_PAGE: string;
export declare const PREV_VSTATE: string;
export declare function shallowCopyTo<T>(target: T, src: T): T;
export interface KeyHandler {
    inc(key: string): string;
    dec(key: string): string;
}
export declare const enum SelectionType {
    NONE = 0,
    RESET = 1,
    SELECT = 2,
    RETAIN = 3,
    RESELECT = 4,
}
export declare const enum SelectionFlags {
    NONE = 0,
    CLICKED = 1,
    REFRESH = 2,
    CLICKED_UPDATE = 3,
    FORCE = 4,
    MASK_FORCE_OR_UPDATE = 7,
}
export declare const enum PojoListState {
    NONE = 0,
    INCLUDED = 1,
    SELECTED = 2,
    REFRESH = 4,
    MASK_SELECTED_REFRESH = 6,
}
export declare const enum PagerState {
    NONE = 0,
    SUCCESS = 1,
    ERROR = 2,
    WARNING = 4,
    LOADING = 8,
    DESC = 16,
    LOAD_NEWER = 32,
    LOAD_OLDER = 64,
    RELOAD = 128,
    LOCAL_SEARCH = 256,
    MASK_STATUS = 7,
    MASK_RPC = 224,
    MASK_RPC_DISABLE = 264,
}
export interface Pager {
    size: number;
    state: number;
    msg: string;
    array: any[];
    index_selected: number;
    index_hidden: number;
    q_index: number;
    prev_key: string | null;
    prev_page: number;
    prev_vstate: number;
    page: number;
    page_count: number;
    page_vcount: number;
    page_from: number;
    page_to: number;
    pojo?: any;
}
export declare function resolveNextPageIndex(page: number, idx: number, pager: Pager): number;
export interface StateObject {
    state: number;
    lstate: number;
    msg: string;
    vstate: number;
    vfbs: number;
}
export interface PagerOptions<T> {
    desc: boolean;
    pageSize: number;
    descriptor: any;
    keyProperty: string;
    kh?: KeyHandler;
    /** create Pojo With Defaults */
    createObservable(so: StateObject): T;
    fetch(req: ds.ParamRangeKey, pager: Pager): any;
    onSelect(message: T, flags: SelectionFlags): number;
    onAdd?(message: T, main: boolean, latest: boolean): any;
    onUpdate?(message: T, main: boolean, update: T): boolean;
    onRemove?(message: T, main: boolean): any;
    onRemoveArray?(array: Array<T>, main: boolean): any;
    onPopulate?(message: T, main: boolean, target: T, index: number): any;
}
export declare function nullifyVprops(so: StateObject, descriptor: any): StateObject | undefined;
export declare class PojoStore<T> {
    private options;
    pager: Pager;
    private array;
    private mainArray;
    private fnMergeFrom;
    constructor(fetchedArray: Array<T>, options: PagerOptions<T>);
    getLastSeenObj(): T | null;
    isEmpty(): boolean;
    size(): number;
    isMainArray(): boolean;
    repaint(): number;
    populate(type: SelectionType, flags: SelectionFlags, idxSelected: number): number;
    $populate(type: SelectionType, flags: SelectionFlags, main: boolean, idxSelected: number, page: number): any;
    select(current: T, flags: SelectionFlags, idx: number): number;
    $select(current: T, flags: SelectionFlags, idx: number, page: number, selectWithoutPopulate: boolean): number;
    populateAndSelect(storeIdx: number, flags: SelectionFlags): void;
    notifyAndSelect(storeIdx: number, flags: SelectionFlags): void;
    notify(type?: SelectionType, flags?: SelectionFlags): void;
    /**
     * Add the entity and select it afterwards.
     */
    addAndSelect(entity: T, latest: boolean, flags: SelectionFlags): void;
    get(index: number): T;
    getStoreIndex(selected: T): number;
    $getStoreIndex(index: number): number;
    getSelectedOriginal(): T | null;
    getOriginal(selected: T): T;
    remove(index: number): T;
    clear(): void;
    add(entity: T, latest: boolean, mainOnly: boolean): void;
    addAll(array: Array<T>, latest: boolean, mainOnly: boolean): boolean;
    /**
     * Resets the internal arrays and does not notify nor call onRemoveArray
     */
    reinit(array: Array<T>): PojoStore<T>;
    /**
     * Resets the internal arrays and calls the listener methods.
     */
    reset(array: Array<T>, notify?: boolean): void;
    /**
     * Simply sets the array.  No notifications/etc
     */
    setArray(array: Array<T>): void;
    /**
     * Sets the array and notifies.
     */
    replace(array: Array<T>, type?: SelectionType, flags?: SelectionFlags): void;
    /**
     * Returns true if an item was removed.
     */
    update(updateArray: Array<T>): boolean;
    getStartObj(): T | null;
    newRangeKeyForReload(): ds.ParamRangeKey;
    $newRangeKeyForReload(desc: boolean): ds.ParamRangeKey;
    newRangeKeyForLoadNewer(): ds.ParamRangeKey;
    newRangeKeyForLoadOlder(): ds.ParamRangeKey;
    requestNewer(): void;
    requestOlder(): void;
    reload(): void;
    $reload(desc: boolean): void;
    addNewer(array: Array<T>): void;
    addOlder(array: Array<T>): void;
    pagePrevOrLoad(flags: number): number;
    pageNextOrLoad(flags: number): number;
    $$requestNewer(pager: Pager): void;
    $$requestOlder(pager: Pager): void;
    $$reload(pager: Pager): void;
    $$notify(): void;
    cbFetchSuccess(array: Array<T>): void;
    cbFetchFailed(err: any): void;
}
