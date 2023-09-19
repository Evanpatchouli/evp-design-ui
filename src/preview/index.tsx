import { Evp } from "@/lib/evp-icon/svg.icons";
import {
  Row,
  Col,
  Button,
  Tag,
  EvpCard,
  EvpButton,
  EvpCheckBox,
  EvpCheckBoxGroup,
  EvpForm,
  EvpInput,
  EvpRadio,
  EvpRadioGroup,
  EvpSelect,
  EvpSlider,
  Toast,
  EvpCode,
} from "evp-design-ui";
import React from "react";

const Preview: React.FC = () => {
  return (
    <div className="preview-container Home">
      <div
        className="home__container"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Row h={120}>
          <Evp class="home__icon" radius={40} />
          <div className="home__title">evp design ui</div>
        </Row>
        <Row class="home_motto" h={"fit-content"}>
          Lightweight and easy-custom atomlized UI framework for React.
        </Row>
        <Row class="home_desc" h={"fit-content"}>
          <p>
            evp design ui is a{" "}
            <span style={{ color: "gray" }}>lightweight</span> and{" "}
            <span style={{ color: "gray" }}>easy-custom</span> UI framework with{" "}
            <span style={{ color: "gray" }}>atomlized</span> attributes for
            React.js. It is much more easy customizable than common UI
            frameworks, and it is also much more lightweight than others. You
            can use it in your project{" "}
            <span style={{ color: "gray" }}>with just a few lines of code</span>
            .
          </p>
        </Row>
        <Row h={"fit-content"}>
          <Button size="huge" theme="dark" display="flex" alignItems="center">
            <div>Get right now</div>
            <div style={{ paddingBottom: 4, paddingLeft: 8 }}>👉</div>
          </Button>
          <Tag
            light
            size="lg"
            style={{
              marginLeft: 20,
              height: "36px",
              lineHeight: "36px",
              fontSize: "16px",
            }}
          >
            $ npm install evp-design-ui
          </Tag>
        </Row>
        <Row h={"fit-content"} justifyContent="left" mgt_80>
          <Col class="home__featlister__left" w={"40%"}>
            <p>
              <ul className="home__featlist">
                <li style={{ marginBottom: 20 }}>
                  <span style={{ fontWeight: "bold" }}>lightweight</span> ✨ :
                  it doesn't have heavy and complex components structure and CSS
                  styles but still is simple and of good look.
                </li>
                <li style={{ marginBottom: 20 }}>
                  <span style={{ fontWeight: "bold" }}>easy-custom</span> 🎉 :
                  it provides many apis out of the box to custom the components
                  directly as the way you like rather than siting the nodes by
                  debugging with dev tools hardly.
                </li>
                <li style={{ marginBottom: 20 }}>
                  <span style={{ fontWeight: "bold" }}>atomlized</span> 🎨 : it
                  provides many components with atomic attributes to make the
                  components more quickly to be build.
                </li>
              </ul>
            </p>
          </Col>
          <EvpCard w={"60%"} mgl_100 pd={20} h={"100%"} style={{ borderRadius: 12 }} contentStyle={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'
          }}>
            <EvpCard>
              <EvpForm>
                <EvpInput
                  label="Project"
                  name="project"
                  required
                  labelWidth={80}
                  default="evp design ui"
                />
                <EvpCheckBoxGroup
                  label="Types"
                  name="types"
                  required
                  labelWidth={80}
                >
                  <EvpCheckBox label="Test" value="Test" />
                  <EvpCheckBox label="Beta" value="Beta" />
                </EvpCheckBoxGroup>
                <EvpRadioGroup
                  label="Access"
                  name="access"
                  required
                  labelWidth={80}
                >
                  <EvpRadio label="Private" value="private" />
                  <EvpRadio label="Public" value="public" defaultChecked/>
                </EvpRadioGroup>
                <EvpSelect
                  label="Role"
                  name="role"
                  required
                  rows={3}
                  labelWidth={80}
                  placeholder="select your role please..."
                  options={[
                    { label: "Visitor", value: "1", key: "Visitor" },
                    { label: "User", value: "2", key: "User" },
                    { label: "Leader", value: "3", key: "Leader" },
                    { label: "Admin", value: "4", key: "Admin" },
                    { label: "Boss", value: "5", key: "Boss" },
                  ]}
                />
                <EvpSlider
                  name="members"
                  required
                  label="Members"
                  min={1}
                  defaultValue={30}
                  labelWidth={80}
                  range={[0, 100]}
                />
                <Row justifyContent="right">
                  <EvpButton
                    $click={() => {
                      Toast.success("Submit successfully!");
                    }}
                  >
                    Submit
                  </EvpButton>
                </Row>
              </EvpForm>
            </EvpCard>
            <div style={{ width: '300px' }}>
            <EvpCode lang="tsx">
{`
<EvpCard>
  <EvpForm formRef={ref}
  >
    <EvpInput
      label="Project"
      name="project"
      required
      labelWidth={80}
      default="evp design ui"
    />
    // ...
  </EvpForm>
</EvpCard>
`}
            </EvpCode>
            </div>
          </EvpCard>
        </Row>
      </div>
    </div>
  );
};

export default Preview;
