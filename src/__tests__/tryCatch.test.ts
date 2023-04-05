import { expect, test } from "vitest";
// import { tryCatch } from "../tryCatch";

test("Math.sqrt()", () => {
  // const x = tryCatch<void, string | Error>({
  //   tryer: () => "works",
  //   catcher: () => new Error("Testing"),
  // })();

  expect(Math.sqrt(4)).toBe(2);
  expect(Math.sqrt(144)).toBe(12);
  expect(Math.sqrt(2)).toBe(Math.SQRT2);
});
