'use strict';

import express from 'express';

import expressConfigure from './express/express';
import config from './config';
import routes from './routes';

function server() {
  /********************************
    Create and configure express app
  ********************************/
  var app = express();
  expressConfigure(app);

  /********************************
    Setup middlewares
  ********************************/
  routes(app);

  /********************************
    Start server
  ********************************/
  app.listen(config.PORT, () => {
    console.log([
      'Running Server',
      'Project: %s',
      'Mode: %s',
      'Port: %s'
    ].join('\n'), config.projectName, config.NODE_ENV, config.PORT);
  });

  return app;
}

/********************************
  Expose app
********************************/
export default server;
