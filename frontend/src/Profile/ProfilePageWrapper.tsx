import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Role from "src/Types/Role";
import { RootState } from "src/redux/store";
import UserProfile from "./UserProfile";
import RecruiterPage from "src/Recruiter/RecruiterPage";
import { useNavigate } from "react-router";

export default function ProfilePageWrapper() {
  const { currentUser } = useSelector((state: RootState) => state.users);
  const nav = useNavigate();

  useEffect(() => {
    if (!currentUser?._id) {
      nav("/register");
    }
  }, [currentUser, nav]);

  return (
    <div>
      {currentUser?.role === Role.Poster && <UserProfile />}
      {(currentUser?.role === Role.Recruiter ||
        currentUser?.role === Role.Admin) && <RecruiterPage />}
    </div>
  );
}
