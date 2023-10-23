import Tsx from "@/components/tsx";
import { Card, Row } from "@/lib";
import React from "react";
import { Button, Toast } from "evp-design-ui";

import { Droplet } from "evp-design-ui";

const Demo: React.FC = () => {
  return (
    <Row>
      <Droplet borderRadius="10px" lightSpot={false} w={100} h={100} children={"false"} />
      <Droplet borderRadius="10px" lightSpot={12} w={100} h={100} children={"12"} />
      <Droplet borderRadius="10px" lightSpot={36} w={100} h={100} children={"36"} />
    </Row>
  );
};

const codes = `
import { Droplet, Row } from "evp-design-ui";

const Demo: React.FC = () => {
  return (
    <Row>
      <Droplet borderRadius="10px" lightSpot={false} w={100} h={100} children={"false"} />
      <Droplet borderRadius="10px" lightSpot={12} w={100} h={100} children={"12"} />
      <Droplet borderRadius="10px" lightSpot={36} w={100} h={100} children={"36"} />
    </Row>
  );
};
`;

export default class LightSpot extends React.Component {
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
