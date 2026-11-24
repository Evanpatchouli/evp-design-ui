import AllParser from "../lib/utils/props.parser";

test("explicit styles override defined atomic properties without mutating caller input", () => {
  const style = Object.freeze({ color: undefined, margin: 0, "--label": "text" });
  const props = Object.freeze({ style, color: "red", mg: 12, pd: 0, pdt_6: true, gap: 0, scale: 0 });
  const result = AllParser(props).style;
  expect(result).toMatchObject({ color: "red", margin: 0, padding: "0px", gap: "0px", scale: "0", "--label": "text" });
  expect(Object.keys(style)).toContain("color");
  expect(AllParser(props).style).toEqual(result);
});

test("spacing shortcuts add by edge, honor explicit spacing, and retain zero", () => {
  expect(AllParser({ mg_4: true, mgt_2: true, mgl_8: false, pdr_6: true }).style)
    .toMatchObject({ margin: "6px 4px 4px 4px", padding: "0px 6px 0px 0px" });
  expect(AllParser({ mg: 0, mgt_4: true, pd: [0, "1em", 2, 0], pd_8: true }).style)
    .toMatchObject({ margin: "0px", padding: "0px 1em 2px 0px" });
  expect(AllParser({}).style).not.toHaveProperty("margin");
  expect(AllParser({ cursor: "grab", pointer: true }).style.cursor).toBe("grab");
  expect(() => AllParser({ pointer: true, grab: true })).toThrow();
});
