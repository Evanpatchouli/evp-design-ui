import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import TableView from "../preview/evp-table";
import basicSource from "../preview/demos/table/example.tsx?source";
import renderSource from "../preview/demos/table/render.tsx?source";

jest.mock("@/lib/evp-toast", () => ({ success: jest.fn(), error: jest.fn() }));

test("copies each Table example's source whether its code is folded or expanded", async () => {
  const writeText = jest.fn().mockResolvedValue(undefined);
  const clipboard = Object.getOwnPropertyDescriptor(navigator, "clipboard");
  Object.defineProperty(navigator, "clipboard", { configurable: true, value: { writeText } });
  const scroll = jest.spyOn(window, "scrollTo").mockImplementation(() => {});
  try {
    const { container } = render(<TableView />);
    const copies = screen.getAllByRole("button", { name: "copy" });
    const toggles = screen.getAllByRole("button", { name: "code" });
    const tables = screen.getAllByRole("table");
    expect(within(tables[0]).queryByText("Actions")).not.toBeInTheDocument();
    expect(within(tables[1]).getByText("Actions")).toBeInTheDocument();
    fireEvent.click(copies[0]);
    expect(writeText).toHaveBeenLastCalledWith(basicSource);
    fireEvent.click(toggles[1]);
    fireEvent.click(copies[1]);
    expect(writeText).toHaveBeenLastCalledWith(renderSource);
    await waitFor(() => {
      const code = Array.from(container.querySelectorAll("code")).find(node =>
        node.textContent?.replace(/\r\n/g, "\n") === renderSource.replace(/\r\n/g, "\n")
      );
      expect(code?.querySelector("span")).toBeInTheDocument();
    });
    expect(renderSource).toContain('label: "Actions"');
    expect(basicSource).not.toContain('label: "Actions"');
  } finally {
    scroll.mockRestore();
    if (clipboard) Object.defineProperty(navigator, "clipboard", clipboard);
    else Reflect.deleteProperty(navigator, "clipboard");
  }
});
