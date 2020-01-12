'use strict';

class APIAuthMiddleware {
  validateKey(req, res, next) {
    // Ideally the API key below would be in a secret store
    // rather than an environment variable
    if (req.headers['x-api-key'] !== process.env.API_KEY) {
      res.sendStatus(401);
    }

    next();
  }
}

module.exports = APIAuthMiddleware;
