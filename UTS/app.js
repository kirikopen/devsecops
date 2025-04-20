const express = require('express');
const path = require('path');
const { login, register } = require('./controllers/authController');

const app = express();

// Ganti bodyParser jadi express.json()
app.use(express.json());

// Serve frontend static files
app.use(express.static(path.join(__dirname, 'public')));

// API endpoints
app.post('/login', login);
app.post('/register', register);

// Jangan jalankan server saat test
const port = process.env.PORT || 3000;
if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}

module.exports = app;