import React from "react";
import { useNavigate } from "react-router";
import ProjectCard from "./ProjectCard";
import ProjectCardSpotlight from "./ProjectCardSpotlight";
import Project from "src/Types/Project";

export default function ProjectFeed({ projects }: { projects: Array<Project> }) {
  const navigate = useNavigate();

  return (
    <div id="projectFeed" className="flex justify-center">
      <div className="max-w-none md:max-w-xl">
        {projects.map((p, index) => (
          <div
            className="cursor-pointer"
            key={index}
            onClick={() => navigate(`/projects/${p._id}`)}
          >
            {index % 2 !== 0 ? (
              <ProjectCardSpotlight p={p} />
            ) : (
              <ProjectCard p={p} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
