import { BaseDomProps } from "../evp-dom";

export interface EvpRowProps extends BaseDomProps {
  flexDirection?: 'row' | 'row-reverse',
  justifyContent?: string & ('center' | 'left' | 'right' | 'start' 
  | 'end' | 'flex-start' | 'flex-end' | 'inherit' | 'initial' | 'normal' 
  | 'revert' | 'revert-layer' | 'space-around' | 'space-between' | 'space-evenly' | 'strench' | 'unset');
  alignItems?: string & ('center' | 'left' | 'right' | 'start' 
  | 'end' | 'flex-start' | 'flex-end' | 'inherit' | 'initial' | 'normal' 
  | 'revert' | 'revert-layer' | 'space-around' | 'space-between' | 'space-evenly' | 'strench' | 'unset');
}

export default function EvpRow(props: EvpRowProps) {
  return (
    <div className="evp row"
      style={{
        display: 'flex',
        flexDirection: props.flexDirection??'row',
        justifyContent: props.justifyContent??'flex-start',
        alignItems: props.alignItems??'center',
        ...props.style
      }}
    >
      {props.children}
    </div>
  );
}