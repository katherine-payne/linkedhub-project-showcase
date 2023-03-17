import express from "express"
import CompanyController from "./controllers/comapny-controller"
import ProjectController from "./controllers/project-controller"
import UserController from "./controllers/user-controller"

const app = express()

CompanyController(app)
ProjectController(app)
UserController(app)

app.listen(4000)