import { useEffect } from "react";
export declare const useFormLayoutEffect: typeof useEffect;
export interface EvpFormInstance<T extends Partial<T> = Partial<any>> {
    get: (name?: string & keyof T) => T[keyof T];
    set: (name: string & keyof T, value?: T[keyof T]) => void;
    gets: (names?: Array<string & keyof T>) => {
        [K in keyof T]: T[K];
    };
    sets: (map?: T) => void;
    submit: () => void;
    set$Submit: (handler?: (formData: {
        [K in keyof T]: T[K];
    }) => void) => void;
    register: (entity: {
        name: string & keyof T;
        value?: any;
        msg?: string;
    }) => () => void;
}
export declare class FormStore<T extends Partial<T> = Partial<any>> {
    private store;
    private $submit;
    set$Submit: (handler?: ((formData: { [K in keyof T]: T[K]; }) => void) | undefined) => void;
    register: (entity: {
        name: string & keyof T;
        value?: any;
        msg?: string;
    }) => () => void;
    get: (name?: string & keyof T) => T[keyof T];
    set: (name: string & keyof T, value?: T[keyof T]) => void;
    gets: (names?: Array<string & keyof T>) => {
        [K in keyof T]: T[K];
    };
    sets: (map?: T) => void;
    submit: () => void;
}
declare const useForm: <T extends Partial<T> = Partial<any>>() => import("react").MutableRefObject<EvpFormInstance<T>>;
export declare function useFormField(form: EvpFormInstance | undefined, name: string | undefined, value: unknown): void;
export default useForm;
