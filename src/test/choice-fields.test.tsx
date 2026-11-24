import { StrictMode } from "react";
import { act, render, renderHook, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "../lib/evp-form-v2";
import useForm from "../lib/evp-form-v2/hooks";
import Checkbox from "../lib/evp-checkbox";
import CheckboxGroup from "../lib/evp-checkbox-group/inedx";
import Radio from "../lib/evp-radio";
import RadioGroup from "../lib/evp-radio-group/inedx";

test("checkboxes contribute only their own active value", () => {
  const { result } = renderHook(() => useForm());
  const group = (showSecond: boolean) => (
    <StrictMode><Form formRef={result.current}><CheckboxGroup name="colors">
      <Checkbox label="Red" value="red" defaultChecked />
      {showSecond && <Checkbox label="Blue" value="blue" />}
      <Checkbox label="Unavailable" value="gray" disabled />
    </CheckboxGroup></Form></StrictMode>
  );
  const view = render(group(false));
  view.rerender(group(true));
  expect(result.current.current.get("colors")).toEqual(["red"]);
  userEvent.tab();
  expect(screen.getByRole("checkbox", { name: "Red" })).toHaveFocus();
  act(() => { userEvent.keyboard("[Space]"); });
  expect(result.current.current.get("colors")).toEqual([]);
  act(() => { userEvent.click(screen.getByRole("checkbox", { name: "Blue" })); });
  expect(result.current.current.get("colors")).toEqual(["blue"]);
  view.rerender(group(false));
  expect(result.current.current.get("colors")).toEqual([]);
  expect(screen.getByRole("checkbox", { name: "Unavailable" })).toBeDisabled();
});

test("radio state follows native selection and controlled group changes", () => {
  const { result } = renderHook(() => useForm());
  const group = (value?: string) => (
    <Form formRef={result.current}><RadioGroup name="letter" default="A" value={value}>
      <Radio label="A" value="A" /><Radio label="B" value="B" />
      <Radio label="Unavailable" value="C" disabled />
    </RadioGroup></Form>
  );
  const view = render(group());
  expect(result.current.current.get("letter")).toBe("A");
  for (const name of ["B", "A"]) {
    const option = screen.getByRole("radio", { name });
    act(() => { userEvent.click(option); });
    expect(option).toBeChecked();
    expect(result.current.current.get("letter")).toBe(name);
  }
  expect(screen.getByRole("radio", { name: "Unavailable" })).toBeDisabled();
  view.unmount();
  const controlled = render(group("B"));
  controlled.rerender(group("A"));
  expect(screen.getByRole("radio", { name: "A" })).toBeChecked();
  expect(result.current.current.get("letter")).toBe("A");
});
