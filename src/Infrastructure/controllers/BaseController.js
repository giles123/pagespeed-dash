class BaseController {
    successResponse(res, response) {
        res.send({
            meta: {
                code: 200,
                results: response.length
            },
            data: response
        });
    }

    errorResponse(res, error, code) {
        res.status(code);

        res.send(
            {
                meta: {
                    code: code,
                },
                data: {
                    error: error
                }
            }
        );
    }
}

module.exports = BaseController;