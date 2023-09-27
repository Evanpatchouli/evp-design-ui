import Card from "@/components/card";
import Md from "@/components/md";
import Tsx from "@/components/tsx";
import { EvpCode, EvpSlider } from "@/lib";
import EvpButton from "@/lib/evp-button";
import EvpCheckBox from "@/lib/evp-checkbox";
import EvpCheckBoxGroup from "@/lib/evp-checkbox-group/inedx";
import EvpForm from "@/lib/evp-form-v2";
import useForm from "@/lib/evp-form-v2/hooks";
import EvpInput from "@/lib/evp-input";
import EvpRadio from "@/lib/evp-radio";
import EvpRadioGroup from "@/lib/evp-radio-group/inedx";
import EvpSelect from "@/lib/evp-select";
import { useEffect, useState } from "react";

export default function FormView() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const [showCode, setShowCode] = useState<{ [x: number]: boolean }>({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
  });

  const clickCode = (idx: number) => {
    let $showCode = { ...showCode };
    $showCode[idx] = !showCode[idx];
    setShowCode($showCode);
  };

  const ref = useForm();
  return (
    <div className="preview-container">
      <Md>
        {`
# EvpForm

A form component is a UI element used to collect user input in a web form. 
It typically includes input fields, such as text fields, textareas, radio buttons, checkboxes, and select components, 
as well as buttons to submit the form or reset the form.

## Basic Usage

**import:**
`}
      </Md>
      <Tsx>
        {`
import { EvpForm } from 'evp-design-ui'
`}
      </Tsx>
      <Md>
        {`
**usage:**
`}
      </Md>
      <Tsx>
        {`
<EvpForm style={{ width: 390 }}>
  <EvpInput labelWidth={70} label="Username" required />
  <EvpInput labelWidth={70} label="Password" required />
  <div style={{
    display: 'flex',
    justifyContent: 'flex-end'
  }}>
    <EvpButton theme="dark" text="Login" type="submit" />
  </div>
</EvpForm>
`}
      </Tsx>
      <Card>
        <EvpForm style={{ width: 390 }}>
          <EvpInput labelWidth={70} label="Username" required />
          <EvpInput labelWidth={70} label="Password" required />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <EvpButton theme="dark" text="Login" type="submit" />
          </div>
        </EvpForm>
      </Card>
      <Md>
        {`
## Examples

Here are some examples about EvpCard.
`}
      </Md>
      <Card
        toolbarStyle={{
          justifyContent: "flex-end",
        }}
        toolBar={
          <>
            <EvpButton
              $click={() => clickCode(1)}
              theme="text"
              size="mini"
              text="code"
            />
            <EvpButton theme="text" size="mini" text="copy" />
          </>
        }
      >
        <EvpForm
          formRef={ref}
          $submit={() => {
            const formData = ref.current?.gets();
            console.table(formData);
          }}
        >
          <EvpInput label="Project" name="project" required labelWidth={70} />
          <EvpCheckBoxGroup label="Types" name="types" required labelWidth={70}>
            <EvpCheckBox label="Test" value="Test" />
            <EvpCheckBox label="Beta" value="Beta" />
          </EvpCheckBoxGroup>
          <EvpRadioGroup label="Access" name="access" required labelWidth={70}>
            <EvpRadio label="Private" value="private" />
            <EvpRadio label="Public" value="public" />
          </EvpRadioGroup>
          <EvpSelect
            label="Role"
            name="role"
            required
            rows={3}
            labelWidth={70}
            options={[
              { label: "Visitor", value: "1", key: "Visitor" },
              { label: "User", value: "2", key: "User" },
              { label: "Leader", value: "3", key: "Leader" },
              { label: "Admin", value: "4", key: "Admin" },
              { label: "Boss", value: "5", key: "Boss" },
            ]}
          />
          <EvpSlider
            label="Members"
            name="members"
            required
            range={[0, 5]}
            width={200}
            min={1}
          />
          <EvpButton
            $click={() => {
              ref.current?.submit();
            }}
          >
            Submit
          </EvpButton>
        </EvpForm>
      </Card>
      <Tsx show={showCode[1]}>
        {`
<EvpForm formRef={ref}
$submit={() => {
  const formData = ref.current?.gets();
  console.table(formData);
}}>
  <EvpInput label="Project" name="project" required labelWidth={70} />
  <EvpCheckBoxGroup label="Types" name="types" required labelWidth={70}>
    <EvpCheckBox label="Test" value="Test" />
    <EvpCheckBox label="Beta" value="Beta" />
  </EvpCheckBoxGroup>
  <EvpRadioGroup label="Access" name="access" required labelWidth={70}>
    <EvpRadio label="Private" value="private" />
    <EvpRadio label="Public" value="public" />
  </EvpRadioGroup>
  <EvpSelect
    label="Role"
    name="role"
    required
    rows={3}
    labelWidth={70}
    options={[
      { label: "Visitor", value: "1", key: "Visitor" },
      { label: "User", value: "2", key: "User" },
      { label: "Leader", value: "3", key: "Leader" },
      { label: "Admin", value: "4", key: "Admin" },
      { label: "Boss", value: "5", key: "Boss" },
    ]}
  />
  <EvpSlider
    label="Members"
    name="members"
    required
    range={[0, 5]}
    width={200}
    min={1}
  />
  <EvpButton
    $click={() => {
      ref.current?.submit();
    }}
  >
    Submit
  </EvpButton>
</EvpForm>
`}
      </Tsx>
      <Md>
        {`
## Api

★ container based on EvpDom  
★ props extends EvpBaseProps

**EvpForm Apis:**
`}
      </Md>
      <EvpCode lang="typescript" theme="coldarkDark">
{`
export type EvpFormProps<T = any> = {
  children: JSX.Element | React.ReactNode;
  $submit?: (formData: { [K in keyof T]: T[K]; }) => void;
  formRef?: React.MutableRefObject<EvpFormInstance<T>>;
  style?: React.CSSProperties;
};
`}
      </EvpCode>
      <EvpButton
        position="absolute"
        right={40}
        bottom={0}
        plain
        shadow={false}
        link="/components/evp-tag"
        text="★ Next Doc EvpTag >"
      />
    </div>
  );
}
