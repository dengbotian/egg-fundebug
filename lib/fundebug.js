
'use strict';

const assert = require('assert');
const fundebug = require("fundebug-nodejs");
let count = 0;

module.exports = app => {
  app.addSingleton('fundebug', async (config, app) => {
    assert(config.apikey, '[egg-fundebug][config] apikey is required');
    fundebug.apikey = config.apikey;
    fundebug.config(config);

    app.beforeStart(() => {
      const index = count++;
      app.coreLogger.info(`[egg-fundebug] instance[${index}] status OK`);
    });
    return fundebug;
  });
};
