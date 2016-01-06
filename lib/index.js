"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _dataListJson = require("./data/list.json");

var _dataListJson2 = _interopRequireDefault(_dataListJson);

function validate(word) {
    word = word.trim();
    word = word.toLowerCase();

    return _dataListJson2["default"].indexOf(word) === -1;
}

exports["default"] = { validate: validate, list: _dataListJson2["default"] };
module.exports = exports["default"];
