import React from 'react';
import EvpFlexbarContentfixed from './content-fixed';
import EvpFlexbarLabelfixed from './label-fixed';
import { EvpCursorRule } from '../typings';
import { Hintable } from '../utils';

export type EvpFlexbarProps = {
  children?: React.ReactNode,
  class?: string,
  style?: React.CSSProperties,
  contentWritingMode?: 'horizontal-tb' | 'vertical-lr' | 'vertical-rl' | 'sideways-rl' | 'sideways-lr',
  contentClass?: string,
  labelClass?: string,
  height?: string | number,
  /** Default value is `"right"` */
  labelPosition?: 'right' | 'left' | 'top' | 'bottom',
  label?: React.ReactNode,
  /** @todo */
  fixedMode?: 'label' | 'content' | 'default',
  gap?: number | string,
  /** Default value is `0.3` */
  flexTime?: number,
  /** Default value is `"ease-in-out"` */
  flexMode?: 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out',
  /** Default value is `"click"` */
  trigger?: 'hover' | 'click',
  hiddenOnBlur?: boolean,
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
  const fixedMode = props.fixedMode?? 'default';
  const render = () => {
    switch (fixedMode) {
      case 'content': return EvpFlexbarContentfixed(props);
      case 'label': return EvpFlexbarLabelfixed(props);
      case 'default': return EvpFlexbarContentfixed(props);
      default: return EvpFlexbarContentfixed(props);
    }
  }
  return(
    <>{render()}</>
  )
}