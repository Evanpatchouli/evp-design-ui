import EvpBaseProps from "../props";
export interface EvpRowProps extends EvpBaseProps {
    flexDirection?: "row" | "row-reverse";
    gap?: number | string;
}
export default function EvpRow(props: EvpRowProps): import("react/jsx-runtime").JSX.Element;
