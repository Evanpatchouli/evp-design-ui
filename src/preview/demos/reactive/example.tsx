import Tsx from "@/components/tsx";
import { Card, ReactiveCtx, Row } from "@/lib";
import React from "react";
import { Button, Toast } from "evp-design-ui";
import { utils, useReactive, listen, } from "evp-design-ui";
import Kid from "./kid";

const { useCatch } = utils;

const Demo: React.FC = () => {
  let state = useReactive(0);
  const num = state.value;
  const throwErr = useCatch(
    () => {
      throw new Error(`error_t${new Date().valueOf()}`);
    },
    (err: Error) => {
      Toast.error(err.message);
    }
  );
  listen(state).then((newVal) => {
    Toast(`newVal: ${newVal}`);
    throwErr();
  });

  return (
    <>
      <Button
        $click={() => {
          state.value = state.value + 1;
        }}
      >
        {num}
      </Button>
      <ReactiveCtx.Provider value={state}>
        <Kid />
      </ReactiveCtx.Provider>
    </>
  );
};

const codes = `
import { utils, useReactive, listen, } from "evp-design-ui";
import Kid from "./kid";

const { useCatch } = utils;

const Demo: React.FC = () => {
  let state = useReactive(0);
  const num = state.value;
  const throwErr = useCatch(
    () => {
      throw new Error(\`error_t\${new Date().valueOf()}\`);
    },
    (err: Error) => {
      Toast.error(err.message);
    }
  );
  listen(state).then((newVal) => {
    Toast(\`newVal: \${newVal}\`);
    throwErr();
  });

  return (
    <>
      <Button
        $click={() => {
          state.value = state.value + 1;
        }}
      >
        {num}
      </Button>
      <ReactiveCtx.Provider value={state}>
        <Kid />
      </ReactiveCtx.Provider>
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
