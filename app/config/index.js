'use strict';
/**************************
  USAGE:
  import config from './config';

  console.log(`Running server in ${config.NODE_ENV} mode`);
  console.log(`Running server on port ${config.PORT}`);
***************************/
import ALL_CONFIG from './conf.all';

var ENV_CONFIG = {};

switch (ALL_CONFIG.NODE_ENV) {
  case 'production':
    ENV_CONFIG = require('./conf.production');
    break;
  default:
    ENV_CONFIG = require('./conf.development');
    break;
}

/***********************
  All config should be overridden
  by environment config, urls etc.
***********************/
export default Object.assign({}, ALL_CONFIG, ENV_CONFIG);
