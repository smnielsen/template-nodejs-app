'use strict';
import morgan from 'morgan';
import config from '../config';

var logger;

if (config.NODE_ENV === 'development') {
  logger = morgan('dev');
} else {
  /* Log only errors in production */
  logger = morgan('combined', {
    skip: (req, res) => res.statusCode < 400
  });
}

export default logger;
