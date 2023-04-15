import modelCompanies from "../models/modelCompanies.js";

export const findAllCompanies = () => modelCompanies.find();
export const findCompany = (cid) => modelCompanies.findById(cid);
export const findCompanyByRecruiterId = (rid) =>
  modelCompanies.find({ recruiters: { _id: rid } });
export const createCompany = (company) => modelCompanies.create(company);
export const deleteCompany = (cid) => modelCompanies.deleteOne({ _id: cid });
export const updateCompany = (cid, company) =>
  modelCompanies.findByIdAndUpdate(
    cid,
    { $set: company },
    {
      new: true,
    }
  );
