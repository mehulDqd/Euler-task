import Onboard from "bnc-onboard";
import Web3 from "web3";

let web3;
const onboardUser = () => {
  const apiKey = "085d9e22-5c49-4442-ab91-1230256ee636";
  const networkId = 42;
  const onboard = Onboard({
    dappId: apiKey,
    networkId,
    walletSelect: {
      wallets: [
        { walletName: "metamask" }
      ]
    },
    subscriptions: {
      wallet: (wallet: { provider: any; }) => {
        web3 = new Web3(wallet.provider);
      }
    }
  });
  return onboard;
};

export default onboardUser;
