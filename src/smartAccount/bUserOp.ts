import { getSmartAccount } from "./biconomySa";
import { PaymasterMode, Transaction } from "@biconomy/account"
import { Address } from "viem"

const sendTransaction = async (address: Address, tx: Transaction) => {
  const userOp = (await getSmartAccount(address)).sendTransaction(tx, {
    paymasterServiceData: { mode: PaymasterMode.SPONSORED }
  });

  const transaction = (await userOp).waitForTxHash();
  const transactionHash = (await transaction).transactionHash
  console.log(`Transaction Hash: ${transactionHash}`);

  const userOpReceipt = (await userOp).wait(1);

  console.log({ userOpReceipt })
  return (await userOpReceipt).receipt as Address;

}

export { sendTransaction }