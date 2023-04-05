import { expect, test } from "vitest";
import { patternMatching } from "../patternMatching";

test("return all correct matching patterns", () => {
  const cases = [
    { value: "first", expectedValue: "first" },
    { value: "second", expectedValue: "second" },
    { value: "third", expectedValue: "third" },
  ];
  cases.map(({ value, expectedValue }) => {
    const resultValue = patternMatching<string, string>([
      ["first", "first"],
      ["second", "second"],
      ["third", "third"],
    ])(value);
    expect(resultValue).toEqual(expectedValue);
  });
});

test("doesn't return any correct matching patterns", () => {
  const cases = ["first", "second", "third"];
  cases.map((value) => {
    const resultValue = patternMatching<string, string>([
      ["fourth", "first"],
      ["fifth", "second"],
      ["sixth", "third"],
    ])(value);
    expect(resultValue).toEqual(undefined);
  });
});
