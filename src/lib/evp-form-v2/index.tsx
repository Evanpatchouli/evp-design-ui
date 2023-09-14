import useForm, { EvpFormInstance } from "./hooks";
import EvpFormContext from "./context";

export type EvpFormProps<T = any> = {
  children: JSX.Element | React.ReactNode;
  $submit?: React.FormEventHandler<HTMLFormElement>;
  formRef?: React.MutableRefObject<EvpFormInstance<T>>;
  style?: React.CSSProperties;
};

export default function EvpForm(props: EvpFormProps) {
  let formRef = useForm();
  if (props.formRef) {
    formRef = props.formRef;
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.$submit?.(e);
      }}
      style={props.style}
    >
      <EvpFormContext.Provider value={formRef.current}>
        {props.children}
      </EvpFormContext.Provider>
    </form>
  );
}
