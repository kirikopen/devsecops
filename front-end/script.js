let users = [];

function register() {
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    if (!email || !password) {
        showMessage('Please fill out all fields.');
        return;
    }

    const userExists = users.some(user => user.email === email);
    if (userExists) {
        showMessage('Email is already registered.');
        return;
    }

    users.push({ email, password });
    showMessage('Registration successful! You can now log in.');
}

function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (!email || !password) {
        showMessage('Please fill out all fields.');
        return;
    }

    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        showMessage('Login successful! Welcome.');
    } else {
        showMessage('Invalid email or password.');
    }
}

function showMessage(message) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
}

function switchToRegister() {
    document.getElementById('login-form').classList.remove('form-active');
    document.getElementById('login-form').classList.add('form-hidden');
    document.getElementById('register-form').classList.remove('form-hidden');
    document.getElementById('register-form').classList.add('form-active');
}

function switchToLogin() {
    document.getElementById('register-form').classList.remove('form-active');
    document.getElementById('register-form').classList.add('form-hidden');
    document.getElementById('login-form').classList.remove('form-hidden');
    document.getElementById('login-form').classList.add('form-active');
}
