export interface EvpFormInstance<T extends Partial<T> = Partial<{}>> {
    getFieldValue: (name: keyof T) => T[keyof T];
    getFieldsValue: () => T;
    setFieldsValue: (fields: {}) => void;
    registerField: (form: {}) => void;
    submit: () => void;
}
export declare class FormStore<T extends Partial<T> = Partial<{}>> {
    private store;
    private fieldEntities;
    registerField: (entity: any) => () => void;
    getFieldValue: (name: keyof T) => any;
    getFieldsValue: () => any;
    setFieldsValue: (newStore: any) => void;
    submit: () => void;
    getForm: () => EvpFormInstance<T>;
}
export default function useForm<T extends Partial<T> = Partial<{}>>(): EvpFormInstance<T>;
