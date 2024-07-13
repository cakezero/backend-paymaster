import { magicClient } from "./magicClient"

const authEmail = async (email: string) => {
  const magic = await magicClient();

  return await magic.auth.loginWithEmailOTP({ email, showUI: false, deviceCheckUI: false })
}

export { authEmail }