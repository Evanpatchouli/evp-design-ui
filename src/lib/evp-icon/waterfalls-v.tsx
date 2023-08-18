import { SvgIcon, SvgIconProps } from "./svg.icons";

const WaterFallsV: SvgIcon = (props: SvgIconProps)=> {
  return(
    <div className="evp icon" onClick={props.onClick} 
      style={{
        visibility: props.$visibleSync??true? 'visible' : 'hidden',
        display: props.$displaySync??true? 'unset' : 'none',
        strokeWidth: props.strokeWidth??4,
        stroke: props.color??'#333',
        fill: props.fill??'none',
        ...props.style
      }}>
      <svg width={props.redius??24} height={props.redius??24} viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M23 20L23 6L6 6L6 20L23 20Z" stroke-linejoin="round" />
        <path d="M42 42V28L25 28L25 42H42Z" stroke-linejoin="round" />
        <path d="M31 6V20H42V6H31Z" stroke-linejoin="round" />
        <path d="M6 28L6 42H17V28H6Z" stroke-linejoin="round" />
      </svg>
    </div>
  )
}

export default WaterFallsV;