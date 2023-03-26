import React from "react";
import { BsXCircleFill } from "react-icons/bs";

type Props = {
  text: string;
  canDelete: boolean;
  onDelete: () => void;
};

export default function LanguageTag({ text, canDelete, onDelete }: Props) {
  return (
    <button
      onClick={() => {
        if (canDelete) {
          onDelete();
        }
      }}
      className="flex flex-row justify-center group rounded-full  text-white bg-neutral group-hover:bg-neutral-hover px-2 py-1 mr-1 my-1"
    >
      <BsXCircleFill
        className={`mt-0.5 mr-1 hidden ${
          canDelete ? "group-hover:inline" : ""
        }`}
      />

      <span className={`text-sm ${canDelete ? "" : ""}`}>{text}</span>
    </button>
  );
}
