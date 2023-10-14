/// <reference types="react" />
export interface MenuCtx {
    openKeys?: string[];
    setOpenKeys?: (keys: string[]) => void;
    selectedKeys?: string[];
    setSelectedKeys?: (keys: string[]) => void;
    multiSelected?: boolean;
    setMultiSelected?: (multiSelected: boolean) => void;
    _setSelectedMap?: Map<string, any>;
    _add_setSelectedMap?: (key: string, fc: any) => void;
}
declare const EvpMenuContext: import("react").Context<MenuCtx | undefined>;
export default EvpMenuContext;
