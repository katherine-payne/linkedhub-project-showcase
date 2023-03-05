import React from "react";

const InputField = (props: {
  type?: React.HTMLInputTypeAttribute | undefined;
  id?: string;
  placeholder?: string;
  value?: string | number | readonly string[] | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement> | undefined;
  border?: string;
  focus?: boolean;
  required?: boolean;
  background?: string;
  classAdditions?: string;
}) => {
  const {
    type,
    id,
    placeholder,
    value,
    onChange,
    onKeyDown,
    border,
    focus,
    required,
    background,
    classAdditions,
  } = props;

  const className: string = `transition-all text-gray-900 ${background ?? ""} ${
    border == "" || border == "none"
      ? ""
      : `border ${border ?? "border-border"}`
  } text-primary text-sm rounded-lg ${
    focus ? "focus:ring-blue-500 focus:border-blue-500" : "outline-none"
  } block w-full p-3 ${classAdditions}`;

  return (
    <input
      type={type}
      id={id}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      required={required}
    />
  );
};

export default InputField;
