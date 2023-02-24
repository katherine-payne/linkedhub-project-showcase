import ProjectFeed from "../Components/ProjectFeed";
import { examplesFrank } from "../Examples/example-profile";
import React from "react";

export default function MainFeed() {
   return (
      <>
      <ProjectFeed projects={examplesFrank.projects} />
      </>
   );
}