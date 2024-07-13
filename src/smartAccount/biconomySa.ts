import { BiconomySmartAccountV2, createSmartAccountClient } from "@biconomy/account";
import { getWalletClient } from "../viem/viemClient";
import { ethers } from "ethers";
import { getChain } from "../viem/viemChain";
import { PAYMASTER_API_KEY } from "../utils/env"
import { Address } from "viem"

let smartAccount: BiconomySmartAccountV2 | undefined = undefined;

const getSmartAccount = async (address: Address) => {

  if (smartAccount) return smartAccount;

  smartAccount = await createSmartAccountClient({
    signer: getWalletClient(address),
    bundlerUrl: "https://bundler.biconomy.io/api/v2/84532/nJPK7B3ru.dd7f7861-190d-41bd-af80-6877f74b8f44",
    biconomyPaymasterApiKey: PAYMASTER_API_KEY
  });

  console.log({ smartAccount })

  const BSA = await smartAccount.getAccountAddress();
  console.log({ BSA })

  return smartAccount;
};

export { getSmartAccount };
