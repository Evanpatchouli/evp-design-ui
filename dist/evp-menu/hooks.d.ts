/// <reference types="react" />
import { MenuCtx } from "./context";
export declare class MenuCtxInstance implements MenuCtx {
    openKeys?: string[];
    setOpenKeys(keys: string[]): void;
    selectedKeys?: string[];
    setSelectedKeys(keys: string[]): void;
    multiSelected?: boolean;
    setMultiSelected(multiSelected: boolean): void;
    _setSelectedMap?: Map<any, any> | undefined;
    _add_setSelectedMap?(key: string, fc: any): void;
    constructor(multiSelected?: boolean);
}
export declare function useMenuRef(multiSelected?: boolean): import("react").MutableRefObject<MenuCtx>;
export default function useMenu(multiSelected?: boolean): MenuCtxInstance | MenuCtx;
