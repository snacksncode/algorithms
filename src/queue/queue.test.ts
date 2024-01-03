import { Queue } from "@/queue";
import { expect, test } from "bun:test";

test("queue", function () {
  const queue = new Queue<number>();

  queue.enqueue(5);
  queue.enqueue(7);
  queue.enqueue(9);

  expect(queue.deque()).toEqual(5);
  expect(queue.length).toEqual(2);

  queue.enqueue(11);

  expect(queue.deque()).toEqual(7);
  expect(queue.deque()).toEqual(9);
  expect(queue.peek()).toEqual(11);
  expect(queue.deque()).toEqual(11);
  expect(queue.deque()).toBeUndefined();
  expect(queue.length).toEqual(0);

  queue.enqueue(69);
  expect(queue.peek()).toEqual(69);
  expect(queue.length).toEqual(1);
});
