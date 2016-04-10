'use strict';

import root from './root.route.js';
import api from './api';

import errors from './errors.route.js';
export default function(app) {
  // Add routes for app
  app.get('/', root);

  // API routes
  app.use('/api', api());

  // Add a not found route
  app.use(errors.notFound);

  // Lastly add a error route
  app.use(errors.error);
}
