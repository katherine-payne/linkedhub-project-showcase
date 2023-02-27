import React from "react";
import { useEffect, useState } from "react";
import { BsCheckCircleFill, BsClockFill, BsFillExclamationCircleFill, BsFillFilterCircleFill, BsGithub } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { SearchQueryResult } from "../Types/SearchQueryResult";
import { SearchStatus } from "../Types/SearchStatus";
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

  const statusDisplay = () => {
    switch (status) {
      case SearchStatus.Loading:
        return (
          <div className="flex items-center gap-2 text-sky-400">
            <BsClockFill />
            Loading
          </div>
        );
      case SearchStatus.Failed:
        return (
          <div className="flex items-center gap-2 text-red-400">
            <BsFillExclamationCircleFill />
            Failed
          </div>
        );
      case SearchStatus.Success:
        return (
          <div className="flex items-center gap-2 text-emerald-400">
            <BsCheckCircleFill />
            Filled!
          </div>
        );
      default:
        return (
          <></>
        );
    }
  };

  return (
    <div className="relative">
      <div className={`transition-all ease-in-out delay-500 fixed capsule mx-4 bg-gray-100 ${status == SearchStatus.Success || status == SearchStatus.Waiting ? "opacity-0" : "opacity-90"} border-border-neutral p-3 rounded-lg shadow-lg`}>
        <div>{statusDisplay()}</div>
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
