import { expect, test } from "vitest";
import { linear_search_list } from "@/linear-search-list";

test("linear_search_list works correctly with numbers", () => {
  const array = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];

  expect(linear_search_list(array, 69)).toEqual(true);
  expect(linear_search_list(array, 1336)).toEqual(false);
  expect(linear_search_list(array, 69420)).toEqual(true);
  expect(linear_search_list(array, 69421)).toEqual(false);
  expect(linear_search_list(array, 1)).toEqual(true);
  expect(linear_search_list(array, 0)).toEqual(false);
});

test("linear_search_list works correctly with strings", () => {
  const array = ["a", "b", "c", "d", "e", "f"];

  expect(linear_search_list(array, "a")).toEqual(true);
  expect(linear_search_list(array, "A")).toEqual(false);
  expect(linear_search_list(array, "b")).toEqual(true);
  expect(linear_search_list(array, "B")).toEqual(false);
  expect(linear_search_list(array, "f")).toEqual(true);
  expect(linear_search_list(array, "F")).toEqual(false);
});
