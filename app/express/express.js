'use strict';

import compression from 'compression';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import path from 'path';

import expressLogger from './express_logger';
import config from '../config';

export default function(app) {
  // Logging from morgan logger
  app.use(expressLogger);

  // Request parsers
  app.use(compression());
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
}
