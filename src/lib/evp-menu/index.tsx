import React, { useEffect, useRef, useState } from "react";
import EvpCol from "../evp-col";
import EvpRow from "../evp-row";
import EvpIcon, { IconType } from "../evp-icon";
import { Color } from "../constant";
import EvpBaseProps from "../props";
import AllParser from "../utils/props.parser";
import { EvpWRule, EvpHRule } from "../typings";
import { linkTo } from "../utils/route";
import MenuCtx from "./context";
import { nanoid } from "nanoid";
import { useMenuRef } from "./hooks";

export interface EvpMenuProps extends EvpBaseProps {
  /** The following contents of this menu, usually to be of `EvpMenuItem` */
  children?: React.ReactNode;
  /** Title text could be a string or JSX.Element */
  title?: React.ReactNode;
  submenu?: boolean;
  itemIndent?: boolean | number | string;
  /** Default width is 260px */
  w?: EvpWRule;
  /** Default height is `100%`, the unit is number when assigned with a number*/
  h?: EvpHRule;
  /** The EvpIcon by the left side with default redius 18 rather than the default 24 redius of EvpIcon */
  icon?: IconType;
  /** route-link to where */
  link?: string | { path?: string; hash?: boolean };
  hash?: boolean;
  /** Unique key of menu */
  keyId?: any;
  multiSelected?: boolean;
  multiOpened?: boolean;
  itemColor?: {
    unselected?: {
      bg?: string;
      text?: string;
    };
    selected?: {
      bg?: string;
      text?: string;
    };
    hover?: {
      bg?: string;
      text?: string;
    };
    selectedHover?: {
      bg?: string;
      text?: string;
    };
    click?: {
      bg?: string;
      text?: string;
    };
  };
  /** Dependent extra onOpenHandler */
  onOpen?: <R = any>(key: string) => R;
  /** Dependent extra onCloseHandler */
  onClose?: <R = any>(key: string) => R;
  globalOnOpen?: <R = any>(keys: string[]) => R;
  globalOnClose?: <R = any>(keys: string[]) => R;
  globalOnSelect?: <R = any>(keys: string[]) => R;
  globalOnUnselect?: <R = any>(keys: string[]) => R;
}

function flatItemColor(itemColor?: EvpMenuProps["itemColor"]) {
  return {
    "--menuitem-color-unselected-bg": itemColor?.unselected?.bg ?? Color.White,
    "--menuitem-color-unselected-text": itemColor?.unselected?.text ?? Color.Black,
    "--menuitem-color-selected-bg": itemColor?.selected?.bg ?? Color.LightBlue,
    "--menuitem-color-selected-text": itemColor?.selected?.text ?? Color.White,
    "--menuitem-color-hover-bg": itemColor?.hover?.bg ?? Color.ReallyPaleBlue,
    "--menuitem-color-hover-text": itemColor?.hover?.text ?? Color.Black,
    "--menuitem-color-selected-hover-bg": itemColor?.selectedHover?.bg ?? Color.ShallowBlue,
    "--menuitem-color-selected-hover-text": itemColor?.selectedHover?.text ?? itemColor?.selected?.text ?? Color.White,
    "--menuitem-color-click-bg": itemColor?.click?.bg ?? Color.LightBlue,
    "--menuitem-color-click-text": itemColor?.click?.text ?? Color.White,
  };
}

export default function EvpMenu(props: EvpMenuProps) {
  const didMounted = React.useRef<any>(null);
  useEffect(() => {
    if (!didMounted.current) {
      didMounted.current = `menu_${nanoid()}`;
    }
  }, []);
  const menuCtx = useMenuRef({
    multiSelected: props.multiSelected ?? false,
    multiOpened: props.multiOpened ?? false,
    onOpen: props.globalOnOpen,
    onClose: props.globalOnClose,
    onSelect: props.globalOnSelect,
    onUnselect: props.globalOnUnselect,
  });

  const { icon } = props;
  let $props = AllParser(props);
  const $event = $props.event;
  const [expand, setExpand] = useState(false);
  function deExpand() {
    setExpand(!expand);
  }

  function $click(e: React.MouseEvent) {
    if (!props["not-allowed"]) {
      if (!expand) {
        // going to open
        if (props.submenu) {
          menuCtx.current._handleOpenOne?.(props.keyId ?? didMounted.current);
          props.onOpen?.(props.keyId ?? didMounted.current);
        }
      } else {
        // going to close
        if (props.submenu) {
          menuCtx?.current._handleCloseOne?.(props.keyId ?? didMounted.current);
          props.onClose?.(props.keyId ?? didMounted.current);
        }
      }
      deExpand();
      $event.onMouseDown?.(e);
      if (props.link) {
        linkTo(props.link, props.hash);
      }
    }
  }

  const ref = useRef<HTMLDivElement>(null);

  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (expand) {
      setHeight(ref.current?.offsetHeight as number);
    } else {
      setHeight(0);
    }
  }, [expand]);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.offsetHeight);
    }
  }, [expand]);

  const childrenWrapperClass = props.submenu ? `evp-menu-children-wrapper ${expand ? "" : "close"}` : "";

  const disabled = props["not-allowed"] ? "evp-disabled" : "";

  return (
    <EvpCol
      alignItems="left"
      class={`evp-menu ${props.submenu ? "sub" : ""} ${disabled} ${props.class ?? ""}`.trim()}
      pd={props.pd}
      mg={props.mg}
      w={props.w ?? "260px"}
      style={{
        overflow: "hidden",
        border: props.submenu ? "unset" : `1px solid ${Color.PaleGray}`,
        ...$props.style,
        ...flatItemColor(props.itemColor),
      }}
    >
      <EvpRow alignItems="space-between" class="evp-menu-title" $click={$click} cursor={props.cursor ?? "pointer"}>
        <EvpRow h={50} pd={[0, 0, 0, 16]}>
          {typeof props.title === "string" ? (
            <>
              {icon ? <EvpIcon name={icon} radius={18} pd={[0, 12, 0, 0]}></EvpIcon> : null}
              <div>{props.title}</div>
            </>
          ) : (
            props.title
          )}
        </EvpRow>
        {props.submenu ? (
          <EvpIcon strokeWidth={2} radius={18} pd={[0, 16, 0, 0]} name={expand ? "down" : "left"} />
        ) : null}
      </EvpRow>
      <MenuCtx.Provider value={menuCtx.current}>
        <div
          className={`${childrenWrapperClass}`}
          style={{
            height: props.submenu ? height : void 0,
          }}
        >
          <div
            className={`evp-menu-children`}
            ref={ref}
            style={{
              // @ts-ignore
              "--item-indent": props.submenu
                ? props.itemIndent
                  ? typeof props.itemIndent === "number"
                    ? `${props.itemIndent}px`
                    : typeof props.itemIndent === "string"
                    ? props.itemIndent
                    : "18px"
                  : "8px"
                : "8px",
            }}
          >
            {props.children}
          </div>
        </div>
      </MenuCtx.Provider>
    </EvpCol>
  );
}
