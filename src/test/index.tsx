import StylePropsParser from "../lib/utils/style.parser";
import { EvpStyleProps } from "./evp.base.prop";

export default function Test(props: EvpStyleProps) {
  console.log("Test.props", props);
  let style = StylePropsParser(props);
  console.log("style", style);
  return (
  <div style={{
    border: '1px solid black',
    ...style,
    ...props.style,
  }}>
    Test
  </div>)
}
