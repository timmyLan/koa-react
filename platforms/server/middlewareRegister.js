import path from 'path';
import views from 'koa-views';
import json from 'koa-json';
import logger from 'koa-logger';
import koaStatic from 'koa-static-plus';
import koaOnError from 'koa-onerror';
import convert from 'koa-convert';
import Bodyparser from 'koa-bodyparser';
import router from './routes';
import config from '../common/config';

const bodyparser = Bodyparser();
const templatePath = path.join(__dirname,'./templates');

export default (app)=>{
	//use middlewares
	app.use(convert(bodyparser));
  app.use(convert(json()));
  app.use(convert(logger()));

  //static
  app.use(convert(koaStatic(config.rootPath + config.publicPath)));

  //template
  app.use(views(templatePath, {extension : 'ejs'}));

  //router
  app.use(router);

  //500 error
  koaOnError(app, {template: templatePath + '/500.ejs'});

  //logger
  if(app.env === 'development'){
    app.use(async (ctx,next)=>{
      const start = new Date();
      await next();
      const ms = new Date() - start;
      console.log(`${ctx.method} ${ctx.url} ${ms}ms`);
    })
  }

  //404
  app.use(async (ctx,next)=>{
    ctx.status = 404;
    await ctx.render('404');
  })
}