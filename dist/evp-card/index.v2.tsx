import classNames from "classnames";
import EvpDom, { EvpDomProps } from "../evp-dom";
import EvpBaseProps from "../props";

export interface EvpCardProps extends EvpBaseProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  class?: string;
  contentClass?: string;
  lefter?: React.ReactNode;
  lefterProps?: EvpDomProps;
  righter?: React.ReactNode;
  righterProps?: EvpDomProps;
  header?: React.ReactNode;
  headerProps?: EvpDomProps;
  footer?: React.ReactNode;
  footerProps?: EvpDomProps;
  cardLoading?: boolean;
}

export default function EvpCardV2(props: EvpCardProps) {
  const containerProps = (): EvpDomProps => {
    const {
      class: _class,
      children,
      style,
      contentStyle,
      contentClass,
      lefter,
      lefterProps,
      righter,
      righterProps,
      header,
      headerProps,
      footer,
      footerProps,
      loading,
      cardLoading,
      ...rest
    } = props;
    return {
      style: {
        flexDirection: "row",
        ...style,
      },
      loading: cardLoading,
      ...rest,
      class: `evp evp-card evp-base-shadow ${props.class} ?? ""`.trim(),
    };
  };

  const lefterProps = () => {
    return {
      ...(props.lefterProps ?? {}),
      class: classNames(`evp-card-lefter`, props.lefterProps?.class),
    };
  };

  const righterProps = () => {
    return {
      ...(props.righterProps ?? {}),
      class: classNames(`evp-card-righter`, props.righterProps?.class),
    };
  };

  const headerProps = () => {
    return {
      ...(props.headerProps ?? {}),
      class: classNames(`evp-card-header`, props.headerProps?.class),
    };
  };

  const footerProps = () => {
    return {
      ...(props.footerProps ?? {}),
      class: classNames(`evp-card-footer`, props.footerProps?.class),
    };
  };

  return (
    <EvpDom {...containerProps()}>
      {props.lefter !== undefined ? <EvpDom {...lefterProps()}>{props.lefter}</EvpDom> : void 0}
      <div className={`evp-card-main`}>
        {props.header !== undefined ? <EvpDom {...headerProps()}>{props.header}</EvpDom> : void 0}
        <EvpDom
          class={`evp-card-content ${props.contentClass}`.trim()}
          style={{ ...props.contentStyle }}
          loading={props.loading}
        >
          {props.children}
        </EvpDom>
        {props.footer !== undefined ? <EvpDom {...footerProps()}>{props.footer}</EvpDom> : void 0}
      </div>
      {props.righter !== undefined ? <EvpDom {...righterProps()}>{props.righter}</EvpDom> : void 0}
    </EvpDom>
  );
}
