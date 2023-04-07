import mongoose from "mongoose";

import schemaRecruiters from "../schema/schemaRecruiters.js";

const modelRecruiters = mongoose.model("ModelRecruiters", schemaRecruiters);

export default modelRecruiters;
