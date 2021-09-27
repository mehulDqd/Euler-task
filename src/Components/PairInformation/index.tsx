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
import { tabContents } from "../../constants";

const PairInformation: React.FC = () => {
  const styles = useStyles();
  const [activeTab, setActiveTab] = useState("pairOverview");
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

  const handleChange = (event: React.SyntheticEvent, value: string) => {
    setActiveTab(value);
  };

  return (
    <Box className={styles.container}>
      <Card className={styles.card}>
        <TabContext value={activeTab}>
          <Box className={styles.tabContainer}>
            <TabList
              onChange={handleChange}
              aria-label={tabContents.label}
              variant="fullWidth"
              TabIndicatorProps={{
                style: { background: "#653551" },
              }}
            >
              {tabContents.content.map((item) => {
                return (
                  <Tab
                    key={item.value}
                    className={
                      activeTab === item.value
                        ? styles.activeTab
                        : styles.inActiveTab
                    }
                    label={item.label}
                    value={item.value}
                  />
                );
              })}
            </TabList>
          </Box>
          <TabPanel
            className={styles.panelContainer}
            value={tabContents.content[0].value}
          >
            <PairOverview data={pairData} />
          </TabPanel>
          <TabPanel
            className={styles.panelContainer}
            value={tabContents.content[1].value}
          >
            <DailyDataGraph data={graphData} />
          </TabPanel>
          <TabPanel
            className={styles.panelContainer}
            value={tabContents.content[2].value}
          >
            <PastSwaps data={swapData} />
          </TabPanel>
        </TabContext>
      </Card>
    </Box>
  );
};

export default PairInformation;
