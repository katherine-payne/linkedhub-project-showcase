import mongoose from "mongoose";

import schemaCompanies from "../mongo/schema/schemaCompanies.js";

const modelCompanies = mongoose.model("ModelCompanies", schemaCompanies);

export default modelCompanies;
