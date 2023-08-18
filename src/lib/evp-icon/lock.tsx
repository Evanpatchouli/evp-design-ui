import { SvgIcon, SvgIconProps } from "./svg.icons";

const Lock: SvgIcon = (props: SvgIconProps)=> {
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
      <svg width="21" height="21" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="22" width="36" height="22" rx="2" fill="none" stroke="#333" stroke-linejoin="round"/>
        <path d="M14 22V14C14 8.47715 18.4772 4 24 4C29.5228 4 34 8.47715 34 14V22" stroke="#333" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M24 30V36" stroke="#333" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  )
}

export default Lock;