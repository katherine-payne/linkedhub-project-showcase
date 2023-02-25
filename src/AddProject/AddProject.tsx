import React, { useState } from "react";

import RepoSelector from "./RepoSelector";
import DescriptionInput from "./DescriptionInput";
import ImageSelector from "./ImageSelector";
import TagInput from "./TagInput";

export default function AddProject() {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState(["Topic1", "Topic2"] as string[]);
  const [languages, setLanguages] = useState([
    "Java",
    "TypeScript",
  ] as string[]);

  return (
    <div className="flex flex-col gap-2 mx-4 md:m-auto max-w-none md:max-w-xl">
      <RepoSelector />
      <div>
        <label htmlFor="title" className="text-primary text-xl font-bold">
          Title
        </label>
        <input
          className="w-full block border border-border-neutral px-2 py-1.5 my-2"
          id="title"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <TagInput name="Tags" tagType="Topic" tags={tags} setTags={setTags} />
      <TagInput
        name="Languages"
        tagType="Language"
        tags={languages}
        setTags={setLanguages}
      />
      <DescriptionInput />
      <ImageSelector />
    </div>
  );
}
