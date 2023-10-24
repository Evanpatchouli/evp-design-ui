import Tsx from "@/components/tsx";
import { Card, Row } from "@/lib";
import React from "react";
import { Button, Toast } from "evp-design-ui";

import { Circle, Tag } from "evp-design-ui";
import { range } from "@/lib/utils/num.util";
import { css } from "@emotion/css";

const Demo: React.FC = () => {
  return (
    <Row>
      <Circle
        items={range(1, 12)}
        schema={{
          render(item, idx, items) {
            return (
              <div className="my-item">
                <Tag>{item}</Tag>
              </div>
            );
          },
          class: css`
            &:hover {
              z-index: 1;
              transform: scale(1.1);
              cursor: pointer;
            }
            &:active {
              transform: scale(0.9);
              transition: transform 0.1s;
            }
            *::selection {
              background: transparent;
            }
            background: white;
            border: 1px solid dodgerblue;
            box-shadow: 0 0 10px dodgerblue;
          `,
        }}
        size={300}
      >
        12 Items
      </Circle>
      <Circle
        items={range(1, 12)}
        schema={{
          render(item, idx, items) {
            return (
              <div className="my-item">
                <Tag light>{item}</Tag>
              </div>
            );
          },
          style: {
            backdropFilter: "blur(10px)",
            boxShadow: "0 0 10px dodgerblue",
            cursor: "pointer",
          },
          $click(e, item, idx, items) {
            Toast.success(`You clicked ${item}`);
          },
        }}
        size={300}
      >
        12 Items
      </Circle>
    </Row>
  );
};

const codes = `
import { Circle, Tag, Toast } from "evp-design-ui";
import { range } from "@/lib/utils/num.util";
import { css } from "@emotion/css";

const Demo: React.FC = () => {
  return (
    <Row>
    <Circle
      items={range(1, 12)}
      schema={{
        render(item, idx, items) {
          return (
            <div className="my-item">
              <Tag>{item}</Tag>
            </div>
          );
        },
        class: css\`
          &:hover {
            z-index: 1;
            transform: scale(1.1);
            cursor: pointer;
          }
          &:active {
            transform: scale(0.9);
            transition: transform 0.1s;
          }
          *::selection {
            background: transparent;
          }
          background: white;
          border: 1px solid dodgerblue;
          box-shadow: 0 0 10px dodgerblue;
        \`,
      }}
      width={300}
    >
      12 Items
    </Circle>
    <Circle
      items={range(1, 12)}
      schema={{
        render(item, idx, items) {
          return (
            <div className="my-item">
              <Tag light>{item}</Tag>
            </div>
          );
        },
        style: {
          backdropFilter: "blur(10px)",
          boxShadow: "0 0 10px dodgerblue",
          cursor: "pointer",
        },
        $click(e, item, idx, items) {
          Toast.success(\`You clicked \${item}\`);
        },
      }}
      width={300}
    >
      12 Items
    </Circle>
  </Row>
  );
};
`;

export default class Schema extends React.Component {
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
