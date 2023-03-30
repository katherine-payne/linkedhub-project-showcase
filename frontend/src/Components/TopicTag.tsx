import React from "react";
import { BsXCircleFill } from "react-icons/bs";
import { FaHashtag } from "react-icons/fa";

type Props = {
  text: string;
  canDelete: boolean;
  onDelete: () => void;
};

export default function TopicTag({ text, canDelete, onDelete }: Props) {
  return (
    <button
      className={`rounded-full text-sm text-white flex shrink-0 bg-contrast px-2 py-1 mr-1 my-1 group ${
        canDelete ? "hover:bg-contrast-hover" : ""
      } ${canDelete ? "cursor-pointer" : "cursor-text"}`}
      onClick={() => {
        if (canDelete) {
          onDelete();
        }
      }}
    >
      <FaHashtag className={`mt-0.5 mr-1 ${canDelete ? "group-hover:hidden" : ""}`} />
      <BsXCircleFill className={`mt-0.5 mr-1 hidden ${canDelete ? "group-hover:inline" : ""}`} />
      {text}
    </button>
  );
}
