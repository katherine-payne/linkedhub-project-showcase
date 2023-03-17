import React from "react";

import LabeledInputField from "src/Components/Inputs/LabeledInputField";
import InputField from "src/Components/Inputs/InputField";

export default function ImageSelector() {
  return (
    <LabeledInputField
      innerSpacing={2}
      title="Images"
      titleSize="text-xl"
      inputField={
        <InputField
          type="file"
          multiple
          accept=".jpg,.jpeg,.png,.tiff,.pdf,.svg,.raw"
          id="images"
        />
      }
      details={""}
      id={"images"}
    />
  );
}
