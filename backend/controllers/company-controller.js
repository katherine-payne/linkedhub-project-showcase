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
  res.json(await dao.findAll());
}

const findForRecruiter = async (req, res) => {
  const rid = req.params.rid;
  const company = await dao.findForRecruiter(rid)
  res.json(company)
}

const find = async (req, res) => {
  const cid = req.params.cid;
  const company = await dao.find(cid);
  res.json(company);
};

const add = async (req, res) => {
  const newCompany = req.body;
  res.json(await dao.add(newCompany));
};

const edit = async (req, res) => {
  const cid = req.params["cid"];
  const updates = req.body;
  res.json(await dao.edit(cid, updates));
};

const remove = async (req, res) => {
  const cid = req.params["cid"];
  const status = await dao.delete(cid)
  res.sendStatus(status);
};

export default CompanyController;
