import Tsx from "@/components/tsx";
import { Card, Row } from "@/lib";
import React from "react";
import { Button } from "evp-design-ui";

import { Calendar } from "evp-design-ui";

const Demo: React.FC = () => {
  return (
    <>
      <Calendar style={{ display: "inline-block", margin: 20 }} />
      <Calendar timeAlign="left" style={{ display: "inline-block", margin: 20 }} />
      <Calendar timeAlign="right" style={{ display: "inline-block", margin: 20 }} />
      <Calendar showTime={false} style={{ display: "inline-block", margin: 20 }} />
    </>
  );
};

export default class Time extends React.Component {
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
                <Button theme="text" size="mini" text="copy" />
              </Row>
              <Tsx show={this.state.showCode}>
                {`
const Demo: React.FC = () => {
  return (
    <>
      <Calendar style={{ display: "inline-block", margin: 20 }} />
      <Calendar timeAlign="left" style={{ display: "inline-block", margin: 20 }} />
      <Calendar timeAlign="right" style={{ display: "inline-block", margin: 20 }} />
      <Calendar showTime={false} style={{ display: "inline-block", margin: 20 }} />
    </>
  );
};
`}
              </Tsx>
            </div>
          }
        >
          <Demo />
        </Card>
      </>
    );
  }
}
