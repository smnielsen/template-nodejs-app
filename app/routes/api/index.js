
import express from 'express';

/** Route : `/api/[ROUTE]`*/
export default () => {
  var router = express.Router();

  router.use('/', (req, res) => {
    res.json({
      status: 404,
      message: 'Not implemented',
      route: `/api${req.url}`
    });
  });

  return router;
};
