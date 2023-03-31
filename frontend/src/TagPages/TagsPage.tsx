import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import ProjectFeed from "src/Components/ProjectFeed";
import Project from "src/Types/Project";
import { getProjectsForTag } from "src/services/project-service";

export default function TagsPage() {
  const [projects, setProjects] = useState<Array<Project>>([]);
  const { tag } = useParams();

  useEffect(() => {
    async function fetchData() {
      if (tag) {
        const r = await getProjectsForTag(tag);
        setProjects(r);
      }
    }
    fetchData();
  }, [tag]);

  return (
    <div>
      {/* // TODO: Add Tag title */}
      <ProjectFeed projects={projects} />
    </div>
  );
}
