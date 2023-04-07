import * as dao from "../dao/daoRecruiters.js";

const RecruiterController = (app) => {
  app.get("/api/recruiters", findAll);
  app.get("/api/recruiters/:rid", find);
  app.post("/api/recruiters", add);
  app.put("/api/recruiters/:rid", edit);
  app.delete("/api/recruiters/:rid", remove);
};

const findAll = async (req, res) => {
  res.json(await dao.findAllRecruiters());
};

const find = async (req, res) => {
  const rid = req.params.rid;
  const recruiter = await dao.findRecruiter(rid);
  res.json(recruiter);
};

const add = async (req, res) => {
  const newRecruiter = req.body;
  const r = await dao.createRecruiter(newRecruiter);
  res.json(r);
};

const edit = async (req, res) => {
  const rid = req.params["rid"];
  const updates = req.params.body;
  const r = await dao.updateRecruiter(rid, updates);
  res.json(r);
};

const remove = async (req, res) => {
  const rid = req.params["rid"];
  const status = await dao.deleteRecruiter(rid);
  res.json(status);
};

export default RecruiterController;
