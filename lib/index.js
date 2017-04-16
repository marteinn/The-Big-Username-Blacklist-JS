"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _list = require("./list.js");

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validate = function validate(word) {
    word = word.trim();
    word = word.toLowerCase();

    return _list2.default.indexOf(word) === -1;
};

exports.default = { validate: validate, list: _list2.default };