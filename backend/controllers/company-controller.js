import { examplesBCG } from "../Examples/example-company.js";

const companies = [examplesBCG];

const CompanyController = (app) => {
  app.get("/api/company/:cid", findCompanyById);
};

const findCompanyById = (req, res) => {
  const cid = req.params.cid
  const company = companies.find(c => c._id === cid)
  res.json(company)
};

export default CompanyController;
