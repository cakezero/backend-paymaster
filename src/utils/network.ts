import { WEB3ENVIRONMENT, ENVIRONMENT } from "./env";
import { Address } from "viem";
import { ALCHEMY_API_KEY } from "../utils/env";

type networkType = {
	[key in WEB3ENVIRONMENT]: {
		rpcUrl: string;
		chainId: number;
		explorerUrl: string;
	};
};

const networkConfig: networkType = {
	testnet: {
		rpcUrl: `https://base-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
		chainId: 84532,
		explorerUrl: "https://sepolia.basescan.org",
	},
	mainnet: {
		rpcUrl: `https://base-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
		chainId: 8453,
		explorerUrl: "https://basescan.org",
	},
};

const getNetworkConfig = () => {
	return networkConfig[ENVIRONMENT];
};

const getExplorerUrl = (txHash: Address) => {
	const explorerUrl = networkConfig[ENVIRONMENT].explorerUrl;

	return `${explorerUrl}/tx/${txHash}`;
};

const getAddressExplorerUrl = (address: Address) => {
	const explorerUrl = networkConfig[ENVIRONMENT].explorerUrl;

	return `${explorerUrl}/address/${address}`;
};

export { getNetworkConfig, getExplorerUrl, getAddressExplorerUrl };
