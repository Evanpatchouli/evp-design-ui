import EvpBaseProps from "../lib/props";
import EvpDom from "../lib/evp-dom";
import { Color } from "../lib/constant";
import { useState } from "react";

export default function Test(props: EvpBaseProps) {
  console.log('Test.props:', props)
  const cursorType = ['unset', 'pointer'];
  const [cursor, setCursor] = useState(cursorType[0]);
  return(
    <>
      <EvpDom
      props={props}
      >
        <div>{props.children}</div>
      </EvpDom>
    </>
  )
}
