import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProjectFeed from "src/Components/ProjectFeed";
import Project from "src/Types/Project";
import TopicTag from "src/Components/TopicTag";
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
      {tag && (
        <div className="flex justify-center">
          <div className="flex flex-row max-w-none md:max-w-xl">
            <div className="font-bold text-3xl pr-2">Tagged:</div>
            <TopicTag
              text={tag}
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
