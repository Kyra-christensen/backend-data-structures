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
