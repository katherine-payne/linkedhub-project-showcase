import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import searchFor from "./github-api-search";
import SearchResult from "./SearchResult";

type Result = {
  name: string,
  username: string,
  language: string | undefined,
  key: number
}

export default function SearchFeed() {
  let { query } = useParams();
  const [result, setResult] = useState([]);

  useEffect(() => {
    async function fetchData() {
      if (query) {
        const r = await searchFor(query);
        setResult(r);
      }
    }
    fetchData();
  }, [query]);

  return (
    <div className="max-w-none md:max-w-2xl m-auto">
      {result.map((r: Result) => {
        return (
          <SearchResult
            repoName={r.name}
            username={r.username}
            language={r.language}
            key={r.key} />
        );
      })}
    </div>
  );
}
