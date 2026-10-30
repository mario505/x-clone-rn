import express from "express";
import { getUserProfile, updateProfile } from "../controllers/user.controller";
import { protectRoute } from "../middleware/auth.middleware";

const router = express.Router();

router.get("/profile/:username", getUserProfile);
router.put("/profile", protectRoute, updateProfile);

export default router;
