import React from "react";
import Project from "src/Types/Project";
import ProjectCard from "./ProjectCard";
import ProjectCardSpotlight from "./ProjectCardSpotlight";

type Props = {
  projects: Array<Project>;
};

export default function ProjectFeed({ projects }: Props) {
  return (
    <div id="projectFeed" className="flex justify-center">
      <div className="max-w-none md:max-w-xl">
        {projects.map((p, index) => (
          <div key={index}>
            <ProjectCardSpotlight
              p={p} />
            <ProjectCard p={p} />
          </div>
        ))}
      </div>
    </div>
  );
}
