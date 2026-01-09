import { Box, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";

const data = [
  { label: "Pediatrics", value: 45, color: "#43B4BC" },
  { label: "Cardiology", value: 30, color: "#43B4BC" },
  { label: "Surgery", value: 15, color: "#FF9900" },
  { label: "Others", value: 10, color: "#FF9900" }
];

const settings = {
  margin: { right: 5 },
  width: 200,
  height: 200,
  hideLegend: true
};

export default function DonutChart() {
  return (
    <Box
      sx={{
        display: "grid",
        alignItems: "center",
        // justifyContent: "center",
        gridTemplateColumns: {
          md: "repeat(2, 50%)"
        },

        border: 1,
        borderColor: "#EBEBEB",
        borderRadius: 3,
        width: "100%",
        py: 2
      }}>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Typography
          color="#6C7278"
          fontFamily={"Montserrat"}
          fontSize={10}
          fontWeight={600}
          pl={5.5}
          py={2}>
          Top Specialties in Demand
        </Typography>
        <PieChart
          series={[
            { innerRadius: 50, outerRadius: 100, data, arcLabel: "value" }
          ]}
          {...settings}
        />
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 20%)",
          gap: 2,
          p: {
            xs: 2
          }
        }}>
        {data.map((obj, index) => (
          <Box key={index}>
            <Typography
              fontFamily="Montserrat"
              fontWeight={600}
              fontSize={10}
              color="#19203166"
              variant="h4">
              {obj.label}
            </Typography>

            <Box display="flex" gap={1} alignItems="center">
              <Box
                sx={{
                  height: 10,
                  width: 10,
                  bgcolor: obj.color,
                  borderRadius: "50%"
                }}
              />

              <Typography
                sx={{
                  fontSize: 16,
                  color: "#192031",
                  fontFamily: "Montserrat",
                  fontWeight: "700"
                }}
                variant="h4">
                {obj.value}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
