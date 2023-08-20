import { Fragment } from "react";
import EvpIcon from "../evp-icon";
import EvpRow from "../evp-row";
import { IconType } from "../evp-icon";

export interface EvpMenuItemProps {
  children?: React.ReactNode,
  title?: string | JSX.Element,
  icon?: IconType
}

export default function EvpMenuItem(props: EvpMenuItemProps) {
  const { icon } = props;
  return (
    <EvpRow alignItems="space-around">
      <EvpRow h={50}>
        {(typeof props.title !== 'object')? 
          <Fragment>
            {icon?<EvpIcon name={icon} pd={[0,14,0,0]}></EvpIcon>:null}
            <div>{props.title??props.children}</div>
          </Fragment>
            :
          (props.title??<div>{props.children}</div>)
        }
      </EvpRow>
  </EvpRow>
  );
}
