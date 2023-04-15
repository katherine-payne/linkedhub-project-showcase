import mongoose from "mongoose";

const schemaProjects = mongoose.Schema(
  {
    name: String,
    hearts: Number,
    repo: { type: String, required: true }, // name of the repo in github
    username: { type: String, required: true }, // user in github who created the repo
    description: String,
    languages: [String],
    tags: [String],
    images: [String],
    uid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ModelUsers",
    },
  },
  { collection: "projects" }
);

export default schemaProjects;
