import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router";
import DescriptionInput from "src/AddProject/DescriptionInput";
import CompanyDetailsCard from "src/Components/CompanyDetailsCard";
import InputField from "src/Components/Inputs/InputField";
import LabeledInputField from "src/Components/Inputs/LabeledInputField";
import PrimaryButton from "src/Components/Inputs/PrimaryButton";
import Company from "src/Types/Company";
import { addCompany } from "src/services/company-service";

export default function AddCompany() {
  const [companyName, setCompanyName] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");

  const navigate = useNavigate();

  return (
    <div className="flex flex-row justify-center gap-4">
      <div className="w-5/12 flex flex-col items-start gap-6 pr-4 border-r-2">
        <LabeledInputField
          innerSpacing={2}
          title="Company Name"
          titleSize="text-xl"
          inputField={
            <InputField
              type="text"
              id="cname"
              placeholder="Company Name"
              value={companyName}
              onChange={(e) => {
                setCompanyName(e.target.value);
              }}
            />
          }
          details={""}
          id={"cname"}
          wrapperClass="w-full"
        />

        <div className="w-full">
          <DescriptionInput
            description={description}
            setDescription={setDescription}
            titleSize="text-xl"
            hidePreview={true}
          />
        </div>

        <LabeledInputField
          innerSpacing={2}
          title="Image URL"
          titleSize="text-xl"
          inputField={
            <InputField
              type="text"
              id="cname"
              placeholder="Image URL"
              value={imageURL}
              onChange={(e) => {
                setImageURL(e.target.value);
              }}
            />
          }
          details={"Paste the URL or Image Address to any valid image."}
          id={"cname"}
          wrapperClass="w-full"
        />
      </div>
      <div className="w-5/12">
        <p className="text-3xl font-serif font-bold mb-4">
          Company Card Preview
        </p>
        <CompanyDetailsCard
          company={{
            _id: "-1",
            name: companyName ? companyName : "Placeholder",
            summary: description
              ? description
              : "Eiusmod Lorem dolore pariatur qui reprehenderit reprehenderit ipsum id in in do pariatur quis sunt.",
            image_url: imageURL ? imageURL : "https://picsum.photos/600",
            recruiters: [],
            requests: [],
          }}
        />
        <div className="mt-4 flex flex-col items-center">
          <div>
            <PrimaryButton
              disabled={!companyName || !description || !imageURL}
              text={"Add Company"}
              icon={<FaPlus />}
              onClick={async () => {
                const c: Company = {
                  name: companyName,
                  summary: description,
                  image_url: imageURL,
                  recruiters: [],
                  requests: [],
                };
                const r = await addCompany(c);
                navigate("/companies/" + r._id);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
