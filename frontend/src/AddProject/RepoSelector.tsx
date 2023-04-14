import React, { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillExclamationCircleFill,
  BsCheckCircleFill,
  BsClockFill,
  BsGithub,
  BsFillFilterCircleFill,
} from "react-icons/bs";
import InputField from "src/Components/Inputs/InputField";
import LabeledInputField from "src/Components/Inputs/LabeledInputField";
import PrimaryButton from "src/Components/Inputs/PrimaryButton";
import Language from "../Types/Language";
import Repository from "../Types/Repository";
import SearchStatus from "../Types/SearchStatus";

type Props = {
  getLink: string;
  setLink: React.Dispatch<React.SetStateAction<string>>;
  getRepo: any;
  setRepo: React.Dispatch<React.SetStateAction<any>>;
};

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
    if (link && searchStatus === SearchStatus.Waiting) {
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
            Object.keys(json).forEach((key) => {
              const next: Language = { name: key, lines: json[key] };
              out.push(next);
            });

            return out;
          });
        found.name = found.name
          .split("-")
          .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
          .join(" ");

        found.link = link;
        found.username = owner

        setRepo(found);
        return found;
      }
    }
    setSearchStatus(
      searchStatus === SearchStatus.Success
        ? SearchStatus.Success
        : SearchStatus.Failed
    );
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
    <div className="w-full">
      <LabeledInputField
        innerSpacing={2}
        title="Repository URL"
        titleSize="text-xl"
        inputField={
          <InputField
            type="url"
            id="helper-text"
            placeholder="github.com/your-username/repository-name"
            value={getLink}
            onChange={(e) => {
              setLink(e.target.value);
              setSearchStatus(SearchStatus.Waiting);
            }}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement> | undefined) =>
              enterHandler(e)
            }
          />
        }
        details={
          "Paste the URL to your GitHub Repository to connect your project and fill the details automatically."
        }
        id={"git-link"}
      />

      <PrimaryButton
        bgClass="disabled:cursor-not-allowed"
        disabled={!link || searchStatus != SearchStatus.Waiting}
        onClick={() => {
          searchWithURL();
        }}
        text={renderSearchStatus()}
      />
    </div>
  );
}
