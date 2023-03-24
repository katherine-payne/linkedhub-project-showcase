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
        <img
          src="https://picsum.photos/600"
          alt="project interface screenshot"
          className="w-full h-36 rounded-lg object-cover"
        ></img>
        <HeartButton hearted={hearted} setHearted={setHearted} project={project} setProject={setProject} />
      </div>
    </div>
  );
}
