import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import statusDisplay from "src/Components/StatusDisplay";
import SearchQueryResult from "../Types/SearchQueryResult";
import SearchStatus from "../Types/SearchStatus";
import searchFor from "./github-api-search";
import SearchResult from "./SearchResult";

export default function SearchFeed() {
  let { query } = useParams();
  const [result, setResult] = useState<Array<SearchQueryResult>>([]);
  const [status, setStatus] = useState(SearchStatus.Waiting);

  useEffect(() => {
    async function fetchData() {
      if (query) {
        const r = await searchFor(query, setStatus);
        setResult(r);
      }
    }
    fetchData();
  }, [query]);

  return (
    <div className="relative">
      <div
        className={`transition-all ease-in-out delay-500 fixed capsule mx-4 bg-gray-100 ${
          status === SearchStatus.Success || status === SearchStatus.Waiting
            ? "opacity-0"
            : "opacity-90"
        } border-border-neutral p-3 rounded-lg shadow-lg`}
      >
        <div>{statusDisplay(status)}</div>
      </div>
      <div className="max-w-none md:max-w-2xl m-auto">
        {result.map((r: SearchQueryResult) => {
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
    </div>
  );
}
