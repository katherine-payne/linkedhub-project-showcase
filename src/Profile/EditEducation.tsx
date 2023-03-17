import React, { useState } from "react";
import { Education } from "../Examples/example-profile";
import InputField from "src/Components/Inputs/InputField";
import LabeledInputField from "src/Components/Inputs/LabeledInputField";
import PrimaryButton from "src/Components/Inputs/PrimaryButton";

export default function EditEducation({
  education,
  onSave,
  onCancel,
}: {
  education?: Education;
  onSave: (edu: Education) => void;
  onCancel: () => void;
}) {
  const [newUniversity, setNewUniversity] = useState(
    education ? education.university : ""
  );
  const [newDegree, setNewDegree] = useState(education ? education.degree : "");
  const [newMajor, setNewMajor] = useState(education ? education.major : "");
  const [newGPA, setNewGPA] = useState(education ? education.gpa : 0.0);
  const [newStart, setNewStart] = useState(
    education && education.start ? education.start : ""
  );
  const [newEnd, setNewEnd] = useState(
    education && education.end ? education.end : ""
  );

  return (
    <div>
      <LabeledInputField
        innerSpacing={2}
        title="School"
        titleSize="text-md"
        inputField={
          <InputField
            type="text"
            id="university"
            placeholder="School"
            value={newUniversity}
            onChange={(e) => {
              setNewUniversity(e.target.value);
            }}
          />
        }
        details={""}
        id={"university"}
      />
      <LabeledInputField
        innerSpacing={2}
        title="Degree"
        titleSize="text-md"
        inputField={
          <InputField
            type="text"
            id="degree"
            placeholder="Degree"
            value={newDegree}
            onChange={(e) => {
              setNewDegree(e.target.value);
            }}
          />
        }
        details={""}
        id={"degree"}
      />
      <LabeledInputField
        innerSpacing={2}
        title="Major"
        titleSize="text-md"
        inputField={
          <InputField
            type="text"
            id="major"
            placeholder="Major"
            value={newMajor}
            onChange={(e) => {
              setNewMajor(e.target.value);
            }}
          />
        }
        details={""}
        id={"major"}
      />
      <LabeledInputField
        innerSpacing={2}
        title="Start Date"
        titleSize="text-md"
        inputField={
          <InputField
            type="text"
            id="start"
            placeholder="YYYY"
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
            placeholder="YYYY"
            value={newEnd}
            onChange={(e) => {
              setNewEnd(e.target.value);
            }}
          />
        }
        details={""}
        id={"end"}
      />
      <LabeledInputField
        innerSpacing={2}
        title="GPA"
        titleSize="text-md"
        inputField={
          <InputField
            type="number"
            step={0.001}
            id="gpa"
            placeholder="0.000"
            value={newGPA}
            onChange={(e) => {
              setNewGPA(parseFloat(e.target.value));
            }}
          />
        }
        details={""}
        id={"gpa"}
      />
      <div className="flex gap-1 mt-2">
        <PrimaryButton
          text="Save"
          onClick={() =>
            onSave({
              university: newUniversity,
              degree: newDegree,
              major: newMajor,
              start: newStart,
              end: newEnd,
              gpa: newGPA,
            })
          }
        />
        <PrimaryButton text="Cancel" onClick={onCancel} />
      </div>
    </div>
  );
}
