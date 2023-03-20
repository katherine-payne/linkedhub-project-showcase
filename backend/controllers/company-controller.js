import { examplesBCG } from "../Examples/example-company.js";

const companies = [examplesBCG];

const CompanyController = (app) => {
  app.get("/api/company/:cid", find);
  app.post("/api/company", add);
  app.put("api/company/:cid", edit);
  app.delete("api/company/:cid", remove);
};

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
  companies = companies.map((c) => {
    company._id === cid ? { ...c, updates } : c;
  });
  res.sendStatus(200);
};

const remove = (req, res) => {
  const cid = req.params["cid"];
  companies = companies.filter((c) => c._id !== cid);
  res.sendStatus(200);
};

export default CompanyController;
