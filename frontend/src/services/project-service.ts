import axios from "axios";
import Project from "src/Types/Project";
import BASE_URL from "./service-helper";

const PROJECTS_API = BASE_URL + "projects";

const api = axios.create({ withCredentials: true });

export const getProject = async (pid: string) => {
  const response = await axios.get(PROJECTS_API + "/" + pid);
  return response.data;
};

// TODO: match in backend
export const getProjects = async (owner: string, repo: string) => {
  const query = PROJECTS_API + "/" + owner + "/" + repo;
  const response = await axios.get(query);
  return response.data;
};

export const getProjectForRepo = async (owner: string, repo: string) => {
  const response = await axios.get(
    PROJECTS_API + "/generate/" + owner + "/" + repo
  );
  console.log(response.data);
  return response.data;
};

export const getFeed = async () => {
  const response = await api.get(BASE_URL + "home");
  return response.data;
};

export const getProjectsForLanguage = async (language: string) => {
  const response = await axios.get(BASE_URL + "languages/" + language);
  return response.data;
};

export const getProjectsForTag = async (tag: string) => {
  const response = await axios.get(BASE_URL + "tags/" + tag);
  return response.data;
};

export const addProject = async (project: Project) => {
  const response = await api.post(PROJECTS_API, project);
  return response.data;
};

export const updateProject = async (project: Project) => {
  const response = await axios.put(PROJECTS_API + "/" + project._id, project);
  return response.data;
};

export const deleteProject = async (pid: string) => {
  const response = await axios.delete(PROJECTS_API + "/" + pid);
  return response.data;
};
