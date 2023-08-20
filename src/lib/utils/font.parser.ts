import EvpStyleProps from "../props/evp.style.prop";
import { PropsParserFunc } from "./props.parser";

const fontParser: PropsParserFunc = (props?: EvpStyleProps): Option<string> => {
  if (!props) {
    return undefined;
  }
  const keys = Object.keys(props);

  if (props.fontSize) {
    return props.fontSize;
  }

  let fontSizeComputed: Option<number> = 0;

  handleFont();
  return fontSizeComputed? `${fontSizeComputed}px` : undefined;

  function handleFont() {
    keys.forEach( key => {
      if ( key.startsWith('fs') && props?.[key]) {
        const slices = key.split('_');
        if ( slices.length !== 2 ) {
          return true;
        }
        fontSizeComputed = Number(slices[1]) + (fontSizeComputed??0);
        return true;
      }
      return false;
    })
  }
}

export default fontParser;