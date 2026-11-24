import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Menu from "../lib/evp-menu";
import MenuItem from "../lib/evp-menu-item";

test("linked menu items retain native link activation and menu callbacks", () => {
  const selectLink = jest.fn();
  const selectAction = jest.fn();
  render(
    <Menu>
      <MenuItem title="Linked item" link="/example" hash onSelect={selectLink} />
      <MenuItem title="Local action" onSelect={selectAction} />
    </Menu>
  );
  const link = screen.getByRole("link", { name: "Linked item" });
  expect(link).toHaveAttribute("href", "#/example");
  expect(fireEvent.click(link, { ctrlKey: true })).toBe(true);
  expect(selectLink).not.toHaveBeenCalled();
  userEvent.tab();
  expect(link).toHaveFocus();
  userEvent.keyboard("{Enter}");
  expect(selectLink).toHaveBeenCalledWith("/example");
  fireEvent.mouseDown(screen.getByText("Local action"));
  expect(selectAction).toHaveBeenCalledTimes(1);
});
