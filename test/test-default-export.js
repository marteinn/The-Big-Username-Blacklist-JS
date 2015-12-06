"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _libIndex = require("../lib/index");

var _libIndex2 = _interopRequireDefault(_libIndex);

describe("Makes sure default import exposes correct api", function () {
    it("validates using different api", function () {
        (0, _assert2["default"])(!_libIndex2["default"].validate("guest"));
    });
});