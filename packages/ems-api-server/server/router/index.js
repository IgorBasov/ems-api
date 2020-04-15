// const rootRoute = require('./routes/root.route');
// const signinRoute = require('./routes/signin.route');
// const appRoute = require('./routes/app.route');

// const accountsRoute = require('./routes/accounts.route');
const healthRoute = require('./health.route');
const apiV10Route = require('./api/v1.0');

module.exports = {
  addTo(app) {
    // app.use('/accounts', accountsRoute);

    // app.use('/', rootRoute);
    // app.use('/login', signinRoute);
    // app.use('/app', appRoute);

    app.use('/health', healthRoute);
    app.use('/api/v1.0', apiV10Route);
  }
};
