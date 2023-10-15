import React from "react";
import CSS from "../evp-css/constant";
import { FrostedGlassOptions } from "../evp-css/typing";

type TemplateProps = {
  children?: React.ReactNode;
};

export type EvpTemplateProps = TemplateProps;

const Template = ({ children }: TemplateProps) => {
  return <>{children}</>;
};

export type FrostedGlassTemplateProps = TemplateProps &
  FrostedGlassOptions &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

Template.FrostedGlass = ({
  style,
  background,
  filterBlur,
  radius,
  border,
  borderWidth,
  borderStyle,
  borderColor,
  ...props
}: FrostedGlassTemplateProps) => {
  const FrostedGlassOptions = { background, filterBlur, radius, border, borderWidth, borderStyle, borderColor };
  return (
    <div
      {...props}
      style={{
        ...CSS.FrostedGlass(FrostedGlassOptions).style,
        ...style,
      }}
    >
      {props.children}
    </div>
  );
};

Template.Page = (props: TemplateProps) => {
  // return <div {...CSS.Page()}>{props.children}</div>;
};

export default Template;
