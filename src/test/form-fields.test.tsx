import { StrictMode } from "react";
import { fireEvent, render, renderHook } from "@testing-library/react";
import Form from "../lib/evp-form-v2";
import useForm, { FormStore } from "../lib/evp-form-v2/hooks";
import Input from "../lib/evp-input";

test("field ownership and reads distinguish empty values from missing fields", () => {
  const store = new FormStore();
  const first = store.register({ name: "shared", value: false });
  const second = store.register({ name: "shared", value: true });
  store.register({ name: "count", value: 0 });
  expect(store.gets([])).toEqual({ shared: false, count: 0 });
  first();
  first();
  expect(store.gets(["shared"])).toEqual({ shared: false });
  second();
  expect(store.gets()).toEqual({ count: 0 });
  expect(() => store.set("shared", 1)).toThrow();
});

test("native and imperative submission share the current mounted fields", () => {
  const { result, rerender: rerenderHook } = renderHook(() => useForm());
  const ref = result.current;
  rerenderHook();
  expect(result.current).toBe(ref);
  const submit = jest.fn();
  const fields = (name: string) => (
    <StrictMode>
      <Form formRef={ref} $submit={submit}>
        <Input name={name} default="initial" />
        <Input name="blank" default="" />
        <Input />
      </Form>
    </StrictMode>
  );
  const view = render(fields("old"));
  expect(ref.current.gets()).toEqual({ old: "initial", blank: "" });
  view.rerender(fields("new"));
  fireEvent.change(view.getAllByRole("textbox")[0], { target: { value: "edited" } });
  fireEvent.submit(view.container.querySelector("form")!);
  ref.current.submit();
  expect(submit.mock.calls).toEqual([[{ new: "edited", blank: "" }], [{ new: "edited", blank: "" }]]);
  view.unmount();
  expect(ref.current.gets()).toEqual({});
});
