import React from "react";
import { FaHeart } from "react-icons/fa";

import ProjectCardText from "./ProjectCardText";

type Props = {
  name: string;
  hearts: number;
  languageTags: Array<string>;
  topicTags: Array<string>;
  description: string;
};

export default function ProjectCard({
  name,
  hearts,
  languageTags,
  topicTags,
  description,
}: Props) {
  return (
    <div className="flex content-center bg-white text-primary shadow-md border border-border-neutral p-2 m-4 rounded-lg">
      <div className="w-3/5">
        <ProjectCardText
          name={name}
          username={""}
          languageTags={languageTags}
          topicTags={topicTags}
          description={description}
          nameStyle={""}
          usernameStyle={""}
        />
      </div>
      <div className="w-2/5 m-2 ml-auto">
        <img
          src="https://picsum.photos/600"
          alt="project interface screenshot"
          className="w-full h-36 rounded-lg"
        ></img>
        <div className="flex text-heart text-xl mt-2">
          <FaHeart className="mt-1 mr-1 ml-auto" />
          {hearts}
        </div>
      </div>
    </div>
  );
}
