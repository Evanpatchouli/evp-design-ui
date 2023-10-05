import React, { Fragment } from "react";
import EvpIcon from "../evp-icon";
import EvpRow from "../evp-row";
import { IconType } from "../evp-icon";
import EvpBaseProps from "../props";
import AllParser from "../utils/props.parser";
import EvpCol from "../evp-col";
import { linkTo } from "../utils/route";
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
  keyId?: any;
}

export default function EvpMenuItem(props: EvpMenuItemProps) {
  const didMounted = React.useRef<any>(null);
  const menuCtx = useMenu();
  const [selected, setSelected] = React.useState(false);

  React.useEffect(() => {
    if (!didMounted.current) {
      const uniqueKey = `menu-item_${nanoid()}`;
      didMounted.current = uniqueKey;
      menuCtx?._add_setSelectedMap?.(uniqueKey, setSelected);
    }
  }, [menuCtx]);

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
        console.log(menuCtx);
        if (selected) {
          // Going to unselect
          setSelected(false);
          menuCtx.setSelectedKeys?.(
            (menuCtx.selectedKeys ?? []).filter((key) => key !== (props.keyId ?? didMounted.current))
          );
        } else {
          setSelected(true); // Going to select
          if (menuCtx.multiSelected) {
            menuCtx.setSelectedKeys?.([...(menuCtx.selectedKeys ?? []), props.keyId ?? didMounted.current]);
          } else {
            // Single selected mode
            menuCtx.setSelectedKeys?.([props.keyId ?? didMounted.current]);
            // Going to unselected other menu items
            (menuCtx?._setSelectedMap ?? new Map()).forEach((value, key) => {
              if (key !== (props.keyId ?? didMounted.current)) {
                value(false);
              }
            });
          }
        }
        $event.onMouseDown?.(e);
        if (props.link) {
          linkTo(props.link, props.hash);
        }
      };

  const disabled = props["not-allowed"] ? "evp-disabled" : "";

  return (
    <EvpCol
      alignItems="space-between"
      class={classNames({
        "evp-menu-item": true,
        "evp-disabled": disabled ? true : false,
        "evp-menu-item-selected": selected,
      })}
      style={$props.style}
      $click={$click}
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
}
