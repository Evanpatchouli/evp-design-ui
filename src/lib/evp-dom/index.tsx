import React from 'react';

export interface BaseDomProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  children?: React.ReactNode
}

// export default function EvpDom(props: BaseDomProps) {
//   return(
//     <div onClick={props.onClick}>
//       { props.children }
//     </div>
//   )
// }