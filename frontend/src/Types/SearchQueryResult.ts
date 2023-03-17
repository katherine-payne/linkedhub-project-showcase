type SearchQueryResult = {
  name: string;
  username: string;
  language: string | undefined;
  key: number;
};

export function makeSQR(
  name: string,
  username: string,
  language: string | undefined,
  key: number
): SearchQueryResult {
  return { name: name, username: username, language: language, key: key };
}

export default SearchQueryResult