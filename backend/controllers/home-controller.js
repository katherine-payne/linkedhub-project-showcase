import { examplesFrank } from "../Examples/example-profile.js";

const projects = examplesFrank.projects;

const HomeController = (app) => {
  app.get("/api/home", find);
};

const find = (req, res) => {
  res.json(
    projects.sort((p1, p2) => {
      return p2.hearts - p1.hearts;
    })
  );
};

export default HomeController;
