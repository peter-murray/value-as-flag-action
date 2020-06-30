const core = require('@actions/core')
    , util = require('./util')
    ;

function run() {
  const value = core.getInput('value')
    , defaultValue = core.getInput('default').toLowerCase()
    ;

  // Limit the choices to 'true' or 'false' for now
  if (defaultValue !== 'true' && defaultValue !== 'false') {
    core.setFailed(`The default value is not set to 'true' or 'false', but was '${defaultValue}'`);
  }

  const result = util.convertToBoolean(value, defaultValue);
  core.debug(`Processed secret value to: ${result}`);
  core.setOutput('value', result);
}

run();