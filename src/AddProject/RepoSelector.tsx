import React, { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillExclamationCircleFill,
  BsCheckCircleFill,
  BsClockFill,
  BsGithub,
  BsFillFilterCircleFill,
} from "react-icons/bs";
import { Language } from "./Language";
import { Repository } from "./Repository";

type Props = {
  getLink: string;
  setLink: React.Dispatch<React.SetStateAction<string>>;
  getRepo: any;
  setRepo: React.Dispatch<React.SetStateAction<any>>;
};

enum SearchStatus {
  Waiting,
  Loading,
  Failed,
  Success,
}

export default function RepoSelector({ getLink, setLink, setRepo }: Props) {
  // convert the given url to a full url which we can make an api call with
  //  - check url valid
  //  - valid: convert to full https:// based url
  //  - invalid: throw error
  function convertToFullURL(input: string): string | null {
    // regex for different url styles
    const full =
      /^(https:\/\/)(www.)(github.com\/)[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]/;
    const https = /^(https:\/\/)(github.com\/)[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]/;
    const www = /^(www.)(github.com\/)[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]/;
    const git = /^(github.com\/)[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]/;
    const user = /^[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]/;

    // test urls and convert accordingly
    if (full.test(input)) {
      return input.substring(0, 8) + input.substring(12);
    } else if (https.test(input)) {
      return input;
    } else if (www.test(input)) {
      return "https://" + input.substring(4);
    } else if (git.test(input)) {
      return "https://" + input;
    } else if (user.test(input)) {
      return "https://github.com/" + input;
    }

    // url is invalid, define as null and handle elsewhere
    return null;
  }

  // get {owner, repo} from the url github.com/_owner_/_repo_
  const extractOwnerRepoFrom = (
    fullURL: string
  ): { owner: string; repo: string } => {
    const urlParts = fullURL.split("/");
    const repo = urlParts.pop() ?? "";
    const owner = urlParts.pop() ?? "";
    return { owner, repo };
  };

  // make api call with url
  //  - show loading
  //  - fail: show red x
  //  - success: show green x, populate content of page
  async function searchWithURL() {
    if (link) {
      setSearchStatus(SearchStatus.Loading);

      const { owner, repo }: { owner: string; repo: string } =
        extractOwnerRepoFrom(link);
      const url = `https://api.github.com/repos/${owner}/${repo}`;

      const response = await fetch(url)
        .then((response) => {
          if (response.ok) {
            setSearchStatus(SearchStatus.Success);
            return response.json();
          } else {
            setSearchStatus(SearchStatus.Failed);
            throw Error("Invalid link given. Bad response.");
          }
        })
        .then((r: Repository) => r)
        .catch(() => {
          setSearchStatus(SearchStatus.Failed);
          return;
        });

      if (response) {
        const found: Repository = response;

        found.languages = await fetch(found.languages_url)
          .then((response) => response.json())
          .then((json) => {
            let out: Array<Language> = [];
            console.log(Object.keys(json));

            Object.keys(json).forEach((key) => {
              const next: Language = { name: key, lines: json[key] };
              out.push(next);
            });

            return out;
          });
        console.log(found.languages);

        found.name = found.name
          .split("-")
          .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
          .join(" ");

        found.link = link;

        setRepo(found);
        return found;
      }
    }
    setSearchStatus(SearchStatus.Failed);
  }

  const enterHandler = (e?: React.KeyboardEvent<HTMLInputElement>) => {
    if (!e || e.key === "Enter") {
      searchWithURL();
    }
  };

  const renderSearchStatus = () => {
    switch (searchStatus) {
      case SearchStatus.Waiting:
        return (
          <div className="flex items-center gap-2 text-secondary">
            {!link ? <BsGithub /> : <BsFillFilterCircleFill />}
            {!link ? <>Invalid link</> : <>Fill</>}
          </div>
        );
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
          <div className="text-secondary">
            {!link ? (
              <></>
            ) : (
              <>
                <BsFillArrowRightCircleFill /> Ready
              </>
            )}
          </div>
        );
    }
  };

  const [searchStatus, setSearchStatus] = useState(SearchStatus.Waiting);
  const link = convertToFullURL(getLink);

  return (
    <div className="w-full px-4">
      <label
        htmlFor="helper-text"
        className="block mb-2 text-sm font-medium text-primary dark:text-white px-3"
      >
        Repository URL
      </label>

      <input
        type="url"
        id="helper-text"
        className="border border-border text-primary text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="github.com/your-username/repository-name"
        value={getLink}
        onChange={(e) => {
          setLink(e.target.value);
          setSearchStatus(SearchStatus.Waiting);
        }}
        onKeyDown={(e) => enterHandler(e)}
      />

      <p
        id="helper-text-explanation"
        className="mt-2 text-sm text-secondary mx-3"
      >
        Paste the URL to your GitHub Repository to connect your project and fill
        the details automatically.
      </p>

      <button
        className="transition-all flex items-center justify-center text-secondary hover:text-secondary-hover border border-border-neutral hover:shadow hover:bg-gray-100 disabled:cursor-not-allowed rounded-lg p-2 w-44 h-10"
        disabled={!link}
        onClick={() => {
          searchWithURL();
        }}
      >
        {renderSearchStatus()}
      </button>
    </div>
  );
}
