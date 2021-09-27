import Box from "@material-ui/core/Box";
import React, { useMemo } from "react";
import {
  Tooltip,
  Legend,
  AreaChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Area,
  CartesianGrid,
} from "recharts";
import moment from "moment";
import { GraphData } from "../../Types/graphData.interface";
import { useStyles } from "./style";

interface Props {
  data: Array<GraphData>;
}

const DailyDataGraph: React.FC<Props> = ({ data }) => {
  const styles = useStyles();

  const graphData = useMemo(
    () =>
      data
        ?.map((item) => {
          return {
            name: moment(item.date * 1000)
              .toISOString()
              .split("T")[0],
            value: parseFloat(item.dailyVolumeUSD),
          };
        })
        .filter((item, index) => index % 7 === 0)
        .reverse(),
    [data]
  );

  return (
    <Box className={styles.container}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          data={graphData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3" vertical={false} />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis axisLine={false} tick={{ fontSize: 12 }} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#653551"
            fill="#653551"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default DailyDataGraph;
