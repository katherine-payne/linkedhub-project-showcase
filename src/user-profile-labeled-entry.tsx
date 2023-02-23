import React from "react";

type Props = {
  label: String,
  entry: String | number
}

export default function UserProfileLabeledEntry({ label, entry }: Props) {
  return (
    <p>
      <span className="text-secondary">{label}: </span>
      {entry}
    </p>
  );
}
