import isValidWalk from "./ten-min-walk";

test("isValidWalk returns true if the directions given bring you back to the starting point AND take exactly 10 minutes", () => {
  expect(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"])).toBe(
    true
  );
});

test("isValidWalk returns false if the directions given do not take you back to your starting point", () => {
  expect(isValidWalk(["w"])).toBe(false);
  expect(isValidWalk(["w", "n"])).toBe(false);
});

test("isValidWalk returns false if the directions given take longer than 10 minutes", () => {
  expect(
    isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"])
  ).toBe(false);
});

test("isValidWalk returns false if the directions given take less than 10 minutes", () => {
  expect(isValidWalk(["w", "e", "w", "e"])).toBe(false);
});
