import { CommonCSS } from "./typing";
declare const CSS: {
    FrostedGlass: ((options?: import("./typing").FrostedGlassOptions) => Omit<CommonCSS, "id" | "className">) & {
        background: string;
        backdropFilter: string;
        WebkitBackdropFilter: string;
        border: string;
        borderWidth: string;
        borderStyle: string;
        borderColor: string;
    };
    ShineText: {
        (): Omit<CommonCSS, "className" | "id">;
        textShadow: string;
    };
    Centred: (() => Omit<CommonCSS, "id" | "className">) & {
        textAlign: "center" | "left" | "right" | "start" | "end";
        display: string;
        justifyContent: string;
        alignItems: string;
        verticalAlign: string;
    };
    Overspread: {
        (): Omit<CommonCSS, "className" | "id">;
        width: string;
        height: string;
    };
};
export default CSS;
