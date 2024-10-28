import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import emailjs, { EmailJSResponseStatus } from "emailjs-com"; // Import EmailJS

import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission

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
          // Optionally, you can reset the form or display a success message
        },
        (err) => {
          console.error("Failed to send email. Error: ", err);
        }
      );

    // Clear the form fields after sending
    setName("");
    setEmail("");
    setMessage("");
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
                value={name}
                onChange={(e) => setName(e.target.value)} // Update name state
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
              <TextField
                fullWidth
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update email state
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
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)} // Update message state
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
                type="submit" // Change to submit
                variant="contained"
                sx={{
                  backgroundColor: "#fdc435",
                  color: "black",
                  textTransform: "none",
                  marginBottom: "1rem",
                  boxShadow: "none",
                  width: "100px",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Send
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
    </div>
  );
};

export default Contact;
