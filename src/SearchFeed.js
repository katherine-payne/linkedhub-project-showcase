import { useEffect, useState } from "react";
import searchFor from "./GithubApiSearch";

export default function SearchFeed({ query }) {
  const [result, setResult] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const r = await searchFor(query);
      setResult(r);
    }
    fetchData();
  }, [query]);

  return (
    <>
      {result.map((r) => {
        return (
          <div className="mb-4 bg-slate-50 p-6 outline-dotted outline-sky-600 mx-2 rounded-lg">
            <p><span className="font-bold font-mono text-lg">
              {r.name}</span> <span> by {r.username}</span>
            </p>
            <p>{r.language}</p>
          </div>
        );
      })}
    </>
  );
}
