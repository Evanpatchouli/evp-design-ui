// please write a message component with react as a component
import ReactDOM from 'react-dom';
import './index.css';
import React from 'react';

export interface EvpMessageProps {
  text?: string;
  keep?: number;
  delay?: number;
  type?: 'info' | 'warn' | 'error' | 'success';
}

function toast(dom: JSX.Element, keep?: number, delay?: number) {
  const div = document.createElement('div')
  document.body.appendChild(div);
  setTimeout(() => {
    ReactDOM.render(dom, div);
    setTimeout(() => {
      ReactDOM.unmountComponentAtNode(div)
      document.body.removeChild(div)
    }, keep??3000);
  }, delay??0)
  // return {
  //     addNotice(notice) {
  //         return notification.addNotice(notice)
  //     },
  //     destroy() {
  //         ReactDOM.unmountComponentAtNode(div)
  //         document.body.removeChild(div)
  //     }
  // }
}

export function EvpMessage(props: EvpMessageProps){
  
  return(
    <>
      <div className="evp evp-msg">
        {props.text}
      </div>
    </>
  )
}

export interface EvpMsgCreate {
  (text?: string,keep?: number,delay?: number): JSX.Element;
}

export interface EvpMsgToast {
  (text?: string,keep?: number,delay?: number): void;
}

export const createInfoMsg: EvpMsgCreate = (text?: string,keep?: number,delay?: number) => {
  const msg = EvpMessage({
    text: text,
    type: 'info',
    keep: keep,
    delay: delay
  });
  return (
    <>
      {msg}
    </>
  )
}

export const toastInfo: EvpMsgToast = (text?: string,keep?: number,delay?: number) => {
  toast(createInfoMsg(text,keep,delay), keep, delay);
}

const EvpMsg = {
  info: toastInfo
}

export default EvpMsg;