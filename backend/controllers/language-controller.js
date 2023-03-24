import { examplesFrank } from "../Examples/example-profile.js";

const projects = examplesFrank.projects;

const LanguageController = (app) => {
  app.get("/api/languages/:name", find);
};

const find = (req, res) => {
  const name = req.params.name;
  const languageProjects = projects.filter((p) => p.languages.includes(name));
  res.json(languageProjects);
};

export default LanguageController;
