import React from 'react';

type Props = {
  title: string
}

export default function UserProfileHeading({ title }: Props) {
  return <p className="text-xl font-bold mt-8">{title}</p>;
}
