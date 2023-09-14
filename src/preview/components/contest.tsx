import { useContext } from "react";
import PreContext from "../context";
import Card from "@/components/card";
import EvpForm from "@/lib/evp-form-v2";
import EvpCheckBox from "@/lib/evp-checkbox";
import useForm from "@/lib/evp-form-v2/hooks";
import { EvpButton, Toast } from "@/lib";

export default function Contest() {
  const preContext = useContext(PreContext);

  const ref = useForm<{
    test: string;
  }>();
  return (
    <Card>
      <div>{preContext?.pageName}</div>
      <EvpButton
        $click={() => {
          console.log(ref.current?.gets());
        }}
      >
        ceshi
      </EvpButton>
      <EvpForm formRef={ref}>
        <EvpCheckBox name="test" label="Test" value={"true"} />
      </EvpForm>
    </Card>
  );
}
