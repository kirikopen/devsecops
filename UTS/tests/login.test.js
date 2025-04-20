const request = require('supertest');
const app = require('../app');

describe('Auth API', () => {
    it('should register a new user', async () => {
        const res = await request(app)
            .post('/register')
            .send({ email: 'test@example.com', password: '12345' });

        expect(res.statusCode).toEqual(201);
        expect(res.body.message).toBe('Registrasi berhasil!');
    });

    it('should login with correct credentials', async () => {
        const res = await request(app)
            .post('/login')
            .send({ username: 'test@example.com', password: '12345' });

        expect(res.statusCode).toEqual(200);
        expect(res.body.message).toBe('Login berhasil');
    });

    it('should not login with wrong password', async () => {
        const res = await request(app)
            .post('/login')
            .send({ username: 'test@example.com', password: 'wrong' });

        expect(res.statusCode).toEqual(401);
        expect(res.body.message).toBe('Login gagal');
    });
});