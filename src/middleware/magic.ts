import { Magic } from "@magic-sdk/admin";
import { Request, Response, NextFunction } from "express";
import { MAGIC_SECRET_KEY } from "../utils/env";
import logger from "../config/logger";
import httpStatus from "http-status";
import { getAddress } from "viem";

const magicUser = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	// const authHeader = req.headers.authorization;

	// if (!authHeader)
	// 	return res
	// 		.status(httpStatus.UNAUTHORIZED)
	// 		.json({ error: "Unauthorized. Authentication Header not set" });

	// const didToken = authHeader.split(" ")[1];

	// if (!didToken)
	// 	return res
	// 		.status(httpStatus.UNAUTHORIZED)
	// 		.json({ error: "Unauthorized. Authentication Token not set" });

	// const magic = await Magic.init(MAGIC_SECRET_KEY);

	try {
		// await magic.token.validate(didToken);

		// const addy: `0x${string}` | string = magic.token.getPublicAddress(didToken)!;
		// console.log({ magic: addy });

		const userAddress = getAddress(
			"0x8B52c1eF822F57248aA4f14edB11a0CfA20007b6", 84532
		);

		req.user = userAddress;
		next();
	} catch (error) {
		logger.error(error);
		return res.status(500).json({ error: "Internal Server Error" });
	}
};

export { magicUser };
