import { useState } from "react";
import searchFor from "./GithubApiSearch";

export default function SearchFeed() {
  const [result, setResult] = useState(["test"]);

  return (
    <>
      <button
        onClick={async () => {
          const r = await searchFor("test");
          setResult(r);
        }}
      >
        Click Me
      </button>

      {result.map((r) => {
        return (
          <div>
            <p className="font-bold font-mono text-lg">{r.name}</p>
            <ul className="list-disc ml-5">
              <li>{r.username}</li>
              <li>{r.language}</li>
            </ul>
          </div>
        );
      })}
    </>
  );
}
