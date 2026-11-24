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
  fireEvent.click(screen.getByText("Option 0"));
  expect(onChange).toHaveBeenCalledWith(0, options[0]);
  expect(input).toHaveValue("Option 999");
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
