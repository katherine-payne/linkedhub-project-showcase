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
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "src/redux/store";
import { profileThunk } from "src/services/user-thunks";

export default function AddProject() {
  const [link, setLink] = useState<string>("");
  const [repo, setRepo] = useState<Repository | null>(null);
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([] as string[]);
  const [languages, setLanguages] = useState([] as string[]);
  const [description, setDescription] = useState("");
  const [images, setImages] = useState<Array<string>>([]);
  const [status, setStatus] = useState(SearchStatus.Waiting);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: RootState) => state.users);

  const setNewRepo = (newRepo: Repository) => {
    setRepo(newRepo);
    setTitle(newRepo.name);
    setTags(newRepo.topics);
    setLanguages(newRepo.languages.map((lang) => lang.name));
    setDescription(newRepo.description);
  };

  function disableAdd(): boolean {
    return title === "" || description === "";
  }

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
        <ImageSelector get={images} set={setImages} />
        <div className="m-auto my-10 mb-20">
          <PrimaryButton
            disabled={disableAdd()}
            icon={<BsFillPlusCircleFill />}
            text="Add Project"
            onClick={async () => {
              if (currentUser !== null && repo !== null) {
                const newProject = {
                  uid: currentUser._id,
                  name: title,
                  link: link,
                  repo: repo.link,
                  username: repo.username,
                  images: images,
                  hearts: 0,
                  description: description,
                  languages: languages,
                  tags: tags,
                };
                setStatus(SearchStatus.Loading);
                const r = await addProject(newProject);
                setStatus(SearchStatus.Success);
                navigate("/projects/" + r._id);
                await dispatch(profileThunk());
              } else {
                navigate("/login");
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
