import Tsx from "@/components/tsx";
import { Card, Row, Button, Table } from "@/lib";
import React from "react";

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
<Table
  schema={[
    {
      label: "Name",
      prop: "name",
    },
    {
      label: "Gender",
      prop: "gender",
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
      rerender(value, row, records) {
        return (
          <div>
            <EvpButton size="small" plain text="edit" />
            <EvpButton size="small" plain mgl_8 text="delete" />
          </div>
        );
      },
    },
  ]}
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
`}
              </Tsx>
            </div>
          }
        >
          <Table
            schema={[
              {
                label: "Name",
                prop: "name",
              },
              {
                label: "Gender",
                prop: "gender",
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
            ]}
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
}
