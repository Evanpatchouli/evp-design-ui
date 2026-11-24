import useForm, { EvpFormInstance, useFormLayoutEffect } from "./hooks";
import EvpFormContext from "./context";

export type EvpFormProps<T = any> = {
  children: JSX.Element | React.ReactNode;
  $submit?: (formData: { [K in keyof T]: T[K]; }) => void;
  formRef?: React.MutableRefObject<EvpFormInstance<T>>;
  style?: React.CSSProperties;
};

export default function EvpForm(props: EvpFormProps) {
  const ownedRef = useForm();
  const formRef = props.formRef ?? ownedRef;
  const form = formRef.current;
  useFormLayoutEffect(() => {
    form.set$Submit(props.$submit);
    return () => form.set$Submit(undefined);
  }, [form, props.$submit]);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.submit();
      }}
      style={props.style}
    >
      <EvpFormContext.Provider value={form}>{props.children}</EvpFormContext.Provider>
    </form>
  );
}
