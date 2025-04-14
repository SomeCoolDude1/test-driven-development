import { isValid } from "./isbn13";

describe("testing if numbers are valid", () => {
  test.each([
    ["978-3-7657-2781-8", true],
    ["978-3-7657-2781-7", false],
  ])("Number:(%s) Expected:(%b)", (ISBN, expected) => {
    expect(isValid(ISBN)).toBe(expected);
  });
});

describe("formating durations", () => {
  test("978-34-76555-32", () => {
    expect(()=>{isValid("978-34-76555-32")}).toThrow("Error Not an ISBN number");
  });
});