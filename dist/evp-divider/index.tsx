import { useRef } from 'react';
import { Color } from '../constant';

export type EvpDividerProps = {
  type?: 'solid' | 'dashed' | 'dotted',
  color?: string,
  lineWidth?: string | number,
  width?: string | number,
  radius?: 'default' | 'round' | 'none' | number,
  top?: string | number,
  bottom?: string | number,
  left?: string | number,
  right?: string | number,
  style?: React.CSSProperties,
  class?: string,
  children?: React.ReactNode,
  contentStyle?: React.CSSProperties,
  contentClass?: string,
  gap?: number | string,
  contentGap?: number,
  contentItemGap?: number | string,
  fontSize?: number | string,
  fontColor?: string
}

export default function EvpDivider(props: EvpDividerProps) {
  const type = props.type? props.type : 'dashed';
  const lineWidth = props.lineWidth? typeof props.lineWidth !== 'number' ? props.lineWidth : `${props.lineWidth}px` : '1px';
  const width = props.width? typeof props.width !== 'number' ? props.width : `${props.width}px` : '100%';
  const color = props.color?? Color.ShallowGray;
  const gap = props.gap? typeof props.gap !== 'number' ? props.gap : `${props.gap}px` : '0px';
  const top = props.top? typeof props.top !== 'number' ? props.top : `${props.top}px` : '0px';
  const bottom = props.bottom? typeof props.bottom !== 'number' ? props.bottom : `${props.bottom}px` : '0px';
  const left = props.left? typeof props.left !== 'number' ? props.left : `${props.left}px` : '0px';
  const right = props.right? typeof props.right !== 'number' ? props.right : `${props.right}px` : '0px';
  const radius = props.radius? typeof props.radius !== 'number' ? props.radius === 'round'? `calc(${lineWidth} * 0.5)` : 'none' : `${props.radius}px` : void 0;

  const ref = useRef<HTMLDivElement>(null);
  const calcWidth = () => ref.current?.clientWidth;
  return(
    <>
    {!props.children?
      <div className={`evp evp-divider ${props.class??''}`.trim()}
      ref={ref}
      style={{
        width: width,
        paddingTop: top,
        paddingBottom: bottom,
        ...props.style,
      }}>
        <div
        style={{
          borderTop: `${lineWidth} ${type} ${color}`,
          borderRadius: radius,
          width: `calc(${calcWidth()}px - ${left} - ${right} - ${gap} * 2)`,
          marginLeft: `calc(${left} + ${gap})`,
          marginRight: `calc(${right} + ${gap})`,
        }} />
      </div>
      :
      <div className={`evp evp-divider with-text ${props.class??''}`.trim()}
      style={{
        width: `calc(${width} - ${left} - ${right} - ${gap} * 2)`,
        display: 'flex',
        alignItems: 'center',
        paddingInline: props.gap?typeof props.gap === 'string'? props.gap : `${props.gap}px` : '0px',
        paddingTop: top,
        paddingBottom: bottom,
        paddingLeft: `calc(${left} + ${gap})`,
        paddingRight: `calc(${right} + ${gap})`,
        fontSize: props.fontSize? typeof props.fontSize !== 'number' ? props.fontSize : `${props.fontSize}px` : '14px',
        color: props.fontColor?? color,
        // @ts-ignore
        '--color': color,
        '--line-width': lineWidth,
        '--type': type,
        '--border-radius': radius,
        ...props.style
      }}>
        <div className={`evp-divider-content ${props.contentClass??''}`.trim()}
        style={{
          marginInline: props.contentGap?typeof props.contentGap === 'string'? props.contentGap : `${props.contentGap}px` : '8px',
          // @ts-ignore
          '--content-item-gap': props.contentItemGap?typeof props.contentItemGap === 'string'? props.contentItemGap : `${props.contentItemGap}px` : '0px',
        }}
        >{props.children}</div>
      </div>
    }
    </>
  )
}