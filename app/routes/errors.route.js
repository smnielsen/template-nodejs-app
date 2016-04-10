
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
