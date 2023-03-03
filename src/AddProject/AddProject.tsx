import React, { useState } from "react";

import RepoSelector from "./RepoSelector";
import TagInput from "./TagInput";
import DescriptionInput from "./DescriptionInput";
import ImageSelector from "./ImageSelector";
import LabeledInputField from "src/Components/Inputs/LabeledInputField";
import PrimaryButton from "src/Components/Inputs/PrimaryButton";
import InputField from "src/Components/Inputs/InputField";
import { Repository } from "../Types/Repository";
import { Language } from "../Types/Language";

export default function AddProject() {
  // const [title, setTitle] = useState("");
  // const [tags, setTags] = useState(["Topic1", "Topic2"] as string[]);
  // const [languages, setLanguages] = useState([
  //   "Java",
  //   "TypeScript",
  // ] as string[]);

  // return (
  //   <div className="flex flex-col gap-2 mx-4 md:m-auto max-w-none md:max-w-xl">
  //     <RepoSelector />
  //     <div>
  //       <label htmlFor="title" className="text-primary text-xl font-bold">
  //         Title
  //       </label>
  //       <input
  //         className="w-full block border border-border-neutral px-2 py-1.5 my-2"
  //         id="title"
  //         placeholder="Project Title"
  //         value={title}
  //         onChange={(e) => setTitle(e.target.value)}
  //       />
  //     </div>
  //     <TagInput name="Tags" tagType="Topic" tags={tags} setTags={setTags} />
  //     <TagInput
  //       name="Languages"
  //       tagType="Language"
  //       tags={languages}
  //       setTags={setLanguages}
  //     />
  //     <DescriptionInput />
  //     <ImageSelector />
  //   </div>
  const [link, setLink] = useState<string>("");
  const [repo, setRepo] = useState<Repository | null>(null);
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([] as string[]);
  const [languages, setLanguages] = useState([] as string[]);
  const [description, setDescription] = useState("");

  const setNewRepo = (newRepo: Repository) => {
    setRepo(newRepo);
    setTitle(newRepo.name);
    setTags(newRepo.topics);
    setLanguages(newRepo.languages.map((lang) => lang.name));
    setDescription(newRepo.description);
  };

  const formatLanguages = (languages: Array<Language>) => {
    return languages
      .map(
        (lang) =>
          lang.name +
          " (" +
          lang.lines.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
          " lines)"
      )
      .join(", ");
  };

  return (
    <div className="flex flex-col gap-2 mx-4 md:m-auto max-w-none md:max-w-xl">
      <RepoSelector
        getLink={link}
        setLink={setLink}
        getRepo={repo}
        setRepo={setNewRepo}
      />
      <LabeledInputField
        innerSpacing={2}
        title="Title"
        inputField={
          <InputField
            type="text"
            id="title"
            placeholder="Project Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        }
        details={""}
        id={"title"}
      />
      <TagInput name="Tags" tagType="Topic" tags={tags} setTags={setTags} />
      <TagInput
        name="Languages"
        tagType="Language"
        tags={languages}
        setTags={setLanguages}
      />
      <DescriptionInput
        description={description}
        setDescription={setDescription}
      />
      <ImageSelector />
      <div className="m-auto">
        <PrimaryButton text="Add" onClick={() => {}} />
      </div>
    </div>
  );
}
