import React from "react";
import { FaHeart } from "react-icons/fa";

import ProjectCardText from "./project-card-text.js";

type Props = {
  name: string;
  hearts: number;
  languageTags: Array<string> | [];
  topicTags: Array<string> | [];
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
    <div className="flex content-center bg-white shadow-md border border-gray-30 p-2 m-4 rounded-lg">
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
          className="w-full h-36 rounded-lg"
        ></img>
        <div className="flex text-pink-500 text-xl mt-2">
          <FaHeart className="mt-1 mr-1 ml-auto" />
          {hearts}
        </div>
      </div>
    </div>
  );
}
