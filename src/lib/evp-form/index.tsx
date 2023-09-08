import { useRef } from "react"
import useForm from "./hooks";


export type EvpFormProps = {
  children: JSX.Element | React.ReactNode
  $submit?: React.FormEventHandler<HTMLFormElement>,
  formRef?: any
}

export default function EvpForm(props: EvpFormProps) {
  const formRef = useForm();
  return(
    <form ref={props.formRef??formRef} onSubmit={(e) => {
      e.preventDefault();
      props.$submit?.(e);
    }}>
      {props.children}
    </form>
  )
}