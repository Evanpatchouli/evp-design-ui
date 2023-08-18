import { BaseDomProps } from "../evp-dom";

export interface EvpColProps extends BaseDomProps {
  flexDirection?: 'column' | 'column-reverse',
  justifyContent?: string & ('center' | 'left' | 'right' | 'start' 
  | 'end' | 'flex-start' | 'flex-end' | 'inherit' | 'initial' | 'normal' 
  | 'revert' | 'revert-layer' | 'space-around' | 'space-between' | 'space-evenly' | 'strench' | 'unset');
  alignItems?: string & ('center' | 'left' | 'right' | 'start' 
  | 'end' | 'flex-start' | 'flex-end' | 'inherit' | 'initial' | 'normal' 
  | 'revert' | 'revert-layer' | 'space-around' | 'space-between' | 'space-evenly' | 'strench' | 'unset');
  width?: string;
  height?: string;
}

export default function EvpCol(props: EvpColProps) {
  return (
    <div className="evp col"
      style={{
        display: 'flex',
        flexDirection: props.flexDirection??'column',
        justifyContent: props.justifyContent??'flex-start',
        alignItems: props.alignItems??'center',
        width: props.width,
        height: props.height,
        ...props.style
      }}
    >
      {props.children}
    </div>
  );
}