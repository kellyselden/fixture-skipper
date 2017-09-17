'use strict';

const fs = require('fs');

module.exports = function fixtureSkipper(fixturesPath) {
  let fixtures = fs.readdirSync(fixturesPath);
  return function forEachDir(callback) {
    fixtures.forEach(fixtureDir => {
      let it = global.it;
      if (fixtureDir.indexOf('_') === 0) {
        it = it.only;
      }
      callback(it, fixtureDir);
    });
  };
};
