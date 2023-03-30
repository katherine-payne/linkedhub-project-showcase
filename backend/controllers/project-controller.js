import { examplesFrank } from "../Examples/example-profile.js";

let projects = examplesFrank.projects;

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
  console.log(projects)
  res.json(project);
};

async function searchGithub(owner, repo) {
  const url = `https://api.github.com/repos/${owner}/${repo}`;

  const response = await fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((r) => r)
    .catch(() => {
      return null;
    });

  if (response) {
    const found = response;

    found.languages = await fetch(found.languages_url)
      .then((response) => response.json())
      .then((json) => {
        let out = [];

        Object.keys(json).forEach((key) => {
          const next = { name: key, lines: json[key] };
          out.push(next);
        });

        return out;
      });

    found.name = found.name
      .split("-")
      .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
      .join(" ");

    found.link = "https://github.com/" + owner + repo;

    return found;
  }
}

const findGithub = async (req, res) => {
  const username = req.params.user;
  const repo = req.params.repo;
  const localProjects = projects.filter(
    (p) => p.username === username && p.repo === repo
  );
  if (localProjects.length > 0) {
    res.json(localProjects);
  } else {
    const githubProject = await searchGithub(username, repo);
    if (githubProject) {
      res.json(githubProject);
    }
  }
  res.sendStatus(404);
};

const add = (req, res) => {
  const newProject = req.body;
  newProject._id = new Date().getTime() + "";
  projects.push(newProject);
  console.log(projects)
  res.json(newProject);
};

const edit = (req, res) => {
  const pid = req.params.pid;
  const updates = req.body;
  projects = projects.map((p) => (p._id === pid ? { ...p, ...updates } : p));
  const updated = projects.find((p) => p._id === pid);
  res.json(updated);
};

const remove = (req, res) => {
  const pid = req.params.pid;
  projects = projects.filter((p) => p._id !== pid);
  res.sendStatus(200);
};

export default ProjectController;
