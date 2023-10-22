import Tsx from "@/components/tsx";
import { Card, Row } from "@/lib";
import React from "react";
import { Button, Toast } from "evp-design-ui";

import { FrostedGlass } from "evp-design-ui";
import "./index.scss";

const Demo: React.FC = () => {
  const url = "https://pic.netbian.com/uploads/allimg/230130/004501-167501070185dd.jpg";
  const [blur, setBlur] = React.useState(false);
  const blurAlpha: number | undefined = blur ? undefined : 0;
  const text = blur ? "UnBlur" : "Blur";

  return (
    <>
      <FrostedGlass
        background={`url(${url})`}
        filterBlur={blurAlpha}
        w={"auto"}
        h={"600px"}
        display="flex"
        alignItems="center"
        justifyContent="center"
        style={{
          transition: "all 0.2s ease-out",
        }}
      >
        <div className="droplet" onClick={() => setBlur(!blur)}>
          {text}
        </div>
      </FrostedGlass>
    </>
  );
};

const codes = `
import { FrostedGlass } from "evp-design-ui";
import "./index.scss";

const Demo: React.FC = () => {
  const url = "https://pic.netbian.com/uploads/allimg/230130/004501-167501070185dd.jpg";
  const [blur, setBlur] = React.useState(false);
  const blurAlpha: number | undefined = blur ? undefined : 0;
  const text = blur ? "UnBlur" : "Blur";

  return (
    <>
      <FrostedGlass
        background={\`url(\${url})\`}
        filterBlur={blurAlpha}
        w={"auto"}
        h={"600px"}
        display="flex"
        alignItems="center"
        justifyContent="center"
        style={{
          transition: "all 0.2s ease-out",
        }}
      >
        <div className="droplet" onClick={() => setBlur(!blur)}>
          {text}
        </div>
      </FrostedGlass>
    </>
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
