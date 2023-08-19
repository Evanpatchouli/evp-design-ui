import { BaseDomProps } from "../evp-dom";
import { ArrayLengthed } from "../utils";
import propsParser from "../utils/props.parser";

export interface EvpRowProps extends BaseDomProps {
  flexDirection?: 'row' | 'row-reverse',
  justifyContent?: string & ('center' | 'left' | 'right' | 'start' 
  | 'end' | 'flex-start' | 'flex-end' | 'inherit' | 'initial' | 'normal' 
  | 'revert' | 'revert-layer' | 'space-around' | 'space-between' | 'space-evenly' | 'strench' | 'unset');
  alignItems?: string & ('center' | 'left' | 'right' | 'start' 
  | 'end' | 'flex-start' | 'flex-end' | 'inherit' | 'initial' | 'normal' 
  | 'revert' | 'revert-layer' | 'space-around' | 'space-between' | 'space-evenly' | 'strench' | 'unset');
  /** Default width is `100%`, the unit is number when assigned with a number*/
  w?: EvpWRule,
  /** Default height is `100%`, the unit is number when assigned with a number*/
  h?: EvpHRule,
  /** This array should have 4 items, but less is also ok. If a member in this array has type of `number` it will be parsed to `${value}px` */
  pd?: ArrayLengthed<string|number|undefined|null, 4>,
  /** This array should have 4 items, but less is also ok. If a member in this array has type of `number` it will be parsed to `${value}px` */
  mg?: ArrayLengthed<string|number|undefined|null, 4>,
}

export default function EvpRow(props: EvpRowProps) {
  
  return (
    <div className="evp row"
      style={{
        display: 'flex',
        flexDirection: props.flexDirection??'row',
        justifyContent: props.justifyContent??'flex-start',
        alignItems: props.alignItems??'center',
        width: props.w??'100%',
        height: props.h??'100%',
        padding: propsParser.get('pd')?.(props.pd),
        margin: propsParser.get('mg')?.(props.mg),
        ...props.style
      }}
    >
      {props.children}
    </div>
  );
}