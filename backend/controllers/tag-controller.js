import { examplesFrank } from "../Examples/example-profile.js";

const projects = examplesFrank.projects;

const TagController = (app) => {
  app.get("/api/tags/:name", find);
};

const find = (req, res) => {
  const name = req.params.name;
  const tagProjects = projects.filter((p) => p.tags.includes(name));
  res.json(tagProjects);
};

export default TagController;
