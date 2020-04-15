const GracefulServer = require('graceful-server');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const dao = require('ems-api-dao');
const router = require('./server/router');

const config = require('./server/config').server;

const app = express();

app.use(
  bodyParser.json({
    limit: '1mb'
  })
);
app.use(
  bodyParser.urlencoded({
    limit: '1mb',
    extended: true
  })
);
app.use(cookieParser());

router.addTo(app);

function beforeShutdown() {
  return Promise.all([]);
}

function beforeStart() {
  return Promise.all([]);
}

const server = new GracefulServer({}, app, beforeShutdown, beforeStart);

app.get('/', (req, res) => {
  console.log('Server: GET /');
  res.json({
    success: 1,
    message: 'done'
  });
});

server.on('serverClosingError', error => {
  // TODO: shutdown all
  console.error('Server: closing error', error);
  process.exit(1);
});

server.on('error', error => {
  switch (error) {
    case 'EACCES': {
      console.error(`Server: port ${config.PORT} requires elevated privileges`);
      process.exit(1);
      break;
    }
    case 'EADDRINUSE': {
      console.error(`Server: port ${config.PORT} is already in use`);
      process.exit(1);
      break;
    }
    default: {
      throw error;
    }
  }
});
server.on('listening', () => {
  console.log('Server: listening', { host: config.HOST, port: config.PORT });
});

module.exports = server.listen(config.PORT, config.HOST);
