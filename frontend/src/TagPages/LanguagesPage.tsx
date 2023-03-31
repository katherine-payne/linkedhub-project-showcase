import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import ProjectFeed from "src/Components/ProjectFeed";
import Project from "src/Types/Project";
import { getProjectsForLanguage } from "src/services/project-service";

export default function LanguagesPage() {
  const [projects, setProjects] = useState<Array<Project>>([]);
  const { lang } = useParams();

  useEffect(() => {
    async function fetchData() {
      if (lang) {
        const r = await getProjectsForLanguage(lang);
        setProjects(r);
      }
    }
    fetchData();
  }, [lang]);

  return (
    <div>
      <ProjectFeed projects={projects} />
    </div>
  );
}
