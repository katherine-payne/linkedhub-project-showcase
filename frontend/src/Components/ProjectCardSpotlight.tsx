import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/redux/store";
import Project from "src/Types/Project";
import HeartButton from "./Inputs/HeartButton";

import ProjectCardText from "./ProjectCardText";

type Props = {
  p: Project;
};

export default function ProjectCardSpotlight({ p }: Props) {
  const currentUser = useSelector(
    (state: RootState) => state.users.currentUser
  );
  const heartEnabled = currentUser && currentUser?._id;
  const [hearted, setHearted] = useState(
    heartEnabled && p._id ? currentUser.liked.includes(p._id) : false
  );
  const [project, setProject] = useState(p);

  return (
    <div className="bg-white text-primary m-4">
      {project.images.length > 0 && (
        <img
          src={project.images[0]}
          alt="project interface screenshot"
          className="w-full h-80 rounded-t-lg object-cover"
        ></img>
      )}
      <div className="flex justify-start content-center shadow-md border border-t-0 border-border-neutral p-2 rounded-b-lg">
        <ProjectCardText
          name={project.name}
          languageTags={project.languages}
          topicTags={project.tags}
          description={project.description}
        />
        <HeartButton
          hearted={hearted}
          setHearted={setHearted}
          project={project}
          setProject={setProject}
        />
      </div>
    </div>
  );
}
