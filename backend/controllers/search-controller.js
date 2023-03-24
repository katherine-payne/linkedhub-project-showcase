const SearchController = (app) => {
  app.get("/api/search/:query", searchGithub);
};

async function searchGithub(req, res) {
  const queryString = req.params.query;
  const limit = 100;
  const url =
    "https://api.github.com/search/repositories?q=" +
    queryString +
    "&per_page=" +
    limit;

  const results = await fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((json) =>
      json.items.map((item) => {
        return {
          name: item.name,
          username: item.owner.login,
          language: item.language,
          key: item.id,
        };
      })
    )
    .catch((error) => {
      res.sendStatus(502);
    });
  res.json(results);
}

export default SearchController;
