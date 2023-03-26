import React, { useState } from "react";

import RepoSelector from "./RepoSelector";
import TagInput from "./TagInput";
import DescriptionInput from "./DescriptionInput";
import ImageSelector from "./ImageSelector";
import LabeledInputField from "src/Components/Inputs/LabeledInputField";
import PrimaryButton from "src/Components/Inputs/PrimaryButton";
import InputField from "src/Components/Inputs/InputField";
import Repository from "../Types/Repository";
import { addProject } from "src/services/project-service";
import { useNavigate } from "react-router";
import SearchStatus from "src/Types/SearchStatus";
import statusDisplay from "src/Components/StatusDisplay";

export default function AddProject() {
  const [link, setLink] = useState<string>("");
  const [repo, setRepo] = useState<Repository | null>(null);
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([] as string[]);
  const [languages, setLanguages] = useState([] as string[]);
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(SearchStatus.Waiting);

  const navigate = useNavigate();

  const setNewRepo = (newRepo: Repository) => {
    setRepo(newRepo);
    setTitle(newRepo.name);
    setTags(newRepo.topics);
    setLanguages(newRepo.languages.map((lang) => lang.name));
    setDescription(newRepo.description);
  };

  return (
    <div className="relative">
      <div
        className={`transition-all ease-in-out delay-500 fixed capsule mx-4 bg-gray-100 ${
          status === SearchStatus.Success || status === SearchStatus.Waiting
            ? "opacity-0"
            : "opacity-90"
        } border-border-neutral p-3 rounded-lg shadow-lg`}
      >
        <div>{statusDisplay(status)}</div>
      </div>
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
          titleSize="text-xl"
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
          titleSize="text-xl"
        />
        <ImageSelector />
        <div className="m-auto mb-10">
          <PrimaryButton
            text="Add"
            onClick={async () => {
              const newProject = {
                _id: new Date().getTime() + "",
                name: title,
                link: link,
                hearts: 0,
                description: description,
                languages: languages,
                tags: tags,
              };
              setStatus(SearchStatus.Loading);
              await addProject(newProject);
              setStatus(SearchStatus.Success);
              navigate("/" + newProject._id);
            }}
          />
        </div>
      </div>
    </div>
  );
}
