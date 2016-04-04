'use strict';

import apiDocs from './apidocs.route.js';
import errors from './errors.route.js';

export default function(app) {
  // ApiDocs API documentation
  // Read more in README
  app.get('/', (req, res, next) => res.redirect('/api/docs'));
  app.get('/api/docs', apiDocs);

  // Add routes for app

  // Add a not found route
  app.use(errors.notFound);

  // Lastly add a error route
  app.use(errors.error);
}
