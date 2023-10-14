import Tsx from "@/components/tsx";
import { Card, Row } from "@/lib";
import React from "react";
import { Button, Toast } from "evp-design-ui";

import { Slides } from "evp-design-ui";

const Demo: React.FC = () => {
  const items = [
    <h1>Slide Item 1</h1>,
    <h1>Slide Item 2</h1>,
    <h1>Slide Item 3</h1>,
    <h1>Slide Item 4</h1>,
    <h1>Slide Item 5</h1>,
  ];
  return (
    <>
      <Slides showScroll items={items} />
    </>
  );
};

const codes = `
import { Slides } from "evp-design-ui";

const Demo: React.FC = () => {
  const items = [
    <h1>Slide Item 1</h1>,
    <h1>Slide Item 2</h1>,
    <h1>Slide Item 3</h1>,
    <h1>Slide Item 4</h1>,
    <h1>Slide Item 5</h1>,
  ];
  return (
    <>
      <Slides showScroll items={items} />
    </>
  );
};
`;

export default class ShowScroll extends React.Component {
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
