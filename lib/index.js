"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.validate = validate;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _dataListJson = require("./data/list.json");

var _dataListJson2 = _interopRequireDefault(_dataListJson);

function validate(username) {
    username = username.trim();
    username = username.toLowerCase();

    for (var i = 0, l = _dataListJson2["default"].length; i < l; i++) {
        var word = _dataListJson2["default"][i];

        if (word === username) {
            return false;
        }
    }

    return true;
}
