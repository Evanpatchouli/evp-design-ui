import { createContext } from "react";

export interface MenuCtx {
  openKeys?: string[];
  /** The type is to tell the manager this invoke is to open or close to trigger the correct listeners */
  setOpenKeys?: (keys: string[], type: "open" | "close") => void;
  selectedKeys?: string[];
  setSelectedKeys?: (keys: string[], type: "select" | "unselect") => void;
  /** The type is to tell the manager this invoke is to select or unselect to trigger the correct listeners */
  multiSelected?: boolean;
  /** @Unspport_Now */
  multiOpened?: boolean;
  setMultiSelected?: (multiSelected: boolean) => void;
  _setSelectedMap?: Map<string, any>;
  _add_setSelectedMap?: (key: string, fc: any) => void; // register menu-item setSelected dispatched function
  _handleSelectOne?: (s: string) => void;
  _handleUnselectOne?: (s: string) => void;
  _handleOpenOne?: (s: string) => void;
  _handleCloseOne?: (s: string) => void;
  onOpen?: <R = any>(keys: string[]) => R;
  onClose?: <R = any>(keys: string[]) => R;
  onSelect?: <R = any>(keys: string[]) => R;
  onUnselect?: <R = any>(keys: string[]) => R;
}

const EvpMenuContext = createContext<MenuCtx | undefined>(undefined);

export default EvpMenuContext;
