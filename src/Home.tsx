import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

import { Box, Button, Typography } from "@mui/material";

import React from "react";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  return (
    <motion.div
      id="home"
      className="row"
      initial={{ opacity: 0, y: 20 }} // Starting state
      animate={{ opacity: 1, y: 0 }} // Ending state
      transition={{ duration: 0.6 }} // Animation duration
      style={{
        marginRight: 0,
        paddingTop: "2rem",
        marginBottom: "1rem",
      }}
    >
      <div
        className="col-lg-6 mt-5"
        style={{
          textAlign: "left",
          marginLeft: "3.5rem",
        }}
      >
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: "600",
            textTransform: "uppercase",
            color: "#FDC435",
          }}
        >
          FrontEnd Developer
        </Typography>
        <Typography
          variant="h4"
          sx={{
            marginTop: "1rem",
            fontWeight: "600",
            fontFamily: "serif",
            letterSpacing: "1px",
          }}
        >
          Hello, my name <br />
          is Nisha Fathima T
        </Typography>
        <Typography
          variant="body2"
          sx={{
            marginTop: "1rem",
            fontWeight: "400",
            fontFamily: "sans-serif",
            fontSize: ".95rem",
            letterSpacing: "1px",
            color: "#828282",
            lineHeight: "1.5rem",
          }}
        >
          I am currently working as a Frontend Developer at haiva.ai, where I
          specialize in creating dynamic and responsive web applications. With a
          strong background in React, Angular, I strive to deliver visually
          appealing and user-friendly experiences.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FDC435",
            boxShadow: 0,
            marginRight: "10px",
            marginTop: "2rem",
            color: "black",
            textTransform: "none",
            ":hover": {
              boxShadow: 0,
            },
          }}
          onClick={() => {
            const projectsElement = document.getElementById("projects");
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
          Projects
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "black",
            borderColor: "black",
            boxShadow: 0,
            marginTop: "2rem",
            textTransform: "none",
            ":hover": {
              borderColor: "black",
            },
          }}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/nisha-thahir-648492203/",
              "_blank"
            )
          }
        >
          LinkedIn
        </Button>
      </div>
      <div className="col-lg-4 mt-5">
        <Box
          component="img"
          src="/src/assets/development-illustration.png"
          alt="Developer illustration"
          sx={{
            width: "100%",
            height: "auto",
            display: "flex",
            justifyContent: "right",
            alignItems: "right",
            marginTop: "2rem",
            marginLeft: "2rem",
          }}
        />
      </div>
    </motion.div>
  );
};

export default Home;
