import dotenv from "dotenv";

dotenv.config();

type WEB3ENVIRONMENT = "testnet" | "mainnet";

const ENVIRONMENT: WEB3ENVIRONMENT =
	process.env.ENVIRONMENT === "development" ? "testnet" : "mainnet";

const ALCHEMY_GAS_POLICY_ID = process.env.ALCHEMY_GAS_POLICY_ID;

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;

const MAGIC_PUB_KEY = process.env.MAGIC_PUB_KEY;

const PRIVATE_KEY = process.env.PRIVATE_KEY;

const PORT = process.env.PORT;

const ENV = process.env.ENVIRONMENT;

const MAGIC_SECRET_KEY = process.env.MAGIC_SECRET_KEY;

const PAYMASTER_API_KEY = process.env.PAYMASTER_API_KEY;

export {
	ENVIRONMENT,
	ALCHEMY_API_KEY,
	ALCHEMY_GAS_POLICY_ID,
	MAGIC_PUB_KEY,
	WEB3ENVIRONMENT,
	PRIVATE_KEY,
	PORT,
	MAGIC_SECRET_KEY,
	ENV,
	PAYMASTER_API_KEY
};
