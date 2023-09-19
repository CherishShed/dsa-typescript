class node {
  data: any;
  next: node | null;
  constructor(data: any, next: null | node = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  head: node | null;
  size: number;
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.head ? false : true;
  }
  insertFirst(data: any) {
    this.head = new node(data, this.head);
    this.size++;
  }

  insertLast(data: any) {
    let newNode = new node(data);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current?.next) {
        current = current.next;
      }
      current!.next = newNode;
    }
    this.size++;
  }

  insertAt(index: number, data: any) {
    if (index > 0 && index > this.size) {
      return;
    }
    if (index === 0) {
      this.insertFirst(data);
      return;
    }
    const newNode = new node(data);
    let current, previous;
    current = this.head;
    let count = 0;
    while (count < index) {
      previous = current;
      count++;
      current = current!.next;
    }
    newNode.next = current;
    previous!.next = newNode;
    this.size++;
  }
  removeAt(index: number) {
    if (index === 0) {
      this.head = this.head!.next;
      console.log("done");
    } else {
      let current = this.head;
      let previous;
      let count = 0;
      while (count < index) {
        count++;
        previous = current;
        current = current!.next;
      }
      previous!.next = current!.next;
    }
    this.size--;
  }

  clearList() {
    this.head = null;
    this.size = 0;
  }
  getAt(index: number) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === index) {
        return current.data;
      }
      current = current.next;
      count++;
    }
    return null;
  }

  printData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
    console.log(`It has a size of ${this.size}`);
  }
}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertLast(300);
ll.insertAt(2, 500);
ll.printData();
ll.clearList();
ll.printData();
console.log(ll.getAt(1));
