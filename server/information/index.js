const logger = () =>  {
  return async(ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
  }
}

module.exports = (app) => {
  app.use(logger())
}