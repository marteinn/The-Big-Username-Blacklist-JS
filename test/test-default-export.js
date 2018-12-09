"use strict";

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _index = require("../lib/index");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Makes sure default import exposes correct api", function () {
    it("validates using different api", function () {
        (0, _assert2.default)(!_index2.default.validate("guest"));
    });
});