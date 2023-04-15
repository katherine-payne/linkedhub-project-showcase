import mongoose from "mongoose";
import schemaRecruiters from "./schemaRecruiters.js";

const schemaCompanies = mongoose.Schema(
  {
    name: String,
    summary: String,
    image_url: String,
    recruiters: [
      {type: mongoose.Schema.Types.ObjectId, ref: "ModelRecruiters"}
    ],
    requests: [
      {type: mongoose.Schema.Types.ObjectId, ref: "ModelRecruiters"}
    ],
  },
  { collection: "companies" }
);

export default schemaCompanies;
