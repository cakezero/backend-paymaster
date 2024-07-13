const gr = {
	account: undefined,

	batch: undefined,

	cacheTime: 4000,

	ccipRead: undefined,

	chain: {
		formatters: {
			block: { exclude: undefined, type: "block" },

			transaction: { exclude: undefined, type: "transaction" },

			transactionReceipt: { exclude: undefined, type: "transactionReceipt" },
		},

		fees: undefined,

		serializers: {},

		contracts: {
			gasPriceOracle: { address: "0x420000000000000000000000000000000000000F" },

			l1Block: { address: "0x4200000000000000000000000000000000000015" },

			l2CrossDomainMessenger: {
				address: "0x4200000000000000000000000000000000000007",
			},

			l2Erc721Bridge: { address: "0x4200000000000000000000000000000000000014" },

			l2StandardBridge: {
				address: "0x4200000000000000000000000000000000000010",
			},

			l2ToL1MessagePasser: {
				address: "0x4200000000000000000000000000000000000016",
			},

			l2OutputOracle: {
				11155111: { address: "0x84457ca9D0163FbC4bbfe4Dfbb20ba46e48DF254" },
			},

			portal: {
				11155111: {
					address: "0x49f53e41452c74589e85ca1677426ba426459e85",

					blockCreated: 4446677,
				},
			},

			l1StandardBridge: {
				11155111: {
					address: "0xfd0Bf71F60660E2f608ed56e1659C450eB113120",

					blockCreated: 4446677,
				},
			},

			multicall3: {
				address: "0xca11bde05977b3631167028862be2a173976ca11",

				blockCreated: 1059647,
			},
		},

		id: 84532,

		network: "base-sepolia",

		name: "Base Sepolia",

		nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 },

		rpcUrls: { default: { http: ["https://sepolia.base.org"] } },

		blockExplorers: {
			default: {
				name: "Basescan",

				url: "https://sepolia.basescan.org",

				apiUrl: "https://api-sepolia.basescan.org/api",
			},
		},

		testnet: true,

		sourceId: 11155111,
	},

	key: "wallet",

	name: "Wallet Client",

	pollingInterval: 4000,

	transport: {
		key: "custom",

		name: "Custom Provider",

		retryCount: 3,

		retryDelay: 150,

		timeout: undefined,

		type: "custom",
	},

	type: "walletClient",

	uid: "5eb494c3551",
};


export { gr }