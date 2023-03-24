import React, { useState } from "react";
import Experience from "src/Types/Experience";
import InputField from "src/Components/Inputs/InputField";
import LabeledInputField from "src/Components/Inputs/LabeledInputField";
import PrimaryButton from "src/Components/Inputs/PrimaryButton";
import DescriptionInput from "src/AddProject/DescriptionInput";

export default function EditExperience({
  experience,
  onSave,
  onCancel,
}: {
  experience?: Experience;
  onSave: (exp: Experience) => void;
  onCancel: () => void;
}) {
  const [newRole, setNewRole] = useState(experience ? experience.role : "");
  const [newCompany, setNewCompany] = useState(
    experience ? experience.company : ""
  );
  const [newLocation, setNewLocation] = useState(
    experience ? experience.location : ""
  );
  const [newStart, setNewStart] = useState(
    experience && experience.start ? experience.start : ""
  );
  const [newEnd, setNewEnd] = useState(
    experience && experience.end ? experience.end : ""
  );
  const [newDescription, setNewDescription] = useState(
    experience ? experience.description : ""
  );

  return (
    <div>
      <LabeledInputField
        innerSpacing={2}
        title="Role"
        titleSize="text-md"
        inputField={
          <InputField
            type="text"
            id="role"
            placeholder="Role"
            value={newRole}
            onChange={(e) => {
              setNewRole(e.target.value);
            }}
          />
        }
        details={""}
        id={"role"}
      />
      <LabeledInputField
        innerSpacing={2}
        title="Company"
        titleSize="text-md"
        inputField={
          <InputField
            type="text"
            id="company"
            placeholder="Company"
            value={newCompany}
            onChange={(e) => {
              setNewCompany(e.target.value);
            }}
          />
        }
        details={""}
        id={"company"}
      />
      <LabeledInputField
        innerSpacing={2}
        title="Location"
        titleSize="text-md"
        inputField={
          <InputField
            type="text"
            id="location"
            placeholder="City, State"
            value={newLocation}
            onChange={(e) => {
              setNewLocation(e.target.value);
            }}
          />
        }
        details={""}
        id={"location"}
      />
      <LabeledInputField
        innerSpacing={2}
        title="Start Date"
        titleSize="text-md"
        inputField={
          <InputField
            type="text"
            id="start"
            placeholder="Month YYYY"
            value={newStart}
            onChange={(e) => {
              setNewStart(e.target.value);
            }}
          />
        }
        details={""}
        id={"start"}
      />
      <LabeledInputField
        innerSpacing={2}
        title="End Date"
        titleSize="text-md"
        inputField={
          <InputField
            type="text"
            id="end"
            placeholder="Month YYYY"
            value={newEnd}
            onChange={(e) => {
              setNewEnd(e.target.value);
            }}
          />
        }
        details={""}
        id={"end"}
      />
      <DescriptionInput
        description={newDescription}
        setDescription={setNewDescription}
        titleSize="text-md"
      />
      <div className="flex gap-1">
        <PrimaryButton
          text="Save"
          onClick={() =>
            onSave({
              role: newRole,
              company: newCompany,
              location: newLocation,
              start: newStart,
              end: newEnd,
              description: newDescription,
            })
          }
        />
        <PrimaryButton text="Cancel" onClick={onCancel} />
      </div>
    </div>
  );
}
