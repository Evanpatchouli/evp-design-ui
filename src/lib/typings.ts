import { AriaAttributes, DOMAttributes, CSSProperties, AriaRole } from "react";
import { Booleanish } from "./utils";

export type EvpBaseEvenNumbers = "2px" | "4px" | "6px" | "8px" | "10px" | "12px" | "14px" | "16px" | "18px" | "20px" | "22px" | "24px" | "26px" | "28px" | "30px"; 

export type EvpBaseWidth = "fit-content" | "10px" | "20px" | "30px" | "40px" | "50px" | "60px" | "70px" | "80px" | "90px" | "100px" | "200px" | "300px" | "400px" | "500px";

export type EvpBaseHeight = "fit-content" | "10px" | "20px" | "30px" | "40px" | "50px" | "60px" | "70px" | "80px" | "90px" | "100px" | "200px" | "300px" | "400px" | "500px";

export type EvpWRule = Hintable<EvpBaseWidth | number>

export type EvpHRule = Hintable<EvpBaseHeight | number>

export type EvpFontSize = '12px' | '14px' | '16px' | '24px' | '32px' | '1rem' | '1.2rem' | '2rem';

export type EvpFontWeight = 'small' | 'normal' | 'bold' | 'bolder' | '300' | '400' | '500' | '600' | '700' | '800';

export type Option<T extends unknown> = T | undefined

/** This Array should have 4 items */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type ArrayLengthed<T, N extends number> = T[]

/** This Array must have 4 items */
export type ArrayStrictLengthed<T, N extends number> = [T, ...T[]] & { length: N }

export type Hintable<T> = T | (string & {})

export type Indexable<T, E extends unknown> = T & { [x:string]: E }

// @ts-ignore
export type IndexableVididy<T, E extends unknown> = T & { [x:Hintable<T>]: E }

/** Force to convert an object as to be indexable with string key without given hintable type */
export type IndexableFuzzy<E extends unknown> = { [x:string]: E }

export type PartialByKeys<T, K extends keyof T> = {
	[P in K]?: T[P];
} & Pick<T, Exclude<keyof T, K>>;

export type EvpCursorRule = Hintable<EvpCursor>;

export type EvpCursor =
  "auto" |
  "default" |
  "none" |
  "context-menu" |
  "help" |
  "pointer" |
  "progress" |
  "wait" |
  "cell" |
  "crosshair" |
  "text" |
  "vertical-text" |
  "alias" |
  "copy" |
  "move" |
  "unset" |
  "no-drop" |
  "not-allowed" |
  "e-resize" |
  "n-resize" |
  "ne-resize" |
  "nw-resize" |
  "s-resize" |
  "se-resize" |
  "sw-resize" |
  "w-resize" |
  "ew-resize" |
  "ns-resize" |
  "nesw-resize" |
  "nwse-resize" |
  "col-resize" |
  "row-resize" |
  "all-scroll" |
  "zoom-in" |
  "zoom-out" |
  "grab" |
  "grabbing";

export type EvpBorder = 
  "none" |
  "unset" |
  "1px solid black" |
  "1px dashed black";

export type EvpBorderRule = Hintable<EvpBorder>

/**
 * `"static"` | `"absolute"` | `"fixed"` | `"relative"` | `"sticky"`
 */
export type EvpPosition = 
  "static" |
  "absolute" |
  "fixed" |
  "relative" |
  "sticky" |
  "inherit" |
  "initial" |
  "unset" |
  "-moz-initial" |
  "-webkit-sticky" |
  "revert" |
  "revert-layer";

export type EvpPositionRule = Hintable<EvpPosition>

/**
 * `"block"` | `"inline"` | `"inline-block"` | `"flex"` | `"inline-flex"` | `"grid"` | `"inline-grid"` |
  `"flow-root"` | `"none"` | `"contents"` | `"block flow"` | `"inline flow"` | `"inline flow-root"` | `"block flex"` |
  `"inline flex"` | `"block grid"` | `"inline grid"` | `"block flow-root"` | `"table"` | `"table-row"` |
  `"list-item"` | `"inherit"` | `"initial"` | `"revert"` | `"revert-layer"` | `"unset"`
 */
export type EvpDisplay =
  /* precomposed values */
  "block" |
  "inline" |
  "inline-block" |
  "flex" |
  "inline-flex" |
  "grid" |
  "inline-grid" |
  "flow-root" |

  /* box generation */
  "none" |
  "contents" |

  /* two-value syntax */
  "block flow" |
  "inline flow" |
  "inline flow-root" |
  "block flex" |
  "inline flex" |
  "block grid" |
  "inline grid" |
  "block flow-root" |

  /* other values */
  "table" |
  "table-row" | /* all table elements have an equivalent CSS display value */
  "list-item" |

  /* Global values */
  "inherit" |
  "initial" |
  "revert" |
  "revert-layer" |
  "unset";

/**
 * `"block"` | `"inline"` | `"inline-block"` | `"flex"` | `"inline-flex"` | `"grid"` | `"inline-grid"` |
  `"flow-root"` | `"none"` | `"contents"` | `"block flow"` | `"inline flow"` | `"inline flow-root"` | `"block flex"` |
  `"inline flex"` | `"block grid"` | `"inline grid"` | `"block flow-root"` | `"table"` | `"table-row"` |
  `"list-item"` | `"inherit"` | `"initial"` | `"revert"` | `"revert-layer"` | `"unset"`
 */
export type EvpDisplayRule = Hintable<EvpDisplay>

export type EvpFlexRule = string | number

/**
 *`'row'` |  `'column'` |  `'row-reverse'` |  `'column-reverse'` |  `'inherit'` |
  `'initial'` | `'-moz-initial'` | `'revert'` | `'revert-layer'` | `'unset'`
 */
export type EvpFlexDirectionRule = 
  'row' | 
  'column' | 
  'row-reverse' | 
  'column-reverse' | 
  'inherit' |
  '-moz-initial' |
  'initial' |
  'revert' |
  'revert-layer' |
  'unset';

/**
  * `'center'` | `'left'` | `'right'` | `'start'` 
  | `'end'` | `'flex-start'` | `'flex-end'` | `'inherit'` | `'initial'` | `'normal'` 
  | `'revert'` | `'revert-layer'` | `'space-around'` | `'space-between'` | `'space-evenly'` | `'stretch'` | `'unset'`
 */
export type EvpJustifyContent = 
  'center' | 'left' | 'right' | 'start' 
  | 'end' | 'flex-start' | 'flex-end' | 'inherit' | 'initial' | 'normal' 
  | 'revert' | 'revert-layer' | 'space-around' | 'space-between' | 'space-evenly' | 'stretch'
  | 'unset';

/**
  * `'center'` | `'left'` | `'right'` | `'start'` 
  | `'end'` | `'flex-start'` | `'flex-end'` | `'inherit'` | `'initial'` | `'normal'` 
  | `'revert'` | `'revert-layer'` | `'space-around'` | `'space-between'` | `'space-evenly'` | `'stretch'` | `'unset'`
 */
export type EvpJustifyContentRule = Hintable<EvpJustifyContent>


/**
  * `"-moz-initial"` | `"baseline"` | `"center"` | `"end"` | `"flex-end"` | `"flex-start"`
  | `"inherit"` | `"initial"` | `"normal"` | `"revert"` | `"revert-layer"` | `"self-end"` | 
    `"self-start"` | `"start"` | `"stretch"` | `"unset"`
 */
export type EvpAlignItemsRule = 
  "-moz-initial" | "baseline" | "center" | "end" | "flex-end" | "flex-start"
  | "inherit" | "initial" | "normal" | "revert" | "revert-layer" | "self-end" | "self-start" | "start" | "stretch" | "unset"
  | ( string & {} )


export interface EvpDomAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // React-specific Attributes
    defaultChecked?: boolean | undefined;
    defaultValue?: string | number | ReadonlyArray<string> | undefined;
    suppressContentEditableWarning?: boolean | undefined;
    suppressHydrationWarning?: boolean | undefined;

    // Standard HTML Attributes
    accessKey?: string | undefined;
    autoFocus?: boolean | undefined;
    className?: string | undefined;
    contentEditable?: Booleanish | "inherit" | undefined;
    contextMenu?: string | undefined;
    dir?: string | undefined;
    draggable?: Booleanish | undefined;
    hidden?: boolean | undefined;
    id?: string | undefined;
    lang?: string | undefined;
    nonce?: string | undefined;
    placeholder?: string | undefined;
    slot?: string | undefined;
    spellCheck?: Booleanish | undefined;
    style?: CSSProperties | undefined;
    tabIndex?: number | undefined;
    title?: string | JSX.Element | undefined;
    translate?: 'yes' | 'no' | undefined;

    // Unknown
    radioGroup?: string | undefined; // <command>, <menuitem>

    // WAI-ARIA
    role?: AriaRole | undefined;

    // RDFa Attributes
    about?: string | undefined;
    content?: string | undefined;
    datatype?: string | undefined;
    inlist?: any;
    prefix?: string | undefined;
    property?: string | undefined;
    rel?: string | undefined;
    resource?: string | undefined;
    rev?: string | undefined;
    typeof?: string | undefined;
    vocab?: string | undefined;

    // Non-standard Attributes
    autoCapitalize?: string | undefined;
    autoCorrect?: string | undefined;
    autoSave?: string | undefined;
    color?: string | undefined;
    itemProp?: string | undefined;
    itemScope?: boolean | undefined;
    itemType?: string | undefined;
    itemID?: string | undefined;
    itemRef?: string | undefined;
    results?: number | undefined;
    security?: string | undefined;
    unselectable?: 'on' | 'off' | undefined;

    // Living Standard
    /**
     * Hints at the type of data that might be entered by the user while editing the element or its contents
     * @see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
     */
    inputMode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search' | undefined;
    /**
     * Specify that a standard HTML element should behave like a defined custom built-in element
     * @see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
     */
    is?: string | undefined;
}