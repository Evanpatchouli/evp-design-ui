import Md from "@/components/md";
import Tsx from "@/components/tsx";
import { Card, Row, Button, Table, SvgIcon } from "@/lib";
import React from "react";

export default class Render extends React.Component {
  state: Readonly<{
    showCode: boolean;
    data: any[];
  }> = {
    showCode: false,
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
  };
  schema = [
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
  ];
  render() {
    return (
      <>
        <Md>
          {`
### render

You can customize the cell content by setting the \`render\` of schema item.

For example, I want to render gender icon rather than text, and I want some actions buttons.
          `}
        </Md>
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
export default function Render() {
  const schema = [
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
  ];
  const data = [
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
  ];

  return(
    <Table selection zebra schema={this.schema} data={this.state.data}></Table>
  )
}
`}
              </Tsx>
            </div>
          }
        >
          <Table selection zebra schema={this.schema} data={this.state.data}></Table>
        </Card>
      </>
    );
  }
}
