Collection for HappyRhino
=============================

[![Build Status](https://travis-ci.org/HappyRhino/hr.collection.png?branch=master)](https://travis-ci.org/HappyRhino/hr.collection)


### Documentation

##### Creation

Create a new collection by extending the default `Collection`:

```js
var Collection = require("hr.collection");

var Posts = Collection.extend({
    model: Post
});
```
