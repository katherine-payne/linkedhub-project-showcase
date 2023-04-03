import modelCompanies from "../models/modelCompanies.js";

export const findAll = () => modelCompanies.find();
export const findForRecruiter = (rid) => modelCompanies.find({recruiters: {_id: rid}});
export const find = (cid) => modelCompanies.findById(cid);
export const add = (company) => modelCompanies.create(company);
export const edit = (cid, company) =>
  modelCompanies.findByIdAndUpdate(cid, { $set: company }, { new: true });
export const remove = (cid) => modelCompanies.deleteOne({_id: cid});

