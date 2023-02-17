import { FaHeart } from "react-icons/fa";

import ProjectCardText from "./project-card-text.js";

export default function ProjectCard({
  name,
  hearts,
  languageTags,
  topicTags,
  description,
}) {
  return (
    <div className="flex content-center border border-gray-30 p-2 m-4 rounded-lg">
      <ProjectCardText
        className="w-3/5"
        name={name}
        username={""}
        languageTags={languageTags}
        topicTags={topicTags}
        description={description}
      />
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
