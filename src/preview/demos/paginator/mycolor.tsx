import Tsx from "@/components/tsx";
import { Card, Row } from "@/lib";
import React, { useState } from "react";
import { Button, Toast } from "evp-design-ui";

import { Paginator, Label } from "evp-design-ui";

const Demo: React.FC = () => {
  const [cur, setCur] = useState(1);
  const [pageSize] = useState(10);

  const [colorConfig, setColorConfig] = useState({
    tabColor: undefined,
    tabBgColor: undefined,
    tabActiveColor: undefined,
    tabActiveBgColor: undefined,
    tabHoverColor: undefined,
    tabHoverBgColor: undefined,
  });

  const handleRadioClick: React.MouseEventHandler<HTMLInputElement> = (e) => {
    setColorConfig({
      ...colorConfig,
      [e.currentTarget.name]: e.currentTarget.value === "" ? undefined : e.currentTarget.value,
    });
  };

  return (
    <>
      <Paginator
        total={48}
        currentPage={cur}
        setCurrentPage={setCur}
        pageSize={pageSize}
        tabActiveBgColor={colorConfig.tabActiveBgColor}
      />
      <form>
        <Row>
          <Label label="tabActiveBgColor" labelColon />
          <input name="tabActiveBgColor" type="radio" value={undefined} onClick={handleRadioClick} defaultChecked />
          <Label label={"Default"} style={{ marginLeft: 8 }} />
          <input name="tabActiveBgColor" type="radio" value="#008000" onClick={handleRadioClick} />
          <Label label={"Green"} style={{ marginLeft: 8 }} />
          <input name="tabActiveBgColor" type="radio" value="#0000ff" onClick={handleRadioClick} />
          <Label label={"Blue"} style={{ marginLeft: 8 }} />
          <input name="tabActiveBgColor" type="radio" value="#ff0000" onClick={handleRadioClick} />
          <Label label={"Red"} style={{ marginLeft: 8 }} />
          <input name="tabActiveBgColor" type="radio" value="#ffa500" onClick={handleRadioClick} />
          <Label label={"Orange"} style={{ marginLeft: 8 }} />
        </Row>
        <p>
          Other color is similar to <code>tabActiveBgColor</code>, so we do not show them here.<br></br>
          Something need to be noticed is that if the proped color is not set, the default tabHoverColor will sync with
          tabColor, and tabHoverBgColor will sync with tabActiveBgColor ( if the tabActiveBgColor is a 6 bit hex color,
          tabHoverBgColor will automatically make it = color + 11 to be fade) .
        </p>
      </form>
    </>
  );
};

const codes = `
import { Paginator, Label, Row } from "evp-design-ui";

const Demo: React.FC = () => {
  const [cur, setCur] = useState(1);
  const [pageSize] = useState(10);

  const [colorConfig, setColorConfig] = useState({
    tabColor: undefined,
    tabBgColor: undefined,
    tabActiveColor: undefined,
    tabActiveBgColor: undefined,
    tabHoverColor: undefined,
    tabHoverBgColor: undefined,
  });

  const handleRadioClick: React.MouseEventHandler<HTMLInputElement> = (e) => {
    setColorConfig({
      ...colorConfig,
      [e.currentTarget.name]: e.currentTarget.value === "" ? undefined : e.currentTarget.value,
    });
  };

  return (
    <>
      <Paginator
        total={48}
        currentPage={cur}
        setCurrentPage={setCur}
        pageSize={pageSize}
        tabActiveBgColor={colorConfig.tabActiveBgColor}
      />
      <form>
        <Row>
          <Label label="tabActiveBgColor" labelColon />
          <input name="tabActiveBgColor" type="radio" value={undefined} onClick={handleRadioClick} defaultChecked />
          <Label label={"Default"} style={{ marginLeft: 8 }} />
          <input name="tabActiveBgColor" type="radio" value="#008000" onClick={handleRadioClick} />
          <Label label={"Green"} style={{ marginLeft: 8 }} />
          <input name="tabActiveBgColor" type="radio" value="#0000ff" onClick={handleRadioClick} />
          <Label label={"Blue"} style={{ marginLeft: 8 }} />
          <input name="tabActiveBgColor" type="radio" value="#ff0000" onClick={handleRadioClick} />
          <Label label={"Red"} style={{ marginLeft: 8 }} />
          <input name="tabActiveBgColor" type="radio" value="#ffa500" onClick={handleRadioClick} />
          <Label label={"Orange"} style={{ marginLeft: 8 }} />
        </Row>
        <p>
          Other color is similar to <code>tabActiveBgColor</code>, so we do not show them here.<br></br>
          Something need to be noticed is that if the proped color is not set, the default tabHoverColor will sync with
          tabColor, and tabHoverBgColor will sync with tabActiveBgColor ( if the tabActiveBgColor is a 6 bit hex color,
          tabHoverBgColor will automatically make it = color + 11 to be fade) .
        </p>
      </form>
    </>
  );
};
`;

export default class MyColor extends React.Component {
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
