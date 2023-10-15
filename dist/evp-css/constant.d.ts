import { CommonCSS } from "./typing";
declare const CSS: {
    FrostedGlass: ((options?: import("./typing").FrostedGlassOptions) => Omit<CommonCSS, "className" | "id">) & {
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
    Centred: (() => Omit<CommonCSS, "className" | "id">) & {
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
