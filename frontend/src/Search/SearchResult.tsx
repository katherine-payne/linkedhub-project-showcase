import React from "react";
import ProjectCardText from "../Components/ProjectCardText";
import { useNavigate } from "react-router";

type Props = {
  repoName: string,
  username: string,
  language: string | undefined
}

export default function SearchResult({ repoName, username, language }: Props) {
  
  const navigate = useNavigate();
  
  return (
    <div className="cursor-pointer border border-border-neutral p-2 mb-4 mx-4 bg-white shadow-md rounded-lg" onClick={() => {
      navigate("/projects/" + username + "/" + repoName)
    }}>
      <ProjectCardText
        name={repoName}
        username={username}
        languageTags={language ? [language] : []}
        topicTags={[]}
        nameStyle={"text-accent"}
        usernameStyle={"text-secondary"}
      />
    </div>
  );
}
