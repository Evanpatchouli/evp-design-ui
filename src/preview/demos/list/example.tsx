import Tsx from "@/components/tsx";
import { Card, Row } from "@/lib";
import React from "react";
import { Button, Toast } from "evp-design-ui";

import { List } from "evp-design-ui";

const Demo: React.FC = () => {
  const data = [
    { id: 1, name: "Jack", age: 28, address: "some where", tags: ["nice", "developer"] },
    { id: 2, name: "Rose", age: 36, address: "some where", tags: ["loser"] },
    { id: 3, name: "Uzi", age: 18, address: "some where", tags: ["cool", "teacher"] },
    { id: 4, name: "Mary", age: 22, address: "some where", tags: ["nice", "outgoing"] },
  ];
  const itemRender = (item: (typeof data)[0], idx: number, items: typeof data) => (
    <Row>
      <div>{item.id}</div>
      <div>{item.name}</div>
      <div>{item.age}</div>
      <div>{item.address}</div>
      <div>{item.tags.join(",")}</div>
    </Row>
  );
  return (
    <>
      <List
        data={data}
        schema={{
          render: itemRender,
          // itemKey: "id",
          // itemHeight: 40,
          // itemGap: 10,
          // itemStyle: {
          //   backgroundColor: "#fff",
          //   borderRadius: 4,
          //   boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
          //   padding: "0 16px",
          // },
          // itemHoverStyle: {
          //   backgroundColor: "#f5f5f5",
          // },
          // itemActiveStyle: {
          //   backgroundColor: "#eee",
          // },
          // itemSelectedStyle: {
          //   backgroundColor: "#eee",
          // },
        }}
      />
    </>
  );
};

const codes = `
const Demo: React.FC = () => {
  const data = [
    { id: 1, name: "Jack", age: 28, address: "some where", tags: ["nice", "developer"] },
    { id: 2, name: "Rose", age: 36, address: "some where", tags: ["loser"] },
    { id: 3, name: "Uzi", age: 18, address: "some where", tags: ["cool", "teacher"] },
    { id: 4, name: "Mary", age: 22, address: "some where", tags: ["nice", "outgoing"] },
  ];
  const itemRender = (item: (typeof data)[0], idx: number, items: typeof data) => (
    <Row>
      <div>{item.id}</div>
      <div>{item.name}</div>
      <div>{item.age}</div>
      <div>{item.address}</div>
      <div>{item.tags.join(",")}</div>
    </Row>
  );
  return (
    <>
      <List
        data={data}
        schema={{
          render: itemRender,
        }}
      />
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
