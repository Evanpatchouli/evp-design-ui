import { SvgIcon, SvgIconProps } from "./svg.icons"

const User: SvgIcon = (props: SvgIconProps)=>{
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
      <svg width="21" height="21" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="24" cy="12" r="8" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M42 44C42 34.0589 33.9411 26 24 26C14.0589 26 6 34.0589 6 44" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  )
}

export default User;