import Ritual from "rituals-sdk"
import { getChain } from "../viem/viemChain"
import { magicClient } from "../magic/magicClient"
import { Response } from "express"
import { CustomRequest } from "../middleware/magic"
import { getNetworkConfig } from "../utils/network"
import { Address } from "viem"

const ritualInstance = async (smartAccountAddress: Address, contract_address: Address) => {
	// const { contract_address } = req.body;
	// const smartAccountAddress = req?.user
	const rpcProvider = getNetworkConfig().rpcUrl;
	const ritualService = Ritual.initialize("custom", {
		chainId: getChain().id,
		customProvider: rpcProvider,
		account: smartAccountAddress,
	});

	return (await ritualService).getRitualInstance(contract_address);

};

export { ritualInstance }