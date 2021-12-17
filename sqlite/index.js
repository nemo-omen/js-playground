// const Database = require('better-sqlite3');
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('sqlite3.db');
// const db = new Database('test.db', {verbose: console.log});

db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS whatever(info TEXT)');
});

console.log(db);

