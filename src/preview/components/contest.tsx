import { useContext } from "react";
import PreContext from "../context";
import Card from "@/components/card";
import EvpForm from "@/lib/evp-form-v2";
import EvpCheckBox from "@/lib/evp-checkbox";
import useForm from "@/lib/evp-form-v2/hooks";
import { Color, EvpButton, EvpInput, Toast } from "@/lib";
import EvpCheckBoxGroup from "@/lib/evp-checkbox-group/inedx";
import EvpRadioGroup from "@/lib/evp-radio-group/inedx";
import EvpRadio from "@/lib/evp-radio";
import EvpSelect from "@/lib/evp-select";
import EvpSlider from "@/lib/evp-slider";

export default function Contest() {
  const preContext = useContext(PreContext);

  const ref = useForm<{
    test: string;
  }>();
  return (
    <Card>
      <h3>{preContext?.pageName}</h3>
      <EvpForm formRef={ref}>
        <EvpInput label="Project" name="project" required labelWidth={80} />
        <EvpCheckBoxGroup label="Types" name="types" required labelWidth={80}>
          <EvpCheckBox label="Test" value="Test" />
          <EvpCheckBox label="Beta" value="Beta" />
        </EvpCheckBoxGroup>
        <EvpRadioGroup label="Access" name="access" required labelWidth={80}>
          <EvpRadio label="Private" value="private" />
          <EvpRadio label="Public" value="public" />
        </EvpRadioGroup>
        <EvpSelect
          label="Role"
          name="role"
          required
          rows={3}
          labelWidth={80}
          options={[
            { label: "Visitor", value: "1", key: "Visitor" },
            { label: "User", value: "2", key: "User" },
            { label: "Leader", value: "3", key: "Leader" },
            { label: "Admin", value: "4", key: "Admin" },
            { label: "Boss", value: "5", key: "Boss" },
          ]}
        />
        <EvpSlider name="members" required label="Members" min={1} labelWidth={80} range={[0, 100]} />
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
