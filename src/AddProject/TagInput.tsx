import React, { useState } from "react";
import LanguageTag from "../Components/LanguageTag";
import TopicTag from "../Components/TopicTag";

type Props = {
  name: string;
  tagType: "Language" | "Topic";
  tags: Array<string>;
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function TagInput({ name, tagType, tags, setTags }: Props) {
  const [newTag, setNewTag] = useState("");

  return (
    <div className="max-w-none md:max-w-xl">
      <label htmlFor="tagInput" className="text-primary text-xl font-bold">
        {name}
      </label>
      <div
        id="tagInput"
        className="flex flex-wrap bg-white border border-border-neutral px-1.5 py-1 my-2"
      >
        {tags.map((tag, i) =>
          tagType === "Language" ? (
            <LanguageTag
              text={tag}
              canDelete={true}
              onDelete={() => setTags(tags.filter((t) => t != tag))}
              key={i}
            />
          ) : (
            <TopicTag
              text={tag}
              canDelete={true}
              onDelete={() => setTags(tags.filter((t) => t != tag))}
              key={i}
            />
          )
        )}
        <input
          className="px-2"
          placeholder="New Tag"
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setTags([...tags, newTag]);
              setNewTag("");
            }
          }}
        />
      </div>
    </div>
  );
}
