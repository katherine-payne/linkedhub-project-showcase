
import ProjectCard from "./project-card";
import ProjectCardSpotlight from "./project-card-spotlight";


export default function ProjectFeed({projects}) {
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