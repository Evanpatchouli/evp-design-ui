import { propsParser } from "../utils/props.parser";
import { SvgIcon, SvgIconProps } from "./svg.icons";

const WaterFallsV: SvgIcon = (props: SvgIconProps)=> {
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
        <path d="M23 20L23 6L6 6L6 20L23 20Z" strokeLinejoin="round" />
        <path d="M42 42V28L25 28L25 42H42Z" strokeLinejoin="round" />
        <path d="M31 6V20H42V6H31Z" strokeLinejoin="round" />
        <path d="M6 28L6 42H17V28H6Z" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

export default WaterFallsV;