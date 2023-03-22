import { examplesFrank } from "../Examples/example-profile.js";

const projects = examplesFrank.projects;

const ProjectController = (app) => {
  app.get("/api/projects/:pid", find);
  app.get("/api/projects/:user/:repo", findGithub);
  app.post("/api/projects", add);
  app.put("/api/projects/:pid", edit);
  app.delete("/api/projects/:pid", remove);
};

const find = (req, res) => {
  const pid = req.params.pid;
  const project = projects.find((p) => p._id === pid);
  res.json(project);
};

const findGithub = (req, res) => {
  const username = req.params.user;
  const repo = req.params.repo;
  const project = projects.find(
    (p) => p.username === username && p.repo === repo
  );
  res.json(project);
};

const add = (req, res) => {
  const newProject = req.body;
  newProject._id = new Date().getTime() + "";
  projects.push(newProject);
  res.json(newProject);
};

const edit = (req, res) => {
  const pid = req.params.pid;
  const updates = req.body;
  projects = projects.map((p) => {
    p._id === pid ? { ...p, updates } : p;
  });
  res.sendStatus(200);
};

const remove = (req, res) => {
  const pid = req.params.pid;
  projects = projects.filter((p) => p._id !== pid);
  res.sendStatus(200);
};

export default ProjectController;
