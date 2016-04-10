'use strict';

import compression from 'compression';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import path from 'path';

import expressLogger from './express_logger';
import config from '../config';

function favicon(req, res, next) {
  if (req.url === '/favicon.ico') {
    res.status(200).end();
    return;
  }
  next();
}

export default function(app) {
  // favicon middleware
  app.use(favicon);
  // Logging from morgan logger
  app.use(expressLogger);

  // Request parsers
  app.use(compression());
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
}
