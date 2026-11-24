/// <reference types="node" />
import type { Root } from 'react-dom/client';
export type MsgState = {
    /** the text of the message */
    text?: string;
    /** the unique nanoid of the message */
    id: any;
    /** the DOM Node where the message is appended */
    dom: HTMLDivElement;
    root: Root;
    timer: {
        /** the timer to start to show message */
        start?: NodeJS.Timeout;
        /** the timer to destroy the message */
        clean?: NodeJS.Timeout;
    };
};
export declare const addMessage: (msg: MsgState) => void;
export declare const getMessageById: (id: string) => MsgState | undefined;
export declare const delMessageByid: (id: string) => void;
declare const store: {
    state: {
        messages: MsgState[];
    };
    readonly messages: MsgState[];
    addMessage: (msg: MsgState) => void;
    getMessageById: (id: string) => MsgState | undefined;
    delMessageByid: (id: string) => void;
};
export default store;
