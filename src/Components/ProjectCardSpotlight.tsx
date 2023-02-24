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

export default function ProjectCardSpotlight({
  name,
  hearts,
  languageTags,
  topicTags,
  description,
}: Props) {
  return (
    <div className="bg-white text-primary m-4">
      <img
        src="https://picsum.photos/600"
        alt="project interface screenshot"
        className="w-full h-80 rounded-t-lg"
      ></img>
      <div className="flex justify-start content-center shadow-md border border-t-0 border-border-neutral p-2 rounded-b-lg">
        <ProjectCardText
          name={name}
          username={""}
          languageTags={languageTags}
          topicTags={topicTags}
          description={description}
          nameStyle={""}
          usernameStyle={""}
        />
        <div className="flex text-heart text-xl ml-auto">
          <FaHeart className="mt-1 mr-1" />
          {hearts}
        </div>
      </div>
    </div>
  );
}
