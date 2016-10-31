export default async (ctx,next)=>{
  if(ctx.path.match(/^\/api/)){//若路径为服务器接口,则用koa-router做处理
    return await require('./api').routes()(ctx,next);
  }
  //否则由服务器渲染页面节点
  await require('./render')(ctx,next);
}