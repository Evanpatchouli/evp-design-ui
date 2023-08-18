import { SvgIcon, SvgIconProps } from "./svg.icons";

const WaterFallsH: SvgIcon = (props: SvgIconProps)=> {
  return(
    <div className="evp svg" onClick={props.onClick} 
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
        <path d="M20 6H6V17H20V6Z" fill="none" stroke="#333" stroke-linejoin="round" />
        <path d="M42 31H28V42H42V31Z" fill="none" stroke="#333" stroke-linejoin="round" />
        <path d="M42 6H28V23H42V6Z" fill="none" stroke="#333" stroke-linejoin="round" />
        <path d="M20 25H6V42H20V25Z" fill="none" stroke="#333" stroke-linejoin="round" />
      </svg>
    </div>
  )
}

export default WaterFallsH;