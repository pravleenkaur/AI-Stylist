const express = require('express');
const sqlite3 = require('sqlite3').verbose(); // SQLite3 module
const cors = require('cors');
const bodyParser = require('body-parser');
const { spawn } = require('child_process');

const app = express();
const port = 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// SQLite Database Connection
const db = new sqlite3.Database(':memory:'); // Or specify a file path for persistent storage

// Create SQLite Database Table (if needed)
db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT)");
});

// Routes
app.post('/api/register', async (req, res) => {
    try {
        const { name, email } = req.body;
        db.run(`INSERT INTO users (name, email) VALUES (?, ?)`, [name, email], function(err) {
            if (err) {
                res.status(500).send(err.message);
            } else {
                res.send(`User ${this.lastID} registered successfully`);
            }
        });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.post('/api/recommend', (req, res) => {
    try {
        const preferences = req.body.preferences;
        const pythonProcess = spawn('python3', ['../ai_model/ai_model.py', ...preferences.map(String)]);

        pythonProcess.stdout.on('data', (data) => {
            res.send(data.toString());
        });

        pythonProcess.stderr.on('data', (data) => {
            res.status(500).send(data.toString());
        });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Start Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
