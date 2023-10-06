import Tsx from "@/components/tsx";
import { Card, Row, Toast } from "@/lib";
import React from "react";

import { Button, Slider } from "evp-design-ui";

const Demo: React.FC = () => {
  return <Slider name="slider-step-demo" label={"Step 10"} step={10} />;
};

const codes = `
import { Slider } from "evp-design-ui";

const Demo: React.FC = () => {
  return <Slider name="slider-step-demo" label={"Step 10"} step={10} />;
};
`;

export default class Step extends React.Component {
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
