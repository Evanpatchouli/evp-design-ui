import EvpDom from "../evp-dom";
import EvpBaseProps from "../props";
import "./index.scss";

export interface EvpCardProps extends EvpBaseProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  toolbarStyle?: React.CSSProperties;
  toolBar?: React.ReactNode;
  toolBarPosition?: 'top' | 'bottom' | 'left' | 'right';
  class?: string;
  contentClass?: string;
  toolBarClass?: string;
}

export default function EvpCard(props: EvpBaseProps) {

  const toolBarPosition = props.toolBarPosition?? "bottom";

  const flexDirectionMap: {[x:string]:EvpFlexDirectionRule} = {
    top: 'column-reverse',
    bottom: 'column',
    left: 'row-reverse',
    right: 'row'
  }

  return (
    <EvpDom
      props={{
        style: {
          flexDirection: flexDirectionMap[toolBarPosition],
        },
        ...props,
        class: `evp evp-card evp-base-shadow ${props.class} ?? ""`.trim(),
      }}
    >
      <div
        className={`evp-card-content ${props.contentClass}`.trim()}
        style={{ ...props.contentStyle }}
      >
        {props.children}
      </div>
      <div
        className={`evp-card-toolbar ${props.toolBarClass}`.trim()}
        style={{
          borderTop: props.toolBar? '1px solid rgba(0,0,0,0.05)' : void 0,
          ...props.toolbarStyle
        }}
      >
        {props.toolBar}
      </div>
    </EvpDom>
  );
}
