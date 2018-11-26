const config = {
  dev: {
    hostname: '0.0.0.0',
    port: process.env.PORT || 8334
  },
  test: {
    hostname: '0.0.0.0',
    port: process.env.PORT || 8334
  },
  prod: {
    hostname: '0.0.0.0',
    port: process.env.PORT || 8334
  }
}

module.exports = config[process.env.NODE_ENV]
