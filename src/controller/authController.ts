import { authEmail } from "../magic/authEmail";
import logger from "../config/logger";
import { Request, Response } from "express";

let listener = undefined;
const login = async (req: Request, res: Response) => {
	const email = req.body!.email;

	try {
		listener = await authEmail(email);

		listener!.on("email-otp-sent", () => {
			logger.info("email sent");
			return res.status(200).json({ message: "OTP has been sent" });
		});

		return res.status(400).json({ error: "Error sending otp" });
	} catch (err) {
		logger.error("Error sending OTP:", err);
		return res.status(500).json({ error: "Internal Server Error" });
	}
};

const validateOtp = (req: Request, res: Response) => {
	const otp = req.body!.otp;
	try {
		listener!.emit("verify-email-otp", otp);

		listener!.on("done", (result: string) => {
			logger.info("OTP hit!", { didToken: result });
			return res
				.status(200)
				.json({ message: "OTP has been verified", didToken: result });
		});

		listener!.on("invalid-email-otp", () => {
			return res.status(400).json({ error: "invalid otp" });
		});

		logger.info("OTP was not verified");

		return res.status(400).json({ message: "Error verifyig OTP" });
	} catch (err) {
		logger.error("Error verifying OTP:", err);
		return res.status(500).json({ error: "Internal Server Error" });
	}
};

export { validateOtp, login };
