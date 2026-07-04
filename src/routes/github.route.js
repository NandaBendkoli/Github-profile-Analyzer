import express from "express";
import { analyze, getAllProfiles, getProfile } from "../controllers/github.controller.js";
const routes = express.Router();

routes.post("/analyze", analyze);
routes.get("/getAllProfiles", getAllProfiles);
routes.post("/getProfile", getProfile)

export default routes;