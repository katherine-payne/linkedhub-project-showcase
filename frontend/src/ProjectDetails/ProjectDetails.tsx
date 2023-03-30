import React, { useEffect, useState } from "react";
import { examplesFrank } from "../Examples/example-profile";
import FormattedDescription from "../Components/FormattedDescription";
import LanguageTag from "src/Components/LanguageTag";
import TopicTag from "src/Components/TopicTag";
import HeartButton from "src/Components/Inputs/HeartButton";
import { useParams } from "react-router";
import { getProject } from "src/services/project-service";
import Project from "src/Types/Project";
import User from "src/Types/User";

export default function ProjectDetails() {
  const [user, setUser] = useState<User | null>(examplesFrank);
  const [project, setProject] = useState<Project | null>(null);
  const [hearted, setHearted] = useState(false);

  const { pid } = useParams();
  useEffect(() => {
    async function fetchData() {
      const r: Project = await getProject(pid ?? "");
      setProject(r);
      setUser(examplesFrank); // TODO: get user for project
    }
    fetchData();
  }, [pid]);

  return (
    <div className="flex gap-4 md:flex-row flex-col justify-start md:items-start items-center ml-0 md:ml-4">
      <div className="w-11/12 flex flex-col justify-start text-primary max-w-none md:max-w-xl md:border-r-2 md:pr-4">
        {user && (
          <div className="bg-white border border-border-neutral rounded-lg flex p-2">
            <img
              className="w-20 h-20 rounded-full lh-profile-image object-cover"
              src="https://picsum.photos/400"
              alt="Rounded avatar"
            />
            <p className="text-3xl font-semibold">{user.name}</p>
          </div>
        )}
        {user && project && (
          <div className="flex justify-between items-center">
            <a
              href={`mailto:${user.contact_info.email}`}
              className="italic text-accent hover:underline"
            >
              {user.contact_info.email}
            </a>
            <HeartButton
              hearted={hearted}
              setHearted={setHearted}
              project={project}
              setProject={
                setProject as React.Dispatch<React.SetStateAction<Project>>
              }
            />
          </div>
        )}
      </div>

      {project && (
        <div className="flex flex-col gap-2 md:items-start items-center">
          <div className="w-11/12 bg-white border border-border-neutral rounded-lg p-2">
            <p className="text-3xl font-semibold">{project.name}</p>
            <FormattedDescription description={project.description} />
          </div>
          <div className="flex flex-col gap-0 w-11/12">
            <div className="flex flex-wrap">
              {project.languages.map((x, i) => (
                <LanguageTag
                  text={x}
                  canDelete={false}
                  onDelete={() => {}}
                  key={i}
                />
              ))}
            </div>
            <div className="flex flex-wrap">
              {project.tags.map((x, i) => (
                <TopicTag
                  text={x}
                  canDelete={false}
                  onDelete={() => {}}
                  key={i}
                />
              ))}
            </div>
          </div>
          <img
            src="https://picsum.photos/1200/600"
            alt="project interface screenshot"
            className="w-11/12 aspect-auto rounded-lg object-cover"
          ></img>
        </div>
      )}
    </div>
  );
}
