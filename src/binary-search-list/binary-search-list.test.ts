import { expect, test } from "vitest";
import { binary_search_list } from "./binary-search-list";

test("binary_search_list works correctly", () => {
  const array = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];

  expect(binary_search_list(array, 69)).toEqual(true);
  expect(binary_search_list(array, 1336)).toEqual(false);
  expect(binary_search_list(array, 69420)).toEqual(true);
  expect(binary_search_list(array, 69421)).toEqual(false);
  expect(binary_search_list(array, 1)).toEqual(true);
  expect(binary_search_list(array, 0)).toEqual(false);
});
