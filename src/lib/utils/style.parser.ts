import { EvpStyleProps } from "../../test/evp.base.prop";
import propsParser from "./props.parser";

export default function StylePropsParser(props: EvpStyleProps): React.CSSProperties {
  // console.log("StypePropsParser.props", props);
  const _props = props as {[x:string]:any};
  const keys: string[] = Object.keys(props);

  let padding: string|undefined = undefined;
  let margin: string|undefined = undefined;

  let paddingComputed: number[] = [0,0,0,0];
  let marginComputed: number[] = [0,0,0,0];

  if (props.mg) {
    margin = propsParser.get('mg')?.<string>(props.mg)
  } else {
    keys.forEach(key=>{
      // if props.pd not exist, parse quick props
      handleMargin(key);
    });
    padding = propsParser.get('mg')?.(
      isValidMgPdArray(marginComputed)? marginComputed : [null,null,null,null]
    );
  }
  if (props.pd) {
    padding = propsParser.get('pd')?.<string>(props.pd)
  } else {
    keys.forEach(key=>{
      // if props.mg not exist, parse quick props
      handlePadding(key);
    });
    padding = propsParser.get('pd')?.(
      isValidMgPdArray(paddingComputed)? paddingComputed : [null,null,null,null]
    );
  }

  const cursor = propsParser.get('cursor')?.<EvpCursorRule>(props);

  return {
    cursor: cursor,
    display: props.display,
    flexDirection: props.flexDirection,
    justifyContent: props.justifyContent,
    alignItems: props.alignItems,
    width: props.w,
    height: props.h,
    padding: padding,
    margin: margin,
    ...props.style
  }

  function isValidMgPdArray (array: number[]) {
    return JSON.stringify(array) === '[0,0,0,0]'? false : true;
  }

  function handleMargin (key: string): boolean {
    if ( key.startsWith('mg') && _props[key]) {
      const slices = key.split('_');
      if ( slices.length !== 2 ) {
        return true;
      }
      switch (slices[0]) {
        case 'mg': {
          marginComputed[0] += Number(slices[1]);
          marginComputed[1] += Number(slices[1]);
          marginComputed[2] += Number(slices[1]);
          marginComputed[3] += Number(slices[1]);
          break;
        }
        case 'mgt': {
          marginComputed[0] += Number(slices[1]);
          break;
        }
        case 'mgr': {
          marginComputed[1] += Number(slices[1]);
          break;
        }
        case 'mgb': {
          marginComputed[2] += Number(slices[1]);
          break;
        }
        case 'mgl': {
          marginComputed[3] += Number(slices[1]);
          break;
        }
        default: {
          // @ignore
        }
      }
      return true;
    }
    return false;
  }

  function handlePadding(key: string): boolean {
    if ( key.startsWith('pd') && _props[key]) {
      const slices = key.split('_');
      if ( slices.length !== 2 ) {
        return true;
      }
      switch (slices[0]) {
        case 'pd': {
          paddingComputed[0] += Number(slices[1]);
          paddingComputed[1] += Number(slices[1]);
          paddingComputed[2] += Number(slices[1]);
          paddingComputed[3] += Number(slices[1]);
          break;
        }
        case 'pdt': {
          paddingComputed[0] += Number(slices[1]);
          break;
        }
        case 'pdr': {
          paddingComputed[1] += Number(slices[1]);
          break;
        }
        case 'pdb': {
          paddingComputed[2] += Number(slices[1]);
          break;
        }
        case 'pdl': {
          paddingComputed[3] += Number(slices[1]);
          break;
        }
        default: {
          // @ignore
        }
      }
      return true;
    }
    return false;
  }

}