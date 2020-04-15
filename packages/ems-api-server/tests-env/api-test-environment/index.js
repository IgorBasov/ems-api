// docs: https://jestjs.io/docs/en/configuration.html#testenvironment-string

const NodeEnvironment = require('jest-environment-node');
const config = require('../config');

class APITestEnvironment extends NodeEnvironment {
  constructor(config, { testPath, docblockPragmas }) {
    super(config /*, context*/);
    console.log('env: construct');
    this.testPath = testPath;
    this.docblockPragmas = docblockPragmas;
  }

  async setup() {
    console.log('env: setup');
    await super.setup();
    // await someSetupTasks(this.testPath);
    this.global.config = config; // create global object

    // Will trigger if docblock contains @my-custom-pragma my-pragma-value
    // if (this.docblockPragmas['my-custom-pragma'] === 'my-pragma-value') {
    //   // ...
    // }
  }

  async teardown() {
    console.log('env: teardown');
    this.global.config = null; // destroy global object;
    // await someTeardownTasks();
    await super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }

  // handleTestEvent(event, state) {
  //   if (event.name === 'test_start') {
  //     // ...
  //   }
  // }
}

module.exports = APITestEnvironment;
