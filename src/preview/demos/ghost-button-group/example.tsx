import Tsx from "@/components/tsx";
import { Card, Row } from "@/lib";
import React from "react";
import { Button, Toast } from "evp-design-ui";

import { GhostButtonGroup, type EvpButtonProps, SvgIcon } from "evp-design-ui";

const Demo: React.FC = () => {
  const items: EvpButtonProps[] = [{ children: "A" }, { children: "B" }, { children: "C" }, { children: "D" }];
  return (
    <>
      <div>
        <GhostButtonGroup mgr_40 mgb_40 items={items} children={<SvgIcon.Component />} direction="left" />
        <GhostButtonGroup mgr_40 items={items} children={<SvgIcon.Component />} direction="right" />
      </div>
      <div>
        <GhostButtonGroup mgr_40 items={items} children={<SvgIcon.Component />} direction="up" />
        <GhostButtonGroup mgr_40 items={items} children={<SvgIcon.Component />} direction="down" />
      </div>
    </>
  );
};

const codes = `
import { GhostButtonGroup, type EvpButtonProps } from "evp-design-ui";

const Demo: React.FC = () => {
  const items: EvpButtonProps[] = [
    { children: "A" },
    { children: "B" },
    { children: "C" },
    { children: "D" },
  ] 
  return (
    <>
      <GhostButtonGroup items={items} />
    </>
  );
};
`;

export default class Example extends React.Component {
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
