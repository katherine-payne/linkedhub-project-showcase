import React from "react";

const InputField = (props: {
  type?: React.HTMLInputTypeAttribute | undefined;
  step?: number | undefined;
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
  multiple?: boolean;
  accept?: string;
}) => {
  const {
    type,
    step,
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
    multiple,
    accept,
  } = props;

  const className: string = `transition-all text-gray-900 ${background ?? ""} ${
    border == "" || border == "none"
      ? ""
      : `border ${border ?? "border-border"}`
  } bg-white text-primary text-sm rounded-lg ${
    focus ? "focus:ring-blue-500 focus:border-blue-500" : "outline-none"
  } block w-full p-3 ${classAdditions}`;

  return (
    <input
      type={type}
      step={step}
      id={id}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      required={required}
      multiple={multiple}
      accept={accept}
    />
  );
};

export default InputField;
