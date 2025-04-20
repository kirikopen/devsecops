async function register() {
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    if (!email || !password) {
        showMessage('Please fill out all fields.', "red");
        return;
    }

    const response = await fetch('/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    const result = await response.json();
    showMessage(result.message, response.ok ? "green" : "red");
}

async function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (!email || !password) {
        showMessage('Please fill out all fields.', "red");
        return;
    }

    const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: email, password })
    });

    const result = await response.json();
    showMessage(result.message, response.ok ? "green" : "red");
}

function showMessage(message, color = "black") {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.style.color = color;
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