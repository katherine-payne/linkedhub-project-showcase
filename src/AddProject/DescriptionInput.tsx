import React from "react";

import LabeledInputField from "src/Components/Inputs/LabeledInputField";
import FormattedDescription from "src/Components/FormattedDescription";

type Props = {
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
};

export default function DescriptionInput({
  description,
  setDescription,
}: Props) {
  return (
    <div>
      <LabeledInputField
        innerSpacing={2}
        title="Description"
        inputField={
          <textarea
            className="text-primary text-sm border border-border rounded-lg w-full p-3"
            id="title"
            placeholder="Project Description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        }
        details={""}
        id={"description"}
      />
      <div className="px-1 py-2">
        <FormattedDescription description={description} />
      </div>
    </div>
  );
}
