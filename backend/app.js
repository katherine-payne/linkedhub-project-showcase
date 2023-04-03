import express from "express";
import cors from "cors";
import mongoose, { mongo } from "mongoose";

import CompanyController from "./controllers/company-controller.js";
import RecruiterController from "./controllers/recruiter-controller.js";
import LoginController from "./controllers/login-controller.js";
import ProjectController from "./controllers/project-controller.js";
import SearchController from "./controllers/search-controller.js";
import UserController from "./controllers/user-controller.js";

const CONNECTION_STRING = process.env.REACT_APP_DB_CONNECTION_STRING || "mongodb://localhost:27017/linkedhub"
mongoose.connect(CONNECTION_STRING)

const app = express();
app.use(cors())
app.use(express.json());

CompanyController(app);
RecruiterController(app);
LoginController(app);
ProjectController(app);
SearchController(app);
UserController(app);

app.listen(4000);
