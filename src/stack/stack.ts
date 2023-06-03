type Node<T> = {
  value: T;
  next?: Node<T>;
};

export class Stack<T> {
  public length: number;
  private head: Node<T> | undefined;

  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  push(item: T): void {
    const node: Node<T> = {
      value: item,
      next: undefined,
    };

    this.length++;

    if (!this.head) {
      this.head = node;
      return;
    }

    const oldHead = this.head;
    node.next = oldHead;
    this.head = node;
  }

  pop(): T | undefined {
    if (!this.head) {
      return undefined;
    }

    this.length--;

    const oldHead = this.head;
    this.head = oldHead.next;

    return oldHead.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}
