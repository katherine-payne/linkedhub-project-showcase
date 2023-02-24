import React from "react";
import ProjectCardText from "../Components/project-card-text";

type Props = {
  repoName: string,
  username: string,
  language: string,
}

export default function SearchResult({ repoName, username, language }: Props) {
  return (
    <div className="border border-border-neutral p-2 mb-4 mx-4 bg-white shadow-md rounded-lg">
      <ProjectCardText
        name={repoName}
        username={username}
        languageTags={language ? [language] : []}
        topicTags={[]}
        description={""}
        nameStyle={"text-accent"}
        usernameStyle={"text-secondary"}
      />
    </div>
  );
}
