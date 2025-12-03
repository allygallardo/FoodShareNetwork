import express from "express";
import { studentsignup, studentsignin } from "../controllers/auth_controller.js";
import { providersignup, providersignin } from "../controllers/auth_controller.js";

const router = express.Router();

//CREATE A student
router.post("/studentsignup", studentsignup)

//student SIGN IN
router.post("/studentsignin", studentsignin)

//CREATE A provider
router.post("/providersignup", providersignup)

//provider SIGN IN
router.post("/providersignin", providersignin)


export default router;