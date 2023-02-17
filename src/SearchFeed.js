import { useEffect, useState } from "react";
import searchFor from "./GithubApiSearch";
import SearchResult from "./SearchResult";

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
    <div className="max-w-none md:max-w-2xl m-auto">
      {result.map((r) => {
        return (
          <SearchResult
            repoName={r.name}
            username={r.username}
            language={r.language}
            key={r.key}
          />
        );
      })}
    </div>
  );
}
