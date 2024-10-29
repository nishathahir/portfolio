import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

import customer from "./assets/images/customer_segmentation .png";
import evogym from "./assets//images/evogym.png";
import notes from "./assets/images/Notes.png";

const Projects = () => {
  return (
    <div id="projects">
      <div className="row text-center  mt-5 ">
        <Typography
          variant="h4"
          sx={{
            fontFamily: "serif",
            fontWeight: "600",
          }}
        >
          Projects
        </Typography>
      </div>

      <div
        className="row mt-5 text-center ml-4 d-flex "
        style={{ justifyContent: "center" }}
      >
        <Card
          sx={{
            width: "900px",
            height: "300px",
            borderRadius: "15px",
            boxShadow: 0,
            marginBottom: "1rem",
            background: "white",
          }}
        >
          <CardContent sx={{ paddingRight: "1rem", padding: 0 }}>
            <Grid container>
              {/* Left Side - Text and Button */}
              <Grid item xs={6} sx={{ paddingLeft: "1rem" }}>
                <Typography
                  variant="h4"
                  sx={{
                    textAlign: "left",
                    marginTop: "1rem",
                    fontWeight: "600",
                    fontFamily: "serif",
                    fontSize: "1.5rem",
                  }}
                >
                  EvoGym
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    marginTop: "1rem",
                    fontWeight: "400",
                    fontFamily: "sans-serif",
                    letterSpacing: "1px",
                    color: "#828282",
                    lineHeight: "1.5rem",
                    textAlign: "left",
                  }}
                >
                  Created a responsive fitness website - evogym, implementing
                  modern UI/UX designs and dynamic components. Integrated
                  interactive elements like navigation, forms, and workout pages
                  using React hooks.
                </Typography>
                <Button
                  variant="outlined"
                  sx={{
                    color: "black",
                    borderColor: "black",
                    boxShadow: 0,
                    width: "150px",
                    marginLeft: "10px",
                    textAlign: "left",
                    marginTop: "2rem",
                    borderRadius: "20px",
                    textTransform: "none",
                    display: "flex",
                    ":hover": {
                      border: "none",
                      background: "#fdc435",
                    },
                  }}
                  onClick={() =>
                    window.open("https://evogympage.netlify.app/", "_blank")
                  }
                >
                  View Project
                </Button>
              </Grid>

              {/* Right Side - Image */}
              <Grid
                item
                xs={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 0,
                }}
              >
                <Box
                  component="img"
                  src={evogym}
                  alt="EvoGym"
                  sx={{
                    height: "300px",
                    width: "470px",
                    marginLeft: "1rem",
                  }}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
      <div
        className="row mt-4 text-center ml-4 d-flex "
        style={{ justifyContent: "center" }}
      >
        <Card
          sx={{
            width: "900px",
            height: "300px",
            borderRadius: "15px",
            boxShadow: 0,
            marginBottom: "1rem",
            background: "white",
          }}
        >
          <CardContent sx={{ paddingRight: "1rem", padding: 0 }}>
            <Grid container>
              {/* Left Side - Text and Button */}

              {/* Right Side - Image */}
              <Grid
                item
                xs={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 0,
                }}
              >
                <Box
                  component="img"
                  src={notes}
                  alt="EvoGym"
                  sx={{
                    height: "300px",
                    width: "500px",
                    marginRight: "1rem",
                    marginLeft: "2rem",
                    marginTop: "1rem",
                  }}
                />
              </Grid>

              <Grid item xs={6} sx={{ paddingLeft: "3rem" }}>
                <Typography
                  variant="h4"
                  sx={{
                    textAlign: "left",
                    marginTop: "1rem",
                    fontWeight: "600",
                    fontFamily: "serif",
                    fontSize: "1.5rem",
                  }}
                >
                  Notes
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    marginTop: "1rem",
                    fontWeight: "400",
                    fontFamily: "sans-serif",
                    letterSpacing: "1px",
                    color: "#828282",
                    lineHeight: "1.5rem",
                    textAlign: "left",
                  }}
                >
                  Developed a note-taking web application that allows user to
                  create, edit and organize notes with customizable tags with
                  responsive, user-friendly interface with persistent data
                  storage.
                </Typography>
                <Button
                  variant="outlined"
                  sx={{
                    color: "black",
                    borderColor: "black",
                    boxShadow: 0,
                    width: "150px",
                    marginLeft: "10px",
                    textAlign: "left",
                    marginTop: "2rem",
                    borderRadius: "20px",
                    textTransform: "none",
                    display: "flex",
                    ":hover": {
                      border: "none",
                      background: "#fdc435",
                    },
                  }}
                  onClick={() =>
                    window.open("https://evogympage.netlify.app/", "_blank")
                  }
                >
                  View Project
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
      <div
        className="row mt-5 text-center ml-4 d-flex "
        style={{ justifyContent: "center" }}
      >
        <Card
          sx={{
            width: "900px",
            height: "300px",
            borderRadius: "15px",
            boxShadow: 0,
            marginBottom: "1rem",
            background: "white",
          }}
        >
          <CardContent sx={{ paddingRight: "1rem", padding: 0 }}>
            <Grid container>
              {/* Left Side - Text and Button */}
              <Grid item xs={6} sx={{ paddingLeft: "1rem" }}>
                <Typography
                  variant="h4"
                  sx={{
                    textAlign: "left",
                    marginTop: "1rem",
                    fontWeight: "600",
                    fontFamily: "serif",
                    fontSize: "1.5rem",
                  }}
                >
                  Customer Segmentor
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    marginTop: "1rem",
                    fontWeight: "400",
                    fontFamily: "sans-serif",
                    letterSpacing: "1px",
                    color: "#828282",
                    lineHeight: "1.5rem",
                    textAlign: "left",
                  }}
                >
                  Utilized RFM analysis on the UCI Machine Learning Repository's
                  Online Retail dataset to segment customers based on purchasing
                  behavior. This project identified key customer segments
                  (high-value and low-value) for targeted marketing strategies.
                </Typography>
                <Button
                  variant="outlined"
                  sx={{
                    color: "black",
                    borderColor: "black",
                    boxShadow: 0,
                    width: "150px",
                    marginLeft: "10px",
                    textAlign: "left",
                    marginTop: "2rem",
                    borderRadius: "20px",
                    textTransform: "none",
                    display: "flex",
                    ":hover": {
                      border: "none",
                      background: "#fdc435",
                    },
                  }}
                  onClick={() =>
                    window.open(
                      "https://colab.research.google.com/drive/1MA9Pt3TbsJBgyGywUxBAujRtsQ9IepuL?usp=sharing",
                      "_blank"
                    )
                  }
                >
                  View Project
                </Button>
              </Grid>

              {/* Right Side - Image */}
              <Grid
                item
                xs={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 0,
                }}
              >
                <Box
                  component="img"
                  src={customer}
                  alt="EvoGym"
                  sx={{
                    height: "300px",
                    width: "600px",
                    marginLeft: "1rem",
                  }}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
