/* eslint-disable @typescript-eslint/no-unused-vars */

import { AriaAttributes, DOMAttributes, CSSProperties, AriaRole } from "react";

/** This Array should have 4 items */
export type ArrayLengthed<T, N extends number> = T[]

/** This Array must have 4 items */
export type ArrayStrictLengthed<T, N extends number> = [T, ...T[]] & { length: N }

/** This func is to unassign undefined properties from an indexable object, especially invoked during parsing props */
export function shift(obj?: Indexable<{},any>) {
    if (obj && typeof obj === 'object') {
        const keys = Object.keys(obj);
        keys.forEach(key => {
            if (obj[key] === undefined) {
                delete obj[key];
            }
        });
    }
    return obj;
}

export type Option<T extends unknown> = T | undefined

export type Hintable<T> = T | (string & {})

export type Indexable<T, E extends unknown> = T & { [x:string]: E }

// @ts-ignore
export type IndexableVididy<T, E extends unknown> = T & { [x:Hintable<T>]: E }

/** Force to convert an object as to be indexable with string key without given hintable type */
export type IndexableFuzzy<E extends unknown> = { [x:string]: E }

export type Booleanish = boolean | 'true' | 'false';

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