import { PropsParserFunc } from "./props.parser";
import { Option } from "../typings";

const valParser: PropsParserFunc = (props?: string | number): Option<string> => {
  if (!props) {
    return undefined;
  } else {
    if (typeof props === 'number') {
      return `${props}px`;
    } else {
      return props;
    }
  }
}

export default valParser;