// please write a message component with react as a component
import { createRoot } from 'react-dom/client';
import React from 'react';
import EvpIcon from '../evp-icon';
import { Color } from '../constant';
import Close from '../evp-icon/close';
import { nanoid } from 'nanoid';
import store, { MsgState } from './store';
import './index.css';

type EvpMsgType = 'info' | 'warn' | 'error' | 'success';

export interface EvpMessageProps {
  id: string;
  text?: string;
  keep?: number;
  delay?: number;
  type?: EvpMsgType;
}


function render(id: string, text: string, dom: JSX.Element, keep?: number, delay?: number) {
  const div = document.createElement('div')
  document.body.appendChild(div);
  const root = createRoot(div);
  const startTimer = setTimeout(() => {
    root.render(dom);
    const msgState = store.getMessageById(id) as MsgState;
    const cleanTimer = setTimeout(() => {
      document.body.removeChild(div)
      clearTimeout(startTimer);
      store.delMessageByid(id);
    }, keep??8000);
    msgState.timer.clean = cleanTimer;
  }, delay??0);
  store.addMessage({
    id: id,
    dom: div,
    text: text,
    timer: {
      start: startTimer
    }
  });
}

export function EvpMessage(props: EvpMessageProps){
  const icon = {
    'info': 'info',
    'warn': 'warn',
    'error': 'error',
    'success': 'true_circle'
  }

  const color: IndexableFuzzy<Color> = {
    'info': Color.Gray,
    'warn': Color.Orange,
    'error': Color.Red,
    'success': Color.Green
  }

  function undisplay(e: React.MouseEvent): void {
    const msgState = store.getMessageById(props.id) as MsgState;
    const { dom: div, timer: { start, clean } } = msgState;

    document.body.removeChild(div)
    clearTimeout(start);
    clearTimeout(clean);

    store.delMessageByid(props.id);
    return void 0 ;
  }
  
  return(
    <>
      <div className="evp evp-msg">
        <div className='evp-msg-content'>
          <EvpIcon name={icon[props.type??'info']} color={color[props.type??'info']} />
          <div children={props.text} />
        </div>
        <Close onClick={undisplay} pointer />
      </div>
    </>
  )
}

export interface EvpMsgCreate {
  (id: string, type?: EvpMsgType, text?: string,keep?: number,delay?: number): JSX.Element;
}

export interface EvpMsgRender {
  (text?: string,keep?: number,delay?: number): void;
}

export const createInfoMsg: EvpMsgCreate = (id: string, type?: EvpMsgType, text?: string,keep?: number,delay?: number) => {
  const msg = EvpMessage({
    id: id,
    text: text,
    type: type,
    keep: keep,
    delay: delay
  });
  return (
    <>
      {msg}
    </>
  )
}

/**
 * Render a global info message
 * @param text the message text to display
 * @param keep how long to keep the message, default is 8000 (8s) because message's content is usually s little long
 * @param delay how long to delay the message, default is 0
 */
export const renderInfo: EvpMsgRender = (text?: string,keep?: number,delay?: number) => {
  const id = nanoid();
  render(id, text??'', createInfoMsg(id, 'info', text,keep,delay), keep, delay);
}

/**
 * Render a global warn message
 * @param text the message text to display
 * @param keep how long to keep the message, default is 8000 (8s) because message's content is usually s little long
 * @param delay how long to delay the message, default is 0
 */
export const renderWarn: EvpMsgRender = (text?: string,keep?: number,delay?: number) => {
  const id = nanoid();
  render(id, text??'', createInfoMsg(id, 'warn', text,keep,delay), keep, delay);
}

/**
 * Render a global error message
 * @param text the message text to display
 * @param keep how long to keep the message, default is 8000 (8s) because message's content is usually s little long
 * @param delay how long to delay the message, default is 0
 */
export const renderError: EvpMsgRender = (text?: string,keep?: number,delay?: number) => {
  const id = nanoid();
  render(id, text??'', createInfoMsg(id, 'error', text,keep,delay), keep, delay);
}

/**
 * Render a global success message
 * @param text the message text to display
 * @param keep how long to keep the message, default is 8000 (8s) because message's content is usually s little long
 * @param delay how long to delay the message, default is 0
 */
export const renderSuccess: EvpMsgRender = (text?: string,keep?: number,delay?: number) => {
  const id = nanoid();
  render(id, text??'', createInfoMsg(id, 'success', text,keep,delay), keep, delay);
}

const EvpMsg = {
  info: renderInfo,
  warn: renderWarn,
  error: renderError,
  success: renderSuccess
}

export default EvpMsg;