import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import Button from "../lib/evp-button";
import Calendar from "../lib/evp-calendar";

test("plain clicks avoid layout reads and ripple clicks only update the button styles", () => {
  const click = jest.fn(), onRender = jest.fn();
  const tree = (ripple: boolean) => (
    <React.Profiler id="button" onRender={onRender}><Button ripple={ripple} $click={click}>Go</Button></React.Profiler>
  );
  const view = render(tree(false));
  const button = screen.getByRole("button");
  const width = jest.fn(() => 60), height = jest.fn(() => 24);
  Object.defineProperties(button, { clientWidth: { get: width }, clientHeight: { get: height } });
  const commits = onRender.mock.calls.length;
  fireEvent.click(button);
  expect(click).toHaveBeenCalledTimes(1);
  expect(width).not.toHaveBeenCalled();
  expect(height).not.toHaveBeenCalled();
  expect(onRender).toHaveBeenCalledTimes(commits);
  view.rerender(tree(true));
  fireEvent.click(button);
  expect(click).toHaveBeenCalledTimes(2);
  expect(width).toHaveBeenCalledTimes(1);
  expect(height).toHaveBeenCalledTimes(1);
  expect(button.style.getPropertyValue("--ripple-w")).toBe("180px");
});

test("the calendar subscribes to ticks only while displaying a live clock", () => {
  jest.useFakeTimers();
  try {
    jest.setSystemTime(new Date(2024, 5, 1, 12, 0, 0));
    const start = jest.spyOn(global, "setInterval"), stop = jest.spyOn(global, "clearInterval");
    const view = render(<Calendar showTime={false} />);
    expect(start).not.toHaveBeenCalled();
    view.rerender(<Calendar time={0} timeFormat="YYYY" />);
    expect(view.container.querySelector(".evp-calendar-time")).toHaveTextContent("1970");
    expect(start).not.toHaveBeenCalled();
    view.rerender(<Calendar timeFormat="ss" />);
    expect(start).toHaveBeenCalledTimes(1);
    act(() => { jest.advanceTimersByTime(2000); });
    expect(view.container.querySelector(".evp-calendar-time")).toHaveTextContent("02");
    view.rerender(<Calendar showTime={false} />);
    expect(stop).toHaveBeenCalledWith(start.mock.results[0].value);
    view.rerender(<Calendar />);
    view.unmount();
    expect(stop).toHaveBeenCalledWith(start.mock.results[1].value);
  } finally {
    jest.restoreAllMocks();
    jest.useRealTimers();
  }
});
