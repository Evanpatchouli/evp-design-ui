import React, { useEffect, useRef, useState } from 'react';
import { Color } from '../constant';
import { EvpFlexbarProps } from '.';
import './index.scss';
import { EvpFlexDirectionRule } from '../typings';


export default function EvpFlexbarContentfixed(props: EvpFlexbarProps) {
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
  
  const [expandDistand, setExd] = useState<number|undefined>(0)

  useEffect(()=>{
    if (['left', 'right'].includes(labelPosition)){
      setExd(ref.current?.clientWidth)
    } else {
      setExd(ref.current?.clientHeight)
    }
  }, [expand, labelPosition])

  const flexTime = props.flexTime? `${props.flexTime}s` : '0.3s';

  const flexMode = props.flexMode?? 'ease-in-out';

  const trigger = props.trigger?? 'click';

  const $hiddenOnBlur = props.hiddenOnBlur?? true;

  return(
    <div className="evp evp-flexbar-container"
    style={{
      height: height,
      width: height,
      ...props.style
    }}>
      <div className={`evp-flexbar ${props.class??''}`.trim()}
      onMouseLeave={() => {
        trigger === 'hover'? setExpand(false) : void 0;
      }}
      onBlur={() => {
        $hiddenOnBlur? setExpand(false) : void 0;
      }}
      tabIndex={-1}
      style={{
        flexDirection: calcEvpCarrorFlexDirection(),
        margin: calcMargin(),
        left: labelPosition === 'left'? (expand? -1 : 0) * (expandDistand as number) : void 0,
        top: labelPosition === 'top'? (expand? -1 : 0) * (expandDistand as number) : void 0,
        transition: `left ${flexTime} ${flexMode}, top ${flexTime} ${flexMode}`,
      }}
      >
        <div className={`evp-flexbar-content-wrapper ${props.contentClass??''}`.trim()}
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
          cursor: props.contentCurosr,
        }}>
          <div className='evp-flexbar-content' ref={ref}
          style={{
            flexDirection: calcEvpCarrorFlexDirection(),
          }}
          >{props.children}</div>
        </div>
        <div className={`evp-flexbar-label ${props.labelClass??''}`.trim()}
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
    </div>
  )
}