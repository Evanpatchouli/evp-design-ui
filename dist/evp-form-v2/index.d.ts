/// <reference types="react" />
import { EvpFormInstance } from "./hooks";
export type EvpFormProps<T = any> = {
    children: JSX.Element | React.ReactNode;
    $submit?: (formData: {
        [K in keyof T]: T[K];
    }) => void;
    formRef?: React.MutableRefObject<EvpFormInstance<T>>;
    style?: React.CSSProperties;
};
export default function EvpForm(props: EvpFormProps): import("react/jsx-runtime").JSX.Element;
