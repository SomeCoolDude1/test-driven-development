import { play } from "./rock-paper-scissors";

describe("testing rock, paper, scissors", () => {
  test.each([
    ["rock", "paper", 2],
    ["rock", "scissors", 1],
    ["scissors", "scissors", 0],
  ])("Player 1(%s) Player 2(%s)\nResault %f", (a, b, expected) => {
    expect(play(a, b)).toBe(expected);
  });
});

describe("testing rock, paper, scissors with weird syntax", () => {
    test.each([
      ["Rock", "Paper", 2],
      ["    rock", "scissors     ", 1],
      ["Scissors", "scissors", 0],
    ])("Player 1(%s) Player 2(%s)\nResault %f", (a, b, expected) => {
      expect(play(a, b)).toBe(expected);
    });
  });

  describe("testing game with unknown plays", () => {
    test("potato throws Error Unknown Play", () => {
      expect(() => {play("potato","potato")}).toThrow("Error Unknown Play");
    });
  });
