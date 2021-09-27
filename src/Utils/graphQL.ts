import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import {
  graphDataQuery,
  pairDetailsQuery,
  pastSwapsQuery,
  apolloClientURL,
} from "../constants";

export const client = new ApolloClient({
  uri: `${apolloClientURL}`,
  cache: new InMemoryCache(),
});

export const fetchUniswapStat = async () => {
  try {
    const { data } = await client.query({
      query: gql(graphDataQuery),
    });
    return data.pairDayDatas;
  } catch (e) {
    console.log(e);
    return [];
  }
};

export const fetchPairDetails = async () => {
  try {
    const { data } = await client.query({
      query: gql(pairDetailsQuery),
    });
    return data.pair;
  } catch (e) {
    console.log(e);
    return [];
  }
};

export const fetchPastSwapDetails = async () => {
  try {
    const { data } = await client.query({
      query: gql(pastSwapsQuery),
    });
    return data.swaps;
  } catch (e) {
    console.log(e);
    return [];
  }
};
