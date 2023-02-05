import { FaHeart } from "react-icons/fa";

import ProjectCardText from "./project-card-text.js"

export default function ProjectCardSpotlight({name, hearts, languageTags, topicTags, description}) {
    return (
        <div className="m-4">
            <img src="https://picsum.photos/600" className="w-full h-80"></img>
            <div className="flex justify-start content-center border border-t-0 border-gray-30 p-2">
                <ProjectCardText name={name} languageTags={languageTags} topicTags={topicTags} description={description}/>
                <div className="flex text-pink-500 text-xl ml-auto">
                    <FaHeart className="mt-1 mr-1"/>{hearts}
                </div>
            </div>
        </div>);
  }