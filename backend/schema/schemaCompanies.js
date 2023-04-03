import mongoose from "mongoose";

const schemaCompanies = mongoose.Schema({
   "name": String,
   "summary": String,
   "image_url": String,
   "recruiters": [schemaRecruiters],
   "requests": [schemaRecruiters],
}, {collection: 'companies'})

export default schemaCompanies;