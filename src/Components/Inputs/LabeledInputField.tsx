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
  innerSpacing: number;
  inputField: ReactNode;
  details: string;
  id: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className={`block my-${innerSpacing} text-xl font-medium text-primary px-1`}
      >
        {title}
      </label>

      {inputField}

      {details && (
        <label
          htmlFor={id}
          className={`block my-${innerSpacing} text-sm text-secondary mx-3`}
        >
          {details}
        </label>
      )}
    </div>
  );
}
