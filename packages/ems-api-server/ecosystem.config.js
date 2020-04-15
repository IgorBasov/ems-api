module.exports = {
  apps: [
    {
      name: 'ems-api',
      script: './index.js',
      cwd: './packages/ems-api-server',
      instances: 'max',
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '2G',
      wait_ready: true, // wait ready-notification: process.send('ready')
      listen_timeout: 10000, // App ready after ....
      // Wait XXXX ms before sending SIGKILL signal if the applications doesn’t exit itself.
      kill_timeout: 30000,
      env: {
        NODE_ENV: 'development',
        SERVER_HOST: '0.0.0.0',
        SERVER_PORT: 3000
      },
      env_production: {
        NODE_ENV: 'production',
        SERVER_HOST: '0.0.0.0',
        SERVER_PORT: 3000
      },
      log: './ems-api.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss.SSS'
    }
  ]

  // deploy : {
  //   production : {
  //     user : 'node',
  //     // host : '212.83.163.1',
  //     ref  : 'origin/master',
  //     repo : 'https://gitlab.com/basovbros.io/ems-proto.git',
  //     path : '/var/www/production',
  //     'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
  //   }
  // }
};
