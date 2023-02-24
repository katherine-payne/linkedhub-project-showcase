import React from "react";

import RepoSelector from "./RepoSelector";
import DescriptionInput from "./DescriptionInput";
import ImageSelector from "./ImageSelector";
import TagInput from "./TagInput";

export default function AddProject() {
  return (
    <>
      <RepoSelector />
      <label htmlFor="title">Title</label>
      <input id="title" />
      <TagInput />
      <TagInput />
      <DescriptionInput />
      <ImageSelector />
    </>
  );
}
