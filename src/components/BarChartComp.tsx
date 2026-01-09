import { BarChart } from "@mui/x-charts";
import { dataset, valueFormatter } from "./weather";
import { Box, Typography } from "@mui/material";

const chartSetting = {
  yAxis: [
    {
      label: "rainfall (mm)",
      width: 60
    }
  ],
  height: 300
};

function BarChartComp() {
  return (
    <Box
      sx={{
        display: "grid",
        alignItems: "center",
        border: 1,
        borderColor: "#EBEBEB",
        borderRadius: 3,
        width: "100%",
        py: 2
      }}>
      <Box display={"flex"} alignItems={"center"}>
        <Typography
          color="#6C7278"
          fontFamily={"Montserrat"}
          fontSize={10}
          fontWeight={600}
          pl={5.5}
          py={2}>
          Active Doctors vs Active Patients{" "}
        </Typography>
        <Box display={"flex"} alignItems={"center"}>
          <Typography
            color="#6C7278"
            fontFamily={"Montserrat"}
            fontSize={10}
            fontWeight={600}
            pl={5.5}
            py={2}>
            Doctors
          </Typography>
        </Box>
        <Box display={"flex"} alignItems={"center"}>
          <Typography
            color="#6C7278"
            fontFamily={"Montserrat"}
            fontSize={10}
            fontWeight={600}
            pl={5.5}
            py={2}>
            Patients
          </Typography>
        </Box>
      </Box>
      <BarChart
        dataset={dataset}
        xAxis={[{ dataKey: "month" }]}
        series={[
          { dataKey: "london", valueFormatter },
          { dataKey: "paris", valueFormatter }
        ]}
        {...chartSetting}
      />
    </Box>
  );
}

export default BarChartComp;
