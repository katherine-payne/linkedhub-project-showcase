import React, { useState } from "react";
import Project from "src/Types/Project";
import HeartButton from "./Inputs/HeartButton";

import ProjectCardText from "./ProjectCardText";

type Props = {
  p: Project;
};

export default function ProjectCardSpotlight({p}: Props) {
  const [project, setProject] = useState(p)

  return (
    <div className="bg-white text-primary m-4">
{project.images.length > 0 && 
      <img
        src={project.images[0]}
        alt="project interface screenshot"
        className="w-full h-80 rounded-t-lg object-cover"
      ></img>
      }
      <div className="flex justify-start content-center shadow-md border border-t-0 border-border-neutral p-2 rounded-b-lg">
        <ProjectCardText
          name={project.name}
          languageTags={project.languages}
          topicTags={project.tags}
          description={project.description}
        />
        <HeartButton project={project} setProject={setProject} />
      </div>
    </div>
  );
}
