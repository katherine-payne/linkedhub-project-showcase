import React from "react";
import { useNavigate } from "react-router";
import ProjectCard from "./ProjectCard";
import ProjectCardSpotlight from "./ProjectCardSpotlight";
import Project from "src/Types/Project";

export default function ProjectFeed({
  projects,
  showDelete = false,
}: {
  projects: Array<Project>;
  showDelete?: boolean;
}) {
  const navigate = useNavigate();

  return (
    <div id="projectFeed" className="flex justify-center">
      <div className="max-w-none md:max-w-xl">
        {projects
          .filter((p) => p !== null)
          .map((p, index) => (
            <div
              className="cursor-pointer"
              key={index}
              onClick={() => navigate(`/projects/${p._id}`)}
            >
              {index % 2 !== 0 ? (
                <ProjectCardSpotlight p={p} showDelete={showDelete} />
              ) : (
                <ProjectCard p={p} showDelete={showDelete} />
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
