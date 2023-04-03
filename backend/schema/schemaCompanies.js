import mongoose from "mongoose";

import schemaRecruiters from "./schemaRecruiters.js";

const schemaCompanies = mongoose.Schema({
   "name": String,
   "summary": String,
   "image_url": String,
   "recruiters": [schemaRecruiters],
   "requests": [schemaRecruiters],
}, {collection: 'companies'})

export default schemaCompanies;