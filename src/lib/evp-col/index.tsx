import { BaseDomProps } from "../evp-dom";
import { ArrayLengthed } from "../utils";
import { propsParser } from "../utils/props.parser";

export interface EvpColProps extends BaseDomProps {
  flexDirection?: 'column' | 'column-reverse',
  justifyContent?: EvpJustifyContentRule,
  alignItems?: EvpAlignItemsRule,
  w?: EvpWRule
  /** Default height is `100%`, the unit is number when assigned with a number*/
  h?: EvpHRule
  /** This array should have 4 items, but less is also ok. If a member in this array has type of `number` it will be parsed to `${value}px` */
  pd?: ArrayLengthed<string|number|undefined|null, 4>,
  /** This array should have 4 items, but less is also ok. If a member in this array has type of `number` it will be parsed to `${value}px` */
  mg?: ArrayLengthed<string|number|undefined|null, 4>,
}

export default function EvpCol(props: EvpColProps) {
  return (
    <div className="evp col"
      style={{
        display: 'flex',
        flexDirection: props.flexDirection??'column',
        justifyContent: props.justifyContent??'flex-start',
        alignItems: props.alignItems??'center',
        width: props.w??'100%',
        height: props.h,
        padding: propsParser.get('pd')?.(props.pd),
        margin: propsParser.get('mg')?.(props.mg),
        ...props.style
      }}
    >
      {props.children}
    </div>
  );
}