import propsParser from "../utils/props.parser";
import { SvgIcon, SvgIconProps } from "./svg.icons";

const WaterFallsH: SvgIcon = (props: SvgIconProps)=> {
  return(
    <div className="evp icon" onClick={props.onClick} 
      style={{
        visibility: props.$visibleSync??true? 'visible' : 'hidden',
        display: props.$displaySync??true? 'flex' : 'none',
        strokeWidth: props.strokeWidth??4,
        stroke: props.color??'#333',
        fill: props.fill??'none',
        cursor: props.cursor??(props.pointer?'pointer': 'unset'),
        width: props.w,
        height: props.h,
        padding: propsParser.get('pd')?.(props.pd),
        margin: propsParser.get('mg')?.(props.mg),
        ...props.style
      }}>
      <svg width={props.radius??24} height={props.radius??24} viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M20 6H6V17H20V6Z" stroke-linejoin="round" />
        <path d="M42 31H28V42H42V31Z" stroke-linejoin="round" />
        <path d="M42 6H28V23H42V6Z" stroke-linejoin="round" />
        <path d="M20 25H6V42H20V25Z" stroke-linejoin="round" />
      </svg>
    </div>
  )
}

export default WaterFallsH;