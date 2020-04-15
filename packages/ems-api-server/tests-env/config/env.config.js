const config = require('../../test-ecosystem.config').apps[0].env;

const HOST = process.env.EMS_API_SERVER_HOST || config.EMS_API_SERVER_HOST;
const PORT = process.env.EMS_API_SERVER_PORT || config.EMS_API_SERVER_PORT;
const TOKEN =
  process.env.EMS_API_HEALTH_CHECK_TOKEN || config.EMS_API_HEALTH_CHECK_TOKEN;
const URL = `http://${HOST}:${PORT}`;

module.exports = { HOST, PORT, TOKEN, URL };
