"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = function Input(_ref) {
  var label = _ref.label,
      value = _ref.value;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, label && /*#__PURE__*/_react.default.createElement("span", null, label), /*#__PURE__*/_react.default.createElement("input", {
    value: value
  }));
};

var _default = Input;
exports.default = _default;