export interface User {
  address: string;
  appNetworkId: number;
  balance: string;
  daiBalance?: string;
  ethBalance?: string;
  mobileDevice: boolean;
  network: number;
  wallet: object;
}
