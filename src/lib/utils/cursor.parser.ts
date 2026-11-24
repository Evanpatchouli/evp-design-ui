// cursor: props.cursor??(props.pointer?'pointer': 'unset')

import EvpStyleProps from "../props/evp.style.prop";
import { EvpCursorRule, Hintable, Option } from "../typings";
import { PropsParserFunc } from "./typing";

type preservedProp = 'pointer' |
'not-allowed' |
'col-resize' |
'row-resize' |
'all-scroll' |
'wait' |
'grab' |
'grabbing' |
'none' |
(string & {});

const preservedCursors: preservedProp[] = [
  'pointer',
  'not-allowed',
  'col-resize',
  'row-resize',
  'all-scroll',
  'wait',
  'grab',
  'grabbing',
  'none',
]

const cursorParser: PropsParserFunc = (props?: EvpStyleProps) => {
  let cursor: Option<Hintable<EvpCursorRule>> = undefined;
  if (props) {
    for (const key of preservedCursors) {
      if (Object.prototype.hasOwnProperty.call(props, key) && props[key]) {
        if (cursor !== undefined) {
          throw new Error('Evp design ui component can only have one valid cursor prop');
        }
        cursor = key;
      }
    }
    return props.cursor ?? cursor;
  }
  return cursor;
}

export default cursorParser;
