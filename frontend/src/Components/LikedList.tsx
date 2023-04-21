import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Project from "src/Types/Project";
import { RootState } from "src/redux/store";
import { getProject } from "src/services/project-service";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";

export default function LikedList({ liked }: { liked?: Array<string> }) {
  const currentUser = useSelector(
    (state: RootState) => state.users.currentUser
  );
  const [projects, setProjects] = useState<Array<Project>>([]);

  useEffect(() => {
    async function fetchData() {
      if (liked) {
        const r = await Promise.all(
          liked.map(async (pid) => await getProject(pid))
        );
        setProjects(r);
      } else if (currentUser?.liked) {
        const r = await Promise.all(
          currentUser.liked.map(async (pid) => await getProject(pid))
        );
        setProjects(r);
      }
    }
    fetchData();
  }, [currentUser, liked]);

  return (
    <div>
      {projects.map((p, index) => {
        return (
          <div key={index}>
            <Link to={"/projects/" + p._id}>
              <ProjectCard p={p} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
