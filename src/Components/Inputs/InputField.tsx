import React from "react";

export default function InputField({
  type,
  id,
  placeholder,
  value,
  onChange,
  onKeyDown,
  border,
}: {
  type?: React.HTMLInputTypeAttribute | undefined;
  id?: string;
  placeholder?: string;
  value?: string | number | readonly string[] | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement> | undefined;
  border?: string;
}) {
  const className: string = `${
    border == "" || border == "none"
      ? ""
      : `border ${border ?? "border-border"}`
  } text-primary text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3`;

  return (
    <input
      type={type}
      id={id}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
}
