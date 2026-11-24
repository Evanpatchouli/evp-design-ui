import React from "react";
import { act, render, screen } from "@testing-library/react";
import { Reactive, ReactiveCtx, createReactiveContext, listen, ReactifyMemo, useReactive, useReactiveRef, useReativeContext } from "../lib/utils/reactive";

test("successive writes synchronously update stable stores, refs and subscribers", () => {
  const observed: number[] = [];
  const refListener = jest.fn();
  let owner!: Reactive<number>;
  let viewRef!: React.MutableRefObject<Reactive<number>>;
  function View() {
    owner = ReactifyMemo(0);
    viewRef = useReactiveRef(0);
    React.useEffect(() => listen(owner).then((n) => observed.push(n)), [owner]);
    React.useEffect(() => viewRef.current.subscribe(refListener), []);
    return <span>{owner.value}/{viewRef.current.value}</span>;
  }
  const view = render(<React.StrictMode><View /></React.StrictMode>);
  const before = owner;
  const firstRef = viewRef;
  act(() => { owner.value++; owner.value++; viewRef.current.value++; });
  expect(screen.getByText("2/1")).toBeInTheDocument();
  expect(observed).toEqual([1, 2]);
  expect(refListener).toHaveBeenCalledTimes(1);
  expect(owner).toBe(before);
  expect(viewRef).toBe(firstRef);
  view.unmount();
  owner.value = 3;
  viewRef.current.value = 2;
  expect(observed).toEqual([1, 2]);
  expect(refListener).toHaveBeenCalledTimes(1);
});

test("memoized context consumers observe snapshots and switch subscriptions with the provider", () => {
  const custom = createReactiveContext(10);
  const first = new Reactive(1);
  const second = new Reactive(2);
  const Child = React.memo(() => {
    const inherited = useReactive<number>();
    const customStore = useReativeContext(custom);
    return <span>{inherited.value}/{customStore.value}</span>;
  });
  const tree = (s: Reactive<number>) => (
    <ReactiveCtx.Provider value={s}><custom.Provider value={s}><Child /></custom.Provider></ReactiveCtx.Provider>
  );
  const view = render(tree(first));
  act(() => { first.value = 3; });
  expect(screen.getByText("3/3")).toBeInTheDocument();
  view.rerender(tree(second));
  act(() => { first.value = 4; second.value = 5; });
  expect(screen.getByText("5/5")).toBeInTheDocument();
});
