import express from "express";
import cors from "cors";

import CompanyController from "./controllers/company-controller.js";
import RecruiterController from "./controllers/recruiter-controller.js";
import LoginController from "./controllers/login-controller.js";
import ProjectController from "./controllers/project-controller.js";
import SearchController from "./controllers/search-controller.js";
import UserController from "./controllers/user-controller.js";

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
