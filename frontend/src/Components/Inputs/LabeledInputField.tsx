import React, { ReactNode } from "react";

export default function LabeledInputField({
  title,
  titleSize,
  innerSpacing,
  inputField,
  details,
  id,
  wrapperClass,
}: {
  title: string;
  titleSize: string;
  innerSpacing: number;
  inputField: ReactNode;
  details: string;
  id: string;
  wrapperClass?: string;
}) {
  return (
    <div className={wrapperClass ?? ""}>
      <label
        htmlFor={id}
        className={`block my-${innerSpacing} ${titleSize} font-medium text-primary px-1`}
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
