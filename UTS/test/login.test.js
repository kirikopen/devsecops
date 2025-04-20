const request = require('supertest');

// Membuat mock untuk app (misalnya, mock express app)
const app = {
  post: jest.fn().mockImplementation((route, handler) => {
    if (route === '/register') {
      return {
        statusCode: 201,
        body: { message: 'Registrasi berhasil!' }
      };
    } else if (route === '/login') {
      return {
        statusCode: 200,
        body: { message: 'Login berhasil' }
      };
    }
    return { statusCode: 500, body: { message: 'Internal server error' } };
  })
};

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
      .send({ email: 'test@example.com', password: '12345' });

    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe('Login berhasil');
  });

  it('should not login with wrong password', async () => {
    const res = await request(app)
      .post('/login')
      .send({ email: 'test@example.com', password: 'wrong' });

    expect(res.statusCode).toEqual(401);
    expect(res.body.message).toBe('Login gagal');
  });
});