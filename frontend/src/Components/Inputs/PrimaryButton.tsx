import React from "react";

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
  disabled?: () => boolean;
  buttonBgHoverColor?: string;
  buttonBgColor?: string;
  buttonBorderColor?: string;
  shadow?: string;
  hoverShadow?: string;
}) {
  const buttonAttributes = `group transition-all flex items-center justify-center text-sm text-secondary ${buttonBorderColor === "" || buttonBorderColor === "none" ? "" : "border " + buttonBorderColor ?? "border border-border-neutral"} ${shadow ?? ""} ${hoverShadow ?? "hover:shadow"} ${buttonBgColor ?? "bg-white"} hover:${buttonBgHoverColor ?? "bg-gray-100"} rounded-lg p-2`;
  const textAttributes = "transition-all text-secondary group-hover:text-secondary-hover p-2";

  return (
    <button
      disabled={(disabled ?? (() => {return false}))()}
      className={`${buttonAttributes} ${bgClass ?? ""}`}
      onClick={onClick}
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
