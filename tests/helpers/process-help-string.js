'use strict';

const chalk = require('chalk');

// eslint-disable-next-line node/no-unpublished-require
const stripAnsi = require('strip-ansi');

module.exports = function (helpString) {
  // currently windows
  if (/* TODO: JSFIX could not patch the breaking change:
  Move some properties off the default export to individual named exports
  Suggested fix: Import the properties individually. The new import names are: chalk.Instance → Chalk     chalk.supportsColor → supportsColor     chalk.stderr → chalkStderr     chalk.stderr.supportsColor → supportsColorStderr.*/
  chalk.supportsColor) {
    return helpString;
  }
  return stripAnsi(helpString);
};
