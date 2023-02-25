import React from "react";

type Props = {
  text: string;
  canDelete: boolean;
  onDelete: () => void;
};

export default function LanguageTag({ text, canDelete, onDelete }: Props) {
  return (
    <span
      className={`rounded-full text-sm text-white bg-neutral px-2 py-1 mr-1 my-1 ${
        canDelete ? "hover:bg-neutral-hover" : ""
      }`}
      onClick={() => {
        if (canDelete) {
          onDelete();
        }
      }}
    >
      {text}
    </span>
  );
}
