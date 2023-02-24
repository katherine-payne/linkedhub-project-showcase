import React from "react";

import LanguageTag from "./LanguageTag";
import TopicTag from "./TopicTag";
import FormattedDescription from "./FormattedDescription";

type Props = {
  name: string;
  username: string;
  languageTags: Array<string> | [];
  topicTags: Array<string> | [];
  description: string;
  nameStyle: string;
  usernameStyle: string;
};

export default function ProjectCardText({
  name,
  username,
  languageTags,
  topicTags,
  description,
  nameStyle = "",
  usernameStyle = "",
}: Props) {
  return (
    <div className="text-primary">
      <p className={`text-2xl font-bold ${nameStyle}`}>{name}</p>
      <p className={`text-xl ${usernameStyle}`}>
        {username ? `@${username}` : ``}
      </p>
      <div className="flex flex-wrap">
        {languageTags.map((x, i) => (
          <LanguageTag text={x} key={i} />
        ))}
      </div>
      <div className="flex flex-wrap">
        {(topicTags).map((x, i) => (
          <TopicTag text={x} key={i} />
        ))}
      </div>
      <p className="whitespace-pre-wrap pt-2">
        <FormattedDescription description={description} />
      </p>
    </div>
  );
}
