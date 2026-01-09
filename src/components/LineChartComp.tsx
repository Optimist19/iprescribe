import { Box, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";


interface LineChartCompType {
  title: string;
}

function LineChartComp({ title }: LineChartCompType) {
  return (
    <Box
      border={1}
      borderColor={"#EBEBEB"}
      borderRadius={3}
      style={{ width: "100%" }}>
      <Typography
        color="#6C7278"
        fontFamily={"Montserrat"}
        fontSize={10}
        fontWeight={600}
        pl={5.5} py={2}>
        {title}
      </Typography>
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, -5.5, 2, -7.5, 1.5, 6],
            area: true,
            baseline: "min"
          }
        ]}
        height={300}
      />
    </Box>
  );
}

export default LineChartComp;
