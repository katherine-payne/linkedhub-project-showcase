import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import User from "src/Types/User";
import Role from "src/Types/Role";
import { getUsersByRole } from "src/services/user-service";

export default function RecruitersListPage() {
  const nav = useNavigate();

  const [recruiters, setRecruiters] = useState<Array<User>>([]);

  useEffect(() => {
    async function fetchData() {
      const r = await getUsersByRole(Role.Recruiter);
      setRecruiters(r);
    }
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-4 items-start w-6/12 bg-white p-4 rounded-md shadow">
        <p className="font-serif font-bold text-3xl">Recruiters</p>
        {recruiters.map((r: User, index) => {
          return (
            <div
              key={index}
              onClick={() => nav("/profile/" + r._id)}
              className="flex flex-col gap-4 w-full font-serif bg-gray-100 hover:bg-gray-200 p-2 hover:shadow-md shadow rounded-md cursor-pointer"
            >
              <div className="flex flex-row items-center gap-4">
                <img
                  className="w-16 h-16 rounded-full object-cover shadow-md aspect-square"
                  alt="Rounded avatar"
                  src={r.profile_image_url}
                />
                <div className="flex flex-col">
                  <p className="text-2xl text-primary font-semibold">
                    {r.name}
                  </p>
                  {r.email_shown && (
                    <a
                      href={"mailto:" + r.email}
                      className="text-secondary hover:text-accent hover:underline"
                    >
                      {r.email}
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
