export const apiKey = "d44f7633-cf88-4e9d-867b-25d07d06ee12";
export const daiContractAddress = "0xad6d458402f60fd3bd25163575031acdce07538d";
export const pairAddress = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
export const apolloClientURL =
  "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2";

export const networkId = 3;
export const networkName = "ropsten";

export const decimals = "18";
export const getDataDelayTimer = 500;

export const wallets = [{ walletName: "metamask" }];

export const ether = "ether";
export const unit = "mwei";

export const tabContents = {
  label: "Paid details options",
  content: [
    {
      label: "Pair Overview",
      value: "pairOverview",
    },
    {
      label: "Daily Data",
      value: "dailyData",
    },
    {
      label: "Past Swaps",
      value: "pastSwaps",
    },
  ],
};

export const graphDataQuery = `{
  pairDayDatas(first: 100, orderBy: date, orderDirection: desc,
  where: {
    pairAddress: "0xa478c2975ab1ea89e8196811f51a7b7ade33eb11"
  }) {
    date
    dailyVolumeUSD
  }
}`;

export const pairDetailsQuery = `{
  pair(id: "0xa478c2975ab1ea89e8196811f51a7b7ade33eb11"){
  id,
  token0 {
    name,
    symbol
  },
  token1 {
    name,
    symbol
  },
  volumeUSD,
  totalSupply,
  reserveETH,
  reserveUSD,
}}`;

export const pastSwapsQuery = `{
  swaps(where : {
    pair: "0xa478c2975ab1ea89e8196811f51a7b7ade33eb11"}
    orderBy: timestamp,
    orderDirection: desc) {
  id,      
  pair {
    token0 {
      symbol
    },
    token1 {
      symbol
    }
  },
  sender,
  to,
  amount0In,
  amount0Out,
  amount1In,
  amount1Out,
  amountUSD
}}`;
