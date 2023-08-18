import { SvgIcon, SvgIconProps } from "./svg.icons";

const FalseCircle: SvgIcon = (props: SvgIconProps)=> {
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
      <svg width="24" height="24" viewBox="0 0 48 48" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
          fill="none" stroke="#333" stroke-linejoin="round" />
        <path d="M29.6567 18.3432L18.343 29.6569" stroke="#333" stroke-linecap="round"
          stroke-linejoin="round" />
        <path d="M18.3433 18.3432L29.657 29.6569" stroke="#333" stroke-linecap="round"
          stroke-linejoin="round" />
      </svg>
    </div>
  )
}

export default FalseCircle;