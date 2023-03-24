import React from "react";
import { FaHeart } from "react-icons/fa";
import { updateProject } from "src/services/project-service";
import Project from "src/Types/Project";

type Props = {
  hearted: boolean;
  setHearted: React.Dispatch<React.SetStateAction<boolean>>;
  project: Project;
  setProject: React.Dispatch<React.SetStateAction<Project>>;
};

export default function HeartButton({
  hearted,
  setHearted,
  project,
  setProject,
}: Props) {
  return (
    <button
      className={`flex 
        ${hearted ? "text-heart" : "text-neutral"} text-xl ml-auto font-mono`}
      onClick={async () => {
        let updatedProject = { ...project };
        if (hearted) {
          updatedProject.hearts -= 1;
        } else {
          updatedProject.hearts += 1;
        }
        const p: Project = await updateProject(updatedProject);
        setProject(updatedProject);
        setHearted(!hearted);
      }}
    >
      <FaHeart className="mt-1 mr-1 hover:border hover:border-opacity-0 hover:border-slate-500" />
      {project.hearts}
    </button>
  );
}
