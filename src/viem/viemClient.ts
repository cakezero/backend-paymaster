import {
	createWalletClient,
	createPublicClient,
	http,
	WalletClient,
	PublicClient,
	Address,
} from "viem";
import { getChain } from "./viemChain";
import { getNetworkConfig } from "../utils/network"
import { ethers } from "ethers"

let walletClient: WalletClient | undefined = undefined;
let publicClient: PublicClient | undefined = undefined;

const getWalletClient = (address: Address) => {
	
	if (walletClient) return walletClient;
	const url = getNetworkConfig().rpcUrl
	
	walletClient= createWalletClient({
		account: address,
		chain: getChain(),
		transport: http(url),
	});

	console.log(walletClient)

	return walletClient!;
};

const getPublicClient = () => {
	if (publicClient) return publicClient;
	const url = getNetworkConfig().rpcUrl;

	publicClient = createPublicClient({
		chain: getChain(),
		transport: http(url),
	});
	return publicClient;
};

export { getWalletClient, getPublicClient };
