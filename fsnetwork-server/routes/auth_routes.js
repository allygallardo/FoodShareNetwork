import express from "express";
import { signup, signin } from "../controllers/auth_controller.js";

const router = express.Router();

//CREATE A USER
router.post("/signup", signup)
// router.post("/studentsignup", )
// router.post("/providerignup", )

//SIGN IN
router.post("/signin", signin)

// //GOOGLE AUTH
// router.post("/google", )

export default router;