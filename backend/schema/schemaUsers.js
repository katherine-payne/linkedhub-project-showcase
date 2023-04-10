import mongoose from "mongoose";
import schemaProjects from "./schemaProjects.js";

const schemaUsers = mongoose.Schema(
  {
    name: String,
    password: String,
    profile_image_url: String,
    contact_info: {
      email: {type: String, unique: true, required: true},
      phone: String,
    },
    experience: [{
      role: String,
      company: String,
      location: String,
      start: String,
      end: String,
      description: String
    }],
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
    projects: [schemaProjects],
  },
  { collection: "users" }
);

export default schemaUsers;
