import express from "express";

import CompanyController from "./controllers/company-controller.js";
import RecruiterController from "./controllers/recruiter-controller.js";
import LoginController from "./controllers/login-controller.js";
import ProjectController from "./controllers/project-controller.js";
import TagController from "./controllers/tag-controller.js";
import LanguageController from "./controllers/language-controller.js";
import SearchController from "./controllers/search-controller.js";
import UserController from "./controllers/user-controller.js";
import HomeController from "./controllers/home-controller.js";

const app = express();
app.use(express.json());

CompanyController(app);
RecruiterController(app);
LoginController(app);
ProjectController(app);
TagController(app);
LanguageController(app);
SearchController(app);
UserController(app);
HomeController(app);

app.listen(4000);
