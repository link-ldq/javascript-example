class mySet {
  constructor() {
    this._set = {};
  }
  add(el) {
    if (!this.has(el)) {
      this._set[el] = el;
    }
  }
  delete(el) {
    if (this.has(el)) {
      delete this._set[el];
      return true;
    }
    return false;
  }
  has(el) {
    // return this._set[el] ? true : false;
    // return this._set.hasOwnProperty(el);
    return Object.prototype.hasOwnProperty.call(this._set, el);
  }
  clear() {
    this._set = {};
  }
  size() {
    return Object.keys(this._set).length;
  }
  values() {
    let values = [];
    for (let key in this._set) {
      if (this._set.hasOwnProperty(key)) {
        4;
        values.push(this._set[key]);
      }
    }
    return values;
  }
}
const set = new mySet();
set.add(1);
console.log(set.values());
console.log(set.has(1));
console.log(set.size());
set.delete(1);
console.log(set.size());
