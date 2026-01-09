import { Box } from "@mui/system";
import {
  Avatar,
  Button,
  CircularProgress,
  Divider,
  Typography
} from "@mui/material";
import { Bell } from "lucide-react";
import photo from "../assets/photo.jpg";
import { ChevronDown } from "lucide-react";
import { MoveDown } from "lucide-react";
import { DateRangePicker } from "rsuite";
// import { theme } from "../utils/theme";
import circularDotsOne from "../assets/circulat-dots.svg";
import circularDotsTwo from "../assets/circulat-dots2.svg";
import LineChartComp from "./LineChartComp";
import DonutChart from "./DonutChart";
import BasicTable from "./BasicTable";
import { usePatient } from "../store/patients";
import BarChartComp from "./BarChartComp";
import { useQuery } from "@tanstack/react-query";
import { getAllStats } from "../utils/api/apis";

const fakeData = [
  {
    cardTitle: "Total Patients",
    icon: circularDotsOne,
    count: 10,
    arrowDown: MoveDown,
    percentFall: -0.1,
    last: "Since last week"
  },
  {
    cardTitle: "Total Doctors",
    icon: circularDotsOne,

    count: 5,
    arrowDown: MoveDown,
    percentFall: -0.1,
    last: "Since last week"
  },
  {
    cardTitle: "Pending Reviews",
    icon: circularDotsOne,

    count: 3,
    arrowDown: MoveDown,
    percentFall: -0.1,
    last: "Since last week"
  },
  {
    cardTitle: "Total Consultations",
    icon: circularDotsOne,

    count: 0,
    arrowDown: MoveDown,
    percentFall: -0.1,

    last: "Since last week"
  },
  {
    cardTitle: "Prescriptions Issued",
    icon: circularDotsTwo,

    count: 0,
    arrowDown: MoveDown,
    percentFall: -0.1,
    last: "Since last week"
  }
];

function Main() {
  const userEmail = usePatient((state) => state.userEmail);

  const { data, isLoading, error } = useQuery({
    queryKey: ["allStats"],
    queryFn: getAllStats
  });

  if (isLoading)
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );

  if (error) {
    return <Typography color="error">Failed to load dashboard data</Typography>;
  }

  console.log(data?.data, "data");

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          paddingY: 1,
          paddingX: 2
        }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1
          }}>
          <Bell size={14} cursor={"pointer"} />

          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{ height: 30, width: 4 }}
          />

          <Avatar
            alt="user photo"
            sx={{ height: 30, width: 30, cursor: "pointer" }}
            src={photo}
          />
          <Box>
            <Typography
              fontSize={10}
              fontFamily={"Montserrat"}
              fontWeight={500}
              sx={{ cursor: "pointer" }}
              color="#1A1C1E"
              variant="h4">
              {userEmail || "Alexandro"}
            </Typography>
            <Typography
              fontSize={9}
              sx={{ cursor: "pointer" }}
              fontFamily={"Montserrat"}
              fontWeight={500}
              color="#5A78E7"
              variant="h4">
              Admin
            </Typography>
          </Box>
          <ChevronDown size={10} />
        </Box>
      </Box>
      <Divider orientation="horizontal" flexItem />
      <Box pl={4} pr={2}>
        <Box display={"flex"} justifyContent={"space-between"} paddingY={2}>
          <Box fontFamily={"Montserrat"}>
            <Typography
              fontSize={13}
              fontFamily={"Montserrat"}
              fontWeight={600}
              color="#1A1C1E">
              Dashboard{" "}
            </Typography>
            <Typography
              fontSize={11}
              fontFamily={"Montserrat"}
              fontWeight={500}
              color="#6C7278">
              Latest update for the last 7 days. check now{" "}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <DateRangePicker />
            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
  <DatePicker label="Start date" />
  <DatePicker label="End date" />
</LocalizationProvider> */}
            <Button
              variant="contained"
              sx={{
                bgcolor: "#283C85",
                borderRadius: "8px",
                fontWeight: 500,
                fontSize: 10,
                textTransform: "none",
                paddingX: 4,
                paddingY: 1,
                fontFamily: "Montserrat"
              }}>
              Export
            </Button>
          </Box>
        </Box>

        <Box
          display={"flex"}
          alignItems={"center"}
          gap={1}
          flexWrap={"wrap"}
          pb={2}>
          {fakeData.map((obj) => {
            return (
              <Box
                borderRadius={3}
                sx={{
                  width: {
                    xs: "100%",
                    sm: "41.2%",
                    md: "16%"
                  }
                }}
                bgcolor={
                  obj.cardTitle === "Total Patients"
                    ? "#F9F4FF"
                    : obj.cardTitle === "Total Doctors"
                    ? "#F6FAFD"
                    : obj.cardTitle === "Pending Reviews"
                    ? "#FFF8ED"
                    : obj.cardTitle === "Total Consultations"
                    ? "#F9F4FF"
                    : obj.cardTitle === "Prescriptions Issued"
                    ? "#F2FFFC"
                    : ""
                }
                p={2}>
                <Box display={"flex"} gap={1} justifyContent={"space-between"}>
                  <Typography
                    fontSize={10}
                    color="#6C7278"
                    fontWeight={600}
                    fontFamily={"Montserrat"}>
                    {obj.cardTitle}
                  </Typography>
                  <Avatar
                    variant="square"
                    sizes="10px"
                    alt={obj.cardTitle}
                    src={obj.icon}
                  />
                </Box>
                <Typography
                  fontSize={18}
                  fontFamily={"Montserrat"}
                  fontWeight={700}
                  py={1}
                  color="#1A1C1E">
                  {obj.count}
                </Typography>
                <Box display={"flex"} alignItems={"center"}>
                  <MoveDown size={9} style={{ color: "#D35858" }} />

                  <Typography
                    pl={0.1}
                    pr={2}
                    fontSize={10}
                    fontFamily={"Montserrat"}
                    color="#E15C7A">
                    {obj.percentFall}%
                  </Typography>
                  <Typography fontFamily={"Montserrat"} fontSize={10}>
                    {obj.last}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
        <Box
          sx={{
            height: "calc(100vh - 45vh)",
            overflowY: "auto"
          }}>
          <Box
            sx={{
              display: {
                xs: "grid",
                md: "flex"
              },
              gap: 2
            }}
            width={"100%"}>
            <LineChartComp title="Consultation Over Time" />
            <LineChartComp title="Prescription Volume Trend" />
          </Box>
          <Box
            py={2}
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(2, 1fr)"
              },
              gap: 2
            }}>
            <Box>
              <BarChartComp />
            </Box>
            <Box>
              <DonutChart />
            </Box>
          </Box>
          <Box>
            <BasicTable />
          </Box>
        </Box>
      </Box>
    </Box>
    // </ThemeProvider>
  );
}

export default Main;
