import { examplesFrank } from "../Examples/example-profile.js";

const projects = examplesFrank.projects;

const LanguageController = (app) => {
  app.get("/api/languages/:name", find);
};

const find = (req, res) => {
  const name = req.params.name;
  const languageProjects = projects.filter((p) => p.languages.map((l) => l.toLowerCase()).includes(name.toLowerCase()));
  res.json(languageProjects);
};

export default LanguageController;
