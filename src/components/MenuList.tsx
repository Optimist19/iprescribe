import { useState } from "react";
import dashboard from "../assets/dashboard-logo.png";
import secondLogo from "../assets/logo.svg";
import { Users } from "lucide-react";
import { IdCard } from "lucide-react";
import { LayoutDashboard } from "lucide-react";
import { BrickWallShield } from "lucide-react";
import { CreditCard } from "lucide-react";
import { Settings } from "lucide-react";
import { Box, List, Typography } from "@mui/material";
import MenuItem from "./MenuItem";
import thirdLogo from "../assets/footer-logo.svg";


const navItems = [
  {
    id: 1,
    icon: LayoutDashboard,
    title: "Dashboard"
  },
  {
    id: 2,
    icon: Users,
    title: "User"
  },
  {
    id: 3,
    icon: IdCard,
    title: "Consult"
  },
  {
    id: 4,
    icon: BrickWallShield,
    title: "Pharm. & Orders Mgt"
  },
  {
    id: 5,
    icon: CreditCard,
    title: "Payments"
  }
];
const secondNavItems = [
  {
    id: 6,
    icon: Settings,
    title: "Settings"
  },
  {
    id: 7,
    icon: IdCard,
    title: "Roles & Permissions"
  },
  {
    id: 8,
    icon: Users,
    title: "Activity Log"
  },
  {
    id: 9,
    icon: IdCard,
    title: "Blog / Health Tips"
  },
  {
    id: 10,
    icon: BrickWallShield,
    title: "Notifications Mgt"
  },
  {
    id: 11,
    icon: CreditCard,
    title: "Website Updates"
  }
];
function MenuList() {
  const [hoveredId, setHoveredId] = useState(null);
  return (
    <>
      <Box
        style={{
          background: "linear-gradient(to bottom, #283C85, #090E1F)"
        }} 
        // display={{xs: "none"}}
        >
        <Box sx={{ pl: 5, pt: 3, pb: 5 }}>
          <Box
            sx={{
              display: { xs: "none", md: "block" }
            }}>
            <img
              src={dashboard}
              alt="iprescribe logo in dashboard"
              style={{ width: "100px" }}
            />
          </Box>

          <Box
            sx={{
              display: { xs: "block", sm: "none" },
              marginLeft: { xs: "-6vw" }
            }}>
            <img
              src={secondLogo}
              alt="iprescribe logo mobile"
              style={{
                width: "70px" 
              }}
            />
          </Box>
          <Box
            sx={{
              display: { sm: "block", xs: "none", md: "none" },
              marginLeft: { sm: "3px" }
            }}>
            <img
              src={thirdLogo}
              alt="iprescribe logo mobile"
              style={{
                width: "40px" 
              }}
            />
          </Box>
        </Box>

        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontWeight: 500,
            fontSize: 9,
            color: "#FFFFFF",
            paddingLeft: 3
          }}>
          Main Menu
        </Typography>
        <Box sx={{ width: "100%" }}>
          <List>
            {navItems.map((item) => (
              <MenuItem
                key={item.id}
                item={item}
                hoveredId={hoveredId}
                setHoveredId={setHoveredId}
              />
            ))}

            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontWeight: 500,
                fontSize: 9,
                color: "#FFFFFF",
                paddingLeft: 3
              }}>
              Admin Menu
            </Typography>

            {secondNavItems.map((item) => (
              <MenuItem
                key={item.id}
                item={item}
                hoveredId={hoveredId}
                setHoveredId={setHoveredId}
              />
            ))}
          </List>
        </Box>
      </Box>
    </>
  );
}

export default MenuList;
