import React, { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import DailyDataGraph from "../DailyDataGraph";
import PairOverview from "../PairOverview";
import PastSwaps from "../PastSwaps";
import {
  fetchPairDetails,
  fetchPastSwapDetails,
  fetchUniswapStat,
} from "../../Utils/graphQL";
import { GraphData } from "../../Types/graphData.interface";
import { PairData } from "../../Types/PairData.interface";
import { PastSwap } from "../../Types/PastSwap.interface";
import { useStyles } from "./style";

const PairInformation: React.FC = () => {
  const styles = useStyles();
  const [value, setValue] = useState("pairOverview");
  const [graphData, setGraphData] = useState<Array<GraphData>>([]);
  const [pairData, setPairData] = useState<PairData>();
  const [swapData, setSwapData] = useState<Array<PastSwap>>([]);

  const getGraphData = async () => {
    const dailyData = await fetchUniswapStat();
    const pairOverViewData = await fetchPairDetails();
    const pastSwapData = await fetchPastSwapDetails();
    setGraphData(dailyData);
    setPairData(pairOverViewData);
    setSwapData(pastSwapData);
  };

  useEffect(() => {
    getGraphData();
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: { xs: "100%", lg: "calc(50% - 80px)" },
        margin: { xs: "40px auto", lg: "0 40px" },
      }}
    >
      <Card className={styles.card}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              aria-label="Paid details options"
              variant="fullWidth"
              TabIndicatorProps={{
                style: { background: "#653551", color: "#653551" },
              }}
              style={{ color: "#653551" }}
            >
              <Tab
                className={
                  value === "pairOverview"
                    ? styles.activeTab
                    : styles.inActiveTab
                }
                label="Pair Overview"
                value="pairOverview"
              />
              <Tab
                className={
                  value === "dailyData" ? styles.activeTab : styles.inActiveTab
                }
                label="Daily Data"
                value="dailyData"
              />
              <Tab
                className={
                  value === "pastSwaps" ? styles.activeTab : styles.inActiveTab
                }
                label="past Swaps"
                value="pastSwaps"
              />
            </TabList>
          </Box>
          <TabPanel value="pairOverview">
            <PairOverview data={pairData} />
          </TabPanel>
          <TabPanel value="dailyData">
            <DailyDataGraph data={graphData} />
          </TabPanel>
          <TabPanel value="pastSwaps">
            <PastSwaps data={swapData} />
          </TabPanel>
        </TabContext>
      </Card>
    </Box>
  );
};

export default PairInformation;
