import Project from "src/Types/Project";
import ProjectFeed from "../Components/ProjectFeed";
import React, { useEffect, useState } from "react";
import { getFeed } from "src/services/project-service";
import LikedList from "src/Components/LikedList";
import { useSelector } from "react-redux";
import { RootState } from "src/redux/store";

export default function MainFeed() {
  const [projects, setProjects] = useState<Array<Project>>([]);
  const currentUser = useSelector(
    (state: RootState) => state.users.currentUser
  );

  useEffect(() => {
    async function fetchData() {
      const r = await getFeed();
      setProjects(r);
    }
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-start">
      <div className="flex flex-col items-center justify-start w-full">
        <p className="font-serif max-w-md text-secondary bg-white p-4 rounded-lg shadow-lg m-4 mb-8">
          Welcome to <b>LinkedHub</b>! Share your projects alongside your resume
          and connect with real recruiters from real companies. See the most
          liked projects hit the home page to put your best foot forwards.
        </p>
      </div>
      <div className="flex md:flex-row flex-col items-center md:justify-center md:items-start">
        <div
          className={`${
            currentUser?.liked ? "w-2/4" : "w-full"
          } flex items-center flex-col`}
        >
          <p className="text-3xl font-bold font-serif">Top Projects</p>
          <ProjectFeed projects={projects} />
        </div>
        {currentUser?.liked && (
          <div className="md:border-l-2 border-t-2 border-l-0 pt-10 md:pt-0 mt-10 md:mt-0 md:border-t-0 w-2/4 flex flex-col items-center">
            <p className="text-3xl font-bold font-serif">Liked Projects</p>
            <LikedList />
          </div>
        )}
      </div>
    </div>
  );
}
