import { baseSepolia, base } from "viem/chains";
import { ENVIRONMENT, WEB3ENVIRONMENT } from "../utils/env.ts";
import { Chain } from "viem";

type chain = {
	[key in WEB3ENVIRONMENT]: Chain;
};

const chains: chain = {
	testnet: baseSepolia,
	mainnet: base,
};

export const getChain = (): Chain => {
	return chains[ENVIRONMENT];
};
