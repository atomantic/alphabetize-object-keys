/**
 * sort the keys in an object alphabetically, recursively
 *
 * @function module:undermore.alphabetize
 * @param {object} obj The object to traverse
 * @return {mixed} the object with alphabetized keys
 * @example
 *  _.mixin({
 *    alphabetize: require('alphabetize-object-keys')
 *  })
 *  var obj = {
 *     c: {b:1,a:2},
 *     b: 1,
 *     a: 2
 *  }
 *  JSON.stringify(_.alphabetize(obj)) === '{"a":2,"b":1,"c":{"a":2,"b":1}}'
 */

var alphabetize = function(object) {
  // only act on objects! string, number, array return unchanged
  if (!object || Array.isArray(object) || typeof object === 'function' || typeof object !== 'object') {
    return object
  }
  var sortedObj = {},
    keys = Object.keys(object)

  keys.sort(function(a, b) {
    return a < b ? -1 : 1
  })

  keys.forEach(function(key) {
    var val = object[key]
    if (Array.isArray(val)) {
      sortedObj[key] = object[key].map(function(v) {
        return typeof v === 'object' ? alphabetize(v) : v
      })
    } else if (typeof val === 'object') {
      sortedObj[key] = alphabetize(val)
    } else {
      sortedObj[key] = val
    }
  })

  return sortedObj
}
module.exports = alphabetize
