import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import Input from "../lib/evp-input";
import Slider from "../lib/evp-slider-v2";
import Form from "../lib/evp-form-v2";
import useForm from "../lib/evp-form-v2/hooks";

test("external values win and Enter validates the actual text without a dialog", () => {
  const { result } = renderHook(() => useForm());
  const onEnter = jest.fn(), onChange = jest.fn(), alert = jest.spyOn(window, "alert");
  const view = (value: string) => <Form formRef={result.current}><Input
    name="code" value={value} onEnter={onEnter} onChange={onChange}
    rule={{ required: { on: true, val: true }, trigger: "onEnter", smartTrigger: false,
      reg: { on: true, val: /^\d+$/g, msg: "Digits only" } }}
  /></Form>;
  const rendered = render(view("123"));
  const input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: "ignored" } });
  expect(onChange).toHaveBeenCalledTimes(1);
  expect(input).toHaveValue("123");
  rendered.rerender(view("abc"));
  expect(result.current.current.get("code")).toBe("abc");
  fireEvent.keyDown(input, { key: "Enter" });
  expect(screen.getByText("Digits only")).toBeInTheDocument();
  rendered.rerender(view("42"));
  fireEvent.keyDown(input, { key: "Enter" });
  expect(screen.queryByText("Digits only")).toBeNull();
  expect(onEnter).toHaveBeenCalledTimes(2);
  expect(alert).not.toHaveBeenCalled();
  alert.mockRestore();
});

test("controlled slider and uncontrolled slider keep the same displayed and submitted values", () => {
  const { result } = renderHook(() => useForm());
  const onChange = jest.fn(), setValue = jest.fn();
  const slider = (value?: number) => <Form formRef={result.current}><Slider
    name="amount" value={value} defaultValue={10} precision={2} setValue={setValue} onChange={onChange}
  /></Form>;
  const view = render(slider(20));
  const check = (amount: number) => {
    expect(screen.getByRole("slider")).toHaveValue(String(amount));
    expect(view.container.querySelector<HTMLElement>(".evp-slider")!.style.getPropertyValue("--rate")).toBe(amount + "%");
    expect(view.container.querySelector(".evp-tooltip-content")).toHaveTextContent(amount.toFixed(2));
    expect(result.current.current.get("amount")).toBe(amount);
  };
  check(20);
  view.rerender(slider(40));
  check(40);
  fireEvent.input(screen.getByRole("slider"), { target: { value: "70" } });
  expect(setValue).toHaveBeenCalledWith(70);
  check(40);
  view.unmount();
  render(slider());
  fireEvent.input(screen.getByRole("slider"), { target: { value: "30" } });
  expect(onChange).toHaveBeenCalledWith(30);
  expect(result.current.current.get("amount")).toBe(30);
});
