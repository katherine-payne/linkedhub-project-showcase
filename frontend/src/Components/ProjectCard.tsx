import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/redux/store";
import Project from "src/Types/Project";
import HeartButton from "./Inputs/HeartButton";

import ProjectCardText from "./ProjectCardText";

type Props = {
  p: Project;
};

export default function ProjectCard({ p }: Props) {
  const currentUser = useSelector(
    (state: RootState) => state.users.currentUser
  );
  const heartEnabled = currentUser && currentUser?._id;
  const [hearted, setHearted] = useState(
    heartEnabled && p._id ? currentUser.liked.includes(p._id) : false
  );
  const [project, setProject] = useState(p);
  console.log(project);

  return (
    <div className="flex content-center bg-white text-primary shadow-md border border-border-neutral p-2 m-4 rounded-lg">
      <div className="w-3/5">
        {project && (
          <ProjectCardText
            name={p.name}
            languageTags={p.languages}
            topicTags={p.tags}
            description={p.description}
          />
        )}
      </div>
      <div className="w-2/5 m-2 ml-auto">
        {project && project.images.length > 0 && (
          <img
            src={project.images[0]}
            alt="project interface screenshot"
            className="ml-2 w-full h-36 rounded-lg object-cover"
          />
        )}
        {project && (
          <HeartButton
            hearted={hearted}
            setHearted={setHearted}
            project={project}
            setProject={setProject}
          />
        )}
      </div>
    </div>
  );
}
