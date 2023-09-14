import { useRef } from "react";

export interface EvpFormInstance<T extends Partial<T> = Partial<any>> {
  get: (name?: string & keyof T) => T[keyof T];

  set: (name: string & keyof T, value?: T[keyof T]) => void;

  gets: (names?: Array<string & keyof T>) => { [K in keyof T]: T[K] };

  sets: (map?: T) => void;

  submit: VoidFunction;

  register: (entity: {
    name: string & keyof T;
    value?: any;
    msg?: string;
  }) => () => void
}

export class FormStore<T extends Partial<T> = Partial<any>> {
  private store: Array<{ name: string & keyof T; value?: any; msg?: string }> =
    [];

  register = (entity: {
    name: string & keyof T; value?: any; msg?: string
  }) => {
    this.store.push(entity)
    return () => {
      this.store = this.store.filter((item: { name: string & keyof T; value?: any; msg?: string }) => item.name !== entity.name)
    }
  }

  get: (name?: string & keyof T) => T[keyof T] = (name) => {
    return this.store.find((item) => item.name === name)?.value;
  };

  set: (name: string & keyof T, value?: T[keyof T]) => void = (name, value) => {
    const item = this.store.find((item) => item.name === name);
    if (item) {
      item.value = value;
    } else {
      throw new Error(`Field ${name} not exists on form`);
    }
  };

  gets: (names?: Array<string & keyof T>) => { [K in keyof T]: T[K] } = (
    names
  ) => {
    const keys = names?.length
      ? names
      : (this.store.map(item => item.name) as Array<string & keyof T>);
    const results: any = {};
    keys.forEach((key) => {
      results[key] = this.get(key);
    });
    return results;
  };

  sets: (map?: T) => void = (map) => {
    if (map) {
      Object.keys(map).forEach((key) => {
        this.set(key as string & keyof T, map[key as string & keyof T]);
      });
    }
  };

  submit: VoidFunction = () => {
    console.log(this.gets());
    void 0;
  };
}

const useForm = <T extends Partial<T> = Partial<any>>(): React.MutableRefObject<EvpFormInstance<T>> => {
  const formRef = useRef<EvpFormInstance<T>>() as React.MutableRefObject<EvpFormInstance<T>>;
  if (!formRef.current) {
    const formStore = new FormStore();
    formRef.current = formStore as unknown as EvpFormInstance<T>;
  }
  return {
    current: {
      get: formRef.current.get,
      set: formRef.current.set,
      gets: formRef.current.gets,
      sets: formRef.current.sets,
      submit: formRef.current.submit,
      register: formRef.current.register,
    }
  };
}

export default useForm;
