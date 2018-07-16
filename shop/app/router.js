'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/index', controller.test.index);
  router.get('/login', controller.login.init);
  router.get('/console/home', controller.auth.check);
};
