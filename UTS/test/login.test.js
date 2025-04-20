const request = require('supertest');

// Menggunakan dummy/mock app (tidak melakukan pengujian nyata)
describe('Auth API', () => {
  test.skip('should register a new user', async () => {
    const res = await request(app)
      .post('/register')
      .send({ email: 'test@example.com', password: '12345' });

    expect(res.statusCode).toEqual(201);
    expect(res.body.message).toBe('Registrasi berhasil!');
  });

  test.skip('should login with correct credentials', async () => {
    const res = await request(app)
      .post('/login')
      .send({ email: 'test@example.com', password: '12345' });

    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe('Login berhasil');
  });

  test.skip('should not login with wrong password', async () => {
    const res = await request(app)
      .post('/login')
      .send({ email: 'test@example.com', password: 'wrong' });

    expect(res.statusCode).toEqual(401);
    expect(res.body.message).toBe('Login gagal');
  });
});