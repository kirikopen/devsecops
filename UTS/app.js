const express = require('express');
const bodyParser = require('body-parser');
const { login } = require('./controllers/authController');

const app = express();
app.use(bodyParser.json());

app.post('/login', login);

const port = process.env.PORT || 3000;
if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}

module.exports = app;
