import React, { useState } from "react";

export default function PrimaryButton({
  text,
  icon,
  bgClass,
  textClass,
  iconClass,
  onClick,
  disabled,
  buttonBgHoverColor,
  buttonBgColor,
  buttonBorderColor,
  shadow,
  hoverShadow,
}: {
  text?: string | React.ReactNode;
  icon?: React.ReactNode;
  bgClass?: string;
  textClass?: string;
  iconClass?: string;
  onClick: () => void;
  disabled?: boolean;
  buttonBgHoverColor?: string;
  buttonBgColor?: string;
  buttonBorderColor?: string;
  shadow?: string;
  hoverShadow?: string;
}) {
  const buttonAttributes = `${
    disabled ? "cursor-not-allowed" : ""
  } group transition-all flex items-center justify-center text-sm text-secondary ${
    buttonBorderColor === "" || buttonBorderColor === "none"
      ? ""
      : "border " + buttonBorderColor ?? "border border-border-neutral"
  } ${shadow ?? ""} ${hoverShadow ?? "hover:shadow"} ${
    buttonBgColor ?? (disabled ? "bg-gray-100" : "bg-white")
  } hover:${buttonBgHoverColor ?? "bg-gray-100"} rounded-lg p-2`;
  const textAttributes =
    "transition-all text-secondary group-hover:text-secondary-hover p-2";

  const [loading, setLoading] = useState(false);

  return (
    <button
      disabled={(disabled ?? false) || loading}
      className={`${buttonAttributes} ${bgClass ?? ""}`}
      onClick={() => {
        setLoading(true);
        onClick();
        setLoading(false);
      }}
    >
      {icon ? (
        <span className={`${textAttributes} ${iconClass}`}>{icon}</span>
      ) : (
        <></>
      )}
      {text ? (
        <span className={`${textAttributes} ${textClass}`}>{text}</span>
      ) : (
        <></>
      )}
    </button>
  );
}
