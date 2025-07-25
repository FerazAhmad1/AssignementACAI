import React from "react";

const Input = ({ type, name, value, onChangeHandler, placeholder }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChangeHandler}
      placeholder={placeholder}
      className="w-full max-w-md px-4 py-2 border-1 border-gray-200 rounded-lg focus:outline-none focus:border-teal-600"
    />
  );
};

export default Input;
