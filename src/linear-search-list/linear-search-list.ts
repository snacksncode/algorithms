// Runtime complexity of linear search is O(N)

export function linear_search_list(array: number[], value: number): boolean {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
