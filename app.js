'use strict';
const fundebug = require('./lib/fundebug');

module.exports = app => {
  if (app.config.fundebug.app) fundebug(app);
};
