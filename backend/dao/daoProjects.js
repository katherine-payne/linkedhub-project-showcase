import modelProjects from "../models/modelProjects.js";
import modelUsers from "../models/modelUsers.js";

export const findAll = () => modelProjects.find();
export const find = (pid) => modelProjects.findById(pid);
export const findGithub = (repo) => modelProjects.find({ repo: repo });
export const add = (project) => modelProjects.create(project);
export const edit = (pid, project) =>
  modelProjects.findByIdAndUpdate(
    pid,
    { $set: project },
    {
      new: true,
    }
  );
export const remove = (pid) => modelProjects.deleteOne({ _id: pid });
export const home = () => modelProjects.find().sort({ hearts: "desc" });
export const findByLanguage = (language) =>
  modelProjects.find({ languages: language });
export const findByTag = (tag) => modelProjects.find({ tags: tag });
