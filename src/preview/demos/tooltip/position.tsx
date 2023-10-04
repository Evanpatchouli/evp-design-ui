import Tsx from "@/components/tsx";
import { Card, Row } from "@/lib";
import React from "react";

import { Button, Toast } from "evp-design-ui";

import { ToolTip, Tag, Form, useForm, Radio, RadioGroup, EvpShadow } from "evp-design-ui";

const Demo: React.FC = () => {
  const formRef = useForm();
  const [transform, setTransform] = React.useState({
    vertical: undefined,
    horizontal: undefined,
  });
  return (
    <>
      <ToolTip content="This is a tooltip" display="inline-block">
        <Tag plain text="default" />
      </ToolTip>
      <ToolTip content="This is a tooltip" display="inline-block" position="top" transform={transform}>
        <Tag plain text="top" />
      </ToolTip>
      <ToolTip content="This is a tooltip" display="inline-block" position="topLeft" transform={transform}>
        <Tag plain text="topLeft" />
      </ToolTip>
      <ToolTip content="This is a tooltip" display="inline-block" position="topRight" transform={transform}>
        <Tag plain text="topRight" />
      </ToolTip>
      <ToolTip content="This is a tooltip" display="inline-block" position="topLeftCorner" transform={transform}>
        <Tag plain text="topLeftCorner" />
      </ToolTip>
      <ToolTip content="This is a tooltip" display="inline-block" position="topRightCorner" transform={transform}>
        <Tag plain text="topRightCorner" />
      </ToolTip>
      <ToolTip content="This is a tooltip" display="inline-block" position="left" transform={transform}>
        <Tag plain text="left" />
      </ToolTip>
      <ToolTip content="This is a tooltip" display="inline-block" position="leftTop" transform={transform}>
        <Tag plain text="leftTop" />
      </ToolTip>
      <ToolTip content="This is a tooltip" display="inline-block" position="leftBottom" transform={transform}>
        <Tag plain text="leftBottom" />
      </ToolTip>
      <ToolTip content="This is a tooltip" display="inline-block" position="right" transform={transform}>
        <Tag plain text="right" />
      </ToolTip>
      <ToolTip content="This is a tooltip" display="inline-block" position="rightTop" transform={transform}>
        <Tag plain text="rightTop" />
      </ToolTip>
      <ToolTip content="This is a tooltip" display="inline-block" position="rightBottom" transform={transform}>
        <Tag plain text="rightBottom" />
      </ToolTip>
      <ToolTip content="This is a tooltip" display="inline-block" position="bottom" transform={transform}>
        <Tag plain text="bottom" />
      </ToolTip>
      <ToolTip content="This is a tooltip" display="inline-block" position="bottomLeft" transform={transform}>
        <Tag plain text="bottomLeft" />
      </ToolTip>
      <ToolTip content="This is a tooltip" display="inline-block" position="bottomRight" transform={transform}>
        <Tag plain text="bottomRight" />
      </ToolTip>
      <ToolTip content="This is a tooltip" display="inline-block" position="bottomLeftCorner" transform={transform}>
        <Tag plain text="bottomLeftCorner" />
      </ToolTip>
      <ToolTip content="This is a tooltip" display="inline-block" position="bottomRightCorner" transform={transform}>
        <Tag plain text="bottomRightCorner" />
      </ToolTip>
      <Form
        formRef={formRef}
        $submit={(data) => {
          setTransform({
            vertical: data.vertial === "unset" ? undefined : data.veertial,
            horizontal: data.horizontal === "unset" ? undefined : data.horizontal,
          });
        }}
        style={{
          marginTop: 16,
          // border: "1px solid gainsboro",
          borderRadius: "5px",
          boxShadow: EvpShadow.Common_MiddleBlur,
          width: "fit-content",
          paddingBottom: 16,
          paddingRight: 16,
          paddingLeft: 16,
        }}
      >
        <Row gap={8}>
          <h4>Try to change Transform</h4>
          <span>{transform.vertical ?? "undefinded"}</span>
          <span>{transform.horizontal ?? "undefinded"}</span>
        </Row>
        <RadioGroup label="Vertial" labelColon labelAlign="right" labelWidth={80} name="vertial">
          <Radio label="unset" value="unset" defaultChecked />
          <Radio label="top" value="top" />
          <Radio label="center" value="center" />
          <Radio label="bottom" value="bottom" />
        </RadioGroup>
        <RadioGroup label="Horizontal" labelColon labelAlign="right" labelWidth={80} name="horizontal">
          <Radio label="unset" value="unset" defaultChecked />
          <Radio label="left" value="left" />
          <Radio label="center" value="center" />
          <Radio label="right" value="right" />
        </RadioGroup>
        <Row justifyContent="right">
          <Button
            text="confirm"
            $click={() => {
              formRef.current?.submit();
            }}
          />
        </Row>
      </Form>
    </>
  );
};

const codes = `
import { Progress, Slider } from "evp-design-ui";

const Demo: React.FC = () => {
  const [val, setVal] = useState(50);
  return (
    <>
      <Progress value={val} />
      <Slider name="progress" value={val} setValue={setVal} />
    </>
  );
};
`;

export default class Position extends React.Component {
  state: Readonly<{
    showCode: boolean;
  }> = {
    showCode: false,
  };

  render() {
    return (
      <>
        <Card
          w={"100%"}
          footer={
            <div style={{ width: "100%" }}>
              <Row justifyContent="right" w={"100%"} h={"fit-content"}>
                <Button
                  $click={() =>
                    this.setState({
                      ...this.state,
                      showCode: !this.state.showCode,
                    })
                  }
                  theme="text"
                  size="mini"
                  text="code"
                />
                <Button
                  theme="text"
                  size="mini"
                  text="copy"
                  $click={() => {
                    navigator.clipboard
                      .writeText(codes)
                      .then(() => {
                        Toast.success("Copy Success !");
                      })
                      .catch((err) => {
                        console.error(err);
                        Toast.error("Copy Failed !");
                      });
                  }}
                />
              </Row>
              <Tsx show={this.state.showCode}>{codes}</Tsx>
            </div>
          }
        >
          <Demo />
        </Card>
      </>
    );
  }
}
