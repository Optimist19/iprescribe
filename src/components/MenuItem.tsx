import React from "react";
import { Box, ListItem, ListItemButton, ListItemText } from "@mui/material";

interface MenuItemProps {
  item: {
    id: number;
    icon: React.ComponentType<{ size?: number; color?: string }>;
    title: string;
  };
  hoveredId: number | null;
  setHoveredId: (id: number | null) => void;
}

function MenuItem({ item, hoveredId, setHoveredId }: MenuItemProps) {
  const Icon = item.icon;
  const isHovered = hoveredId === item.id;

  return (
    <ListItem disablePadding>
      <Box
        sx={{
          height: 40,
          width: 6,
          mr: 1,
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5,
          backgroundColor: isHovered ? "white" : "transparent"
        }}
      />

      <ListItemButton
        onMouseEnter={() => setHoveredId(item.id)}
        onMouseLeave={() => setHoveredId(null)}
        sx={{
          minHeight: 40,
          borderTopLeftRadius: 50,
          borderBottomLeftRadius: 50,
          color: "white",
          transition: "all 0.2s ease",
          "&:hover": {
            backgroundColor: "white",
            color: "#283C85"
          }
        }}>
        <Box sx={{ minWidth: 32 }}>
          <Icon size={18} color={isHovered ? "#283C85" : "white"} />
        </Box>

        <ListItemText
          sx={{
            display: {
              xs: "none",
              md: "block"
            }
          }}
          primary={item.title}
          slotProps={{
            primary: {
              fontSize: 10,
              fontWeight: 500,
              fontFamily: "Montserrat"
            }
          }}
        />
      </ListItemButton>
    </ListItem>
  );
}

export default MenuItem;
