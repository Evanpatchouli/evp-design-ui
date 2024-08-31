import Tsx from "@/components/tsx";
import { Card, Row } from "@/lib";
import React from "react";
import { Button, Toast } from "evp-design-ui";

import { Snake } from "evp-design-ui";

const Demo: React.FC = () => {
  const items = Array.from({ length: 9 }, (_, i) => i);
  return (
    <>
      <Snake w="fit-content">
        {items.map((item) => (
          <div
            key={item}
            style={{
              // width: 40,
              height: 40,
              lineHeight: "40px",
              margin: "5px",
              borderRadius: "8px",
              textAlign: "center",
              verticalAlign: "middle",
              background:
                // 用随机数生成颜色
                `hsl(${Math.floor(Math.random() * 360)}, 50%, 50%)`,
            }}
          >
            {item}
          </div>
        ))}
      </Snake>
    </>
  );
};

const codes = `
import { Snake } from "evp-design-ui";

const Demo: React.FC = () => {
  return (
    <>
      <Snake />
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
