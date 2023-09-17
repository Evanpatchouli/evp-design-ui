import React from 'react';
import EvpBaseProps from '../props';
export interface BaseDomProps {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    children?: React.ReactNode;
    onChange?: React.ChangeEventHandler;
    style?: React.CSSProperties;
}
export type EvpDomProps = EvpBaseProps;
export default function EvpDom($props: EvpDomProps): import("react/jsx-runtime").JSX.Element;
