import mongoose from "mongoose";

const schemaRecruiters = mongoose.Schema({
   "name": String,
   "image_url": String,
   "email": {type: String, required: true, unique: true},
   "email_shown": Boolean,
   "summary": String,
}, {collection: 'recruiters'})

export default schemaRecruiters;