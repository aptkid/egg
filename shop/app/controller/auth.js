'use strict';
const Controller = require('egg').Controller;

class auth extends Controller {
  async check() {
    const ctx = this.ctx;
    const username = ctx.query.username;
    const password = ctx.query.password;
    if (username === 'admin' && password === 'password') {
      const data = { title: '管理控制台首页', msg: '欢迎你，' + username };
      await ctx.render('/console/home.tpl', data);
    } else {
      ctx.status = 403;
    }
  }
}

module.exports = auth;