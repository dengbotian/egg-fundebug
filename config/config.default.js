'use strict';

/**
 * egg-fundebug default config
 * @member Config#fundebug
 * @property {String} SOME_KEY - some description
 */
exports.fundebug = {
  apikey: '',
  appVersion: '',
  releaseStage: process.env.EGG_SERVER_ENV,
  // 将silent属性设为true。这样的话，FunDebug不会收集错误信息，因此也不会发送报警邮件。
  silent: false,
  // user对象含有name和email两个属性
  user: {
    name: '',
    email: '',
  },
  metaData: {},
};
