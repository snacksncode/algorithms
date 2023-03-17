import { expect, test } from "vitest";
import { linear_search_list } from "./linear-search-list";

test("should return true if number is present in a given list of numbers", () => {
  expect(linear_search_list([1, 2, 3, 4, 5], 3)).toBe(true);
});

test("should return false if number is not present in a given list of numbers", () => {
  expect(linear_search_list([1, 2, 3, 4, 5], 10)).toBe(false);
});

test("should compare value against list item not its index", () => {
  expect(linear_search_list([1], 1)).toBe(true);
});
