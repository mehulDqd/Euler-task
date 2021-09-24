import Box from "@material-ui/core/Box";
import React from "react";
import {
  Tooltip,
  Legend,
  AreaChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Area,
} from "recharts";
import moment from "moment";
import { GraphData } from "../../Types/graphData.interface";

interface Props {
  data: Array<GraphData>;
}

const DailyDataGraph: React.FC<Props> = ({ data }) => {
  const graphData = data
    ?.map((item, index) => {
      return {
        name: moment(item.date * 1000)
          .toISOString()
          .split("T")[0],
        value: parseFloat(item.dailyVolumeUSD),
      };
    })
    .filter((item, index) => index % 7 === 0)
    .reverse();
  return (
    <Box>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          width={500}
          height={300}
          data={graphData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default DailyDataGraph;
