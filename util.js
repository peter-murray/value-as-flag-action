'use strict';

module.exports.convertToBoolean = function(value, defaultValue) {
  if (value === undefined || value === null) {
    return defaultValue;
  }

  // We should only have a string value, already trimmed from the core.getInput() toolkit function, but just ensure
  // that things are as we require for the comparisons.
  const testValue = `${value}`.trim().toLowerCase();
  
  if (testValue.length === 0 || testValue === 'null' || testValue === 'undefined') {
    return defaultValue;
  }

  if (testValue === 't' || testValue === 'true' || testValue === 'y' || testValue === 'yes' || testValue === '1') {
    return true;
  } else if (testValue === 'f'|| testValue === 'false' || testValue === 'n' || testValue === 'no' || testValue === '0') {
    return false;
  } else {
    return defaultValue;
  }
};