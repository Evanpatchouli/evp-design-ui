import Card from "@/components/card";
import Md from "@/components/md";
import Tsx from "@/components/tsx";
import { EvpButton } from "@/lib";
import EvpCheckBox from "@/lib/evp-checkbox";
import EvpCheckBoxGroup from "@/lib/evp-checkbox-group/inedx";
import { useEffect, useState } from "react";

export default function CheckBoxView() {
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
  });

  const clickCode = (idx: number) => {
    let $showCode = { ...showCode };
    $showCode[idx] = !showCode[idx];
    setShowCode($showCode);
  };

  return (
    <div className="preview-container">
      <Md>
        {`
# EvpCheckBoxGroup

CheckBoxGroup is a series of checkbox buttons, which is used to select some of the options.

## Basic Usage

**import:**
`}
      </Md>
      <Tsx>
        {`
import { EvpCheckBoxGroup, EvpCheckBox } from "evp-design-ui";
`}
      </Tsx>
      <Md>
        {`
**usage:**
`}
      </Md>
      <Tsx>
        {`
<EvpCheckBoxGroup name="hobby" label="Hobby" required>
  <EvpCheckBox label="Sing" value="Sing" />
  <EvpCheckBox label="Dance" value="dance" />
  <EvpCheckBox label="Rap" value="rap" />
</EvpCheckBoxGroup>
`}
      </Tsx>
      <Card>
        <EvpCheckBoxGroup name="hobby" label="Hobby" required>
          <EvpCheckBox label="Sing" value="sing" />
          <EvpCheckBox label="Dance" value="dance" />
          <EvpCheckBox label="Rap" value="rap" />
        </EvpCheckBoxGroup>
      </Card>
      <Md>
        {`
## Examples

Here are some examples of how to use checkbox buttons.

### EvpCheckBox

A single EvpCheckBox is made up of a label and a checkbox circle. The label is optional, it will be first read from label attribute, if label is not set, it will be read from children.

If you need to group up several radios without EvpCheckBoxGroup, you should use the same \`name\` attribute to group them up.
`}
      </Md>
      <Card
        toolBar={
          <>
            <EvpButton
              theme="text"
              $click={() => {
                clickCode(1);
              }}
              size="mini"
              text="code"
            />
            <EvpButton theme="text" size="mini" text="copy" />
          </>
        }
      >
        <label>
          Web Frameworks you like ?
          <EvpCheckBox
            name="Web Frameworks you like"
            label="React"
            value="react"
          />
          <EvpCheckBox name="Web Frameworks you like" label="Vue" value="vue" />
          <EvpCheckBox
            name="Web Frameworks you like"
            label="Angular"
            value="angular"
          />
        </label>
      </Card>
      {showCode[1] ? (
        <Tsx>
          {`
<label>Web Frameworks you like ? 
  <EvpCheckBox name="Web Frameworks you like" label="React" value="react" />
  <EvpCheckBox name="Web Frameworks you like" label="Vue" value="vue" />
  <EvpCheckBox name="Web Frameworks you like"label="Angular" value="angular" />
</label>
`}
        </Tsx>
      ) : (
        void 0
      )}
      <Md>
        {`
### DefaultChecked

If you want to set a checkbox as default checked, you can set \`defaultChecked\` attribute to \`true\`.
`}
      </Md>
      <Card
        toolBar={
          <>
            <EvpButton
              theme="text"
              $click={() => {
                clickCode(2);
              }}
              size="mini"
              text="code"
            />
            <EvpButton theme="text" size="mini" text="copy" />
          </>
        }
      >
        <label>
          Rust Web Frameworks you like ?
          <EvpCheckBox
            name="Rust Web Frameworks you like"
            label="ActixWeb"
            value="ActixWeb"
            defaultChecked
          />
          <EvpCheckBox
            name="Rust Web Frameworks you like"
            label="Rocket"
            value="Rocket"
          />
        </label>
      </Card>
      <Tsx show={showCode[2]}>
        {`
<label>
  Rust Web Frameworks you like ?
  <EvpCheckBox
    name="Rust Web Frameworks you like"
    label="ActixWeb"
    value="ActixWeb"
    defaultChecked
  />
  <EvpCheckBox
    name="Rust Web Frameworks you like"
    label="Rocket"
    value="Rocket"
  />
</label>
`}
      </Tsx>
      <Md>
{`
## EvpCheckBoxGroup

Usually, we use checkbox buttons in groups, which is a series of checkbox buttons. The checkbox buttons in the group are mutually exclusive, and everyone of them can be selected.

In this case, you needn't to set the \`name\` attribute, it will be set automatically by EvpCheckBoxGroup with its \`name\` attribute. If you set a name to certain checkbox, it will override the name set by EvpCheckBoxGroup.

If you want to ban a checkbox, just set the \`disabled\` attribute to \`true\`.
`}
      </Md>
      <Card
        toolBar={
          <>
            <EvpButton
              theme="text"
              $click={() => {
                clickCode(3);
              }}
              size="mini"
              text="code"
            />
            <EvpButton theme="text" size="mini" text="copy" />
          </>
        }
      >
        <label>
          How about Evp Design UI ?
          <EvpCheckBox
            name="How about Evp Design UI"
            label="Good"
            value="Good"
            defaultChecked
            required
          />
          <EvpCheckBox
            name="How about Evp Design UI"
            label="Bad"
            value="Bad"
            disabled
          />
        </label>
      </Card>
      <Tsx show={showCode[3]}>
        {`
<label>
How about Evp Design UI ?
  <EvpCheckBox
    name="How about Evp Design UI"
    label="Good"
    value="Good"
    defaultChecked
    required
  />
  <EvpCheckBox
    name="How about Evp Design UI"
    label="Bad"
    value="Bad"
    disabled
  />
</label>
`}
      </Tsx>
      <EvpButton position="absolute" right={40} bottom={0}
        plain shadow={false}
        link="/components/evp-select" text="★ Next Doc EvpSelect >" />
    </div>
  );
}
