import { expect, test } from "bun:test";
import { bubble_sort } from "@/bubble-sort";

test("bubble-sort does the thing", function () {
  const arr = [9, 3, 7, 4, 69, 420, 42];

  bubble_sort(arr);
  expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
});
