"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _libIndex = require("../lib/index");

var _libIndex2 = _interopRequireDefault(_libIndex);

describe("Validator check", function () {
    it("checks names agains validator", function () {
        (0, _assert2["default"])(!_libIndex2["default"].validate("root"));
        (0, _assert2["default"])(!_libIndex2["default"].validate(" you"));
        (0, _assert2["default"])(!_libIndex2["default"].validate("SSL"));
        (0, _assert2["default"])(!_libIndex2["default"].validate(" sitemap"));
        (0, _assert2["default"])(!_libIndex2["default"].validate("terms-of-use"));
        (0, _assert2["default"])(_libIndex2["default"].validate("wwwvar"));
    });
});