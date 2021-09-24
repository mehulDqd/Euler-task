import Onboard from "bnc-onboard";
import Web3 from "web3";
import { apiKey, networkId } from "../constants";

const onboardUser = () => {
  try {
    let web3;
    const onboard = Onboard({
      dappId: apiKey,
      networkId,
      walletSelect: {
        wallets: [{ walletName: "metamask" }],
      },
      subscriptions: {
        wallet: (wallet: { provider: any }) => {
          web3 = new Web3(wallet.provider);
        },
      },
    });
    return onboard;
  } catch (error) {
    console.log(error);
  }
};

export default onboardUser;
