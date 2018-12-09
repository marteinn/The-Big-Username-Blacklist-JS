"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _index = require("../lib/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Makes sure blacklist data is exported", function () {
    it("tests if blacklist is available", function () {
        (0, _assert2.default)(_index.list);
        (0, _assert2.default)(_index.list instanceof Array);
        (0, _assert2.default)(_index.list.indexOf("root") !== -1);
    });
});