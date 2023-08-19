import propsParser from "../utils/props.parser";
import { SvgIcon, SvgIconProps } from "./svg.icons";

const FalseCircle: SvgIcon = (props: SvgIconProps)=> {
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
        <path
          d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
          stroke-linejoin="round" />
        <path d="M29.6567 18.3432L18.343 29.6569" stroke-linecap="round"
          stroke-linejoin="round" />
        <path d="M18.3433 18.3432L29.657 29.6569" stroke-linecap="round"
          stroke-linejoin="round" />
      </svg>
    </div>
  )
}

export default FalseCircle;