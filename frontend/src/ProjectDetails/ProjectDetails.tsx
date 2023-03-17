import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { examplesFrank } from "../Examples/example-profile";
import FormattedDescription from "../Components/FormattedDescription";
import LanguageTag from "src/Components/LanguageTag";
import TopicTag from "src/Components/TopicTag";
import PrimaryButton from "src/Components/Inputs/PrimaryButton";

export default function ProjectDetails({
  projectLink,
}: {
  projectLink: string;
}) {
  //   const [repo, setRepo] = useState();
  const [user, setUser] = useState(examplesFrank);
  const [project, setProject] = useState(examplesFrank.projects[0]);
  const [hearted, setHearted] = useState(false);

  return (
    <div className="flex md:flex-row flex-col justify-center">
      <div className="text-primary max-w-none md:max-w-xl border-r-2 p-4 pt-2">
        <div className="bg-white border border-border-neutral rounded-lg flex w-100 p-2 mb-2">
          <img
            className="w-20 h-20 rounded-full m-2 lh-profile-image object-cover"
            src="https://picsum.photos/400"
            alt="Rounded avatar"
          />
          <p className="text-3xl font-semibold p-2">{user.name}</p>
        </div>
        <div className="flex justify-between">
          <PrimaryButton
            text="Email"
            onClick={() => {
              window.open(`mailto:${user.contact_info.email}`);
            }}
          />
          <FaHeart
            className={`${
              hearted ? "text-heart" : "text-neutral"
            } text-3xl mt-2 mr-1`}
            onClick={() => setHearted(!hearted)}
          />
        </div>
      </div>

      <div className="pl-2">
        <div className="bg-white border border-border-neutral rounded-lg p-2 m-2">
          <p className="text-3xl font-semibold pb-2">{project.name}</p>
          <FormattedDescription description={project.description} />
        </div>
        <div className="flex flex-wrap p-2 pb-0">
          {project.languages.map((x, i) => (
            <LanguageTag
              text={x}
              canDelete={false}
              onDelete={() => {}}
              key={i}
            />
          ))}
        </div>
        <div className="flex flex-wrap p-2 pt-0">
          {project.tags.map((x, i) => (
            <TopicTag text={x} canDelete={false} onDelete={() => {}} key={i} />
          ))}
        </div>
        <img
          src="https://picsum.photos/600"
          alt="project interface screenshot"
          className="w-full h-80 rounded-lg object-cover m-2"
        ></img>
      </div>
    </div>
  );
}
