import { act, fireEvent, screen } from "@testing-library/react";
import type * as ToastModule from "../lib/evp-toast";
import type * as MsgModule from "../lib/evp-msg";

test("imports leave the document alone and notifications release their rendered content", () => {
  jest.useFakeTimers();
  try {
    const originalHosts = document.body.childElementCount;
    const { default: Toast } = require("../lib/evp-toast") as typeof ToastModule;
    const { default: Msg } = require("../lib/evp-msg") as typeof MsgModule;
    const { default: alert } = require("../lib/evp-alert") as typeof import("../lib/evp-alert");
    const { getEmptyImg } = require("../lib/utils/img.utils") as typeof import("../lib/utils/img.utils");
    expect(document.body.childElementCount).toBe(originalHosts);
    expect(getEmptyImg()).toBe(getEmptyImg());

    act(() => { Toast("first", 100); Toast("second", 500); jest.advanceTimersByTime(0); });
    expect(screen.getByText("first")).toBeInTheDocument();
    act(() => { jest.advanceTimersByTime(100); });
    expect(screen.getByText("first").closest(".evp-toast")).toHaveClass("evp-toast-leave");
    act(() => { jest.advanceTimersByTime(200); });
    expect(screen.queryByText("first")).toBeNull();
    expect(screen.getByText("second")).toBeInTheDocument();
    act(() => { jest.advanceTimersByTime(400); });
    expect(screen.queryByText("second")).toBeNull();
    expect(document.body.childElementCount).toBe(originalHosts);

    act(() => { Msg.info("timed", 200); Msg.warn("manual", 500); jest.advanceTimersByTime(0); });
    const store = require("../lib/evp-msg/store").default as typeof import("../lib/evp-msg/store").default;
    const spies = store.messages.map(({ root }) => jest.spyOn(root, "unmount"));
    fireEvent.click(screen.getByText("manual").closest(".evp-msg")!.lastElementChild!);
    act(() => { jest.advanceTimersByTime(500); });
    expect(store.messages).toHaveLength(0);
    spies.forEach((spy) => expect(spy).toHaveBeenCalledTimes(1));
    expect(document.body.childElementCount).toBe(originalHosts);

    act(() => { alert("notice"); });
    expect(screen.getByText("notice")).toBeVisible();
    fireEvent.click(screen.getByText("confirm"));
    expect(screen.queryByText("notice")).toBeNull();
  } finally {
    jest.useRealTimers();
  }
});
