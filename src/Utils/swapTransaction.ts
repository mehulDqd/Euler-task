import {
  ChainId,
  Token,
  WETH,
  Fetcher,
  Trade,
  Route,
  Percent,
  TokenAmount,
  TradeType,
} from "@uniswap/sdk";
import { ethers } from "ethers";
import { daiContractAddress, pairAddress, networkId } from "../constants";
import routerABI from "../ABI/UniswapRouter.json";
import { ExternalProvider, JsonRpcFetchFunc } from "@ethersproject/providers";

declare global {
  interface Window {
    ethereum: ExternalProvider | JsonRpcFetchFunc;
  }
}

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

const DAI = new Token(networkId, daiContractAddress, 18);

export const getPricingData = async (amount: string) => {
  const pair = await Fetcher.fetchPairData(DAI, WETH[DAI.chainId]);
  const route = new Route([pair], WETH[DAI.chainId]);
  const trade = new Trade(
    route,
    new TokenAmount(
      WETH[DAI.chainId],
      ethers.utils.parseEther(amount).toString()
    ),
    TradeType.EXACT_INPUT
  );
  return { pair, route, trade };
};

export const swapTokens = async (amount: string, userAddress: String) => {
  try {
    const { trade } = await getPricingData(amount);
    const slippageTolerance = new Percent("50", "10000");
    const amountOutMin = trade
      .minimumAmountOut(slippageTolerance)
      .raw.toString();
    const path = [WETH[DAI.chainId].address, DAI.address];
    const deadline = Math.floor(Date.now() / 1000) + 60 * 20;
    const value = trade.inputAmount.raw.toString();
    const contract = new ethers.Contract(pairAddress, routerABI, signer);
    const tx = await contract.swapExactETHForTokens(
      amountOutMin,
      path,
      userAddress,
      deadline,
      {
        value,
      }
    );
    await tx.wait();
  } catch (error) {
    console.log(error);
  }
};
