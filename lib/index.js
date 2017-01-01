"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _listJs = require("./list.js");

var _listJs2 = _interopRequireDefault(_listJs);

var validate = function validate(word) {
    word = word.trim();
    word = word.toLowerCase();

    return _listJs2["default"].indexOf(word) === -1;
};

exports["default"] = { validate: validate, list: _listJs2["default"] };
module.exports = exports["default"];