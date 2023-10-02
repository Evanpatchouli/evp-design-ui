import Tsx from "@/components/tsx";
import { Card, Row } from "@/lib";
import React, { useState } from "react";

import { Table, SvgIcon, Button } from "evp-design-ui";
import NumUtils from "@/lib/utils/num.util";

const Demo: React.FC = () => {
  const [state] = useState({
    data: NumUtils.range(1, 103).map((i) => {
      return {
        name: `Person ${i}`,
        gender: i % 2 === 0 ? "Male" : "Female",
        age: i,
        address: "Hangzhou",
        phone: "123456789",
      };
    }),
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

  const [cur, setCur] = useState(1);

  return (
    <Table
      zebra
      schema={state.schema}
      data={state.data}
      paginator
      pagination={{
        currentPage: cur,
        setCurrentPage: setCur,
        pageSize: 10,
      }}
    ></Table>
  );
};

export default class Pagination extends React.Component {
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
    data: NumUtils.range(1, 103).map((i) => {
      return {
        name: \`Person \${i}\`,
        gender: i % 2 === 0 ? "Male" : "Female",
        age: i,
        address: "Hangzhou",
        phone: "123456789",
      };
    }),
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

  const [cur, setCur] = useState(1);

  return (
    <Table
      zebra
      schema={state.schema}
      data={state.data}
      paginator
      pagination={{
        currentPage: cur,
        setCurrentPage: setCur,
        pageSize: 10,
      }}
    ></Table>
  );
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
