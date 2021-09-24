import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { graphDataQuery, pairDetailsQuery, pastSwapsQuery } from "../constants";

export const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2",
  cache: new InMemoryCache(),
});

export const fetchUniswapStat = async () => {
  try {
    const { data } = await client.query({
      query: gql(graphDataQuery),
    });
    return data.pairDayDatas;
  } catch (e) {
    return [];
  }
};

export const fetchPairDetails = async () => {
  try {
    const { data, error } = await client.query({
      query: gql(pairDetailsQuery),
    });
    return data.pair;
  } catch (e) {
    return [];
  }
};

export const fetchPastSwapDetails = async () => {
  try {
    const { data, error } = await client.query({
      query: gql(pastSwapsQuery),
    });
    return data.swaps;
  } catch (e) {
    return [];
  }
};
