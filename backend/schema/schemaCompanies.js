import mongoose from "mongoose";

const schemaCompanies = mongoose.Schema(
  {
    name: String,
    summary: String,
    image_url: String,
    recruiters: [
      {type: mongoose.Schema.Types.ObjectId, ref: "ModelUsers"}
    ],
    requests: [
      {type: mongoose.Schema.Types.ObjectId, ref: "ModelUsers"}
    ],
  },
  { collection: "companies" }
);

export default schemaCompanies;
