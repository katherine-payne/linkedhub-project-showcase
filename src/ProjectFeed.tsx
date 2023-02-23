
import React from "react";
import { Project } from "./examples";
import ProjectCard from "./project-card";
import ProjectCardSpotlight from "./project-card-spotlight";

type Props = {
  projects: Array<Project>
}

export default function ProjectFeed({projects}: Props) {
   return (
      <div id="projectFeed" className="flex justify-center">
        <div className="max-w-none md:max-w-xl">
          {projects.map((p) => (
            <>
              <ProjectCardSpotlight
                name={p.name}
                hearts={p.hearts}
                languageTags={p.languages}
                topicTags={p.tags}
                description={p.description}
              />
              <ProjectCard
                name={p.name}
                hearts={p.hearts}
                languageTags={p.languages}
                topicTags={p.tags}
                description={p.description}
              />
            </>
          ))}
        </div>
      </div>
   );
}