import { FaHeart } from "react-icons/fa";

import ProjectCardText from "./project-card-text.js";

export default function ProjectCardSpotlight({
  name,
  hearts,
  languageTags,
  topicTags,
  description,
}) {
  return (
    <div className="bg-white m-4">
      <img
        src="https://picsum.photos/600"
        className="w-full h-80 rounded-t-lg"
      ></img>
      <div className="flex justify-start content-center shadow-md border border-t-0 border-gray-30 p-2 rounded-b-lg">
        <ProjectCardText
          name={name}
          username={""}
          languageTags={languageTags}
          topicTags={topicTags}
          description={description}
        />
        <div className="flex text-pink-500 text-xl ml-auto">
          <FaHeart className="mt-1 mr-1" />
          {hearts}
        </div>
      </div>
    </div>
  );
}
