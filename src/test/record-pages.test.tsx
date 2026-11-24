import { fireEvent, render, screen, within } from "@testing-library/react";
import Table from "../lib/evp-table";
import List from "../lib/evp-list";

const rows = Array.from({ length: 30 }, (_, i) => ({ id: i + 1, name: "Item " + (i + 1), secret: "hidden" }));

test("pageSize alone slices and hidden columns never render", () => {
  const hidden = jest.fn(), rendered = jest.fn((value) => value);
  const view = render(<Table data={rows} pagination={{ pageSize: 10 }} schema={[
    { label: "Name", prop: "name", render: rendered },
    { label: "Private", prop: "secret", hidden: true, render: hidden }
  ]} />);
  expect(view.container.querySelectorAll("tbody tr")).toHaveLength(10);
  expect(view.container.querySelectorAll("tbody td")).toHaveLength(10);
  expect(screen.queryByText("Private")).toBeNull();
  expect(hidden).not.toHaveBeenCalled();
  expect(rendered).toHaveBeenCalledWith("Item 1", rows[0], rows.slice(0, 10));
  view.rerender(<List data={rows} pagination={{ pageSize: 10 }} schema={{ key: "id", render: r => r.name }} />);
  expect(view.container).toHaveTextContent("Item 10");
  expect(view.container).not.toHaveTextContent("Item 11");
});

test("selection follows the record through page changes, reordering and data replacement", () => {
  const table = (data: typeof rows) => <Table data={data} selection paginator
    pagination={{ pageSize: 10 }} schema={[{ prop: "name" }]} />;
  const view = render(table(rows));
  const selectRow = (name: string) => within(screen.getByText(name).closest("tr")!).getByRole("checkbox");
  fireEvent.click(selectRow("Item 1"));
  fireEvent.click(screen.getByRole("button", { name: "Next page" }));
  expect(selectRow("Item 11")).not.toBeChecked();
  fireEvent.click(screen.getByRole("button", { name: "Previous page" }));
  expect(selectRow("Item 1")).toBeChecked();
  view.rerender(table(rows.map(row => ({ ...row })).reverse()));
  expect(selectRow("Item 30")).not.toBeChecked();
  fireEvent.click(screen.getByRole("button", { name: "3" }));
  expect(selectRow("Item 1")).toBeChecked();
});

test("rows without a schema use the header order even when object key order varies", () => {
  const view = render(<Table data={[{ a: "a1", b: "b1" }, { b: "b2", a: "a2" }]} />);
  expect(view.container.querySelectorAll("tbody tr")[1]).toHaveTextContent("a2b2");
});
