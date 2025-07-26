import React from "react";

const Input = ({
  type,
  name,
  value,
  onChangeHandler,
  placeholder,
  errorMsg,
}) => {
  return (
    <>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChangeHandler}
        placeholder={placeholder}
        className="w-full  px-4 py-2 border-1 border-gray-200 rounded-lg focus:outline-none focus:border-teal-600"
      />
      {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}
    </>
  );
};

export default Input;
