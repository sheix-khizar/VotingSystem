const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(bodyParser.json());
app.use(session({
    secret: 'voting_secret',
    resave: false,
    saveUninitialized: true,
}));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'voting_db'
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL Connected');
});

app.post('/register', (req, res) => {
    const { username, password } = req.body;
    db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], (err) => {
        if (err) return res.status(500).send('Error registering user');
        res.send('Registered');
    });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    db.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, results) => {
        if (err) return res.status(500).send('Server error');
        if (results.length > 0) {
            req.session.user = results[0];
            res.send('Logged in');
        } else {
            res.status(401).send('Invalid credentials');
        }
    });
});

app.post('/vote', (req, res) => {
    const user = req.session.user;
    if (!user) return res.status(401).send('Unauthorized');
    const { candidate } = req.body;
    db.query('SELECT * FROM votes WHERE user_id = ?', [user.id], (err, results) => {
        if (results.length > 0) return res.status(400).send('Already voted');
        db.query('INSERT INTO votes (user_id, candidate) VALUES (?, ?)', [user.id, candidate], err => {
            if (err) return res.status(500).send('Error voting');
            res.send('Vote casted');
        });
    });
});

app.listen(5000, () => console.log('Server running on port 5000'));