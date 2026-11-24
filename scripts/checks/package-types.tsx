import { Button, Code, Paginator, Table, type EvpTableProps } from "evp-design-ui";

const table: EvpTableProps<{ name: string }> = {
  data: [{ name: "Ada" }],
  schema: [{ prop: "name", render: value => value.toUpperCase() }],
};

export const example = <>
  <Button>OK</Button>
  <Table {...table} />
  <Paginator total={4} onChange={(page, size) => page * size} />
  <Code lineProps={line => ({ title: String(line) })}>example</Code>
</>;
