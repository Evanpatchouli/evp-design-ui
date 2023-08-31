import React from 'react';
import './index.scss';

export type EvpCarrotProps = {
  children?: React.ReactNode,
  class?: string,
  contentWritingMode?: 'horizontal-tb' | 'vertical-lr' | 'vertical-rl',
  contentClass?: string,
  labelpartClass?: string,
  height?: string | number,
  labelPosition?: 'right' | 'left' | 'top' | 'bottom',
  label?: React.ReactNode,
};

export default function EvpCarrot(props: EvpCarrotProps) {
  const height = props.height? typeof props.height === 'number' ? `${props.height}px` : props.height : '40px';

  const labelPosition = props.labelPosition?? 'right';
  const calcEvpCarrorFlexDirection = () => {
    let EvpCarrotFlexDirection: EvpFlexDirectionRule = 'row';
    switch (labelPosition) {
      case 'right': {
        EvpCarrotFlexDirection = 'row';
        break;
      }
      case 'left': {
        EvpCarrotFlexDirection = 'row-reverse';
        break;
      }
      case 'top': {
        EvpCarrotFlexDirection = 'column-reverse';
        break;
      }
      case 'bottom': {
        EvpCarrotFlexDirection = 'column';
        break;
      }
      default: break;
    }
    return EvpCarrotFlexDirection;
  }

  const calcLabelRadius = () => {
    switch (labelPosition) {
      case 'right': return `0 calc(${height} * 0.5) calc(${height} * 0.5) 0`;
      case 'left': return `calc(${height} * 0.5) 0 0 calc(${height} * 0.5)`;
      case 'top': return `calc(${height} * 0.5) calc(${height} * 0.5) 0 0`;
      case 'bottom': return `0 0 calc(${height} * 0.5) calc(${height} * 0.5)`;
    }
  }

  return(
    <div className={`evp evp-carrot ${props.class}`.trim()}
    style={{
      height: ['right', 'left'].includes(labelPosition) ? height : void 0,
      width: ['top', 'bottom'].includes(labelPosition) ? height : void 0,
      flexDirection: calcEvpCarrorFlexDirection()
    }}
    >
      <div className={`evp-carrot-content ${props.contentClass}`.trim()}
      style={{
        flexDirection: calcEvpCarrorFlexDirection(),
        writingMode: ['right', 'left'].includes(labelPosition) ? 'horizontal-tb' : 'vertical-lr',
      }}>{props.children}</div>
      <div className={`evp-carrot-label ${props.labelpartClass}`.trim()}
      style={{
        width: height,
        borderRadius: calcLabelRadius()
      }}></div>
    </div>
  )
}