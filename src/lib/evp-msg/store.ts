import type { Root } from 'react-dom/client';

export type MsgState = {
  /** the text of the message */
  text?: string,
  /** the unique nanoid of the message */
  id: any,
  /** the DOM Node where the message is appended */
  dom: HTMLDivElement,
  root: Root,
  timer: {
    /** the timer to start to show message */
    start?: NodeJS.Timeout,
    /** the timer to destroy the message */
    clean?: NodeJS.Timeout
  }
}

const state = {
  messages: [] as MsgState[]
}

export const addMessage = (msg: MsgState) => {
  state.messages.push(msg);
}

export const getMessageById = (id: string) => {
  return state.messages.find(msg => msg.id === id);
}

export const delMessageByid = (id: string) => {
  state.messages = state.messages.filter(msg => msg.id !== id);
}

const store = {
  state: state,
  get messages() { return state.messages; },
  addMessage,
  getMessageById,
  delMessageByid
}

export default store;
