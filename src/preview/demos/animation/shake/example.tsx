import Tsx from "@/components/tsx";
import { Card, Row } from "@/lib";
import React from "react";
import { Button, Toast } from "evp-design-ui";

import { Animation } from "evp-design-ui";

const Demo: React.FC = () => {
  return (
    <>
      <Animation.Shake>
        <Button>Hover Me</Button>
      </Animation.Shake>
    </>
  );
};

const codes = `
import { Animation } from "evp-design-ui";

const Demo: React.FC = () => {
  return (
    <>
      <Animation.Shake>
        <Button>Hover Me</Button>
      </Animation.Shake>
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
