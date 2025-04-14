import { formatDuration } from "./duration";

describe("formating durations", () => {
  test("33 is 33s", () => {
    expect(formatDuration(33)).toBe("33s");
  });
  test("123 is 2m3s", () => {
    expect(formatDuration(123)).toBe("2m3s");
  });
  test("500 is 8m20s", () => {
    expect(formatDuration(500)).toBe("8m20s");
  });
  test("3600 is 1h", () => {
    expect(formatDuration(3600)).toBe("1h");
  });
  test("3999 is 1h6m39s", () => {
    expect(formatDuration(3999)).toBe("1h6m39s");
  });
});

describe("formating duration exceptions", () => {
  test("0 is 0s", () => {
    expect(formatDuration(0)).toBe("0s");
  });
  test("-14 throws exception", () => {
    expect(() =>{formatDuration(-14)}).toThrow("Error Domain");
  });
  test("33.546 is 34s", () => {
    expect(formatDuration(33.546)).toBe("34s");
  });
});
