var fs = require('fs');
var ga = require('../gimlet-api');
var testUtil = require('./test-util');

describe('diff', function() {
  beforeEach(testUtil.createEmptyRepo);

  it('should throw if not in repo', function() {
    expect(function() { ga.diff(); })
      .toThrow("fatal: Not a gimlet repository (or any of the parent directories): .gimlet");
  });

  it('should throw if do not pass --name-only option', function() {
    ga.init();
    expect(function() { ga.diff(undefined, undefined, {}); }).toThrow("unsupported");
  });

  it('should throw unknown revision if ref1 not in objects', function() {
    ga.init();
    expect(function() { ga.diff("blah1", undefined, { "name-only": true }) })
      .toThrow("fatal: ambiguous argument blah1: unknown revision");
  });

  it('should throw unknown revision if ref2 not in objects', function() {
    ga.init();
    expect(function() { ga.diff("blah2", undefined, { "name-only": true }) })
      .toThrow("fatal: ambiguous argument blah2: unknown revision");
  });

});
