import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Dom from "../lib/evp-dom";
import Img from "../lib/evp-img";

test("Dom creates loading and modal content on demand and preserves a visited modal", () => {
  const content = <input aria-label="draft" defaultValue="initial" />;
  const view = render(<Dom modalContent={content} />);
  expect(view.container.querySelectorAll("*")).toHaveLength(1);
  view.rerender(<Dom modal loading modalContent={content} />);
  expect(view.container.querySelector(".spin-dot")).toBeInTheDocument();
  const input = screen.getByLabelText("draft");
  fireEvent.change(input, { target: { value: "edited" } });
  view.rerender(<Dom modalContent={content} />);
  expect(view.container.querySelector(".spin-dot")).toBeNull();
  expect(input).not.toBeVisible();
  view.rerender(<Dom modal modalContent={content} />);
  expect(screen.getByLabelText("draft")).toBe(input);
  expect(input).toHaveValue("edited");
});

test("Img keeps a single lazy thumbnail until preview opens and preserves preview state", () => {
  const img = (preview: boolean) => <Img alt="preview" src="a.png" loading="lazy" preview={preview} />;
  const view = render(img(false));
  expect(view.container.querySelectorAll("*")).toHaveLength(2);
  expect(screen.getByAltText("preview")).toHaveAttribute("loading", "lazy");
  view.rerender(img(true));
  const preview = view.container.querySelector(".evp-img-preview")!;
  const zoomButtons = view.container.querySelectorAll(".evp-img-preview-footer button");
  fireEvent.click(zoomButtons[2]);
  expect(preview).toHaveStyle("height: 105%");
  view.rerender(img(false));
  expect(preview).not.toBeVisible();
  view.rerender(img(true));
  expect(view.container.querySelector(".evp-img-preview")).toBe(preview);
  expect(preview).toBeVisible();
  expect(preview).toHaveStyle("height: 105%");
});
