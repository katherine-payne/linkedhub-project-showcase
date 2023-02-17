import { FaHashtag } from "react-icons/fa";

export default function TopicTag({ text }) {
  return (
    <span className="rounded-full text-sm text-white flex shrink-0 bg-green-400 px-2 py-1  mr-1 my-1">
      <FaHashtag className="mt-0.5 mr-1" />
      {text}
    </span>
  );
}
