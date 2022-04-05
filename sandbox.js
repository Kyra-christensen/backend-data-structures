class Stack {
  constructor() {
    this.pile = [];
  }

  push(item) {
    return this.pile.push(item);
  }

  pop() {
    return this.pile.pop();
  }
  
  peek() {
    return this.pile[this.length - 1];
  }

  get length() {
    return this.pile.length;
  }

  isEmpty() {
    return this.length === 0;
  }
}

const stack = new Stack();
stack.push('penguin');
stack.push('octopus');
stack.push('sun fish');
console.log(stack.pop()); // 'sun fish'
console.log(stack.peek()); // 'octopus'
console.log(stack.pop()); // 'octopus'
stack.push('shark');
console.log(stack.pop()); // 'shark'
console.log(stack.peek()); // 'penguin'
console.log(stack.pop()); // 'penguin'
console.log(stack.pop()); // null


class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(item) {
    return this.queue.unshift(item);
  }

  dequeue() {
    return this.queue.pop();
  }

  hasNext() {
    return this.queue.length > 0;
  }
}

const queue = new Queue();
queue.enqueue('fox');
queue.enqueue('goose');
queue.enqueue('lizard');
console.log(queue.dequeue()); // 'fox'
console.log(queue.hasNext()); // true
console.log(queue.dequeue()); // 'goose'
queue.enqueue('llama');
console.log(queue.dequeue()); // 'lizard'
console.log(queue.hasNext()); // true
console.log(queue.dequeue()); // 'llama'
console.log(queue.hasNext()); // false
console.log(queue.dequeue()); // null
