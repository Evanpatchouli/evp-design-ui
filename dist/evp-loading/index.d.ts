/// <reference types="react" />
export interface EvpLoadingProps extends React.HTMLAttributes<HTMLDivElement> {
    color?: string;
    size?: number | string;
    style?: Omit<React.CSSProperties, "fontSize">;
}
declare function WaveLoading(props: EvpLoadingProps): import("react/jsx-runtime").JSX.Element;
declare function BreatheSpin(props: EvpLoadingProps): import("react/jsx-runtime").JSX.Element;
declare function Grid(props: EvpLoadingProps): import("react/jsx-runtime").JSX.Element;
declare function Spin(props: EvpLoadingProps): import("react/jsx-runtime").JSX.Element;
declare function Spin2(props: EvpLoadingProps): import("react/jsx-runtime").JSX.Element;
declare function SpinDot(props: EvpLoadingProps): import("react/jsx-runtime").JSX.Element;
declare function Chase(props: EvpLoadingProps): import("react/jsx-runtime").JSX.Element;
declare function Text(props: EvpLoadingProps & {
    weight?: "light" | "normal" | "bold";
}): import("react/jsx-runtime").JSX.Element;
declare const EvpLoading: {
    Wave: typeof WaveLoading;
    BreatheSpin: typeof BreatheSpin;
    Grid: typeof Grid;
    Spin: typeof Spin;
    Spin2: typeof Spin2;
    SpinDot: typeof SpinDot;
    Chase: typeof Chase;
    Text: typeof Text;
};
export default EvpLoading;
