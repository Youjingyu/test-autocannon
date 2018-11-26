module.exports = {
  suc (data = null) {
    console.info('online: get config, pageId ' + data.id)
    return {
      code: 0,
      data,
      msg: ''
    }
  },
  invalid_para (errMsg) {
    const msg = 'invalid parameter'
    console.warn('online: ' + (errMsg || msg))
    return {
      code: 1,
      data: null,
      msg
    }
  },
  no_matched (errMsg, extra) {
    const msg = 'no matched configuration, pageId ' + extra.pageId
    console.warn('online: ' + (errMsg || msg))
    return {
      code: 2,
      data: null,
      msg
    }
  },
  db_error (errMsg) {
    const msg = 'db error'
    console.error('online: ' + (errMsg || msg))
    return {
      code: 3,
      data: null,
      msg
    }
  }
}
