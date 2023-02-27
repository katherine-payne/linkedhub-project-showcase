import React, { useState } from "react";

import RepoSelector from "./RepoSelector";
import { Repository } from "./Repository";
import { Language } from "./Language";

export default function AddProject() {
  const [link, setLink] = useState<string>("");
  const [repo, setRepo] = useState<Repository | null>(null);

  const formatLanguages = (languages: Array<Language>) => {
    return languages.map(lang => lang.name + " (" + lang.lines.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " lines)").join(", ")
  }

  return (
    <>
      <RepoSelector
        getLink={link}
        setLink={setLink}
        getRepo={repo}
        setRepo={setRepo}
      />
      <div className="flex px-10 py-10 justify-center flex-col w-full">
        <p><b>Name:</b> {repo ? repo.name : ""}</p>
        <p><b>Description:</b> {repo ? repo.description : ""}</p>
        <p><b>Link:</b> {repo ? repo.link : ""}</p>
        <p><b>Language:</b> {repo ? repo.language : ""}</p>
        <p><b>Languages:</b> {repo ? formatLanguages(repo.languages) : ""}</p>
        <p><b>Topics:</b> {repo ? repo.topics.join(", ") : ""}</p>
      </div>
    </>
  );
}
