import ProjectFeed from "./ProjectFeed";
import { examplesFrank } from "./examples";

export default function MainFeed() {
   return (
      <>
      <ProjectFeed projects={examplesFrank.projects} />
      </>
   );
}