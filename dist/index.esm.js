import React from 'react';

var Button = function Button(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement("button", {
    style: {
      color: "green"
    }
  }, children);
};

var Input = function Input(_ref) {
  var label = _ref.label,
      value = _ref.value;
  return /*#__PURE__*/React.createElement(React.Fragment, null, label && /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("input", {
    value: value
  }));
};

export { Button, Input };
