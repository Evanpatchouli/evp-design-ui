import Tsx from "@/components/tsx";
import { Card, Row } from "@/lib";
import React from "react";
import { Button } from "evp-design-ui";

import { Calendar } from "evp-design-ui";

const Demo: React.FC = () => {
  return <Calendar />;
};

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
                <Button theme="text" size="mini" text="copy" />
              </Row>
              <Tsx show={this.state.showCode}>
                {`
import { Calendar } from "evp-design-ui";

const Demo: React.FC = () => {
  return <Calendar />;
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
