import React, { useRef, useState } from 'react';
import { Color } from '../constant';
import './index.scss';

export type EvpFlexbarProps = {
  children?: React.ReactNode,
  class?: string,
  style?: React.CSSProperties,
  contentWritingMode?: 'horizontal-tb' | 'vertical-lr' | 'vertical-rl' | 'sideways-rl' | 'sideways-lr',
  contentClass?: string,
  labelpartClass?: string,
  height?: string | number,
  /** Default value is `"right"` */
  labelPosition?: 'right' | 'left' | 'top' | 'bottom',
  label?: React.ReactNode,
  gap?: number | string,
  /** Default value is `0.3` */
  flexTime?: number,
  /** Default value is `"ease-in-out"` */
  flexMode?: 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out',
  /** Default value is `"click"` */
  trigger?: 'hover' | 'click',
  /** Default value is half of height */
  labelRadius?: number | string,
  border?: {
    width?: string | number | Hintable<'thin' | 'medium' | 'thick'>,
    color?: string,
    lineStyle?: 'solid' | 'dashed' | 'dotted' | 'hidden' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset'
  }
  contentCurosr?: EvpCursorRule
};

export default function EvpFlexbar(props: EvpFlexbarProps) {
  const height = props.height? typeof props.height === 'number' ? `${props.height}px` : props.height : '40px';

  const labelPosition = props.labelPosition?? 'right';
  const calcEvpCarrorFlexDirection = () => {
    let EvpFlexbarFlexDirection: EvpFlexDirectionRule = 'row';
    switch (labelPosition) {
      case 'right': {
        EvpFlexbarFlexDirection = 'row';
        break;
      }
      case 'left': {
        EvpFlexbarFlexDirection = 'row-reverse';
        break;
      }
      case 'top': {
        EvpFlexbarFlexDirection = 'column-reverse';
        break;
      }
      case 'bottom': {
        EvpFlexbarFlexDirection = 'column';
        break;
      }
      default: break;
    }
    return EvpFlexbarFlexDirection;
  }

  const $radius = props.labelRadius? typeof props.labelRadius === 'number' ? `${props.labelRadius}px` : props.labelRadius : `calc(${height} * 0.5)`;

  const calcLabelRadius = () => {
    switch (labelPosition) {
      case 'right': return `0 ${$radius} ${$radius} 0`;
      case 'left': return `${$radius} 0 0 ${$radius}`;
      case 'top': return `${$radius} ${$radius} 0 0`;
      case 'bottom': return `0 0 ${$radius} ${$radius}`;
    }
  }

  const $gap = props.gap? typeof props.gap === 'number' ? `${props.gap}px` : props.gap : '8px';

  const calcMargin = () => {
    switch (labelPosition) {
      case 'right': return `0 0 ${$gap} 0`;
      case 'left': return `0 0 ${$gap} 0`;
      case 'top': return `0 ${$gap} 0 0`;
      case 'bottom': return `0 ${$gap} 0 0`;
    }
  }

  const borderStyle = `${props.border?.width??'1px'} ${props.border?.color??Color.PaleGray} ${props.border?.lineStyle??'solid'}`;

  const [expand, setExpand] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const flexTime = props.flexTime? `${props.flexTime}s` : '0.3s';

  const flexMode = props.flexMode?? 'ease-in-out';

  const trigger = props.trigger?? 'click';

  return(
    <div className={`evp evp-flexbar ${props.class}`.trim()}
    onMouseLeave={() => {
      trigger === 'hover'? setExpand(false) : void 0;
    }}
    style={{
      flexDirection: calcEvpCarrorFlexDirection(),
      margin: calcMargin(),
      ...props.style
    }}
    >
      <div className={`evp-flexbar-content-wrapper ${props.contentClass}`.trim()}
      style={{
        height: ['right', 'left'].includes(labelPosition) ? height : expand? ref.current?.clientHeight : 0,
        width: ['top', 'bottom'].includes(labelPosition) ? height : expand? ref.current?.clientWidth : 0,
        writingMode: ['right', 'left'].includes(labelPosition) ? 'horizontal-tb' : 'vertical-lr',
        border: `1px ${Color.PaleGray} solid`,
        borderTop: ['right', 'left'].includes(labelPosition)? borderStyle : labelPosition === 'bottom'? expand? borderStyle : 'none' : 'none',
        borderBottom: ['right', 'left'].includes(labelPosition)? borderStyle : labelPosition === 'top'? expand? borderStyle : 'none' : 'none',
        borderLeft: ['top', 'bottom'].includes(labelPosition)? borderStyle : labelPosition === 'right'? expand? borderStyle : 'none' : 'none',
        borderRight: ['top', 'bottom'].includes(labelPosition)? borderStyle : labelPosition === 'left'? expand? borderStyle : 'none' : 'none',
        transition: `width ${flexTime} ${flexMode}, height ${flexTime} ${flexMode}`,
        cursor: props.contentCurosr
      }}><div className='evp-flexbar-content' ref={ref}
      style={{
        flexDirection: calcEvpCarrorFlexDirection(),
      }}
      >{props.children}</div></div>
      <div className={`evp-flexbar-label ${props.labelpartClass}`.trim()}
      onClick={() => {
        trigger === 'click'? setExpand(!expand) : void 0;
      }}
      onMouseOver={() => {
        trigger === 'hover'? setExpand(true) : void 0;
      }}
      style={{
        width: height,
        height: height,
        borderRadius: calcLabelRadius(),
        border: borderStyle,
      }}>{props.label}</div>
    </div>
  )
}