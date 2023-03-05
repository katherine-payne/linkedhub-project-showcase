import React from "react";

export default function FormattedDescription({description}: {description: string}) {
  if (description.includes("\n")) {
    return (
      <ul className="list-disc ml-6">
        {description.split("\n").map((bullet, index) => {
          return <li key={index}>{bullet}</li>;
        })}
      </ul>
    );
  } else {
    return <>{description}</>;
  }
}
