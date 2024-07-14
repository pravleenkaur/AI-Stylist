// ai-stylist-backend/server.js

const express = require('express');
const sqlite3 = require('sqlite3').verbose();
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

// Create SQLite Database Tables (if needed)
db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, password TEXT, preferences JSON)");
  db.run("CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, description TEXT, image_url TEXT, price REAL)");
});

// Register a new user
app.post('/api/register', (req, res) => {
  const { name, email, password } = req.body;
  // Check if email already exists
  db.get("SELECT * FROM users WHERE email = ?", [email], (err, row) => {
    if (err) {
      res.status(500).send(err.message);
    } else if (row) {
      res.status(400).send('Email already registered');
    } else {
      db.run(`INSERT INTO users (name, email, password) VALUES (?, ?, ?)`, [name, email, password], function(err) {
        if (err) {
          res.status(500).send(err.message);
        } else {
          res.status(200).send('User registered successfully');
        }
      });
    }
  });
});

// Login endpoint
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Query the database to find user with matching email
    const user = await db.get("SELECT * FROM users WHERE email = ?", [email]);

    if (!user) {
      return res.status(401).send('Invalid email or password');
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).send('Invalid email or password');
    }

    // Generate a JWT token for authentication
    const token = jwt.sign({ userId: user.id }, 'your_jwt_secret', { expiresIn: '1h' });

    // Optionally, you can send back user data or just the token
    res.status(200).json({ token });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Get all products
app.get('/api/products', (req, res) => {
  db.all("SELECT * FROM products", (err, rows) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.json(rows);
    }
  });
});

// Get a specific product by ID
app.get('/api/products/:id', (req, res) => {
  const productId = req.params.id;
  db.get("SELECT * FROM products WHERE id = ?", [productId], (err, row) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.json(row);
    }
  });
});

app.post('/api/recommendations', (req, res) => {
  try {
    const preferences = req.body.preferences;

    // Check if preferences is iterable
    if (!Array.isArray(preferences)) {
      return res.status(400).send('Preferences must be an array');
    }

    // Spawn a Python process to execute ai_model.py
    const pythonProcess = spawn('python3', ['../ai_model/ai_model.py']);

    // Send preferences as JSON to the Python script
    pythonProcess.stdin.write(JSON.stringify(preferences));
    pythonProcess.stdin.end();



    // Collect output from the Python script
    let dataBuffer = '';
    pythonProcess.stdout.on('data', (data) => {
      dataBuffer += data.toString(); // Collecting stdout data
    });

    // Handle Python script exit
    pythonProcess.on('exit', (code) => {
      try {
        const recommendedProducts = JSON.parse(dataBuffer); // Parse collected JSON
        res.json(recommendedProducts); // Send recommendations as JSON response
      } catch (error) {
        console.error('Error parsing JSON:', error.message);
        res.status(500).send('Error fetching recommendations');
      }
    });
  } catch (error) {
    console.error('Error in recommendations endpoint:', error.message);
    res.status(500).send('Server error');
  }
});

// Start Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
