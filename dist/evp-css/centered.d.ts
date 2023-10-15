import { CommonCSS } from "./typing";
declare const Centred: (() => Omit<CommonCSS, "className" | "id">) & {
    textAlign: "center" | "left" | "right" | "start" | "end";
    display: string;
    justifyContent: string;
    alignItems: string;
    verticalAlign: string;
};
export default Centred;
