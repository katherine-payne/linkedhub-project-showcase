import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import session from "express-session";
import dotenv from "dotenv";

import CompanyController from "./controllers/company-controller.js";
import RecruiterController from "./controllers/recruiter-controller.js";
import ProjectController from "./controllers/project-controller.js";
import SearchController from "./controllers/search-controller.js";
import UserController from "./controllers/user-controller.js";

dotenv.config();

const CONNECTION_STRING = "mongodb://127.0.0.1:27017/linkedhub";
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.set("trust proxy", 1);
app.use(
  session({
    secret: process.env.LINKEDHUB_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

CompanyController(app);
RecruiterController(app);
ProjectController(app);
SearchController(app);
UserController(app);

app.listen(4000);
