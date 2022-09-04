class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }
  set(key, value) {
    if (key != null && value != null) {
      const tableKey = this.toStrFn(key);
      this.table[tableKey] = new ValuePair(key, value);
      return true;
    }
    return false;
  }
  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)];
      return true;
    }
    return false;
  }
  hasKey(key) {
    return this.table[this.toStrFn(key)] != null;
  }
  get(key) {
    const valuePair = this.table[this.toStrFn(key)];
    return valuePair == null ? undefined : valuePair.value;
  }
  clear() {
    this.table = {};
  }
  size() {
    console.log(this.keyValues());
    return this.keyValues().length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  keys() {
    const keys = [];
    const valuePairs = this.keyValues();
    for (let i = 0; i < valuePairs.length; i++) {
      keys.push(valuePairs[i].key);
    }
    return keys;
    // const map = valuePairs.map(obj => obj[key]);
    // return map;
  }
  values() {
    return this.keyValues().map(val => val.value);
  }
  keyValues() {
    const valuesPairs = [];
    for (const key in this.table) {
      if (this.hasKey(key)) {
        valuesPairs.push(this.table[key]);
      }
    }
    return valuesPairs;
  }
  forEach(callbackFn) {
    const valuePairs = this.keyValues();
    for (let i = 0; i < valuePairs.length; i++) {
      const result = callbackFn(valuePairs[i].key, valuePairs[i].value);
      if (result === false) {
        break;
      }
    }
  }
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    const valuePairs = this.keyValues();
    let objString = this.keyValues();
    for (let i = 1; i < valuePairs.length; i++) {
      objString = `${objString},${valuePairs[i].toString()}`;
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

const dictionary = new Dictionary();
dictionary.set('Gandalf', 'gandalf@email.com');
dictionary.set('John', 'johnsnow@email.com');
dictionary.set('Tyrion', 'tyrion@email.com');
console.log(dictionary.hasKey('Gandalf'));
console.log(dictionary.size());

console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.get('Tyrion'));
dictionary.remove('John');
console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.keyValues());
dictionary.forEach((k, v) => {
  console.log('forEach: ', `key: ${k}, value: ${v}`);
});
