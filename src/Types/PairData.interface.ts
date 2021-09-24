export interface PairData {
  id: string;
  token0: {
    name: string;
    symbol: string;
  };
  token1: {
    name: string;
    symbol: string;
  };
  volumeUSD: string;
  totalSupply: string;
  reserveETH: string;
  reserveUSD: string;
}
