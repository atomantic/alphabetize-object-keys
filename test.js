var chai = require('chai');
var assert = chai.assert;
var it = chai.it;
var alphabetize = require('./index.js');

chai.describe('alphabetize', function() {
  it('should alphabetize simple object', function() {
    var obj = {b: 1, a: 2, d: 3, c: 4};
    var result = alphabetize(obj);
    var string = JSON.stringify(result);
    assert(string, '{"b":1,"a":2,"d":3,"c":4}');
  });
});
