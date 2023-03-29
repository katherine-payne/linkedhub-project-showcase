import { examplesRecruiters } from "../Examples/examples-recruiters.js";

let recruiters = examplesRecruiters;

const RecruiterController = (app) => {
  app.get("/api/recruiters/:rid", find);
  app.post("/api/recruiters", add);
  app.put("/api/recruiters/:rid", edit);
  app.delete("/api/recruiters/:rid", remove);
};

const find = (req, res) => {
  const rid = req.params.rid;
  const recruiter = recruiters.find((r) => r._id === rid);
  res.json(recruiter);
};

const add = (req, res) => {
  const newRecruiter = req.body;
  newRecruiter._id = new Date().getTime() + "";
  recruiters.push(newRecruiter);
  res.json(newRecruiter);
};

const edit = (req, res) => {
  const rid = req.params["rid"];
  const updates = req.body;
  recruiters = recruiters.map((r) =>
    r._id === rid ? { ...r, ...updates } : r
  );
  const updated = recruiters.find((r) => r._id === rid);
  res.json(updated);
};

const remove = (req, res) => {
  const rid = req.params["rid"];
  recruiters = recruiters.filter((r) => r._id !== rid);
  res.sendStatus(200);
};

export default RecruiterController;
