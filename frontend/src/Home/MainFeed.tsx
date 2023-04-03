import Project from "src/Types/Project";
import ProjectFeed from "../Components/ProjectFeed";
import { examplesFrank } from "../Examples/example-profile";
import React, { useEffect, useState } from "react";
import { getFeed } from "src/services/project-service";

export default function MainFeed() {

   const [projects, setProjects] = useState<Array<Project>>([])

   useEffect(() => {
        async function fetchData() {
            const r = await getFeed();
            setProjects(r);
        }
        fetchData();
      
    }, []);

   return (
      <>
      <ProjectFeed projects={projects} />
      </>
   );
}