/** @jest-environment node */
test("client-only helpers can be imported before a document is available", () => {
  expect(typeof document).toBe("undefined");
  expect(() => {
    require("../lib/evp-toast");
    require("../lib/evp-alert");
    require("../lib/evp-msg");
    require("../lib/evp-slider");
    require("../lib/utils/img.utils");
  }).not.toThrow();
});

export {};
