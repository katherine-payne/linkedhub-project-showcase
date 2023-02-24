import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import searchFor from "./GithubApiSearch";
import SearchResult from "./SearchResult";

type SearchResult = {
  name: string,
  username: string,
  language: string,
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
      {result.map((r: SearchResult) => {
        return (
          <SearchResult
            repoName={r.name}
            username={r.username}
            language={[r.language]}
            key={r.key}
          />
        );
      })}
    </div>
  );
}
