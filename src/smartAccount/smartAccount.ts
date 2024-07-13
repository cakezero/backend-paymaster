import { createModularAccountAlchemyClient } from "@alchemy/aa-alchemy"
import { getWalletClient } from "../viem/viemClient";
import { SmartAccountClient, base, baseSepolia, WalletClientSigner, SmartAccountSigner } from "@alchemy/aa-core"
import {
	ENVIRONMENT,
	ALCHEMY_API_KEY,
	ALCHEMY_GAS_POLICY_ID,
} from "../utils/env";
import { WalletClient, Address } from "viem";

const chain = ENVIRONMENT === "mainnet" ? base : baseSepolia

let smartAccount: SmartAccountClient | undefined = undefined;

const getSmartAccount = async (address: Address) => {
  console.log({ gsa: address })
  if (smartAccount) return smartAccount;

  smartAccount = await createSmartAccount(address);
  
  return smartAccount;
}

const getSmartAccountAddress = async (address: Address) => {
  console.log({ gsaa: address })
  const instance = await getSmartAccount(address);

  console.log({ saInstance: instance })

  const smartAccountAddress = instance.account?.address;

  if (!smartAccountAddress) throw new Error("No smart acccount address found");

  return smartAccountAddress;
}

const createSmartAccount = async (address: Address) => {
  console.log({ csa: address })
  if (!ALCHEMY_API_KEY || !ALCHEMY_GAS_POLICY_ID) throw new Error("ALCHEMY API KEY OR GAS POLICY ID not set")
  
  const lient = getWalletClient(address);
  console.log({ lient })


  const signer: SmartAccountSigner = new WalletClientSigner(lient, "json-rpc");
  console.log({ signer: signer.inner.account })
  
  return await createModularAccountAlchemyClient({
    chain,
    apiKey: ALCHEMY_API_KEY,
    signer,
    gasManagerConfig: {
      policyId: ALCHEMY_GAS_POLICY_ID
    }
  });
}

export { getSmartAccount, getSmartAccountAddress };
