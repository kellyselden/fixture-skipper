# fixture-skipper

[![Greenkeeper badge](https://badges.greenkeeper.io/kellyselden/fixture-skipper.svg)](https://greenkeeper.io/)
[![npm version](https://badge.fury.io/js/fixture-skipper.svg)](https://badge.fury.io/js/fixture-skipper)
[![Build Status](https://travis-ci.org/kellyselden/fixture-skipper.svg?branch=master)](https://travis-ci.org/kellyselden/fixture-skipper)

skip fixture tests with "_" prefix

If you are dynamically running tests based on folders of fixture files, there is no easy way to `it.only` or run only one test while debugging. Now you can prefix one of your fixture folders with "_", and it will be the only test that runs.

```js
const path = require('path');
const fixtureSkipper = require('fixture-skipper');

const fixturesPath = 'test/fixtures';

// with folders "1", "2", "3", all tests run
// with folders "1", "2", "_3", only "_3" runs

const forEachDir = fixtureSkipper(fixturesPath);

describe('my tests', function() {
  forEachDir((it, fixturesDir) => {
    it(`testing fixtures: ${fixturesDir}`, function() {
      let fixtures = fixturify.readSync(path.join(fixturesPath, fixturesDir));

      // test using your fixtures
    });
  });
});
```
