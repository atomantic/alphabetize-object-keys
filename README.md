[![](https://travis-ci.org/atomantic/alphabetize-object-keys.svg?branch=master)](https://travis-ci.org/atomantic/alphabetize-object-keys)
[![](https://img.shields.io/npm/dm/alphabetize-object-keys.svg?style=flat)](https://www.npmjs.org/package/alphabetize-object-keys)
[![](https://img.shields.io/npm/v/alphabetize-object-keys.svg?style=flat)](https://www.npmjs.org/package/alphabetize-object-keys)
[![](https://img.shields.io/twitter/follow/antic.svg?label=Follow&style=social)](https://twitter.com/antic)


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

# Why sort object keys?
Even though objects are dynamically arranged in memory and accessible by key, when you JSON.stringify an object, you may want the output to be alphabetically organized. In my case, I built this library to validate automated gamut tests against an API where I bombarded an API with fuzzy variations from a JSON data file. My tests were then able to determine that the right output was achieved by generating the expected response and comparing the stringified API output vs the spec. Additionally, the output of these tests get committed to the repo in an output folder full of JSON files. This library eliminated ugly commits where nothing changed but the ordering of the object keys, while we maintained visibility into changes to spec adherance. 
