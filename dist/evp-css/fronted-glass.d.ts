import { CommonCSS, FrostedGlassOptions } from "./typing";
declare const FrostedGlass: ((options?: FrostedGlassOptions) => Omit<CommonCSS, "className" | "id">) & {
    background: string;
    backdropFilter: string;
    WebkitBackdropFilter: string;
    border: string;
    borderWidth: string;
    borderStyle: string;
    borderColor: string;
};
export default FrostedGlass;
