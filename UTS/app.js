const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { login, register } = require('./controllers/authController');

const app = express();
app.use(bodyParser.json());

// Serve frontend
app.use(express.static(path.join(__dirname, 'public')));

// API endpoints
app.post('/login', login);
app.post('/register', register);

const port = process.env.PORT || 3000;
if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}

module.exports = app;