/// <reference types="react" />
export type EvpAnchorProps = EvpAchorAProps | EvpAchorDivProps;
interface EvpAchorAProps extends React.HTMLAttributes<HTMLAnchorElement> {
    /** target element's id */
    id: string;
    class?: string;
    children?: React.ReactNode;
    hash: true;
    behavior?: "smooth" | "instant" | "auto";
    block?: "start" | "center" | "end" | "nearest";
    inline?: "start" | "center" | "end" | "nearest";
}
interface EvpAchorDivProps extends React.HTMLAttributes<HTMLDivElement> {
    /** target element's id */
    id: string;
    class?: string;
    children?: React.ReactNode;
    hash?: undefined | false;
    behavior?: "smooth" | "instant" | "auto";
    block?: "start" | "center" | "end" | "nearest";
    inline?: "start" | "center" | "end" | "nearest";
}
/**
 * Wrap some elements to jump to an anchor while clicked
 */
export default function EvpAnchor(props: EvpAnchorProps): import("react/jsx-runtime").JSX.Element;
export {};
