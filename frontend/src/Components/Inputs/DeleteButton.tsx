import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsFillXCircleFill } from "react-icons/bs";
import Project from "src/Types/Project";
import { deleteProject } from "src/services/project-service";
import { updateUser } from "src/services/user-service";
import { profileThunk } from "src/services/user-thunks";
import { AppDispatch, RootState } from "src/redux/store";

export default function DeleteButton({ p }: { p: Project }) {
  const { currentUser } = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <BsFillXCircleFill
      className="text-primary text-2xl pl-1"
      onClick={async (e) => {
        e.stopPropagation();
        if (p._id) {
          await deleteProject(p._id);
          if (p._id && currentUser) {
            const updatedUser = { ...currentUser };
            updatedUser.projects = updatedUser.projects.filter(
              (pid) => pid !== p._id
            );
            await updateUser(updatedUser);
            await dispatch(profileThunk());
          }
        }
      }}
    />
  );
}
