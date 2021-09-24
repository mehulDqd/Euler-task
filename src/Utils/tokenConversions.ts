import { BigNumber } from "@ethersproject/bignumber";
import { ethers } from "ethers";

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
