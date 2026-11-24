import { useEffect, useRef } from "react";

export interface EvpFormInstance<T extends Partial<T> = Partial<any>> {
  get: (name?: string & keyof T) => T[keyof T];

  set: (name: string & keyof T, value?: T[keyof T]) => void;

  gets: (names?: Array<string & keyof T>) => { [K in keyof T]: T[K] };

  sets: (map?: T) => void;

  submit: () => void;

  set$Submit: (handler?: (formData: { [K in keyof T]: T[K]; }) => void) => void;

  register: (entity: { name: string & keyof T; value?: any; msg?: string }) => () => void;
}

export class FormStore<T extends Partial<T> = Partial<any>> {
  private store = new Map<string, { value?: any; owners: number }>();

  private $submit: Function | undefined;

  set$Submit = (handler?: (formData: { [K in keyof T]: T[K]; }) => void) => {
    this.$submit = handler;
  };

  register = (entity: { name: string & keyof T; value?: any; msg?: string }) => {
    const field = this.store.get(entity.name) ?? { value: entity.value, owners: 0 };
    field.owners++;
    this.store.set(entity.name, field);
    let registered = true;
    return () => {
      if (!registered) return;
      registered = false;
      if (--field.owners === 0) this.store.delete(entity.name);
    };
  };

  get: (name?: string & keyof T) => T[keyof T] = (name) => {
    return name === undefined ? undefined : this.store.get(name)?.value;
  };

  set: (name: string & keyof T, value?: T[keyof T]) => void = (name, value) => {
    const item = this.store.get(name);
    if (item) {
      item.value = value;
    } else {
      throw new Error(`Field ${name} not exists on form`);
    }
  };

  gets: (names?: Array<string & keyof T>) => { [K in keyof T]: T[K] } = (names) => {
    const keys = names?.length ? names : Array.from(this.store.keys());
    return Object.fromEntries(keys.map((key) => [key, this.store.get(key)?.value])) as T;
  };

  sets: (map?: T) => void = (map) => {
    if (map) {
      Object.keys(map).forEach((key) => {
        this.set(key as string & keyof T, map[key as string & keyof T]);
      });
    }
  };

  submit: () => void = () => {
    const formData = this.gets();
    this.$submit?.(formData);
    void 0;
  };
}

const useForm = <T extends Partial<T> = Partial<any>>(): React.MutableRefObject<EvpFormInstance<T>> => {
  const formRef = useRef<EvpFormInstance<T>>() as React.MutableRefObject<EvpFormInstance<T>>;
  if (!formRef.current) {
    const formStore = new FormStore();
    formRef.current = formStore as unknown as EvpFormInstance<T>;
  }
  return formRef;
};

export function useFormField(form: EvpFormInstance | undefined, name: string | undefined, value: unknown) {
  useEffect(() => {
    if (form && name) return form.register({ name });
  }, [form, name]);
  useEffect(() => {
    if (form && name) form.set(name, value);
  }, [form, name, value]);
}

export default useForm;
