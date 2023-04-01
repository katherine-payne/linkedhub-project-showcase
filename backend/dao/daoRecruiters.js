import modelRecruiters from "../models/modelRecruiters";

export const findAllRecruiters = () => modelRecruiters.find();
export const findRecruiter = (rid) => modelRecruiters.findById(rid);
export const createRecruiter = (recruiter) => modelRecruiters.create(recruiter);
export const deleteRecruiter = (rid) => modelRecruiters.deleteOne({ _id: rid });
export const updateRecruiter = (rid, recruiter) =>
  modelRecruiters.findByIdAndUpdate(
    rid,
    { $set: recruiter },
    {
      new: true,
    }
  );
