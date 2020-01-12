'use strict';

class BaseController {
  successResponse(res, response) {
    res.send({
      meta: {
        code: 200,
        results: response.length,
      },
      data: response,
    });
  }

  errorResponse(res, error) {
    let code = (typeof error === 'string') ? 500 : error.getCode();
    res.status(code);

    res.send(
      {
        meta: {
          code: code,
        },
        data: {
          error: (typeof error === 'string') ? error : error.message,
        },
      },
    );
  }
}

module.exports = BaseController;
