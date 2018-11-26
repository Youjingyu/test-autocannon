const Router = require('koa-router')
const db = require('../persistence/redis')
const resTpl = require('./resTpl')

const router = new Router()

router.get('/getConfig', async (ctx, next) => {
  const pageId = ctx.query.pageId
  if (typeof pageId !== 'string' && typeof pageId !== 'number') {
    ctx.body = resTpl.invalid_para()
    return next()
  }
  await db.get(pageId).then((data) => {
    if (!data) {
      ctx.body = resTpl.no_matched('', { pageId })
      return
    }
    ctx.body = resTpl.suc(data)
  }).catch((err) => {
    ctx.body = resTpl.db_error(err.message)
  })
  return next()
})

module.exports = router
