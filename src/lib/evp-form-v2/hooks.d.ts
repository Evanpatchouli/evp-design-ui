/// <reference types="react" />
export interface EvpFormInstance<T extends Partial<T> = Partial<any>> {
    get: (name?: string & keyof T) => T[keyof T];
    set: (name: string & keyof T, value?: T[keyof T]) => void;
    gets: (names?: Array<string & keyof T>) => {
        [K in keyof T]: T[K];
    };
    sets: (map?: T) => void;
    submit: VoidFunction;
    register: (entity: {
        name: string & keyof T;
        value?: any;
        msg?: string;
    }) => () => void;
}
export declare class FormStore<T extends Partial<T> = Partial<any>> {
    private store;
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
    submit: VoidFunction;
}
declare const useForm: <T extends Partial<T> = Partial<any>>() => import("react").MutableRefObject<EvpFormInstance<T>>;
export default useForm;
