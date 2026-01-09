
import { Box } from "@mui/material";
import MenuList from "./MenuList";
import Main from "./Main";

function DashboardComp() {
  return (
    <nav>
      <Box
        sx={{
          display: "grid",
          height: "100vh",
          gridTemplateColumns: "20% 80%"
        }}>
        <MenuList />
        <Main />
      </Box>
    </nav>
  );
}

export default DashboardComp;
