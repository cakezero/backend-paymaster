import { ritualInstance } from "../ritual/ritual";
import { Request, Response } from "express";
import { sendUserOperation } from "../smartAccount/userOperation";
import { getSmartAccountAddress } from "../smartAccount/smartAccount";
import { encodeFunctionData } from "viem";
import { rituals_factory_abi } from "../utils/factoryAbi";
import { getExplorerUrl } from "../utils/network";
import logger from "../config/logger";
import { getSmartAccount } from "../smartAccount/biconomySa";
import { sendTransaction } from "../smartAccount/bUserOp"

const joinRitual = async (req: Request, res: Response) => {
	try {
		const { contract_address } = req.body!;

		const address = req?.user;

		// const smartAccountAddress = await getSmartAccountAddress(address);

		// const ritual = await ritualInstance(smartAccountAddress, contract_address);

		// logger.info({ ritual });

		// const { data } = ritual.join();

		const encodedData = encodeFunctionData({
			abi: rituals_factory_abi,
			functionName: "join",
			args: [],
		});

		const tx = {
			to: contract_address,
			data: encodedData
		}

		const txHash = await sendTransaction(address, tx)

		// const txHash = await sendUserOperation(smartAccountAddress, {
		// 	target: contract_address,
		// 	calldata: encodedData,
		// });

		const Tx = getExplorerUrl(txHash);

		return res.status(200).json({ Tx });
	} catch (err) {
		logger.error(err);
		return res.status(500).json({ error: "Internal Server Error" });
	}
};

export { joinRitual };
