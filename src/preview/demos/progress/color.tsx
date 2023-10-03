import Tsx from "@/components/tsx";
import { Card } from "@/lib";
import React from "react";

import { Button, Toast } from "evp-design-ui";

import { Progress, Row } from "evp-design-ui";

const Demo: React.FC = () => {
  return (
    <div>
      <p>Default, the textColor is same with fillColor if textColor not set.</p>
      <Row gap={12}>
        <Progress value={33} />
        <Progress value={33} fillColor="green" />
        <Progress value={33} fillColor="red" />
        <Progress value={33} fillColor="blue" />
        <Progress value={33} fillColor="black" />
      </Row>
      <p>Set the textColor to make it different with fillColor.</p>
      <Row gap={12}>
        <Progress value={33} textColor="black" />
        <Progress value={33} fillColor="green" textColor="black" />
        <Progress value={33} fillColor="red" textColor="black" />
        <Progress value={33} fillColor="blue" textColor="black" />
        <Progress value={33} fillColor="black" textColor="black" />
      </Row>
      <p>Default blankColor is white, set it to make it different.</p>
      <Row gap={12}>
        <Progress value={33} blankColor="azure" />
        <Progress value={33} fillColor="green" blankColor="orange" />
        <Progress value={33} fillColor="red" blankColor="black" />
        <Progress value={33} fillColor="blue" blankColor="lightBlue" />
        <Progress value={33} fillColor="black" blankColor="springGreen" />
      </Row>
      <p>Default textBlankColor is same with blankColor, set it to make it different.</p>
      <Row gap={12}>
        <Progress value={33} blankColor="azure" textBlankColor="white" />
        <Progress value={33} fillColor="green" blankColor="orange" textBlankColor="white" />
        <Progress value={33} fillColor="red" blankColor="black" textBlankColor="white" />
        <Progress value={33} fillColor="blue" blankColor="lightBlue" textBlankColor="white" />
        <Progress value={33} fillColor="black" blankColor="springGreen" textBlankColor="white" />
      </Row>
    </div>
  );
};

const codes = `
import { Progress, Row } from "evp-design-ui";

const Demo: React.FC = () => {
  return (
    <div>
      <p>Default, the textColor is same with fillColor if textColor not set.</p>
      <Row gap={12}>
        <Progress value={33} />
        <Progress value={33} fillColor="green" />
        <Progress value={33} fillColor="red" />
        <Progress value={33} fillColor="blue" />
        <Progress value={33} fillColor="black" />
      </Row>
      <p>Set the textColor to make it different with fillColor.</p>
      <Row gap={12}>
        <Progress value={33} textColor="black" />
        <Progress value={33} fillColor="green" textColor="black" />
        <Progress value={33} fillColor="red" textColor="black" />
        <Progress value={33} fillColor="blue" textColor="black" />
        <Progress value={33} fillColor="black" textColor="black" />
      </Row>
      <p>Default blankColor is white, set it to make it different.</p>
      <Row gap={12}>
        <Progress value={33} blankColor="azure" />
        <Progress value={33} fillColor="green" blankColor="orange" />
        <Progress value={33} fillColor="red" blankColor="black" />
        <Progress value={33} fillColor="blue" blankColor="lightBlue" />
        <Progress value={33} fillColor="black" blankColor="springGreen" />
      </Row>
      <p>Default textBlankColor is same with blankColor, set it to make it different.</p>
      <Row gap={12}>
        <Progress value={33} blankColor="azure" textBlankColor="white" />
        <Progress value={33} fillColor="green" blankColor="orange" textBlankColor="white" />
        <Progress value={33} fillColor="red" blankColor="black" textBlankColor="white" />
        <Progress value={33} fillColor="blue" blankColor="lightBlue" textBlankColor="white" />
        <Progress value={33} fillColor="black" blankColor="springGreen" textBlankColor="white" />
      </Row>
    </div>
  );
};
`;

export default class Color extends React.Component {
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
