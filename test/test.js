var chai = require('chai')
var expect = chai.expect
var alphabetize = require('../index.js')
describe('Alphabetize Object Keys', function() {
  it('should alphabetize simple object', function() {
    var obj = {b:1,a:2,d:3,c:4}
    var result = alphabetize(obj)
    var string = JSON.stringify(result)
    expect(string).to.equal('{"a":2,"b":1,"c":4,"d":3}')
  })

  it('should alphabetize deep object', function() {
    var obj = {b:1,a:2,d:{b:1,d:{g:1,f:2},c:3,a:4},c:4}
    var result = alphabetize(obj)
    var string = JSON.stringify(result)
    expect(string).to.equal('{"a":2,"b":1,"c":4,"d":{"a":4,"b":1,"c":3,"d":{"f":2,"g":1}}}')
  })
})

describe('Data Validation', function(){
  var unchanged = {
    array: [5,2,3],
    boolean: true,
    string: 'this is a test',
    number: 653,
    null: null,
    undefined: undefined,
    NaN: NaN,
    function: function(){}
  }
  Object.keys(unchanged).forEach(function(key){
    it('should not alter '+key+' parameters', function() {
      expect(alphabetize(unchanged[key])).to.deep.equal(unchanged[key])
    })
  })
})
