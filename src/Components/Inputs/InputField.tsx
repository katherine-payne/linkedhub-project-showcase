import React from "react";

export default function InputField({
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
  ref,
  background,
  classAdditions,
}: {
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
  ref?: React.LegacyRef<HTMLInputElement> | undefined;
  background?: string;
  classAdditions?: string;
}) {
  const className: string = `transition-all text-gray-900 ${background ?? ""} ${
    border == "" || border == "none"
      ? ""
      : `border ${border ?? "border-border"}`
  } text-primary text-sm rounded-lg ${
    focus ? "focus:ring-blue-500 focus:border-blue-500" : "outline-none"
  } block w-full p-3 ${classAdditions}`;

  // transition-all block w-full p-2 text-sm text-gray-900 **bg-opacity-0** border rounded-lg outline-none border-none group-hover:bg-gray-100

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
      ref={ref}
    />
  );
}
