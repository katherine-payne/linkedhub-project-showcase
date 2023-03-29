import axios from "axios";
import Project from "src/Types/Project";
import BASE_URL from "./service-helper";

const PROJECTS_API = BASE_URL + "projects";

export const getProject = async (pid: string) => {
  const response = await axios.get(PROJECTS_API + "/" + pid);
  return response.data;
};

export const addProject = async (project: Project) => {
  const response = await axios.post(PROJECTS_API, project);
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
