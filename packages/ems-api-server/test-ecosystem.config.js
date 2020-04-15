module.exports = {
  apps: [
    {
      name: 'ems-api-test',
      script: './index.js',
      //cwd: './packages/ems-api-server',
      instances: '1',
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '2G',
      wait_ready: true, // wait ready-notification: process.send('ready')
      listen_timeout: 10000, // App ready after ....
      // Wait XXXX ms before sending SIGKILL signal if the applications doesn’t exit itself.
      kill_timeout: 10000,
      env: {
        EMS_API_NODE_ENV: 'development',
        EMS_API_SERVER_HOST: '0.0.0.0',
        EMS_API_SERVER_PORT: 3000,
        EMS_API_HEALTH_CHECK_TOKEN: 'RA0pkHpAmDQhYAcszonttawODRGVgjiN'
      },
      // env_production: {
      //   NODE_ENV: 'production',
      //   SERVER_HOST: '0.0.0.0',
      //   SERVER_PORT: 3000
      // },
      log: './ems-api-test.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss.SSS'
    }
  ]
};
