'use strict';

const fs = require('fs');
const path = require('path');
const fixturify = require('fixturify');

module.exports = function fixtureSkipper(fixturesPath) {
  let fixtures = fs.readdirSync(fixturesPath);

  return function forEachDir(callback) {
    let testCount = 0;

    fixtures.forEach(fixtureDir => {
      let it = global.it;
      if (fixtureDir.indexOf('_') === 0) {
        it = it.only;
      }

      let dir = path.join(fixturesPath, fixtureDir);
      if (Object.keys(fixturify.readSync(dir)).length === 0) {
        // empty folders
        return;
      }

      callback(it, fixtureDir);

      testCount++;
    });

    if (!testCount) {
      throw new Error('no tests were run');
    }
  };
};
