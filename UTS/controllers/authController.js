let users = [];

exports.register = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Field tidak boleh kosong.' });
    }

    const existing = users.find(user => user.email.toLowerCase() === email.toLowerCase());
    if (existing) {
        return res.status(409).json({ message: 'Email sudah terdaftar.' });
    }

    users.push({ email: email.toLowerCase(), password });
    return res.status(201).json({ message: 'Registrasi berhasil!' });
};

exports.login = (req, res) => {
    const { email, password } = req.body;

    const user = users.find(u => u.email === email.toLowerCase() && u.password === password);
    if (user) {
        res.status(200).json({ message: 'Login berhasil' });
    } else {
        res.status(401).json({ message: 'Login gagal' });
    }
};