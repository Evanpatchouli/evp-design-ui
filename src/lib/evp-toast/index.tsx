// please write a message component with react as a component
import ReactDOM from 'react-dom';
import './index.scss';
import React from 'react';
import EvpIcon from '../evp-icon';
import { Color } from '../constant';
import store from './store';
// import { createRoot } from 'react-dom/client';

type EvpMsgType = 'info' | 'warn' | 'error' | 'success';

export interface EvpMessageProps {
  text?: string;
  keep?: number;
  delay?: number;
  type?: EvpMsgType;
}

let toasts = store.toasts;

function render(dom: JSX.Element, keep?: number, delay?: number) {
  
  console.log('toasts before render', toasts);
  
  // const div = document.getElementById('root') as HTMLElement;
  const div = document.createElement('div');
  document.body.appendChild(div);
  
  const timer = setTimeout(() => {
    ReactDOM.render(dom, div);
    toasts.push(dom);
    console.log('toasts after render', toasts);
    setTimeout(() => {
      ReactDOM.unmountComponentAtNode(div)
      document.body.removeChild(div)
      toasts = toasts.filter(toast => toast !== dom);
      console.log('toasts after unmount', toasts);

      clearTimeout(timer);
    }, keep??3000);
  }, delay??0)
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
  
  return(
    <>
      <div className="evp evp-toast">
        <EvpIcon name={icon[props.type??'info']} color={color[props.type??'info']} />
        <div children={props.text} />
      </div>
    </>
  )
}

export interface EvpMsgCreate {
  (type?: EvpMsgType, text?: string,keep?: number,delay?: number): JSX.Element;
}

export interface EvpMsgRender {
  (text?: string,keep?: number,delay?: number): void;
}

export const createInfoMsg: EvpMsgCreate = (type?: EvpMsgType, text?: string,keep?: number,delay?: number) => {
  const msg = EvpMessage({
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
 * @param keep how long to keep the message, default is 8 (3000ms) because message's content is usually s little long
 * @param delay how long to delay the message, default is 0
 */
export const renderInfo: EvpMsgRender = (text?: string,keep?: number,delay?: number) => {
  render(createInfoMsg('info', text,keep,delay), keep, delay);
}

/**
 * Render a global warn message
 * @param text the message text to display
 * @param keep how long to keep the message, default is 8 (3000ms) because message's content is usually s little long
 * @param delay how long to delay the message, default is 0
 */
export const renderWarn: EvpMsgRender = (text?: string,keep?: number,delay?: number) => {
  render(createInfoMsg('warn', text,keep,delay), keep, delay);
}

/**
 * Render a global error message
 * @param text the message text to display
 * @param keep how long to keep the message, default is 8 (3000ms) because message's content is usually s little long
 * @param delay how long to delay the message, default is 0
 */
export const renderError: EvpMsgRender = (text?: string,keep?: number,delay?: number) => {
  render(createInfoMsg('error', text,keep,delay), keep, delay);
}

/**
 * Render a global success message
 * @param text the message text to display
 * @param keep how long to keep the message, default is 8 (3000ms) because message's content is usually s little long
 * @param delay how long to delay the message, default is 0
 */
export const renderSuccess: EvpMsgRender = (text?: string,keep?: number,delay?: number) => {
  render(createInfoMsg('success', text,keep,delay), keep, delay);
}

const EvpToast = {
  info: renderInfo,
  warn: renderWarn,
  error: renderError,
  success: renderSuccess
}

export default EvpToast;