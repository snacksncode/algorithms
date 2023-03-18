import { expect, test } from "vitest";
import { two_crystal_balls_problem } from "./two-crystal-balls-problem";

test("Two crystal balls problem", () => {
  const SIZE = 10_000;
  let idx = Math.floor(Math.random() * SIZE);
  const input_array = new Array(SIZE).fill(false);

  for (let i = idx; i < SIZE; i++) {
    input_array[i] = true;
  }

  expect(two_crystal_balls_problem(input_array)).toEqual(idx);
  expect(two_crystal_balls_problem(new Array(727).fill(false))).toEqual(-1);
});
