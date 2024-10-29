import { Alert, Button, Snackbar, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import emailjs, { EmailJSResponseStatus } from "emailjs-com";

import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );
  const [isSending, setIsSending] = useState(false);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setSnackbarMessage("Please fill in all required fields.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      return;
    }

    if (!validateEmail(email)) {
      setSnackbarMessage("Please enter a valid email address.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      return;
    }

    setIsSending(true); // Set sending state

    const templateParams = {
      from_name: name,
      to_name: "Nisha",
      message: message,
      reply_to: email,
      user_email: email,
    };

    emailjs
      .send(
        "service_lbkkp8w",
        "template_ijw0f4m",
        templateParams,
        "9_U9l0t0wwjGd7rkr"
      )
      .then(
        (response: EmailJSResponseStatus) => {
          console.log(
            "Email sent successfully!",
            response.status,
            response.text
          );
          setSnackbarMessage("Email sent successfully!");
          setSnackbarSeverity("success");
          setSnackbarOpen(true);
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.error("Failed to send email. Error: ", err);
          setSnackbarMessage("Failed to send email. Please try again.");
          setSnackbarSeverity("error");
          setSnackbarOpen(true);
        }
      )
      .finally(() => {
        setIsSending(false); // Reset sending state
      });
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <div id="contact">
      <div className="row text-center mt-4">
        <Typography
          variant="h4"
          sx={{
            fontFamily: "serif",
            fontWeight: "600",
          }}
        >
          Contact
        </Typography>
      </div>

      <div className="row justify-content-center mt-4 mb-6">
        <div className="col-6 text-center">
          <form onSubmit={sendEmail}>
            <div className="row justify-content-center">
              <TextField
                fullWidth
                label="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{
                  marginBottom: "1rem",
                  width: "60%",
                  background: "white",
                  "& .MuiOutlinedInput-root.Mui-focused": {
                    backgroundColor: "white", // Set your desired light gray color
                    "& fieldset": {
                      border: "1px solid #e6eaff",
                    },
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "1px solid #e6eaff",
                    },
                  },
                }}
              />
            </div>
            <div className="row justify-content-center">
              <TextField
                fullWidth
                label="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!(email && !validateEmail(email))} // Ensures a boolean
                helperText={
                  email && !validateEmail(email) ? "Invalid email format." : ""
                }
                sx={{
                  marginBottom: "1rem",
                  width: "60%",
                  background: "white",
                  "& .MuiOutlinedInput-root.Mui-focused": {
                    backgroundColor: "white", // Set your desired light gray color
                    "& fieldset": {
                      border: "1px solid #e6eaff",
                    },
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "1px solid #e6eaff",
                    },
                  },
                }}
              />
            </div>
            <div className="row justify-content-center">
              <TextField
                fullWidth
                label="Message"
                required
                variant="outlined"
                multiline
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                sx={{
                  marginBottom: "1rem",
                  width: "60%",
                  background: "white",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "1px solid #e6eaff",
                    },
                  },
                }}
              />
            </div>
            <div className="row justify-content-center">
              <Button
                type="submit"
                variant="contained"
                disabled={
                  !name ||
                  !email ||
                  !message ||
                  !validateEmail(email) ||
                  isSending
                }
                sx={{
                  backgroundColor: isSending ? "#d3d3d3" : "#fdc435",
                  color: isSending ? "#000" : "black",
                  textTransform: "none",
                  marginBottom: "1rem",
                  boxShadow: "none",
                  width: "100px",
                  fontSize: "14px",
                  fontWeight: "500",
                  "&.Mui-disabled": {
                    backgroundColor: "#d3d3d3",
                    color: "#7a7a7a",
                  },
                }}
              >
                {isSending ? "Sending..." : "Send"}
              </Button>
            </div>
            <div className="row mb-5">
              <div className="col-12">
                <a
                  href="https://www.linkedin.com/in/nisha-thahir-648492203/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon
                    sx={{ fontSize: "2rem", cursor: "pointer", color: "black" }}
                  />
                </a>
                <a href="mailto:nishathahir12@gmail.com?subject=Inquiry&body=Hello%20there!">
                  <EmailIcon
                    sx={{ fontSize: "2rem", cursor: "pointer", color: "black" }}
                  />
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Snackbar for feedback */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Contact;
