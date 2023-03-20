import React, { useState } from "react";
import "./formInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const {
    label,
    onchange,
    errormessage,
    required,
    name,
    type,
    placeholder,
    pattern,
  } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onchange}
        required={required}
        pattern={pattern}
        onBlur={handleFocus}
        onFocus={() => name === "confirmPassword" && setFocused(true)}
        focusedd={focused.toString()}
      />
      <span>{errormessage}</span>
    </div>
  );
};

export default FormInput;
