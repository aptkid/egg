'use strict';
const Controller = require('egg').Controller;

class login extends Controller {
  async init() {
    const data = { title: '登录' };
    await this.ctx.render('/console/login.tpl', data);
  }
}

module.exports = login;
