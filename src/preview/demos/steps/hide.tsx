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
          <p>Where is last step btn?</p>
          <p>
            Because the hideLastAtStepOne is true.
            <br />
            So at step 1, the last button has been hidden.
          </p>
        </div>
      ),
    },
    {
      title: "Step 2",
      desc: "I am the step 2.",
      content: (
        <div>
          <p>Click next step btn, please.</p>
          <p>Just click next step button, please.</p>
        </div>
      ),
    },
    {
      title: "Step 3",
      desc: "I am the step 3.",
      content: (
        <div>
          <p>Why next step is still here?</p>
          <p>
            Because the hideNextAtLastStep is false.
            <br />
            So at step last, the next button is still here, though unclickable.
          </p>
        </div>
      ),
    },
  ];
  return <Steps h={240} steps={steps} hideLastAtStepOne hideNextAtLastStep={false} />;
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
          <p>Where is last step btn?</p>
          <p>
            Because the hideLastAtStepOne is true.
            <br />
            So at step 1, the last button has been hidden.
          </p>
        </div>
      ),
    },
    {
      title: "Step 2",
      desc: "I am the step 2.",
      content: (
        <div>
          <p>Click next step btn, please.</p>
          <p>Just click next step button, please.</p>
        </div>
      ),
    },
    {
      title: "Step 3",
      desc: "I am the step 3.",
      content: (
        <div>
          <p>Why next step is still here?</p>
          <p>
            Because the hideNextAtLastStep is false.
            <br />
            So at step last, the next button is still here, though unclickable.
          </p>
        </div>
      ),
    },
  ];
  return <Steps h={240} steps={steps} hideLastAtStepOne hideNextAtLastStep={false} />;
};
`;

export default class Hide extends React.Component {
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
