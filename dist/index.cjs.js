'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Button = function Button(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React__default['default'].createElement("button", {
    style: {
      color: "green"
    }
  }, children);
};

var Input = function Input(_ref) {
  var label = _ref.label,
      value = _ref.value;
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, label && /*#__PURE__*/React__default['default'].createElement("span", null, label), /*#__PURE__*/React__default['default'].createElement("input", {
    value: value
  }));
};

exports.Button = Button;
exports.Input = Input;
