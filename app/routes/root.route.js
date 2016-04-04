'use strict';
/**
 * @api {get} /api/login Request User information
 * @apiName Login
 * @apiGroup Api
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiUse LoginError
 */
export default function(req, res, next) {
  res.send('Hello world');
}
