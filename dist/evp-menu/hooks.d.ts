/// <reference types="react" />
import { MenuCtx } from "./context";
export declare class MenuCtxInstance implements MenuCtx {
    openKeys?: string[];
    setOpenKeys: (keys: string[], type: "open" | "close") => void;
    onOpen?: <R = any>(keys: string[]) => R;
    onClose?: <R = any>(keys: string[]) => R;
    multiOpened?: boolean;
    multiSelected?: boolean;
    setMultiSelected: (multiSelected: boolean) => void;
    selectedKeys?: string[];
    setSelectedKeys: (keys: string[] | undefined, type: "select" | "unselect") => void;
    onSelect?: <R = any>(keys: string[]) => R;
    onUnselect?: <R = any>(keys: string[]) => R;
    _setSelectedMap?: Map<any, any> | undefined;
    _add_setSelectedMap?: ((key: string, fc: any) => void) | undefined;
    _handleOpenOne: (key: string) => void;
    _handleCloseOne: (key: string) => void;
    selectOne: (key: string) => void;
    unselectOne: (key: string) => void;
    openOne: (key: string) => void;
    closeOne: (key: string) => void;
    selectMany: (key: string[]) => void;
    _handleToggleOne: (key: string) => void;
    _handleSelectOne: (key: string) => void;
    _handleUnselectOne: (key: string) => void;
    constructor(options: {
        multiOpened?: boolean;
        onOpen?: <R = any>(keys: string[]) => R;
        onClose?: <R = any>(keys: string[]) => R;
        multiSelected: boolean;
        onSelect?: <R = any>(keys: string[]) => R;
        onUnselect?: <R = any>(keys: string[]) => R;
    });
}
export declare function useMenuRef(options?: {
    multiOpened?: boolean;
    onOpen?: <R = any>(keys: string[]) => R;
    onClose?: <R = any>(keys: string[]) => R;
    multiSelected: boolean;
    onSelect?: <R = any>(keys: string[]) => R;
    onUnselect?: <R = any>(keys: string[]) => R;
}): import("react").MutableRefObject<MenuCtx>;
export default function useMenu(options?: {
    multiOpened?: boolean;
    onOpen?: <R = any>(keys: string[]) => R;
    onClose?: <R = any>(keys: string[]) => R;
    multiSelected: boolean;
    onSelect?: <R = any>(keys: string[]) => R;
    onUnselect?: <R = any>(keys: string[]) => R;
}): MenuCtxInstance | MenuCtx;
