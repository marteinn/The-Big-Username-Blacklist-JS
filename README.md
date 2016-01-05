[![Build Status](https://travis-ci.org/marteinn/The-Big-Username-Blacklist-JS.svg?branch=master)](https://travis-ci.org/marteinn/the-big-username-blacklist-js)
[![npm version](https://badge.fury.io/js/the-big-username-blacklist.svg)](https://badge.fury.io/js/the-big-username-blacklist)

# The-Big-Username-Blacklist-JS

This library lets you validate usernames against a blacklist. The blacklist data is based on the data from [The-Big-Username-Blacklist](https://github.com/marteinn/The-Big-Username-Blacklist) and contains privilege, programming terms, section names, financial terms and actions.


## How it works

the-big-username-blacklist exposes a function named validate, you can use that function to see if a word is occuring in the blacklist.


## Usage

Validating a username is easy, if the word is in the blacklist, return False (validation failed), otherwise True. Example:

```javascript
>>>> var blacklist = require("the-big-username-blacklist");
>>>> blacklist.validate("martin");
true
>>>> blacklist.validate("root");
false
```


### ES6
```javascript
>>>> import blacklist from "the-big-username-blacklist";
>>>> blacklist.validate("martin");
true
>>>> blacklist.validate("root");
false
```


## Installation

This package is available through npm

    $ npm install the-big-username-blacklist


## Tests

It's simple, just run:

    npm run test


## Contributing

Want to contribute? Awesome. Just send a pull request.

All code are in es6 format and can be find in the `src` directory, to compile back to es5 type:

    npm run build


## License

The-Big-Username-Blacklist is released under the [MIT License](http://www.opensource.org/licenses/MIT).
