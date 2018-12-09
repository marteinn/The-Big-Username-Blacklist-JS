[![Build Status](https://travis-ci.org/marteinn/The-Big-Username-Blacklist-JS.svg?branch=master)](https://travis-ci.org/marteinn/the-big-username-blacklist-js)
[![npm version](https://badge.fury.io/js/the-big-username-blacklist.svg)](https://badge.fury.io/js/the-big-username-blacklist)

# The-Big-Username-Blacklist-JS

This library lets you validate usernames against a blacklist. The blacklist data is based on the data from [The-Big-Username-Blacklist](https://github.com/marteinn/The-Big-Username-Blacklist) and contains privilege, programming terms, section names, financial terms and actions.

You can try the blacklist using the tool [Username checker](http://marteinn.github.io/The-Big-Username-Blacklist-JS/).


## How it works

the-big-username-blacklist exposes a function named `validate`, you can use that function to see if a word is occuring in the blacklist.


## Usage

Validating a username is easy, if the word is in the blacklist, return False (validation failed), otherwise True. Example:

```javascript
>>>> var blacklist = require("the-big-username-blacklist");
>>>> blacklist.validate("martin");
true
>>>> blacklist.validate("root");
false
```


The same would be written like this in ES6.

```javascript
>>>> import {blacklist} from "the-big-username-blacklist";
>>>> blacklist.validate("martin");
true
>>>> blacklist.validate("root");
false
```

#### Access the blacklist

If you only want to retrive the blacklist data, you can find it in the `list` property.

```javascript
>>>> var blacklist = require("the-big-username-blacklist");
>>>> console.log(blacklist.list);
[ '400',
  '401',
  '403'...
```

The same would be written like this in ES6.

```javascript
>>>> import {list} from "the-big-username-blacklist";
>>>> console.log(list);
[ '400',
  '401',
  '403'...
```


## Installation

This package is available through npm

    $ npm install the-big-username-blacklist


We also include a minified version that you can put on your cdn:

- [Development Version](https://raw.githubusercontent.com/marteinn/The-Big-Username-Blacklist-JS/develop/dist/the-big-username-blacklist.min.js)
- [Production Version](https://raw.githubusercontent.com/marteinn/The-Big-Username-Blacklist-JS/master/dist/the-big-username-blacklist.min.js)


## Tests

It's simple, just run:

    npm run test


## Contributing

Want to contribute? Awesome. Just send a pull request.

All code are in es6 format and can be found in the `src` directory, to compile back to es5 type: `npm run build`


## License

The-Big-Username-Blacklist is released under the [MIT License](http://www.opensource.org/licenses/MIT).
