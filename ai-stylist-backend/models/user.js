// models/user.js

const db = require('../db'); // Ensure this points to your SQLite connection

class User {
    static create(name, email, callback) {
        db.run('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], function(err) {
            if (err) return callback(err);
            callback(null, { id: this.lastID, name, email });
        });
    }
}

module.exports = User;
