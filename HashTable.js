class HashTable {
  constructor() {
    this.table = new Map();
    this.size = 10;
    this.length = 0;
    this.createSlots();
  }

  createSlots() {
    for(let i = 0; i < this.size; i++) {
      this.table.set(i, new Set());
    }
  }

  generateHash(key) {
    const hash = key % this.size
    return hash;
  }

  add(key, value) {
    const hash = this.generateHash(key);
    const row = this.table.get(hash);
    if(this.find(key) === undefined) {
      row.add({key, value});
    } else {
      this.find(key).value = value;
    }
  }

  delete(key) {
    if(this.find(key) === undefined) {
      return {ok: false, message: 'Record not found'};
    }
    const delObj = this.find(key);
    this.table.get(this.generateHash(key)).delete(this.find(key));
    return {ok: true, deleted: delObj};
  }

  find(key) {
    let row = this.table.get(this.generateHash(key));
    let item;
    for(const e of row) {
      if(e.key === key) {
        item = e;
      }
    }
    return item;
  }
}

const h = new  HashTable();

h.add(1234, 'ABC');
h.add(2234, 'DEF');
h.add(1255, 'JKG');
h.add(1075, 'HIJ');

console.log(h.table);
const delConfirm = h.delete(2234, 'DEF');
console.log(delConfirm);
h.add(1234, 'HJK');
console.log(h.table);