import { BigNumber } from "@ethersproject/bignumber";
import { ethers } from "ethers";
import { ether, unit } from "../constants";

export const numberFromWei = (number: number | BigNumber, decimals: string) => {
  let numberFromWeiS;
  switch (decimals) {
    case "18":
      numberFromWeiS = ethers.utils.formatUnits(number, ether).toString();
      break;

    case "6":
      numberFromWeiS = ethers.utils.formatUnits(number, unit).toString();
      break;

    default:
      break;
  }
  return numberFromWeiS;
};
