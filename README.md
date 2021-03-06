hr.collection [![Build Status](https://travis-ci.org/HappyRhino/hr.collection.png?branch=master)](https://travis-ci.org/HappyRhino/hr.collection)
=============================

> Data modelling utility

## Installation

```
$ npm install hr.collection
```

### Documentation

#### Creation

Create a new collection by extending the default `Collection`:

```js
var Collection = require("hr.collection");

var Posts = Collection.extend({
    model: Post
});
```

#### Collection instance

```js
var posts = new Posts();
```

#### Add and remove models

```js
var post = new Post();

// Append the post
posts.add(post);

// Remove the post
posts.remove(post);
```

#### Events

```js
// When a new model is added
posts.on("add", function(model) { });

// When a model is removed
posts.on("remove", function(model) { });

// When the collection is reset
posts.on("reset", function() { });
```

### Example with React

```js
var React = require('react');
var Collection = require("hr.collection");

var Users = Collection.extend({

});

var UserItem = React.createClass({
    render: function() {
        return <li>{this.props.user.get('username')}</li>;
    }
});

var UsersList= React.createClass({
    componentWillMount : function() {
        this.props.users.on("all", this.forceUpdate.bind(this));
    },
    componentWillUnmount : function() {
        this.props.users.off("all", this.forceUpdate.bind(this));
    },
    render: function() {
        var users = this.props.users.map(function(user) {
            return <UserItem user={user} />;
        });

        return <ul className="users">{users}</ul>;
    }
});
```
