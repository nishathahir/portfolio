import { AppBar, Box, Toolbar, Typography } from "@mui/material";

import React from "react";

const Navbar: React.FC = () => {
  const commonTypographyStyle = {
    color: "black",
    fontWeight: 400,
    fontSize: "0.9rem",
    cursor: "pointer",
    "&:hover": {
      fontWeight: 700,
    },
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "transparent",

        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            ...commonTypographyStyle,
            marginLeft: "2.5rem",
          }}
          onClick={() => {
            const projectsElement = document.getElementById("home");
            if (projectsElement) {
              const yOffset = -100;
              const yPosition =
                projectsElement.getBoundingClientRect().top +
                window.pageYOffset +
                yOffset;
              window.scrollTo({ top: yPosition, behavior: "smooth" });
            }
          }}
        >
          Nisha Fathima T
        </Typography>

        {/* Right: Links */}
        <Box sx={{ display: "flex", gap: "20px", marginRight: "6rem" }}>
          {["About", "Projects", "Contact"].map((text) => (
            <Typography
              key={text}
              sx={commonTypographyStyle}
              onClick={() => {
                const element = document.getElementById(text.toLowerCase()); // Match id to text
                if (element) {
                  const yOffset = -100;
                  const yPosition =
                    element.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: yPosition, behavior: "smooth" });
                }
              }}
            >
              {text}
            </Typography>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
