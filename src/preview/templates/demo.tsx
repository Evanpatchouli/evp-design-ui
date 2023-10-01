import Tsx from "@/components/tsx";
import { Card, Row, Button } from "@/lib";
import React from "react";

const Demo: React.FC = () => {
  return (
    <>
      <text>hello world</text>
    </>
  );
};

export default class Example extends React.Component {
  state: Readonly<{
    showCode: boolean;
  }> = {
    showCode: false,
  };
  componentDidMount(): void {
    console.log("hei");
  }
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
