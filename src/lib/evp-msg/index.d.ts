type EvpMsgType = 'info' | 'warn' | 'error' | 'success';
export interface EvpMessageProps {
    id: string;
    text?: string;
    keep?: number;
    delay?: number;
    type?: EvpMsgType;
}
export declare function EvpMessage(props: EvpMessageProps): import("react/jsx-runtime").JSX.Element;
export interface EvpMsgCreate {
    (id: string, type?: EvpMsgType, text?: string, keep?: number, delay?: number): JSX.Element;
}
export interface EvpMsgRender {
    (text?: string, keep?: number, delay?: number): void;
}
export declare const createInfoMsg: EvpMsgCreate;
/**
 * Render a global info message
 * @param text the message text to display
 * @param keep how long to keep the message, default is 8000 (8s) because message's content is usually s little long
 * @param delay how long to delay the message, default is 0
 */
export declare const renderInfo: EvpMsgRender;
/**
 * Render a global warn message
 * @param text the message text to display
 * @param keep how long to keep the message, default is 8000 (8s) because message's content is usually s little long
 * @param delay how long to delay the message, default is 0
 */
export declare const renderWarn: EvpMsgRender;
/**
 * Render a global error message
 * @param text the message text to display
 * @param keep how long to keep the message, default is 8000 (8s) because message's content is usually s little long
 * @param delay how long to delay the message, default is 0
 */
export declare const renderError: EvpMsgRender;
/**
 * Render a global success message
 * @param text the message text to display
 * @param keep how long to keep the message, default is 8000 (8s) because message's content is usually s little long
 * @param delay how long to delay the message, default is 0
 */
export declare const renderSuccess: EvpMsgRender;
declare const EvpMsg: {
    info: EvpMsgRender;
    warn: EvpMsgRender;
    error: EvpMsgRender;
    success: EvpMsgRender;
};
export default EvpMsg;
