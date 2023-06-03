type Node<T> = {
  value: T;
  next?: Node<T>;
};

export class Queue<T = unknown> {
  public length: number;
  private head: Node<T> | undefined;
  private tail: Node<T> | undefined;

  constructor() {
    this.head = undefined;
    this.tail = undefined;
    this.length = 0;
  }

  enqueue(item: T): void {
    const node: Node<T> = {
      value: item,
      next: undefined,
    };

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
      this.length++;
      return;
    }

    if (this.tail == null) {
      throw new Error("Tried appending to tail, but it is undefined");
    }

    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  deque(): T | undefined {
    if (this.head == null) {
      return undefined;
    }

    const oldHead = this.head;
    const nextHead = this.head.next;

    this.head = nextHead;
    this.length--;

    if (this.length === 0) {
      this.tail = undefined;
    }

    return oldHead.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}
