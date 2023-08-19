import { ArrayLengthed } from ".";

import $cursorParser from "./cursor.parser";

const propsParser = new Map<parserKey, PropsParserFunc>();

export type parserKey = 
  'pd' |
  'mg' |
  'cursor' |
  ( string & {})
;

export interface PropsParserFunc {
  <R>(): R
  <A,R>(args1: A) : R
  <A,B,R>(args1: A, args2: B): R
  <A,B,C,R>(args1: A, args2: B, args3: C): R
  <A,B,C,D,R>(args1: A, args: B, args2: C, args3: D): R
  <A,B,C,D,E,R>(args1: A, args?: B, args2?: C, args3?: D, args4?: E): R
  <R>(...args: any) : R
}

export const cursorParser = $cursorParser;
propsParser.set('cursor', cursorParser);

/**
 * @param pd This array should have 4 items, but less is also ok. If a member in this array has type of `number` it will be parsed to `${value}px`
 * @returns 
 */
export const paddingParser: PropsParserFunc = (pd?: ArrayLengthed<string|number|undefined|null, 4>) => {
  function parse(val: string|number|undefined|null) {
    return typeof val === 'number'?
      `${val}px` : val??'';
  }
  if (pd) {
    const result = `${parse(pd[0])} ${parse(pd[1])} ${parse(pd[2])} ${parse(pd[3])}`;
    return result.trim() === ""? undefined : result;
  } else {
    return undefined;
  }
}
propsParser.set('pd', paddingParser);

export const marginParser: PropsParserFunc = (mg?: ArrayLengthed<string|number|undefined|null, 4>) => {
  function parse(val: string|number|undefined|null) {
    return typeof val === 'number'?
      `${val}px` : val??'';
  }
  if (mg) {
    const result = `${parse(mg[0])} ${parse(mg[1])} ${parse(mg[2])} ${parse(mg[3])}`;
    return result.trim() === ""? undefined : result;
  } else {
    return undefined;
  }
}
propsParser.set('mg', marginParser);

export default propsParser;