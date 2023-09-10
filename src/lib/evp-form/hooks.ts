import { useRef } from "react";

export interface EvpFormInstance<T extends Partial<T> = Partial<{}>> {
  getFieldValue: (name: keyof T) => T[keyof T],
  getFieldsValue: () => T,
  setFieldsValue: (fields: {}) => void,
  registerField: (form: {}) => void,
  submit: () => void,
}

export class FormStore<T extends Partial<T> = Partial<{}>> {
  private store: any = {};
  // 用来存储每个 Field 的实例数据，因此在store中可以通过 fieldEntities 来访问到每个表单项
  private fieldEntities: any = [];

  // 表单项注册到 fieldEntities
  registerField = (entity:any)=>{
    this.fieldEntities.push(entity)
    return () => {
      this.fieldEntities = this.fieldEntities.filter((item:any) => item !== entity)
      delete this.store[entity.props.name]
    }
  }
  // 获取单个字段值
  getFieldValue = (name: keyof T) => {
    return this.store[name]
  }
  // 获取所有字段值
  getFieldsValue = () => {
    return this.store
  }
  // 设置字段的值
  setFieldsValue = (newStore:any) => {
    // 更新store的值
    this.store = {
      ...this.store,
      ...newStore,
    }
  // 通过 fieldEntities 获取到所有表单项，然后遍历去调用表单项的 onStoreChange 方法更新表单项
    this.fieldEntities.forEach((entity:any) => {
      const { name } = entity.props
      Object.keys(newStore).forEach(key => {
        if (key === name) {
          entity.onStoreChange()
        }
      })
    })
  }
  // 提交数据，这里只简单的打印了store中的数据。
  submit = ()=>{
    // console.log(this.getFieldsValue());
    console.log(this)
  }
  // 提供FormStore实例方法
  getForm = (): EvpFormInstance<T> => ({
    getFieldValue: this.getFieldValue,
    getFieldsValue: this.getFieldsValue,
    setFieldsValue: this.setFieldsValue,
    registerField: this.registerField,
    submit: this.submit,
  });
}

// 创建单例formStore
export default function useForm<T extends Partial<T> = Partial<{}>>() {
  const formRef = useRef<EvpFormInstance<T>>() as React.MutableRefObject<EvpFormInstance<T>>;
  if (!formRef.current) {
    const formStore = new FormStore();
    // @ts-ignore
    formRef.current = formStore.getForm();
  }
  return formRef.current;
}
