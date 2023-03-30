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
    <div className="flex md:flex-row flex-col justify-center">
      <div className="text-primary max-w-none md:max-w-xl border-r-2 p-4 pt-2">
        {user && (
          <div className="bg-white border border-border-neutral rounded-lg flex w-100 p-2 mb-2">
            <img
              className="w-20 h-20 rounded-full m-2 lh-profile-image object-cover"
              src="https://picsum.photos/400"
              alt="Rounded avatar"
            />
            <p className="text-3xl font-semibold p-2">{user.name}</p>
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
        <div className="pl-2">
          <div className="bg-white border border-border-neutral rounded-lg p-2 m-2">
            <p className="text-3xl font-semibold pb-2">{project.name}</p>
            <FormattedDescription description={project.description} />
          </div>
          <div className="flex flex-wrap p-2 pb-0">
            {project.languages.map((x, i) => (
              <LanguageTag
                text={x}
                canDelete={false}
                onDelete={() => {}}
                key={i}
              />
            ))}
          </div>
          <div className="flex flex-wrap p-2 pt-0">
            {project.tags.map((x, i) => (
              <TopicTag
                text={x}
                canDelete={false}
                onDelete={() => {}}
                key={i}
              />
            ))}
          </div>
          <img
            src="https://picsum.photos/600"
            alt="project interface screenshot"
            className="w-full h-80 rounded-lg object-cover m-2"
          ></img>
        </div>
      )}
    </div>
  );
}
