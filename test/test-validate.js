"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _libIndex = require("../lib/index");

describe("Validator check", function () {
    it("checks names agains validator", function () {
        (0, _assert2["default"])(!(0, _libIndex.validate)("root"));
        (0, _assert2["default"])(!(0, _libIndex.validate)(" you"));
        (0, _assert2["default"])(!(0, _libIndex.validate)("SSL"));
        (0, _assert2["default"])(!(0, _libIndex.validate)(" sitemap"));
        (0, _assert2["default"])(!(0, _libIndex.validate)("terms-of-use"));
        (0, _assert2["default"])((0, _libIndex.validate)("wwwvar"));
    });
});