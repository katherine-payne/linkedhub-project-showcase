import React from "react";
import { FaHashtag } from "react-icons/fa";

type Props = {
  text: string;
  canDelete: boolean;
  onDelete: () => void;
};

export default function TopicTag({ text, canDelete, onDelete }: Props) {
  return (
    <span
      className={`rounded-full text-sm text-white flex shrink-0 bg-contrast px-2 py-1 mr-1 my-1 ${
        canDelete ? "hover:bg-contrast-hover" : ""
      }`}
      onClick={() => {
        if (canDelete) {
          onDelete();
        }
      }}
    >
      <FaHashtag className="mt-0.5 mr-1" />
      {text}
    </span>
  );
}
