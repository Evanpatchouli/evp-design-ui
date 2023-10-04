import { Table } from "evp-design-ui";

export default function Api({
  data,
}: {
  data: {
    property: string;
    type?: any;
    default?: any;
    options?: any;
    desc?: any;
  }[];
}) {
  return (
    <Table
      zebra
      schema={[
        {
          label: "Property",
          prop: "property",
          render: (val: string) => {
            return <span style={{ fontWeight: val.includes(".") ? "normal" : "bold" }}>{val}</span>;
          },
        },
        {
          label: "Type",
          prop: "type",
          render: (val) => {
            return <span style={{ color: val ? "black" : "lightGray" }}>{val ?? "any"}</span>;
          },
          cellProps: {
            width: 100,
          },
        },
        {
          label: "Default",
          prop: "default",
          render: (val) => {
            return (
              <span style={{ color: val && val !== "undefined" ? "black" : "lightGray" }}>{val ?? "undefined"}</span>
            );
          },
        },
        {
          label: "Options",
          prop: "options",
          render: (val) => {
            return <span style={{ color: val ? "black" : "lightGray" }}>{val ?? "——"}</span>;
          },
          cellProps: {
            width: 200,
          },
        },
        {
          label: "Description",
          prop: "desc",
          render: (val) => {
            return <span style={{ color: val ? "black" : "lightGray" }}>{val ?? "——"}</span>;
          },
        },
      ]}
      data={data}
    />
  );
}
