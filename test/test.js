var chai = require('chai');
var expect = chai.expect;
var alphabetize = require('../index.js');

describe('alphabetize', function() {
  it('should alphabetize simple object', function() {
    var obj = {b:1,a:2,d:3,c:4};
    var result = alphabetize(obj);
    var string = JSON.stringify(result);
    expect(string).to.equal('{"a":2,"b":1,"c":4,"d":3}');
  });

  it('should alphabetize deep object', function() {
    var obj = {b:1,a:2,d:{b:1,d:{g:1,f:2},c:3,a:4},c:4};
    var result = alphabetize(obj);
    var string = JSON.stringify(result);
    expect(string).to.equal('{"a":2,"b":1,"c":4,"d":{"a":4,"b":1,"c":3,"d":{"f":2,"g":1}}}');
  });
});
