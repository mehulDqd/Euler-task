import { BigNumber, ethers } from "ethers";
import ERC20ABI from "../ABI/ERC20.json";

const provider = new ethers.providers.Web3Provider(window.ethereum);

export const numberFromWei = (number: number | BigNumber, decimals: number) => {
  let numberFromWeiS;

  if (decimals === 18) {
    numberFromWeiS = ethers.utils.formatUnits(number, "ether");
  }

  if (decimals === 6) {
    numberFromWeiS = ethers.utils.formatUnits(number, "mwei");
  }
  return numberFromWeiS;
};

export const getUserTokenBalance = async (
  userAddress: string,
  tokenAddress: string,
  tokenDecimals: number
) => {
  const contract = new ethers.Contract(tokenAddress, ERC20ABI, provider);

  const tokenBalanceInWei = await contract.balanceOf(userAddress);
  const tokenBalance = numberFromWei(tokenBalanceInWei, tokenDecimals);

  return tokenBalance;
};

export const getUserETHBalance = async () => {
  let ethBalance = 0;

  if (provider !== null) {
    try {
      const signer = provider.getSigner();
      ethBalance = Number(ethers.utils.formatEther(await signer.getBalance()));
    } catch (error) {
      console.log(error);
      ethBalance = 0;
    }
  }

  return ethBalance;
};
