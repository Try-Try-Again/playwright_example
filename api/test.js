const { readFileSync } = require('fs');
const supertest = require('supertest');
const app = require('./server');
const request = supertest(app)

describe('GET /test', () => {
  it('Testing to see if Jest works', () => {
      expect(1).toBe(1)
  });

	it('Gets the test endpoint', async () => {
    // Sends GET Request to /test endpoint
    const response = await request.get('/test')
    expect(response.status).toBe(200)
    expect(response.body.message).toBe('pass!')
	})
});


describe('GET /', () => {
  it('response text is index.html file', async () => {
    const response = await request.get('/');
    const indexHTML = readFileSync('./client/public/index.html').toString();

    expect(response.text).toBe(indexHTML);
  });
});
