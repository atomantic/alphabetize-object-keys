  /**
   * sort the keys in an object alphabetically, recursively
   *
   * @function module:undermore.alphabetize
   * @param {object} obj The object to traverse
   * @return {mixed} the object with alphabetized keys
   * @example
   *  _.mixin({
   *    alphabetize: require('alphabetize-object-keys')
   *  });
   *  var obj = {
   *     c: {b:1,a:2},
   *     b: 1,
   *     a: 2
   *  };
   *  JSON.stringify(_.alphabetize(obj)) === '{"a":2,"b":1,"c":{"a":2,"b":1}}'
   */
var _ = require('lodash');
var alphabetize = function(object) {
   var sortedObj = {},
       keys = _.keys(object);

   keys = _.sortBy(keys, function(key){
       return key;
   });

   _.each(keys, function(key) {
       if(_.isArray(object[key])) {
           sortedObj[key] = object[key].map(function(val) {
               return _.isObject(val) ? alphabetize(val) : val;
           });
       } else if(_.isObject(object[key])){
           sortedObj[key] = alphabetize(object[key]);
       } else {
           sortedObj[key] = object[key];
       }
   });

   return sortedObj;
};
module.exports = alphabetize;
