import { useContext } from "react";
import PreContext from "../context";
import Card from "@/components/card";
import EvpForm from "@/lib/evp-form-v2";
import EvpCheckBox from "@/lib/evp-checkbox";
import useForm from "@/lib/evp-form-v2/hooks";
import { EvpButton, EvpInput, Toast } from "@/lib";
import EvpCheckBoxGroup from "@/lib/evp-checkbox-group/inedx";
import EvpRadioGroup from "@/lib/evp-radio-group/inedx";
import EvpRadio from "@/lib/evp-radio";

export default function Contest() {
  const preContext = useContext(PreContext);

  const ref = useForm<{
    test: string;
  }>();
  return (
    <Card>
      <div>{preContext?.pageName}</div>
      <EvpForm formRef={ref}>
        <EvpInput label="Project" name="project" required labelWidth={60} />
        <EvpCheckBoxGroup label="Types" name="types" required labelWidth={60}>
          <EvpCheckBox label="Test" value="Test" />
          <EvpCheckBox label="Beta" value="Beta" />
        </EvpCheckBoxGroup>
        <EvpRadioGroup label="Access" name="access" required labelWidth={60}>
          <EvpRadio label="Private" value="private" />
          <EvpRadio label="Private" value="public" />
        </EvpRadioGroup>
        <EvpButton
          $click={() => {
            console.log(ref.current?.gets());
          }}
        >
          Submit
        </EvpButton>
      </EvpForm>
    </Card>
  );
}
