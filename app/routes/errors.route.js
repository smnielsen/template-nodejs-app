/**
 * @apiDefine LoginError
 *
 * @apiError LoginError Could not login .
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 502 Bad Request
 *     {
 *       "error": "Bad Request",
 *       "message": "Could not login user [username]"
 *     }
 */

function notFound(req, res, next) {
  console.error(`error.route.notfound: ${req.url}`);
  res.status(404).json(req);
}

function error(err, req, res, next) {
  console.error(`error.route.error: ${req.url}`, err);
  res.status(err.status || err.statusCode || 500).json(err);
}

export default {
  notFound,
  error
};
