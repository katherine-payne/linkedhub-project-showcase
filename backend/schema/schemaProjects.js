import mongoose from "mongoose";

const schemaProjects = mongoose.Schema({
   "name": String,
   "hearts": Number,
   "repo": {type: String, required: true},
   "username": {type: String, required: true},
   "description": String,
   "languages": [String],
   "tags": [String]
}, {collection: 'projects'})

export default schemaProjects;