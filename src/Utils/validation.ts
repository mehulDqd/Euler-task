import { ethers } from "ethers";

export const handleValidation = (
  amount: string,
  balance: string | undefined
) => {
  let errorsMessage: string = "";
  if (!amount) {
    errorsMessage = "Cannot Be Empty";
  }
  if (!(+amount > 0)) {
    errorsMessage = "Value should be positive";
  }
  if (balance && +amount > 0 && +balance < +amount.toString()) {
    errorsMessage = "Insufficient Balance";
  }

  return errorsMessage;
};
