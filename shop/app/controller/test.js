'use strict';

const Controller = require('egg').Controller;

class shop extends Controller {
  async index() {
    const data = { text: '商城首页' };
    await this.ctx.render('index.tpl', data);
  }
}

module.exports = shop;
