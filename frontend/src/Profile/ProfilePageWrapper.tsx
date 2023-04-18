import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import Role from "src/Types/Role";
import { RootState } from "src/redux/store";
import UserProfile from "./UserProfile";
import User from "src/Types/User";
import RecruiterPage from "src/Recruiter/RecruiterPage";
import { getUser } from "src/services/user-service";

export default function ProfilePageWrapper({ editProfile = false }) {
  const { currentUser } = useSelector((state: RootState) => state.users);
  const { uid } = useParams();
  const nav = useNavigate();

  const [profileToShow, setProfileToShow] = useState<User | null>(null);

  useEffect(() => {
    if (uid === undefined && !currentUser?._id) {
      nav("/register");
    }
  }, [currentUser, nav]);

  useEffect(() => {
    async function fetchData() {
      const u = uid !== undefined ? await getUser(uid) : currentUser;
      setProfileToShow(u);
    }
    fetchData();
  }, [uid, currentUser]);

  return (
    <div>
      {profileToShow?.role === Role.Poster && (
        <UserProfile editProfile={editProfile} />
      )}
      {(profileToShow?.role === Role.Recruiter ||
        profileToShow?.role === Role.Admin) && (
        <RecruiterPage editProfile={editProfile} />
      )}
    </div>
  );
}
