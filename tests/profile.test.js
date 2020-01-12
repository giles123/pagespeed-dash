const request = require('supertest');
const SiteRepository = require('../src/Domain/Site/SiteRepository');

beforeEach(() => {
  appVars = require('../app');
  app = appVars.app;
  server = appVars.server;
});
afterEach(async() => {
  await server.close();
});

describe('End-to-end tests for profile endpoints', () => {
  it('should return valid profile JSON', async() => {
    const res = await request(app)
      .get('/profile')
      .set('x-api-key', process.env.API_KEY);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('meta');
    expect(res.body).toHaveProperty('data');

    // Ideally we would have a separate test DB seeded with specific values
    // rather than using the dev DB
    let profilingData = res.body.data[0];
    let requiredKeys = ['title', 'url', 'response_code', 'score', 'error'];

    for (let key in requiredKeys) {
      expect(profilingData).toHaveProperty(requiredKeys[key]);
    }
  });

  it('should return a 404 if the site ID does not exist', async() => {
    const res = await request(app)
      .get('/profile/thisisnotvalid')
      .set('x-api-key', process.env.API_KEY);

    expect(res.statusCode).toEqual(404);
  });

  it('should return 1 valid result for profile by ID', async() => {
    let sites = await (new SiteRepository()).getAll();

    const res = await request(app)
      .get('/profile/' + sites[0]._id)
      .set('x-api-key', process.env.API_KEY);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('meta');
    expect(res.body).toHaveProperty('data');
    expect(res.body.data.length).toEqual(1);

    let profilingData = res.body.data[0];
    let requiredKeys = ['title', 'url', 'response_code', 'score', 'error'];

    for (let key in requiredKeys) {
      expect(profilingData).toHaveProperty(requiredKeys[key]);
    }
  });
});
