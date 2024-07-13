import express from "express";
import { joinRitual } from "../controller/genController";
import { login, validateOtp } from "../controller/authController";
import { magicUser } from "../middleware/magic";

const router = express.Router();

router.post("/join", magicUser, joinRitual);

router.post("/login", login)
router.post("/validate-otp", validateOtp)

export { router };
