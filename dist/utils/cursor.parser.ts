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
    const keys = Object.keys(props);
    let cursors = keys.map(key => {
      if (preservedCursors.includes(key) && props[key]) {
        return key;
      }
      return undefined;
    })
    // filter means to keep which matches the rule and filter out others
    cursors = cursors.filter( elem => elem);
    if (cursors.length > 1) {
      throw new Error('Evp design ui component can only have one valid cursor prop');
    }
    cursor = props.cursor??(cursors[0]??cursor);
    return cursor;
  }
  return cursor;
}

export default cursorParser;