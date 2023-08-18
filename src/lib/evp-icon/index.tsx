import SvgIcons, { SvgIcon } from './svg.icons';
import './index.css';

export type EvpIconProps = {
  /** this can override the icon key */
  name?: 
    "true_circle" | 
    "false_circle" |
    "unknown" | 
    "help" | 
    "user" | 
    "all" | 
    "waterfalls_h" | 
    "waterfalls_v"
  true_circle?: boolean;
  false_circle?: boolean;
  unknown?: boolean;
  help?: boolean;
  user?: boolean;
  lock?: boolean;
  passwords?: boolean;
  $click?: React.MouseEventHandler<HTMLDivElement>;
  "style"?: React.CSSProperties;
  /** Is icon visible. This is only hidden it, but still keeps the icon in dom trees */
  "$visibleSync"?: boolean,
  /** Is icon displayed. This will remove the icon from dom trees */
  "$displaySync"?: boolean,
  strokeWidth?: number,
  color?: any,
  fill?: string,
  redius?: number,
}

const IconMap: {[x:string]:string} = {
  '': "",
  'TRUE_CIRCLE': "TrueCircle",
  "FALSE_CIRCLE": "FalseCircle",
  "UNKNOWN": "Unknown",
  "HELP": "Help",
  "USER": "User",
  "LOCK": "Lock",
  "PASSWORDS": "Lock",
  "ALL": "All",
  "WATERFALLS_H": "WaterFallsH",
  "WATERFALLS_V": "WaterFallsV"
}

/** EvpIcon: not raw SVG but with a `<div><div/>` wrapper, key's value is props.name or the unique icon key
 * @param props.name this can override the icon key
 * @param props`[key]` should be valid incon keys like "true_circle", "false_circle ...
 */
const EvpIcon = (props: EvpIconProps) => {
  let _props: {[x:string]:string} = props as {[x:string]:string};
  let key = '';
  const keyFilter = ['onClick', 'style'];
  if (_props.name) {
    key = _props.name.toUpperCase();
  } else {
    let keys = Object.keys(_props).filter(k => _props[k] && !keyFilter.includes(k));
    if (keys.length === 0) {
      throw new Error('EvpIcon should have name attribute or one valid icon key!');
    } else if (keys.length > 1) {
      throw new Error('EvpIcon should have only one valid icon key!');
    } else {
      key = keys[0].toUpperCase();
    }
  }

  console.log('key:', IconMap[key])
  // @ts-ignore
  const Icon: SvgIcon = SvgIcons[IconMap[key]];
  return (
    <Icon
      onClick={props.$click}
      $visibleSync={props.$visibleSync}
      $displaySync={props.$displaySync}
      strokeWidth={props.strokeWidth}
      color={props.color}
      fill={props.fill}
      redius={props.redius}
      style={{
        ...props.style
    }}></Icon>
  );
};

export default EvpIcon;
