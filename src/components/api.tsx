import { Required, Table, Tag } from "evp-design-ui";

const typeRender = (val: any, required: boolean = false) => {
  switch (val) {
    case "React.ReactNode": {
      return <Tag light>{val}</Tag>;
    }
    case "string": {
      return (
        <>
          {<Required hidden={!required} />}
          <Tag light>{val}</Tag>
        </>
      );
    }
    case "number": {
      return (
        <Tag plain={true} theme="white">
          {val}
        </Tag>
      );
    }
    case "boolean": {
      return (
        <Tag plain={true} theme="primary">
          {val}
        </Tag>
      );
    }
    default: {
      return <>{val}</>;
    }
  }
};

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
    required?: boolean;
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
          render: (val, row) => {
            return (
              <span style={{ color: val ? "black" : "lightGray" }}>
                {typeRender(val ?? ("any" as any), row.required)}
              </span>
            );
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
