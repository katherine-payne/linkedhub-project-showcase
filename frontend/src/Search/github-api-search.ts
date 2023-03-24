import SearchQueryResult, { makeSQR } from "../Types/SearchQueryResult";
import SearchStatus from "../Types/SearchStatus";

type GitAPIReturn = {
  id: number;
  name: string;
  owner: {
    login: string;
  };
  language: string;
};

export default async function searchFor(
  queryString: string,
  setIndicator: React.Dispatch<React.SetStateAction<SearchStatus>>
): Promise<SearchQueryResult[]> {
  setIndicator(SearchStatus.Loading);

  const limit = 100;
  const url =
    "https://api.github.com/search/repositories?q=" +
    queryString +
    "&per_page=" +
    limit;

  const f: Array<SearchQueryResult> = await fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.log(response.statusText);
        console.log(response.status);
      }
    })
    .then((json) =>
      json.items.map((item: GitAPIReturn) => {
        return makeSQR(item.name, item.owner.login, item.language, item.id);
      })
    )
    .catch((error) => {
      setIndicator(SearchStatus.Failed);
      console.log(error);
    });
  setIndicator(SearchStatus.Success);
  return f;
}
