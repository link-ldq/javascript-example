class Queue{
  arr = []
  constructor() {
  }
  push(val) {
    if (this.full()) {
      console.log('queue满了');
      return -1;
    }
    this.arr.push(val)
    console.log(this.arr);
  }
  pop() { 
    if (this.empty()) {
      return -1;
    }
  }
  empty() {
    
  }
  front() {
    
  }
  size(){}
}

const queue = new Queue()
queue.push(1)