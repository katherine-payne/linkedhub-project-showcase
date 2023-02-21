import ProjectFeed from "./ProjectFeed";
import { examplesFrank } from "./examples";
import React from "react";

export default function MainFeed() {
   return (
      <>
      <ProjectFeed projects={examplesFrank.projects} />
      </>
   );
}