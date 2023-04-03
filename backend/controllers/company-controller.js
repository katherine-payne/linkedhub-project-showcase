import { examplesBCG } from "../Examples/example-company.js";

let companies = [examplesBCG];

const CompanyController = (app) => {
  app.get("/api/companies", findAll);
  app.get("/api/companies/:cid", find);
  app.get("/api/companies/recruiters/:rid", findForRecruiter);
  app.post("/api/companies", add);
  app.put("/api/companies/:cid", edit);
  app.delete("/api/companies/:cid", remove);
};

const findAll = (req, res) => {
  res.json(companies);
}

const findForRecruiter = (req, res) => {
  const rid = req.params.rid;
  const company = companies.find((c) => c.recruiters.map((r) => r._id).includes(rid))
  res.json(company)
}

const find = (req, res) => {
  const cid = req.params.cid;
  const company = companies.find((c) => c._id === cid);
  res.json(company);
};

const add = (req, res) => {
  const newCompany = req.body;
  newCompany._id = new Date().getTime() + "";
  companies.push(newCompany);
  res.json(newCompany);
};

const edit = (req, res) => {
  const cid = req.params["cid"];
  const updates = req.body;
  companies = companies.map((c) => (c._id === cid ? { ...c, ...updates } : c));
  const updated = companies.find((c) => c._id === cid);
  res.json(updated);
};

const remove = (req, res) => {
  const cid = req.params["cid"];
  companies = companies.filter((c) => c._id !== cid);
  res.sendStatus(200);
};

export default CompanyController;
