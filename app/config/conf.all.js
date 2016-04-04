'use strict';

import packageJson from '../../package.json';
import path from 'path';

export default {
  // Environment config
  NODE_ENV    : process.env.NODE_ENV || 'development',
  PORT				: Number(process.env.PORT || 9000),
  // Application
  ROOT				: path.join(__dirname, '../../'),

  /******************************
  Add common configuration here
  *******************************/
  projectName : packageJson.name
};
