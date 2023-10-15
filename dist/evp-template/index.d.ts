import React from "react";
import { FrostedGlassOptions } from "../evp-css/typing";
type TemplateProps = {
    children?: React.ReactNode;
};
export type EvpTemplateProps = TemplateProps;
declare const Template: {
    ({ children }: TemplateProps): import("react/jsx-runtime").JSX.Element;
    FrostedGlass({ style, background, filterBlur, radius, border, borderWidth, borderStyle, borderColor, ...props }: FrostedGlassTemplateProps): import("react/jsx-runtime").JSX.Element;
    Page(props: TemplateProps): void;
};
export type FrostedGlassTemplateProps = TemplateProps & FrostedGlassOptions & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export default Template;
