import mongoose from "mongoose";
import schemaUsers from "../mongo/schema/schemaUsers.js";
const modelUsers = mongoose.model("ModelUsers", schemaUsers);

export default modelUsers;
