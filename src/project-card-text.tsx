import React from "react";

import LanguageTag from "./language-tag";
import TopicTag from "./topic-tag";
import formatDescription from "./Utils";

type Props = {
  name: string;
  username: string;
  languageTags: [string];
  topicTags: [string];
  description: string;
  nameStyle: string | null;
  usernameStyle: string | null;
};

export default function ProjectCardText({
  name,
  username,
  languageTags,
  topicTags,
  description,
  nameStyle,
  usernameStyle,
}: Props) {
  return (
    <div>
      <p className={`text-2xl font-bold ${nameStyle ?? ""}`}>{name}</p>
      <p className={`text-xl ${usernameStyle ?? ""}`}>
        {username ? `@${username}` : ``}
      </p>
      <div className="flex flex-wrap">
        {languageTags.map((x, i) => (
          <LanguageTag text={x} key={i} />
        ))}
      </div>
      <div className="flex flex-wrap">
        {topicTags.map((x, i) => (
          <TopicTag text={x} key={i} />
        ))}
      </div>
      <p className="whitespace-pre-wrap pt-2">
        {formatDescription(description)}
      </p>
    </div>
  );
}
