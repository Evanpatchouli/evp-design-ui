import Tsx from "@/components/tsx";
import { Card, Row, Button, Table } from "@/lib";
import React, { useState } from "react";

export default function WithoutSchema() {
  const [state, setState] = useState({
    showCode: false,
  });
  return (
    <>
      <Card
        w={"100%"}
        footer={
          <div style={{ width: "100%" }}>
            <Row justifyContent="right" w={"100%"} h={"fit-content"}>
              <Button
                $click={() =>
                  setState({
                    ...state,
                    showCode: !state.showCode,
                  })
                }
                theme="text"
                size="mini"
                text="code"
              />
              <Button theme="text" size="mini" text="copy" />
            </Row>
            <Tsx show={state.showCode}>
              {`
export default function WithoutSchema() {
  return (
    <Table
      selection
      zebra
      data={[
        {
          name: "John",
          gender: "Male",
          age: 22,
          address: "Hangzhou",
          phone: "123456789",
        },
        {
          name: "Jane",
          gender: "Female",
          age: 22,
          address: "Hangzhou",
          phone: "123456789",
        },
        {
          name: "Jasmine",
          gender: "Female",
          age: 22,
          address: "Burnaby",
          phone: "123456789",
        },
      ]}
    />
  )
`}
            </Tsx>
          </div>
        }
      >
        <Table
          selection
          zebra
          data={[
            {
              name: "John",
              gender: "Male",
              age: 22,
              address: "Hangzhou",
              phone: "123456789",
            },
            {
              name: "Jane",
              gender: "Female",
              age: 22,
              address: "Hangzhou",
              phone: "123456789",
            },
            {
              name: "Jasmine",
              gender: "Female",
              age: 22,
              address: "Burnaby",
              phone: "123456789",
            },
          ]}
        ></Table>
      </Card>
    </>
  );
}
