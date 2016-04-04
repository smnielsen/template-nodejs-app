'use strict';

export default function(req, res, next) {
  console.log('rendering apidocs');

  res.render('apidocs/index.html');
}
