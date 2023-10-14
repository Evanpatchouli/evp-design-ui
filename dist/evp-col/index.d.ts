import EvpBaseProps from "../props";
export interface EvpColProps extends EvpBaseProps {
    flexDirection?: "column" | "column-reverse";
    gap?: string | number;
}
export default function EvpCol(props: EvpColProps): import("react/jsx-runtime").JSX.Element;
