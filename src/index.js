'use strict';

const fs = require('fs');

module.exports = function fixtureSkipper(fixturesPath) {
  return function forEachDir(callback) {
    fs.readdirSync(fixturesPath).forEach(fixtureDir => {
      let it = global.it;
      if (fixtureDir.indexOf('_') === 0) {
        it = it.only;
      }
      callback(it, fixtureDir);
    });
  };
};
