import { useContext, useRef } from "react";
import MenuContext, { MenuCtx } from "./context";

export class MenuCtxInstance implements MenuCtx {
  openKeys?: string[];
  setOpenKeys(keys: string[]) {
    this.openKeys = keys;
  }
  selectedKeys?: string[];
  setSelectedKeys(keys: string[]) {
    this.selectedKeys = keys;
  }
  multiSelected?: boolean;
  setMultiSelected(multiSelected: boolean) {
    this.multiSelected = multiSelected;
  }
  _setSelectedMap? = new Map();
  _add_setSelectedMap?(key: string, fc: any) {
    this._setSelectedMap?.set(key, fc);
  }

  constructor(multiSelected: boolean = false) {
    this.multiSelected = multiSelected;
  }
}

// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// function useCreateDispatchedMenuCtx(multiSelected: boolean = false) {
//   const [openKeys, setOpenKeys] = useState<string[]>([]);
//   const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
//   return {
//     multiSelected,
//     openKeys,
//     setOpenKeys,
//     selectedKeys,
//     setSelectedKeys,
//   } as any;
// }

export function useMenuRef(multiSelected: boolean = false) {
  const ctx = useMenu(multiSelected);
  const menuRef = useRef<MenuCtx>() as React.MutableRefObject<MenuCtx>;
  if (!menuRef.current) {
    menuRef.current = ctx;
  }
  return menuRef;
}

export default function useMenu(multiSelected: boolean = false) {
  return useContext(MenuContext) || new MenuCtxInstance(multiSelected);
}

// export default function useMenu(multiSelected: boolean = false) {
//   const newCtx = useCreateDispatchedMenuCtx(multiSelected);
//   return useContext(MenuContext) ?? newCtx;
// }
