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
      <svg width="21" height="21" viewBox="0 0 48 48" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M23 20L23 6L6 6L6 20L23 20Z" fill="none" stroke="#333" stroke-width="3" stroke-linejoin="round" />
        <path d="M42 42V28L25 28L25 42H42Z" fill="none" stroke="#333" stroke-width="3" stroke-linejoin="round" />
        <path d="M31 6V20H42V6H31Z" fill="none" stroke="#333" stroke-width="3" stroke-linejoin="round" />
        <path d="M6 28L6 42H17V28H6Z" fill="none" stroke="#333" stroke-width="3" stroke-linejoin="round" />
      </svg>
    </div>
  )
}

export default WaterFallsV;