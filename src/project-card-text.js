import LanguageTag from "./language-tag";
import TopicTag from "./topic-tag";

export default function ProjectCardText({name, languageTags, topicTags, description}) {
    return (
        <div>
            <p className="text-2xl font-bold">{name}</p>
            <div className="flex flex-wrap">
                {languageTags.map((x, i) => (
                    <LanguageTag text={x}/>
                ))}
            </div>
            <div className="flex flex-wrap">
                {topicTags.map((x, i) => (
                    <TopicTag text={x}/>
                ))}
            </div>
            <p className="whitespace-pre-wrap pt-2">{description}</p>
        </div>);
  }