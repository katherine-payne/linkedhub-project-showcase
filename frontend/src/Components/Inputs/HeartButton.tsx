import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { AppDispatch, RootState } from "src/redux/store";
import { updateProject } from "src/services/project-service";
import { updateUser } from "src/services/user-service";
import { profileThunk } from "src/services/user-thunks";
import Project from "src/Types/Project";

export default function HeartButton({
  project,
  setProject,
}: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const currentUser = useSelector(
    (state: RootState) => state.users.currentUser
  );
  const heartEnabled = currentUser && currentUser?._id;

  return (
    <button
      className={`flex 
        ${hearted ? "text-heart" : "text-neutral"} text-xl ml-auto font-mono`}
      disabled={!heartEnabled}
      onClick={async (e) => {
        e.stopPropagation();
        let updatedProject = { ...project };
        if (hearted) {
          updatedProject.hearts -= 1;
        } else {
          updatedProject.hearts += 1;
        }
        await updateProject(updatedProject);
        if (updatedProject._id && currentUser) {
          const updatedUser = { ...currentUser };
          if (!hearted) {
            updatedUser.liked = [...updatedUser.liked, updatedProject._id];
          } else {
            updatedUser.liked = updatedUser.liked.filter(
              (id) => id !== updatedProject._id
            );
          }
          await updateUser(updatedUser);
          await dispatch(profileThunk());
        }
        setProject(updatedProject);
      }}
    >
      <FaHeart className="mt-1 mr-1 hover:border hover:border-opacity-0 hover:border-slate-500" />
      {project.hearts}
    </button>
  );
}
