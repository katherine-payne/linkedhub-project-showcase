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
      <label
        htmlFor="tagInput"
        className="text-primary text-xl font-medium my-2 px-1"
      >
        {name}
      </label>
      <div
        id="tagInput"
        className="flex flex-wrap bg-white border border-border-neutral px-3 py-1 my-2 rounded-lg"
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
          className="px-2 text-sm outline-none border-none"
          placeholder="New Tag"
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " " || e.key === ",") {
              const nt = newTag.replace(" ", "").replace(",", "")
              if (nt && !(tags.map((s:string) => (s.toUpperCase())).includes(newTag.toUpperCase()))) {
                setTags([...tags, nt]);
              }
              setNewTag("");
            } else if (e.key === "Backspace") {
              if (newTag === "") {
                const t = tags.pop()
                setTags(tags.filter((tag: string) => t !== tag))
              }
            }
          }}
        />
      </div>
    </div>
  );
}
