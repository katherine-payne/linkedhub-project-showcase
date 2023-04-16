import * as dao from "../dao/daoCompanies.js";

const CompanyController = (app) => {
  app.get("/api/companies", findAll);
  app.get("/api/companies/:cid", find);
  app.get("/api/companies/recruiters/:rid", findForRecruiter);
  app.post("/api/companies", add);
  app.put("/api/companies/:cid", edit);
  app.delete("/api/companies/:cid", remove);
};

const findAll = async (req, res) => {
  res.json(await dao.findAllCompanies());
};

const findForRecruiter = async (req, res) => {
  const rid = req.params.rid;
  const company = await dao.findCompanyByRecruiterId(rid);
  res.json(company);
};

const find = async (req, res) => {
  const cid = req.params.cid;
  const company = await dao.findCompany(cid);
  res.json(company);
};

const add = async (req, res) => {
  const newCompany = req.body;
  const c = await dao.createCompany(newCompany);
  res.json(c);
};

const edit = async (req, res) => {
  const cid = req.params["cid"];
  const updates = req.body;
  const c = await dao.updateCompany(cid, updates);
  res.json(c);
};

const remove = async (req, res) => {
  const cid = req.params["cid"];
  const status = await dao.deleteCompany(cid);
  res.json(status);
};

export default CompanyController;
