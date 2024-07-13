import { Address } from "viem";
import { getSmartAccount } from "./smartAccount";

const sendUserOperation = async (address: Address, operationData: {
	target: Address,
	calldata: Address
}) => {
	const { calldata, target } = operationData;

	const smartAccountClient = await getSmartAccount(address);

	if (!smartAccountClient.account) {
		throw new Error("SmartAccountClient account missing");
	}

	const userOperation = await smartAccountClient.sendUserOperation({
		uo: {
			target: target,
			data: calldata,
		},
		account: smartAccountClient.account,
	});

	const txHash = await smartAccountClient.waitForUserOperationTransaction(
		userOperation
	);

	return txHash;
};

export { sendUserOperation };
