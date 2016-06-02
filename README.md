[![](https://travis-ci.org/atomantic/alphabetize-object-keys.svg?branch=master)](https://travis-ci.org/atomantic/alphabetize-object-keys)
[![](https://img.shields.io/npm/dm/alphabetize-object-keys.svg?style=flat)](https://www.npmjs.org/package/alphabetize-object-keys)
[![](https://img.shields.io/npm/v/alphabetize-object-keys.svg?style=flat)](https://www.npmjs.org/package/alphabetize-object-keys)
[![](https://img.shields.io/david/atomantic/alphabetize-object-keys.svg?style=flat)](https://www.npmjs.org/package/alphabetize-object-keys)

# Alphabetize Object Keys

Deeply sort an object keys alphabetically. This will also iterate over array values to find deep objects and sort those without altering the value array indexes.

# Usage

```
var alphabetize = require('alphabetize-object-keys');

var obj = {
  some: 1,
  unsorted: 2,
  object: 3,
  with: {
    deep: 1,
    and: [{
      complex: 1,
      values: 2,
      and: 3,
      keys: 4
    },{
      even: 1,
      more: 2,
      keys: 3
    }]
  }
};

var sorted = alphabetize(obj);
```
sorted is now:
```
{
  "object": 3,
  "some": 1,
  "unsorted": 2,
  "with": {
    "and": [
      {
        "and": 3,
        "complex": 1,
        "keys": 4,
        "values": 2
      },
      {
        "even": 1,
        "keys": 3,
        "more": 2
      }
    ],
    "deep": 1
  }
}
```
