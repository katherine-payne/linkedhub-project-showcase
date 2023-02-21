import React from "react";

type Props = {
  label: String,
  entry: String | number
}

export default function UserProfileLabeledEntry({ label, entry }: Props) {
  return (
    <p>
      <span className="text-slate-500">{label}: </span>
      {entry}
    </p>
  );
}
