"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _libIndex = require("../lib/index");

describe("Makes sure blacklist data is exported", function () {
    it("tests if blacklist is available", function () {
        (0, _assert2["default"])(_libIndex.list);
        (0, _assert2["default"])(_libIndex.list instanceof Array);
        (0, _assert2["default"])(_libIndex.list.indexOf("root") !== -1);
    });
});