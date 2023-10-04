import Tsx from "@/components/tsx";
import { Card, Row } from "@/lib";
import React from "react";
import { Button, Toast } from "evp-design-ui";

import { Steps } from "evp-design-ui";

const Demo: React.FC = () => {
  const steps = [
    {
      title: "Step 1",
      desc: "I am the step 1.",
      content: (
        <div>
          <p>Hello, I am step 1.</p>
          <p>
            Yeah, I am going to show Steps.
            <br />
            Nice to meet you!
          </p>
        </div>
      ),
    },
    {
      title: "Step 2",
      desc: "I am the step 2.",
      content: (
        <div>
          <p>What is Step?</p>
          <p>Step is a component that divides something into steps.</p>
        </div>
      ),
    },
    {
      title: "Step 3",
      desc: "I am the step 3.",
      content: (
        <div>
          <p>More about Steps.</p>
          <p>Read this page to learn more about Steps.</p>
        </div>
      ),
    },
  ];
  return <Steps h={240} steps={steps} />;
};

const codes = `
import { Steps } from "evp-design-ui";

const Demo: React.FC = () => {
  const steps = [
    {
      title: "Step 1",
      desc: "I am the step 1.",
      content: (
        <div>
          <p>Hello, I am step 1.</p>
          <p>
            Yeah, I am going to show Steps.
            <br />
            Nice to meet you!
          </p>
        </div>
      ),
    },
    {
      title: "Step 2",
      desc: "I am the step 2.",
      content: (
        <div>
          <p>What is Step?</p>
          <p>Step is a component that divides something into steps.</p>
        </div>
      ),
    },
    {
      title: "Step 3",
      desc: "I am the step 3.",
      content: (
        <div>
          <p>More about Steps.</p>
          <p>Read this page to learn more about Steps.</p>
        </div>
      ),
    },
  ];
  return (
    return <Steps h={240} steps={steps} />;
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
