import {
  ReactNode,
  cloneElement,
  useContext,
  useLayoutEffect,
  useReducer,
} from "react";
import EvpFormContext from "./context";

export interface EvpFormFieldProps {
  children: ReactNode;
  name: string;
}

export default function EvpFormField(props: EvpFormFieldProps) {
  const context = useContext(EvpFormContext);
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  // 使用useEffect可能会使订阅延迟
  useLayoutEffect(() => {
    // 函数组件没有实例对象this，把props和onStoreChange当做对象传过去
    const unRegister: any = context.registerField?.({
      props,
      onStoreChange,
    });

    // 组件销毁取消订阅
    return () => {
      unRegister();
    };
  }, [props, context]);

  // 强制更新组件
  function onStoreChange() {
    forceUpdate();
  }
  function getControlled() {
    const { getFieldValue, setFieldsValue } = context;

    return {
      value: getFieldValue?.(props.name), // get
      onChange: (e: any) => {
        // set
        const newValue = e.target.value;
        setFieldsValue?.({ [props.name]: newValue });
      },
    };
  }

  return (
    <>{cloneElement(props.children as React.ReactElement, getControlled())}</>
  );
}
