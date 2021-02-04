import React from "react";

const Input = ({ label, value }) => (
  <>
    {label && <span>{label}</span>}
    <input value={value} />
  </>
);

export default Input;
