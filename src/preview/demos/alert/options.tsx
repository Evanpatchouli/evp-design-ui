import Tsx from "@/components/tsx";
import { Card, Row } from "@/lib";
import React from "react";
import { Button, Toast } from "evp-design-ui";

import { alert } from "evp-design-ui";

const Demo: React.FC = () => {
  return (
    <>
      <Button
        theme="danger"
        $click={() => {
          alert("You should not click me! Now you cannot scroll, Haha!", {
            onOpen: () => Toast.info("Alert Opened !"),
            onClose: () => Toast.info("Alert Closed !"),
            w: "fit-content",
            color: "red",
            style: {
              borderRadius: 8,
            },
          });
        }}
      >
        Click Me
      </Button>
    </>
  );
};

const codes = `
import { alert } from "evp-design-ui";

const Demo: React.FC = () => {
  return (
    <>
      <Button
        theme="danger"
        $click={() => {
          alert("You should not click me! Now you cannot scroll, Haha!", {
            onOpen: () => Toast.info("Alert Opened !"),
            onClose: () => Toast.info("Alert Closed !"),
            w: "fit-content",
            h: 600,
            color: "red",style: {
              borderRadius: 8,
            },
          });
        }}
      >
        Click Me
      </Button>
    </>
  );
};
`;

export default class Options extends React.Component {
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
