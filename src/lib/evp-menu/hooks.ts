import { useContext, useRef } from "react";
import MenuContext, { MenuCtx } from "./context";

export class MenuCtxInstance implements MenuCtx {
  openKeys?: string[] = [];
  setOpenKeys = (keys: string[], type: "open" | "close") => {
    this.openKeys = keys;
    switch (type) {
      case "open":
        this.onOpen?.(keys);
        break;
      case "close":
        this.onClose?.(keys);
        break;
      default:
        break;
    }
  };
  onOpen?: <R = any>(keys: string[]) => R;
  onClose?: <R = any>(keys: string[]) => R;
  multiOpened?: boolean = false;
  multiSelected?: boolean;
  setMultiSelected = (multiSelected: boolean) => {
    this.multiSelected = multiSelected;
  };
  selectedKeys?: string[] = [];
  setSelectedKeys = (keys: string[] = [], type: "select" | "unselect") => {
    // console.log("Going to set");
    // console.log("keys", keys);
    this.selectedKeys = keys;
    switch (type) {
      case "select":
        this.onSelect?.([...keys]);
        break;
      case "unselect":
        this.onUnselect?.([...keys]);
        break;
      default:
        break;
    }
    (this._setSelectedMap ?? new Map()).forEach((setThisSelected, k) => {
      if (keys.includes(k)) {
        // console.log(`set ${k} to selected`);
        setThisSelected(true);
      } else {
        // console.log(`set ${k} to unselected`);
        setThisSelected(false);
      }
    });
  };
  onSelect?: <R = any>(keys: string[]) => R;
  onUnselect?: <R = any>(keys: string[]) => R;

  _setSelectedMap? = new Map();
  _add_setSelectedMap? = (key: string, fc: any) => {
    this._setSelectedMap?.set(key, fc);
  };

  _handleOpenOne = (key: string) => {
    if (this.multiOpened) {
      this.setOpenKeys?.([key], "open");
    } else {
      this.setOpenKeys?.([key], "open");
    }
  };

  _handleCloseOne = (key: string) => {
    this.setOpenKeys?.(
      (this.openKeys ?? []).filter((k) => key !== k),
      "close"
    );
  };

  selectOne = (key: string) => {
    this._handleSelectOne(key);
  };
  unselectOne = (key: string) => {
    this._handleSelectOne(key);
  };

  openOne = (key: string) => {
    this._handleOpenOne(key);
  };

  closeOne = (key: string) => {
    this._handleCloseOne(key);
  };

  selectMany = (key: string[]) => {
    this.setSelectedKeys?.([...key], "select");
  }

  _handleToggleOne = (key: string) => {
    if (this.openKeys?.includes(key)) {
      this._handleCloseOne(key);
    } else {
      this._handleOpenOne(key);
    }
  };

  _handleSelectOne = (key: string) => {
    this.setSelectedKeys?.([key], "select");
    // if (!this.multiSelected) {
    //   (this._setSelectedMap ?? new Map()).forEach((setThisSelected, k) => {
    //     if (k !== key) {
    //       setThisSelected(false);
    //     }
    //   });
    // } else {
    //   this.setSelectedKeys?.([key], "select");
    // }
  };

  _handleUnselectOne = (key: string) => {
    this.setSelectedKeys?.(
      (this.selectedKeys ?? []).filter((k) => key !== k),
      "unselect"
    );
  };

  constructor(options: {
    multiOpened?: boolean;
    onOpen?: <R = any>(keys: string[]) => R;
    onClose?: <R = any>(keys: string[]) => R;
    multiSelected: boolean;
    onSelect?: <R = any>(keys: string[]) => R;
    onUnselect?: <R = any>(keys: string[]) => R;
  }) {
    this.multiSelected = options.multiSelected;
    this.multiOpened = options.multiOpened;
    this.onOpen = options.onOpen;
    this.onClose = options.onClose;
    this.onSelect = options.onSelect;
    this.onUnselect = options.onUnselect;
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

export function useMenuRef(
  options: {
    multiOpened?: boolean;
    onOpen?: <R = any>(keys: string[]) => R;
    onClose?: <R = any>(keys: string[]) => R;
    multiSelected: boolean;
    onSelect?: <R = any>(keys: string[]) => R;
    onUnselect?: <R = any>(keys: string[]) => R;
  } = {
    multiSelected: false,
    multiOpened: false,
  }
) {
  const ctx = useMenu(options);
  const menuRef = useRef<MenuCtx>() as React.MutableRefObject<MenuCtx>;
  if (!menuRef.current) {
    menuRef.current = ctx;
  }
  return menuRef;
}

export default function useMenu(
  options: {
    multiOpened?: boolean;
    onOpen?: <R = any>(keys: string[]) => R;
    onClose?: <R = any>(keys: string[]) => R;
    multiSelected: boolean;
    onSelect?: <R = any>(keys: string[]) => R;
    onUnselect?: <R = any>(keys: string[]) => R;
  } = {
    multiSelected: false,
    multiOpened: false,
  }
) {
  return useContext(MenuContext) || new MenuCtxInstance(options);
}

// export default function useMenu(multiSelected: boolean = false) {
//   const newCtx = useCreateDispatchedMenuCtx(multiSelected);
//   return useContext(MenuContext) ?? newCtx;
// }
