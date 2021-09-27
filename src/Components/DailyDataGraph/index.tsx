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
} from "recharts";
import moment from "moment";
import { GraphData } from "../../Types/graphData.interface";

interface Props {
  data: Array<GraphData>;
}

const DailyDataGraph: React.FC<Props> = ({ data }) => {
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
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
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
