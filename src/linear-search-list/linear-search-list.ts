// Runtime complexity of linear search is O(n)

export function linear_search_list<T extends string | number>(array: T[], value: T): boolean {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
