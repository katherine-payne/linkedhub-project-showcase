import mongoose from "mongoose";

const schemaUsers = mongoose.Schema(
  {
    role: String,
    name: String,
    password: String,
    profile_image_url: String,
    email: { type: String, unique: true, required: true },
    email_shown: Boolean,
    summary: String,
    experience: [
      {
        role: String,
        company: String,
        location: String,
        start: String,
        end: String,
        description: String,
      },
    ],
    education: [
      {
        university: String,
        degree: String,
        major: String,
        gpa: Number,
        start: String,
        end: String,
      },
    ],
    skills: [String],
    projects: [
      {type: mongoose.Schema.Types.ObjectId, ref: "ModelProjects"}
    ],
    liked: [
      {type: mongoose.Schema.Types.ObjectId, ref: "ModelProjects"}
    ],
    following: [
      {type: mongoose.Schema.Types.ObjectId, ref: "ModelUsers"}
    ]
  },
  { collection: "users" }
);

export default schemaUsers;
