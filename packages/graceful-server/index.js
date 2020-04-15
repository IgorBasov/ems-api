const Promise = require('bluebird');
const { Server } = require('http');

class GracefulServer extends Server {
  constructor(
    opts,
    requestListener,
    beforeShutdown = () => {},
    beforeStart = () => {}
  ) {
    super(opts, requestListener);

    this.beforeShutdown = beforeShutdown;
    this.beforeStart = beforeStart;

    process.on('SIGINT', () => {
      this.close(error => {
        if (error) {
          return this.emit('serverClosingError', error);
        }

        return Promise.try(this.beforeShutdown)
          .then(() => process.exit(0))
          .catch(() => process.exit(1));
      });
    });
  }

  listen(port, host, backlog, callback) {
    Promise.try(this.beforeStart)
      .then(() => {
        super.listen(port, host, backlog, () => {
          if (process.send) process.send('ready');
          if (typeof callback === 'function') callback();
        });
      })
      .catch(() => process.exit(1));

    return this;
  }
}

module.exports = GracefulServer;
