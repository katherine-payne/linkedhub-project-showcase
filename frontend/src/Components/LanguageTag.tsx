import React from "react";
import { BsXCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router";

type Props = {
  text: string;
  canDelete: boolean;
  onDelete: () => void;
};

export default function LanguageTag({ text, canDelete, onDelete }: Props) {

  const nav = useNavigate();

  return (
    <button
      className={`
        cursor-pointer flex flex-row justify-center group rounded-full  text-white bg-neutral group-hover:bg-neutral-hover px-2 py-1 mr-1 my-1`}
      onClick={(e) => {
        e.stopPropagation();
        if (canDelete) {
          onDelete();
        } else {
          nav("/languages/" + text)
        }
      }}
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
