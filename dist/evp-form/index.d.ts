/// <reference types="react" />
import { EvpFormInstance } from "./hooks";
export type EvpFormProps<T = any> = {
    children: JSX.Element | React.ReactNode;
    $submit?: React.FormEventHandler<HTMLFormElement>;
    formRef?: EvpFormInstance<T>;
};
export default function EvpForm(props: EvpFormProps): import("react/jsx-runtime").JSX.Element;
