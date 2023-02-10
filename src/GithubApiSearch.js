export default async function searchFor(queryString) {
  const limit = 20;
  const url =
    "https://api.github.com/search/repositories?q=" +
    queryString +
    "&per_page=" + limit;

  const response = await fetch(url)
  .then((response) => response.json())
  .catch((error) => {
   console.log(error);
   });

  return await response.items.map((item) => {
      const display = {
         name: item.name,
         username: item.owner.login,
         language: item.language
      }
      return display
  });
}
