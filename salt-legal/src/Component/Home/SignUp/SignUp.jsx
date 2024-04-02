
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "./SignUp.css";
import {
  Typography,
  Box,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  Button,
  Checkbox,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faGooglePlus,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";


function SignUp() {
  
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  // const [acceptOurTerms, setAcceptOurTerms] = useState(false);
  const [showTermsMessage, setShowTermsMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

 
  const handleCreateAccount = async () => {

    try {
     

      const response = await fetch(
        "https://the-salt-legal-backend.onrender.com/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password, confirmPassword }),
        }
      );

      const responseData = await response.json();
        // console.log(name)
        // console.log(email)
      if (response.ok) {
        // Register successful, you can handle the success here
        console.log("registration successful");
        setSuccessMessage("Registration successful! You can now log in.");

        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("")
        setMessage("");
        
        setShowTermsMessage(false);
        navigate('/thank-you');
      } else {
        // Register failed, log the error details and update the message
        console.error("Register failed", responseData);
        setMessage(`Registration Failed: ${responseData?.message || "An unknown error occurred."}`);
        
        // showTermsMessage(false)
      }
    } catch (error) {
      console.error("Error during register:", error);
      setMessage("An unexpected error has occurred.");
      
      // showTermsMessage(false)
    }
  }

  return (
    <div className="section-div">
      <Card
        className="section-card"
        sx={{
          borderRadius: "10px",
          boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
          background: "white",
          opacity: "0.8",
          backgroundSize: "cover",
          position: "absolute",
        }}
      >
        <CardContent>
          <Box
            sx={{
              m: 8,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h2 className="card-heading">
              Access our collection of 3,000+ business & legal document
              templates
            </h2>
            {message && (
              <Typography variant="body1" color="error">
                {message}
              </Typography>
            )}
            {successMessage && (
              <Typography
                variant="body2"
                style={{ color: "green", textAlign: "center" }}
              >
                {successMessage}
              </Typography>
            )}
            <FormControl sx={{ m: 1, width: "35ch" }} variant="standard">
              <InputLabel htmlFor="standard-adornment-text">Name</InputLabel>
              <Input
                id="standard-adornment-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: "35ch" }} variant="standard">
              <InputLabel htmlFor="standard-adornment-email">Email</InputLabel>
              <Input
                id="standard-adornment-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
               
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: "35ch" }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
               
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: "35ch" }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
               Confirm Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
               
              />
            </FormControl>

            <div className="div-button">
              <Button
                variant="contained"
                sx={{ justifyContent: "center", m: 1 }}
                onClick={handleCreateAccount}
               
              >
                Create 
              </Button>
            </div>

            <Link
              to="/login"
              className="div-p1"
              style={{ marginTop: "5px", marginBottom: "2px", color: "blue" }}
            >
              Already registered? LogIn
            </Link>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}

export default SignUp;
