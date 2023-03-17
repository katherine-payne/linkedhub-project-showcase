import express from "express"

import CompanyController from "./controllers/company-controller"
import RecruiterController from "./controllers/recruiter-controller"
import LoginController from "./controllers/login-controller"
import ProjectController from "./controllers/project-controller"
import TagController from "./controllers/tag-controller"
import LanguageController from "./controllers/language-controller"
import SearchController from "./controllers/search-controller"
import UserController from "./controllers/user-controller"
import HomeController from "./controllers/home-controller"

const app = express()

CompanyController(app)
RecruiterController(app)
LoginController(app)
ProjectController(app)
TagController(app)
LanguageController(app)
SearchController(app)
UserController(app)
HomeController(app)

app.listen(4000)