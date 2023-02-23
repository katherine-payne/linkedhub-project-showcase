import React from "react";

type Props = {
  text: string
}

export default function LanguageTag({ text }: Props) {
  return (
    <span className="rounded-full text-sm text-white bg-gray-400 px-2 py-1 mr-1 my-1">
      {text}
    </span>
  );
}
