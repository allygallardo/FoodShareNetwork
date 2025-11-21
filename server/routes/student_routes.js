import express from "express";
import { updateStudent, deleteStudent, getStudent } from "../controllers/student_controller.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();


// update a student
router.put("/:id", verifyToken, updateStudent);

// delete a student
router.delete("/:id", verifyToken, deleteStudent)

// get a student
router.get("/find/:id", getStudent)




export default router;