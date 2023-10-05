import Tsx from "@/components/tsx";
import { Card, Row } from "@/lib";
import React, { useState } from "react";

import { Button, Toast } from "evp-design-ui";

import { Paginator } from "evp-design-ui";

const Demo: React.FC = () => {
  const [cur, setCur] = useState(1);
  const [pageSize] = useState(10);

  return (
    <Paginator
      total={48}
      currentPage={cur}
      setCurrentPage={setCur}
      pageSize={pageSize}
      showQuickJumper
      showSizeChanger
      quene={["jumper", "taber", "total", "sizer"]}
    />
  );
};

const codes = `
import { Paginator } from "evp-design-ui";

const Demo: React.FC = () => {
  const [cur, setCur] = useState(1);
  const [pageSize] = useState(10);

  return (
    <Paginator
      total={48}
      currentPage={cur}
      setCurrentPage={setCur}
      pageSize={pageSize}
      showQuickJumper
      showSizeChanger
      quene={["jumper", "taber", "total", "sizer"]}
    />
  );
};
`;

export default class Quene extends React.Component {
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
