import React, { Fragment } from "react";
import EvpIcon from "../evp-icon";
import EvpRow from "../evp-row";
import { IconType } from "../evp-icon";
import EvpBaseProps from "../props";
import AllParser from "../utils/props.parser";
import EvpCol from "../evp-col";
import { nanoid } from "nanoid";
import useMenu from "../evp-menu/hooks";
import classNames from "classnames";

export interface EvpMenuItemProps extends EvpBaseProps {
  children?: React.ReactNode;
  title?: string | JSX.Element;
  icon?: IconType;
  /** route-link to where */
  link?: string | { path?: string; hash?: boolean };
  hash?: boolean;
  /** Default will set linkUrl as uniqueKey if exists, if not nether the keyId, will generate a nanoid */
  keyId?: any;
  unselectOnReClick?: boolean;
  /** Dependent extra onSelectHandler */
  onSelect?: <R = any>(key: string) => R;
  /** Dependent extra onUnselectHandler */
  onUnselect?: <R = any>(key: string) => R;
}

export default function EvpMenuItem(props: EvpMenuItemProps) {
  const generatedKey = React.useRef<string>();
  const linkPath = typeof props.link === "string" ? props.link : props.link?.path;
  if (props.keyId == null && !linkPath?.trim() && !generatedKey.current) {
    generatedKey.current = `menu-item_${nanoid()}`;
  }
  const uniqueKey = props.keyId ?? (linkPath?.trim() || generatedKey.current);
  const menuCtx = useMenu();
  const [selected, setSelected] = React.useState(false);

  React.useEffect(() => {
    return menuCtx?._add_setSelectedMap?.(uniqueKey, setSelected);
  }, [menuCtx, uniqueKey]);

  // useEffect(() => {
  //   console.log(menuCtx.multiSelected, menuCtx.selectedKeys, props.keyId ?? didMounted.current);
  //   if (menuCtx.multiSelected !== true) {
  //     if (!menuCtx.selectedKeys?.includes(props.keyId ?? didMounted.current)) {
  //       setSelected(false);
  //     }
  //   }
  // }, []);

  const { icon } = props;
  let $props = AllParser(props);
  const $event = $props.event;
  const $click = props["not-allowed"]
    ? undefined
    : (e: React.MouseEvent) => {
        if (selected) {
          // Going to unselect
          if (props.unselectOnReClick) {
            setSelected(false);
            menuCtx._handleUnselectOne?.(uniqueKey);
            props.onUnselect?.(uniqueKey);
          }
        } else {
          setSelected(true); // Going to select
          menuCtx._handleSelectOne?.(uniqueKey);
          props.onSelect?.(uniqueKey);
        }
        $event.onMouseDown?.(e);
      };

  const disabled = props["not-allowed"] ? "evp-disabled" : "";

  const item = (
    <EvpCol
      alignItems="space-between"
      class={classNames({
        "evp-menu-item": true,
        "evp-disabled": disabled ? true : false,
        "evp-menu-item-selected": selected,
      })}
      style={$props.style}
      $click={linkPath ? undefined : $click}
      hidden={props.hidden}
      cursor={props.cursor ?? "pointer"}
    >
      <EvpRow class="evp-menu-item-title" h={50} pd={[0, 8, 0, 8]}>
        {typeof props.title !== "object" ? (
          <Fragment>
            {icon ? <EvpIcon color={"var(--color)"} name={icon} radius={18} pd={[0, 12, 0, 0]}></EvpIcon> : null}
            <div>{props.title ?? props.children}</div>
          </Fragment>
        ) : (
          props.title ?? <div>{props.children}</div>
        )}
      </EvpRow>
    </EvpCol>
  );
  if (!linkPath) return item;

  const hash = typeof props.link === "object" ? props.link.hash ?? props.hash : props.hash;
  const hashRoute = hash || (typeof window !== "undefined" && window.location.hash);
  const href = hashRoute && !linkPath.startsWith("#") ? `#${linkPath}` : linkPath;
  return (
    <a
      className="evp-menu-link"
      hidden={props.hidden}
      aria-disabled={disabled ? true : undefined}
      href={disabled ? undefined : href}
      onClick={event => {
        if (event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
          $click?.(event);
        }
      }}
    >
      {item}
    </a>
  );
}
