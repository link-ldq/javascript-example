class HashTable {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key);
      if (this.table[position] == null) {
        this.table[position] = new linedList();
      }
      this.table[position].push(new ValuePair(key, value));
      return true;
    }
   return false;
  }
  remove(key) {
    // const hash = this.hashCode(key);
    // const valuePair = this.table[hash];
    // if (valuePair != null) {
    //   delete this.table[hash];
    //   return true;
    // }
    // return false;
    const position = this.hashCode(key);
    const linedList = this.table[position];
    if (linedList != null && !linedList.isEmpty()) {
      let current = linedList.getHead();
      while (current != null) {
        if (current.element.key === key) {
          linkedList.remove(current.element);
          if (linkedList.isEmpty()) {
            delete this.table[position];
          }
          return true;
        }
        current = current.next;
      }
    }
    return false;
  }
  get(key) {
    // const valuePair = this.table[this.hashCode(key)];
    // return valuePair == null ? undefined : valuePair.value;
    const position = this.hashCode(key);
    const linedList = this.table[position];
    if (linedList != null && !linedList.isEmpty()) {
      let current = linedList.getHead();
      while (current != null) {
        if (current.element.key === key) {
          return current.element.value;
        }
        current = current.next;
      }
    }
    return undefined;
  }
  loseloseHashCode(key) {
    if (typeof key === 'number') {
      return key;
    }
    const tableKey = this.toStrFn(key);
    let hash = 0;
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i);
    }
    return hash % 37;
  }
  hashCode(key) {
    return this.loseloseHashCode(key);
  }
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    const keys = Object.keys(this.table);
    let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`;
    for (let i = 1; i < keys.length; i++) {
      objString = `${objString},{${keys[i]} =>
${this.table[keys[i]].toString()}}`;
    }
    return objString;
  }
}

class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
  toString() {
    return `[#${this.key}: ${this.value}]`;
  }
}
function defaultToString(item) {
  if (item === null) {
    return 'NULL';
  } else if (item === undefined) {
    return 'UNDEFINED';
  } else if (typeof item === 'string' || item instanceof 'String') {
    return `${item}`;
  }
  return item.toString();
}

// const hash = new HashTable();
// hash.put('Gandalf', 'gandalf@email.com');
// hash.put('John', 'johnsnow@email.com');
// hash.put('Tyrion', 'tyrion@email.com');
// console.log(hash.hashCode('Gandalf') + ' - Gandalf');
// console.log(hash.hashCode('John') + ' - John');
// console.log(hash.hashCode('Tyrion') + ' - Tyrion');
// console.log(hash.get('Gandalf')); // gandalf@email.com
// console.log(hash.get('Loiane')); // undefined
// hash.remove('Gandalf');
// console.log(hash.remove('Gandalf'));
// console.log(hash.get('Gandalf'));

const hash = new HashTable();
hash.put('Ygritte', 'ygritte@email.com');
hash.put('Jonathan', 'jonathan@email.com');
hash.put('Jamie', 'jamie@email.com');
hash.put('Jack', 'jack@email.com');
hash.put('Jasmine', 'jasmine@email.com');
hash.put('Jake', 'jake@email.com');
hash.put('Nathan', 'nathan@email.com');
hash.put('Athelstan', 'athelstan@email.com');
hash.put('Sue', 'sue@email.com');
hash.put('Aethelwulf', 'aethelwulf@email.com');
hash.put('Sargeras', 'sargeras@email.com');

console.log(hash.toString());

const map = new WeakMap(); 
const ob1 = { name: 'Gandalf' }; // {1} 
const ob2 = { name: 'John' }; 
const ob3 = { name: 'Tyrion' }; 
map.set(ob1, 'gandalf@email.com'); // {2} 
map.set(ob2, 'johnsnow@email.com'); 
map.set(ob3, 'tyrion@email.com'); 
console.log(map.has(ob1)); // true {3} 
console.log(map.get(ob3)); // tyrion@email.com {4} 
map.delete(ob2); // {5}