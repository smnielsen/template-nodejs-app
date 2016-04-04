/**
  Root endpoint, registers babel and runs app
*/
'use strict';

require('babel-core/register');

var server = require('./server');
module.exports = server();
