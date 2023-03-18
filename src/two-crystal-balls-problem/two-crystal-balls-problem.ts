// Given two crystal balls that will break if dropped from high enough distance,
// determine the exact spot in which it will break in the most optimized way.
// Link: https://backbencher.dev/two-crystal-ball-problem-using-javascript
// Runtime complexity of this solution is O(sqrt(n))

export function two_crystal_balls_problem(breaks: boolean[]): number {
  const jump_amount = Math.floor(Math.sqrt(breaks.length));
  // Left one inclusive, right one exclusive
  let left_pointer = 0;
  let right_pointer = breaks.length;

  for (let i = jump_amount; i < breaks.length; i += jump_amount) {
    if (breaks[i] === true) {
      right_pointer = i + 1;
      break;
    }

    left_pointer = i;
  }

  for (let i = left_pointer; i < right_pointer; i++) {
    if (breaks[i] === true) {
      return i;
    }
  }

  return -1;
}
