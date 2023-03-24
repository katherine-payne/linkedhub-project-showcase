import React, { useState } from "react";
import Project from "src/Types/Project";
import HeartButton from "./Inputs/HeartButton";

import ProjectCardText from "./ProjectCardText";

type Props = {
  p: Project;
};

export default function ProjectCardSpotlight({p}: Props) {
  const [hearted, setHearted] = useState(false);
  const [project, setProject] = useState(p)

  return (
    <div className="bg-white text-primary m-4">
      <img
        src="https://picsum.photos/600"
        alt="project interface screenshot"
        className="w-full h-80 rounded-t-lg object-cover"
      ></img>
      <div className="flex justify-start content-center shadow-md border border-t-0 border-border-neutral p-2 rounded-b-lg">
        <ProjectCardText
          name={project.name}
          languageTags={project.languages}
          topicTags={project.tags}
          description={project.description}
        />
        <HeartButton hearted={hearted} setHearted={setHearted} project={project} setProject={setProject} />
      </div>
    </div>
  );
}
