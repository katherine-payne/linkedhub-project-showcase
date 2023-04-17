import React from "react";
import { FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "src/redux/store";
import { updateProject } from "src/services/project-service";
import Project from "src/Types/Project";

export default function HeartButton({
  project,
  setProject,
}: {
  project: Project;
  setProject: React.Dispatch<React.SetStateAction<Project>>;
}) {
  const currentUser = useSelector(
    (state: RootState) => state.users.currentUser
  );

  return (
    <button
      className={`flex 
        ${hearted ? "text-heart" : "text-neutral"} text-xl ml-auto font-mono`}
      onClick={async (e) => {
        e.stopPropagation();
        let updatedProject = { ...project };
        if (hearted) {
          updatedProject.hearts -= 1;
        } else {
          updatedProject.hearts += 1;
        }
        await updateProject(updatedProject);
        setProject(updatedProject);
      }}
    >
      <FaHeart className="mt-1 mr-1 hover:border hover:border-opacity-0 hover:border-slate-500" />
      {project.hearts}
    </button>
  );
}
