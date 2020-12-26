module.exports = {
  session: {
    driver: 'memory',
    stores: {
      memory: {
        maxSize: 500,
      },
      file: {
        dirname: '.sessions',
      },
      redis: {
        port: 6379,
        host: '127.0.0.1',
  