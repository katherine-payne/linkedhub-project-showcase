import * as projectsDao from "../dao/daoProjects.js";
import * as usersDao from "../dao/daoUsers.js";

const ProjectController = (app) => {
  app.get("/api/projects/:owner/:repo", findProjects)
  app.get("/api/projects/generate/:owner/:repo", generateProject)
  app.get("/api/projects", findAll);
  app.get("/api/projects/:pid", find);
  app.post("/api/projects", add);
  app.put("/api/projects/:pid", edit);
  app.delete("/api/projects/:pid", remove);
  app.get("/api/home", home);
  app.get("/api/tags/:name", findByTag);
  app.get("/api/languages/:name", findByLanguage);
};

const home = async (req, res) => {
  res.json(await projectsDao.home());
};

const findAll = async (req, res) => {
  res.json(await projectsDao.findAll());
};

const find = async (req, res) => {
  const pid = req.params.pid;
  const project = await projectsDao.find(pid);
  res.json(project);
};

const findProjects = async (req, res) => {
  const owner = req.params.owner
  const repo = req.params.repo
  const query = `https://github.com/${owner}/${repo}`
  const projects = await projectsDao.findGithub(query)
  res.json(projects)
}

async function generateProject(req, res) {
  // const f = await searchGithub(req.params.owner, req.params.repo)
  const f = { // TODO: fixme
    name: "Typed Out",
    repo: "http://github.com/fraander/typed-out",
    username: "fraander",
    description: "For typing things out when you can't talk.",
    languages: ["Swift"],
    tags: ["SwiftUI", "iOS"],
  }

  const r = {
    name: f.name ?? "",
    repo: req.params.repo ?? "",
    username: req.params.owner ?? "",
    description: f.description ?? "",
    languages: f.languages ?? [],
    tags: f.tags ?? [],
  }
  res.json(r)
}

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

const add = async (req, res) => {
  const newProject = req.body;
  const p = await projectsDao.add(newProject)
  let u = await usersDao.findUser(p.uid)
  u.projects = [...u.projects, p._id];
  await usersDao.updateUser(u._id, u)
  res.json(p);
};

const edit = async (req, res) => {
  const pid = req.params.pid;
  const updates = req.body;
  const updated = await projectsDao.edit(pid, updates);
  res.json(updated);
};

const remove = async (req, res) => {
  const pid = req.params.pid;
  const status = await projectsDao.remove(pid)
  res.json(status);
};

const findByTag = async (req, res) => {
  const name = req.params.name;
  const projects = await projectsDao.findByTag(name);
  res.json(projects);
};

const findByLanguage = async (req, res) => {
  const name = req.params.name;
  const projects = await projectsDao.findByLanguage(name)
  res.json(projects)
}

export default ProjectController;
