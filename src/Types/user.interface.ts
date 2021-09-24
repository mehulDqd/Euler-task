export interface User {
  address: string;
  appNetworkId: number;
  balance: string;
  daiBalance?: string;
  ethBalance?: number;
  mobileDevice: boolean;
  network: number;
  wallet: object;
}
