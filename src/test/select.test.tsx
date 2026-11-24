import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import Form from "../lib/evp-form-v2";
import useForm from "../lib/evp-form-v2/hooks";
import Select from "../lib/evp-select";

const options = Array.from({ length: 1000 }, (_, value) => ({
  key: "option-" + value, label: "Option " + value, value, disabled: value === 1
}));

test("a closed select keeps a single native option and honors external updates", () => {
  const { result } = renderHook(() => useForm());
  const onChange = jest.fn();
  const field = (value: number) => <Form formRef={result.current}>
    <Select label="Field" name="field" value={value} onChange={onChange} options={options} />
  </Form>;
  const view = render(field(0));
  const input = screen.getByRole("combobox", { name: "Field" });
  expect(input).toHaveValue("Option 0");
  view.rerender(field(999));
  expect(input).toHaveValue("Option 999");
  expect(view.container.querySelectorAll("option")).toHaveLength(1);
  expect(view.container.querySelectorAll(".evp-select-option")).toHaveLength(0);
  expect(new FormData(view.container.querySelector("form")!).get("field")).toBe("999");
  expect(result.current.current.get("field")).toBe(999);
  fireEvent.click(input);
  fireEvent.keyDown(input, { key: "Home" });
  fireEvent.click(screen.getByRole("option", { name: "Option 0" }));
  expect(onChange).toHaveBeenCalledWith(0, options[0]);
  expect(input).toHaveValue("Option 999");
});

test("a long menu renders bounded windows, preserves active IDs and reaches distant values", () => {
  const items = Array.from({ length: 5000 }, (_, value) => ({
    key: value, label: "Row " + value, value, disabled: value === 4998
  }));
  const view = render(<form><Select name="field" label="Field" options={items} /></form>);
  const input = screen.getByRole("combobox");
  fireEvent.click(input);
  const menu = screen.getByRole("listbox");
  const activeOption = () => document.getElementById(input.getAttribute("aria-activedescendant")!);
  const maxOptions = () => expect(menu.querySelectorAll('[role="option"]').length).toBeLessThan(20);
  expect(activeOption()).toHaveTextContent("Row 0");
  maxOptions();
  fireEvent.keyDown(input, { key: "End" });
  expect(activeOption()).toHaveTextContent("Row 4999");
  expect(activeOption()).toHaveAttribute("aria-posinset", "5000");
  expect(menu.scrollTop).toBeGreaterThan(4900 * 32);
  maxOptions();
  fireEvent.keyDown(input, { key: "ArrowUp" });
  expect(activeOption()).toHaveTextContent("Row 4997");
  fireEvent.keyDown(input, { key: "Home" });
  expect(activeOption()).toHaveTextContent("Row 0");
  expect(menu.scrollTop).toBe(0);
  fireEvent.scroll(menu, { target: { scrollTop: 2500 * 32 } });
  expect(activeOption()).toHaveTextContent("Row 0");
  maxOptions();
  fireEvent.click(screen.getByRole("option", { name: "Row 2500" }));
  expect(input).toHaveValue("Row 2500");
  expect(new FormData(view.container.querySelector("form")!).get("field")).toBe("2500");
});

test("change callbacks see the accepted form value and rich labels name the listbox", () => {
  const { result } = renderHook(() => useForm());
  const submit = jest.fn();
  const readInChange = jest.fn();
  const label: React.ReactNode = ["Field ", <strong key="code">code</strong>];
  const field = (controlled: boolean) => (
    <Form formRef={result.current} $submit={submit}>
      <Select name="id" label={label} options={options.slice(0, 4)}
        value={controlled ? 0 : undefined} defaultValue={0}
        onChange={() => {
          readInChange(result.current.current.get("id"));
          result.current.current.submit();
        }} />
    </Form>
  );
  for (const controlled of [false, true]) {
    const view = render(field(controlled));
    const combo = screen.getByRole<HTMLInputElement>("combobox", { name: "Field code" });
    fireEvent.click(combo);
    const menu = screen.getByRole("listbox", { name: "Field code" });
    expect(document.getElementById(menu.getAttribute("aria-labelledby")!)).toBe(combo.labels?.[0]);
    fireEvent.click(screen.getByRole("option", { name: "Option 2" }));
    const expected = controlled ? 0 : 2;
    expect(readInChange).toHaveBeenLastCalledWith(expected);
    expect(submit).toHaveBeenLastCalledWith({ id: expected });
    expect(combo).toHaveValue("Option " + expected);
    view.unmount();
  }
});

test("keyboard and pointer selections skip disabled values and update submission", () => {
  const { result } = renderHook(() => useForm());
  const view = render(<Form formRef={result.current}>
    <Select name="field" label="Field" options={options.slice(0, 4)} />
  </Form>);
  const input = screen.getByRole("combobox");
  fireEvent.keyDown(input, { key: "ArrowDown" });
  fireEvent.keyDown(input, { key: "ArrowDown" });
  fireEvent.keyDown(input, { key: "Enter" });
  expect(input).toHaveValue("Option 2");
  expect(new FormData(view.container.querySelector("form")!).get("field")).toBe("2");
  fireEvent.click(input);
  fireEvent.click(screen.getByRole("option", { name: "Option 1" }));
  expect(result.current.current.get("field")).toBe(2);
  fireEvent.click(screen.getByRole("option", { name: "Option 3" }));
  expect(result.current.current.get("field")).toBe(3);
  expect(screen.queryByRole("listbox")).toBeNull();
  fireEvent.click(input);
  fireEvent.keyDown(input, { key: "Escape" });
  expect(input).toHaveAttribute("aria-expanded", "false");
});
