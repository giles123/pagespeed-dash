class APIAuthMiddleware {
    validateKey(req, res, next) {
        if (req.headers['x-api-key'] !== process.env.API_KEY) {
            res.sendStatus(401);
        }

        next();
    }
}

module.exports = APIAuthMiddleware;