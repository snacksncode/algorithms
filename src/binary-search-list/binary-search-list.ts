// Runtime complexity of binary search is O(logN), and it requires the input array to be sorted
// In term of pointers, left pointer is inclusive and right one is exclusive, so for array [1,3,5] pointers would be [0,3)

export function binary_search_list(array: number[], target: number): boolean {
  let left_pointer = 0;
  let right_pointer = array.length;

  do {
    const middle_index = Math.floor(left_pointer + (right_pointer - left_pointer) / 2);
    const value = array[middle_index];

    if (target === value) {
      return true;
    }

    if (target < value) {
      right_pointer = middle_index;
      continue;
    }

    if (target > value) {
      left_pointer = middle_index + 1;
    }
  } while (left_pointer < right_pointer);
  return false;
}
