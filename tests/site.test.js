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

describe('End-to-end tests for site endpoints', () => {
  it('should return valid sites JSON', async() => {
    const res = await request(app)
      .get('/sites')
      .set('x-api-key', process.env.API_KEY);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('meta');
    expect(res.body).toHaveProperty('data');

    // Ideally we would have a separate test DB seeded with specific values
    // rather than using the dev DB
    let site = res.body.data[0];
    let requiredKeys = ['_id', 'title', 'url'];

    for (let key in requiredKeys) {
      expect(site).toHaveProperty(requiredKeys[key]);
    }
  });
});
