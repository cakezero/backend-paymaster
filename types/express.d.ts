import { Request } from "express"
import { WalletClient } from "viem"

declare global {
  namespace Express {
    interface Request {
      user: `0x${string}`
    }
  }
}
