module.exports = {
  PORT: +process.env.EMS_API_SERVER_PORT || 3000,
  HOST: process.env.EMS_API_SERVER_HOST || '127.0.0.1',
  HEALTH_TOKEN: process.env.EMS_API_HEALTH_CHECK_TOKEN || 'test'
};
