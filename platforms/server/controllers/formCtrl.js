export default async (ctx,next)=>{
    const name = ctx.request.body.name || '';
    ctx.body = {
      name: name ? `hello ${name}` : ''
    }
}