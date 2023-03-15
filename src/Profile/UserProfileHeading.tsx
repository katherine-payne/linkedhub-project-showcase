import React from "react";

type Props = {
  title: string;
};

export default function UserProfileHeading({ title }: Props) {
  return <p className="text-xl text-primary font-bold mt-8 mb-2">{title}</p>;
}
