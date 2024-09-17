const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./crypto.db');

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS crypto_data (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            last TEXT,
            buy TEXT,
            sell TEXT,
            volume TEXT,
            base_unit TEXT
        )
    `);
});

module.exports = db;
