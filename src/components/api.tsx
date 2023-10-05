import { Table } from "evp-design-ui";

export default function Api({
  data,
  widths,
}: {
  data: {
    property: string;
    type?: any;
    default?: any;
    options?: any;
    desc?: any;
  }[];
  widths?: {
    preperty?: number | string;
    type?: number | string;
    default?: number | string;
    options?: number | string;
    desc?: number | string;
  };
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
          cellProps: {
            width: widths?.preperty,
          },
        },
        {
          label: "Type",
          prop: "type",
          render: (val) => {
            return <span style={{ color: val ? "black" : "lightGray" }}>{val ?? "any"}</span>;
          },
          cellProps: {
            width: widths?.type ?? 100,
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
          cellProps: {
            width: widths?.default,
          },
        },
        {
          label: "Options",
          prop: "options",
          render: (val) => {
            return <span style={{ color: val ? "black" : "lightGray" }}>{val ?? "——"}</span>;
          },
          cellProps: {
            width: widths?.options ?? 200,
          },
        },
        {
          label: "Description",
          prop: "desc",
          render: (val) => {
            return <span style={{ color: val ? "black" : "lightGray" }}>{val ?? "——"}</span>;
          },
          cellProps: {
            width: widths?.desc,
          },
        },
      ]}
      data={data}
    />
  );
}
