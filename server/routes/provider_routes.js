import express from "express";
import { updateProvider, deleteProvider, getProvider, getProviders } from "../controllers/provider_controller.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

// update a provider
router.put("/:id", verifyToken, updateProvider);

// delete a provider
router.delete("/:id", verifyToken, deleteProvider)

// get a provider
router.get("/find/:id", getProvider)

// get all providers
router.get("/all", getProviders)


export default router;