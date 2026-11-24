import { MenuCtxInstance } from "../lib/evp-menu/hooks";

test("only notifies changed selections and removes the matching registration", () => {
  const menu = new MenuCtxInstance({ multiSelected: true });
  const first = jest.fn(), second = jest.fn(), unrelated = jest.fn();
  const removeFirst = menu._add_setSelectedMap!("first", first);
  menu._add_setSelectedMap!("second", second);
  menu._add_setSelectedMap!("other", unrelated);
  first.mockClear();
  second.mockClear();
  unrelated.mockClear();

  menu.setSelectedKeys(["first"], "select");
  menu.setSelectedKeys(["first", "second"], "select");
  expect(first.mock.calls).toEqual([[true]]);
  expect(second.mock.calls).toEqual([[true]]);

  const replacement = jest.fn();
  const removeReplacement = menu._add_setSelectedMap!("first", replacement);
  removeFirst();
  menu.setSelectedKeys([], "unselect");
  expect(replacement.mock.calls).toEqual([[true], [false]]);
  expect(unrelated).not.toHaveBeenCalled();
  removeReplacement();
  expect(menu._setSelectedMap?.has("first")).toBe(false);
});
