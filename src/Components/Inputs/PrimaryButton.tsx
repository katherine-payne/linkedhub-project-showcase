import React from "react";

export const buttonBgAttributes = "group transition-all flex items-center justify-center text-sm text-secondary hover:text-secondary-hover border border-border-neutral hover:shadow bg-white hover:bg-gray-100 rounded-lg p-2"
export const buttonTextAttributes = "transition-all text-secondary group-hover:text-secondary-hover p-2"

export default function PrimaryButton({
  text,
  icon,
  bgClass,
  textClass,
  iconClass,
  action,
}: {
  text?: string | React.ReactNode;
  icon?: React.ReactNode;
  bgClass?: string;
  textClass?: string;
  iconClass?: string;
  action: () => void;
}) {
   
  const buttonAttributes = buttonBgAttributes;
  const textAttributes = buttonTextAttributes;

  return (
    <button
      className={`${buttonAttributes} ${bgClass ?? ""}`}
      onClick={action}
    >
      {icon ? <span className={`${textAttributes} ${iconClass}`}>{icon}</span> : <></>}
      {text ? <span className={`${textAttributes} ${textClass}`}>{text}</span> : <></>}
    </button>
  );
}
