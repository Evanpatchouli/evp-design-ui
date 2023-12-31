import { Color } from "../constant";
import EvpRow from "../evp-row";
import { EvpPosition, Hintable } from "../typings";

export interface EvpHeaderProps {
  icon?: React.ReactNode;
  title?: React.ReactNode;
  /** Default is 40 : left width rate */
  leftRate?: number;
  children?: React.ReactNode;
  leftContent?: React.ReactNode;
  leftOffset?: number;
  rightContent?: React.ReactNode;
  rightOffset?: number;
  bgColor?: Hintable<Color>,
  color?: Hintable<Color>,
  position?: EvpPosition,
  zIndex?: number;
  height?: number;
  class?: string,
  style?: React.CSSProperties;
}

export default function EvpHeader(props: EvpHeaderProps) {
  return (
    <EvpRow
      position={props.position??"fixed"}
      left={0}
      top={0}
      h={props.height??80}
      w={"100%"}
      color={props.color??"#000000"}
      bgColor={props.bgColor??"#ffffff"}
      boxShadow="var(--base-shadow)"
      zIndex={props.zIndex ?? 8000}
      class={props.class}
      style={props.style}
    >
      {props.children ? (
        props.children
      ) : (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
              width: `${props.leftRate ?? 40}%`,
              paddingLeft: props.leftOffset??40,
            }}
          >
            {props.leftContent ?? (
              <>
                {props.icon}
                <div style={{ fontSize: 20, paddingLeft: 20 }}>
                  {props.title}
                </div>
              </>
            )}
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "right",
              alignItems: "center",
              paddingRight: props.rightOffset??40,
            }}
          >
            {props.rightContent}
          </div>
        </>
      )}
    </EvpRow>
  );
}
