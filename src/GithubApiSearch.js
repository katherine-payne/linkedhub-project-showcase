export default async function searchFor(queryString) {
  const limit = 100;
  const url =
    "https://api.github.com/search/repositories?q=" +
    queryString +
    "&per_page=" +
    limit;

  const response = await fetch(url)
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
    });

  return await response.items.map((item) => {
    const display = {
      key: item.id,
      name: item.name,
      username: item.owner.login,
      language: item.language,
    };
    return display;
  });
}
