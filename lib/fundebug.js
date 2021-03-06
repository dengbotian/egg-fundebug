
'use strict';

const assert = require('assert');
const fundebug = require("./fundebug.min.js");
let count = 0;

module.exports = app => {
  app.addSingleton('fundebug', (config, app) => {
    assert(config.apikey, '[egg-fundebug][config] apikey is required');
    fundebug.config(config);

    app.beforeStart(() => {
      const index = count++;
      app.coreLogger.info(`[egg-fundebug] instance[${index}] status OK`);
    });
    return fundebug;
  });
};
