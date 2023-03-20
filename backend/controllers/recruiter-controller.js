import { examplesRecruiters } from "../Examples/examples-recruiters.js";

const recruiters = examplesRecruiters;

const RecruiterController = (app) => {
  app.get("/api/recruiter/:rid", find);
  app.post("/api/recruiter", add);
  app.put("api/recruiter/:rid", edit);
  app.delete("api/recruiter/:rid", remove);
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
  recruiters = recruiters.map((r) => {
    Recruiter._id === rid ? { ...r, updates } : r;
  });
  res.sendStatus(200);
};

const remove = (req, res) => {
  const rid = req.params["rid"];
  recruiters = recruiters.filter((r) => r._id !== rid);
  res.sendStatus(200);
};

export default RecruiterController;
