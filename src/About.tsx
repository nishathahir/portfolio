import { Button, Typography } from "@mui/material";

import aboutImage from "./assets/images/about.jpg";

const About = () => {
  return (
    <div id="about">
      <div className="row mt-5">
        <div className="col-6" style={{ marginLeft: "5rem" }}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "serif",
              fontWeight: "600",
            }}
          >
            About me
          </Typography>
        </div>
      </div>
      <div className="row" style={{ marginLeft: "4rem" }}>
        <div className="col-6">
          <Typography
            variant="h4"
            sx={{
              fontWeight: "400",
              fontFamily: "sans-serif",
              letterSpacing: "1px",
              color: "#828282",
              lineHeight: "1.5rem",
              textAlign: "left",
              fontSize: ".9rem",
              marginTop: "10px",
            }}
          >
            I graduated from PSG College of Technology in April 2024 with a
            Masters of Science in Theoretical Computer Science. I am a frontend
            developer enthusiast who enjoys building web experiences. Find more
            about me by clicking on my resume below.
          </Typography>
          <br />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#fdc435",
              color: "black",
              textTransform: "none",
              marginBottom: "2rem",
              boxShadow: "none",
              width: "100px",
              fontSize: "14px",
              fontWeight: "500",
            }}
            onClick={() => window.open("/resume.pdf", "_blank")}
          >
            Resume
          </Button>
        </div>
        <div className="col-6 text-center">
          <img
            src={aboutImage}
            style={{
              width: "270px",
              border: "2px solid #FDC435",
              borderRadius: "20px",
            }}
            alt="nisha"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
