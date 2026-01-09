import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  CircularProgress,
  Typography
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { allPatients } from "../utils/api/apis";
import dayjs from "dayjs";
import { ChevronRight } from "lucide-react";

const dataHeader = [
  "#",
  "Sign Up Date",
  "Patient Name",
  "Email Address",
  "Phone Number",
  "Last Seen Date & T",
  "Location",
  "Device",
  "Status"
];

export default function BasicTable() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["patients"],
    queryFn: allPatients
  });
  const dataArr = data?.data?.data;

  // console.log(data?.data?.data)

  if (isLoading)
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );

  if (error) {
    return <Typography color="error">Failed to load dashboard data</Typography>;
  }

  return (
    <>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"} py={2}>
        <Typography
          fontFamily={"Montserrat"}
          fontWeight={700}
          fontSize={10}
          color="#212121">
          Recent Patients Sign Up
        </Typography>
        <Box display={"flex"} gap={2} alignContent={"center"}>
          <Typography
            fontFamily={"Montserrat"}
            fontWeight={500}
            fontSize={10}
            color="#1A1C1E">
            {" "}
            See All
          </Typography>
          <ChevronRight size={10} />
        </Box>
      </Box>
      <TableContainer
        component={Paper}
        sx={{
          maxWidth: "100%",
          overflowX: "auto"
        }}>
        <Table sx={{ minWidth: 1000 }} aria-label="scrollable table">
          <TableHead>
            <TableRow>
              {dataHeader.map((title, index) => (
                <TableCell
                  key={index}
                  sx={{
                    fontSize: 10,
                    fontWeight: 600,
                    fontFamily: "Montserrat",
                    color: "#212121",
                    whiteSpace: "nowrap"
                  }}
                  scope="row"
                  align="left">
                  {title}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          {error ? (
            <Box>
              <Typography>
                There is an Error, it will be resolved soon.
              </Typography>
            </Box>
          ) : (
            <TableBody>
              {dataArr.map((obj, i) => (
                <TableRow
                  key={obj.id}
                  sx={{
                    bgcolor: i % 2 === 0 ? "#EEF2FF" : "white"
                  }}>
                  <TableCell
                    sx={{
                      fontSize: 10,
                      fontWeight: 500,
                      fontFamily: "Montserrat",
                      color: "#1A1C1E",
                      whiteSpace: "nowrap"
                    }}
                    component="th"
                    scope="row"
                    align="left">
                    {i}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: 10,
                      fontWeight: 500,
                      fontFamily: "Montserrat",
                      color: "#1A1C1E",
                      whiteSpace: "nowrap"
                    }}
                    align="left">
                    {dayjs(obj.created_at).format("YYYY-MM-DD HH:mm:ss")}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: 10,
                      fontWeight: 500,
                      fontFamily: "Montserrat",
                      color: "#1A1C1E",
                      whiteSpace: "nowrap"
                    }}
                    align="left">
                    {obj.first_name || "Guy Hawkins"}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: 10,
                      fontWeight: 500,
                      fontFamily: "Montserrat",
                      color: "#1A1C1E",
                      whiteSpace: "nowrap"
                    }}
                    align="left">
                    {obj.email || "Jacob@example.com"}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: 10,
                      fontWeight: 500,
                      fontFamily: "Montserrat",
                      color: "#1A1C1E",
                      whiteSpace: "nowrap"
                    }}
                    align="left">
                    {obj?.phone || "(704) 555-0127"}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: 10,
                      fontWeight: 500,
                      fontFamily: "Montserrat",
                      color: "#1A1C1E",
                      whiteSpace: "nowrap"
                    }}
                    align="left">
                    {dayjs(obj?.last_seen).format("YYYY-MM-DD HH:mm:ss") ||
                      "2024-09-05 15:30:37"}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: 10,
                      fontWeight: 500,
                      fontFamily: "Montserrat",
                      color: "#1A1C1E",
                      whiteSpace: "nowrap"
                    }}
                    align="left">
                    {obj?.location || "Abuja"}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: 10,
                      fontWeight: 500,
                      fontFamily: "Montserrat",
                      color: "#1A1C1E",
                      whiteSpace: "nowrap"
                    }}
                    align="left">
                    {obj.device || "iOS"}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: 10,
                      fontWeight: 500,
                      fontFamily: "Montserrat",
                      color: "#1C8C6E",
                      whiteSpace: "nowrap"
                    }}
                    align="left">
                    {obj.status || "Verified"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          )}
        </Table>
      </TableContainer>
    </>
  );
}
