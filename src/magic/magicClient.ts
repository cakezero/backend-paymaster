import { Magic } from "magic-sdk";
import { MAGIC_PUB_KEY } from "../utils/env";
import { getNetworkConfig } from "../utils/network";

let client: Magic | undefined = undefined;
const magicClient = () => {
	if (!MAGIC_PUB_KEY) throw new Error("MAGIC PUBLIC KEY NOT SET");

	if (client) return client;

	const networkConfig = getNetworkConfig();
	client = new Magic(MAGIC_PUB_KEY, {
		network: networkConfig,
	});

	return client;
};

export { magicClient };
