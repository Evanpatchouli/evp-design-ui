import { fireEvent, render, screen } from "@testing-library/react";
import Paginator from "../lib/evp-paginator";
import { pageBounds, visiblePages } from "../lib/evp-paginator/pagination";
import Rate from "../lib/evp-rate";
import { range } from "../lib/utils/num.util";

test("bounded windows are independent of dataset size", () => {
  expect(visiblePages(999998, 1000000, 5)).toEqual([999996, 999997, 999998, 999999, 1000000]);
  expect(pageBounds(25, 0, Infinity)).toEqual({ pageSize: 10, pageCount: 3, page: 1 });
  expect(pageBounds(25, 5.9, 200)).toEqual({ pageSize: 5, pageCount: 5, page: 5 });
  expect(pageBounds(NaN, Infinity, -2).pageCount).toBe(1);
});

test("arrows and jumper update one valid page and notify both listeners", () => {
  const change = jest.fn(), page = jest.fn();
  render(<Paginator total={25} pageSize={10} showQuickJumper onChange={change} onPageChange={page} />);
  expect(screen.getByRole("button", { name: "Previous page" })).toBeDisabled();
  fireEvent.click(screen.getByRole("button", { name: "Next page" }));
  const input = screen.getByRole("textbox");
  for (const value of ["abc", "1.2", "Infinity", "500"]) {
    fireEvent.change(input, { target: { value } });
    fireEvent.keyDown(input, { key: "Enter" });
  }
  expect(screen.getByRole("button", { name: "Next page" })).toBeDisabled();
  expect(change.mock.calls).toEqual([[2, 10], [3, 10]]);
  expect(page.mock.calls).toEqual(change.mock.calls);
});

test("rating rejects invalid counts before generating stars", () => {
  const error = jest.spyOn(console, "error").mockImplementation(() => {});
  try {
    for (const count of [0, -1, Infinity, NaN, 2.5]) {
      expect(() => render(<Rate count={count} />)).toThrow(/positive integer/);
    }
  } finally {
    error.mockRestore();
  }
  expect(range(1, 2.5)).toEqual([1, 2]);
  expect(() => range(1, Infinity)).toThrow(RangeError);
});
