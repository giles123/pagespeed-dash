'use strict';

const request = require('supertest');

beforeEach(() => {
  var appVars = require('../app');
  var app = appVars.app;
  var server = appVars.server;
});
afterEach(async() => {
  await server.close();
});

describe('General API end-to-end tests', () => {
  it('should return 401 if API key is invalid', async() => {
    const res = await request(app)
      .get('/');

    expect(res.statusCode).toEqual(401);
    expect(res.text).toMatch('Unauthorized');
  });

  it('should return 200 if API key is correct', async() => {
    const res = await request(app)
      .get('/sites')
      .set('x-api-key', process.env.API_KEY);

    expect(res.statusCode).toEqual(200);
  });
});
