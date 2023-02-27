import ProjectFeed from "../Components/ProjectFeed";
import { examplesFrank } from "../Examples/example-profile";
import React from "react";
import AddProject from "../AddProject/AddProject";

export default function MainFeed() {
   return (
      <>
      {/* <ProjectFeed projects={examplesFrank.projects} /> */}
      <AddProject/>
      </>
   );
}