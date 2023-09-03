import EvpBaseProps from "../lib/props";
import EvpDom from "../lib/evp-dom";

export default function Test(props: EvpBaseProps) {
  console.log('Test.props:', props)
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
