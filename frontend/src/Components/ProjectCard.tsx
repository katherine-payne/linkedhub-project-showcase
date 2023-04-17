import React, { useState } from "react";
import Project from "src/Types/Project";
import HeartButton from "./Inputs/HeartButton";

import ProjectCardText from "./ProjectCardText";

type Props = {
  p: Project;
};

export default function ProjectCard({p}: Props) {

  const [hearted, setHearted] = useState(false);
  const [project, setProject] = useState(p)

  return (
    <div className="flex content-center bg-white text-primary shadow-md border border-border-neutral p-2 m-4 rounded-lg">
      <div className="w-3/5">
        <ProjectCardText
          name={p.name}
          languageTags={p.languages}
          topicTags={p.tags}
          description={p.description}
        />
      </div>
      <div className="w-2/5 m-2 ml-auto">
        {project.images.length > 0 && 
        <img
          src={project.images[0]}
          alt="project interface screenshot"
          className="ml-2 w-full h-36 rounded-lg object-cover"
        />
}
        <HeartButton hearted={hearted} setHearted={setHearted} project={project} setProject={setProject} />
      </div>
    </div>
  );
}
