import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProjectFeed from "src/Components/ProjectFeed";
import Project from "src/Types/Project";
import LanguageTag from "src/Components/LanguageTag";
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
      {lang && (
        <div className="flex justify-center">
          <div className="flex flex-row max-w-none md:max-w-xl">
            <div className="font-bold text-3xl pr-2">Language:</div>
            <LanguageTag
              text={lang}
              canDelete={false}
              onDelete={() => {}}
              fontSize="text-md"
            />
          </div>
        </div>
      )}
      <ProjectFeed projects={projects} />
    </div>
  );
}
