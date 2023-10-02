import Tsx from "@/components/tsx";
import { Card, Row } from "@/lib";
import React, { useState } from "react";

import { Table, SvgIcon, Button } from "evp-design-ui";

const Demo: React.FC = () => {
  const [state] = useState({
    data: [
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
    ],
    schema: [
      {
        label: "Name",
        prop: "name",
      },
      {
        label: "Gender",
        prop: "gender",
        render(value: string) {
          return <>{value === "Male" ? <SvgIcon.Male /> : <SvgIcon.Female />}</>;
        },
      },
      {
        label: "Age",
        prop: "age",
      },
      {
        label: "Address",
        prop: "address",
      },
      {
        label: "Phone",
        prop: "phone",
      },
      {
        label: "Actions",
        render() {
          return (
            <div>
              <Button size="mini" plain text="edit" />
              <Button size="mini" plain mgl_8 text="delete" />
            </div>
          );
        },
      },
    ],
  });

  return <Table zebra schema={state.schema} data={state.data}></Table>;
};

export default class Zebra extends React.Component {
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
import { Table, SvgIcon, Button } from "evp-design-ui";

const Demo: React.FC = () => {
  const [state] = useState({
    data: [
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
    ],
    schema: [
      {
        label: "Name",
        prop: "name",
      },
      {
        label: "Gender",
        prop: "gender",
        render(value: string) {
          return <>{value === "Male" ? <SvgIcon.Male /> : <SvgIcon.Female />}</>;
        },
      },
      {
        label: "Age",
        prop: "age",
      },
      {
        label: "Address",
        prop: "address",
      },
      {
        label: "Phone",
        prop: "phone",
      },
      {
        label: "Actions",
        render() {
          return (
            <div>
              <Button size="mini" plain text="edit" />
              <Button size="mini" plain mgl_8 text="delete" />
            </div>
          );
        },
      },
    ],
  });
  
  return <Table zebra schema={state.schema} data={state.data}></Table>;
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
