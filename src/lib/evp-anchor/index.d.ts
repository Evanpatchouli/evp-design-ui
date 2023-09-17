/// <reference types="react" />
export type EvpAnchorProps = {
    id: string;
    class?: string;
    children?: React.ReactNode;
    hash?: boolean;
    behavior?: "smooth" | "instant" | "auto";
    block?: "start" | "center" | "end" | "nearest";
    inline?: "start" | "center" | "end" | "nearest";
};
/**
 * Wrap some elements to jump to an anchor while clicked
 */
export default function EvpAnchor(props: EvpAnchorProps): import("react/jsx-runtime").JSX.Element;
