import React, { ReactNode } from "react";
import InputField from "./InputField";

export default function LabeledInputField({
  title,
  innerSpacing,
  inputField,
  details,
  id,
}: {
  title: string;
  innerSpacing: number
  inputField: ReactNode;
  details: string;
  id: string;
}) {
  return (
    <>
      <label
        htmlFor={id}
        className={`block my-${innerSpacing} text-sm font-medium text-primary px-3`}
      >
        {title}
      </label>

      {inputField}

      <label htmlFor={id} className={`block my-${innerSpacing} text-sm text-secondary mx-3`}>
        {details}
      </label>
    </>
  );
}
