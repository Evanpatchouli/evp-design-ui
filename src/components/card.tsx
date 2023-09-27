import "./card.css";

export default function Card(props: {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  toolbarStyle?: React.CSSProperties;
  toolBar?: React.ReactNode;
  class?: string;
  contentClass?: string;
  toolBarClass?: string;
}) {
  return (
    <div
      className={`evp evp-base-shadow card ${props.class ?? ""}`.trim()}
      style={{
        ...props.style,
      }}
    >
      <div className={`card-content ${props.contentClass ?? ""}`.trim()} style={{ ...props.contentStyle }}>
        {props.children}
      </div>
      <div
        className={`card-toolbar ${props.toolBarClass ?? ""}`.trim()}
        style={{
          borderTop: props.toolBar ? "1px solid rgba(0,0,0,0.05)" : void 0,
          ...props.toolbarStyle,
        }}
      >
        {props.toolBar}
      </div>
    </div>
  );
}
