"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.list = exports.validate = undefined;

var _list = require("./list.js");

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validate = exports.validate = function validate(word) {
    word = word.trim();
    word = word.toLowerCase();

    return _list2.default.indexOf(word) === -1;
};

var list = exports.list = _list2.default;

exports.default = {
    validate: validate,
    list: _list2.default
};