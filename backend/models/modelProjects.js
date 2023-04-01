import mongoose from "mongoose";

import schemaProjects from "../schema/schemaProjects.js";

const modelProjects = mongoose.model("ModelProjects", schemaProjects);

export default modelProjects;
