import Tsx from "@/components/tsx";
import { Card, Row } from "@/lib";
import React from "react";
import { Button, Toast } from "evp-design-ui";

import { Circle } from "evp-design-ui";
import { range } from "@/lib/utils/num.util";

const Demo: React.FC = () => {
  return (
    <>
      <Circle
        items={range(1, 12)}
        size={300}
        mainProps={{
          className: "my-main",
          tabIndex: -1,
          style: {
            border: "1px solid black",
            boxShadow: "0 0 10px black",
            width: "60%",
            height: "60%",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
          onMouseOver() {
            Toast.info("Mouse Over !");
          },
        }}
      >
        12 Items
      </Circle>
    </>
  );
};

const codes = `
import { Circle, Toast } from "evp-design-ui";
import { range } from "@/lib/utils/num.util";

const Demo: React.FC = () => {
  return (
    <>
      <Circle
        items={range(1, 12)}
        size={300}
        mainProps={{
          className: "my-main",
          tabIndex: -1,
          style: {
            border: "1px solid black",
            boxShadow: "0 0 10px black",
            width: "60%",
            height: "60%",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
          onMouseOver() {
            Toast.info("Mouse Over !");
          },
        }}
      >
        12 Items
      </Circle>
    </>
  );
};
`;

export default class Main extends React.Component {
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
