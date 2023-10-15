import Tsx from "@/components/tsx";
import { Card, Row } from "@/lib";
import React from "react";
import { Button, Toast } from "evp-design-ui";

import { Css } from "evp-design-ui";

const Demo: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: "url(https://pic35.photophoto.cn/20150511/0034034892281415_b.jpg)",
        backgroundSize: "cover",
        aspectRatio: "16/9",
        width: "80%",
      }}
    >
      <div
        style={{
          ...Css.FrostedGlass,
          ...Css.Centred,
          color: "white",
          fontSize: "2rem",
          fontWeight: "bold",
          ...Css.ShineText,
          ...Css.Overspread,
        }}
      >
        <span>Css FrostedGlass</span>
      </div>
    </div>
  );
};

const codes = `
import { Css } from "evp-design-ui";

const Demo: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: "url(https://pic35.photophoto.cn/20150511/0034034892281415_b.jpg)",
        backgroundSize: "cover",
        height: 600,
        width: "100%",
      }}
    >
      <div
        style={{
          ...Css.FrostedGlass,
          ...Css.Centred,
          color: "white",
          fontSize: "2rem",
          fontWeight: "bold",
          ...Css.ShineText,
          ...Css.Overspread,
        }}
      >
        Css FrostedGlass
      </div>
    </div>
  );
};
`;

export default class Many extends React.Component {
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
