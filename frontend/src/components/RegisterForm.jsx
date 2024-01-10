import React, { useState } from "react";
import { Box, Typography } from "@mui/material"
import Button from "./elements/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import "../App.css"


export const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [flashMessage, setFlashMessage] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = async () => {
    try {
      setLoading(true);
      const response = await axios.post("https://globaleducomm.com/api/send/register", formData);
      console.log(response.data); 
      setFlashMessage({
        type: "success",
        message: response.data.message,
      });
      window.location.href = "/login";
    } catch (error) {
      console.error("Error during registration:", error);
      setFlashMessage({
        type: "error",
        message: "Error during registration. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

    return(
      <Box container maxWidth="xl" className="mb-2 mx-auto gradient-form">
      <Box className="row">
        <Box col="6" sx={{ display: "flex", justifyItem: "center", alignItems: "center", flexDirection: "column" }} className="mb-5">
          <div className="mx-auto my-5">
            <img src={require("../assets/images/gallery/reg.png")}
                style={{width: "240px"}} alt="reg" />
                <Typography variant="h4" className="mt-3 pb-1 text-warning">Registration Form</Typography>
            {/* <Typography variant="h6" sx={{ fontSize: "16px" }} paragraph className="text-muted">Global Educom Registration</Typography> */}
            
            {formSubmitted && (
              <div className={`alert ${flashMessage?.type === "success" ? "alert-success" : "alert-danger"}`}>
                {flashMessage?.message}
              </div>
            )}

            <div className="formgroup mb-2">
          <input
            className="form-control text-light mb-2"
            placeholder=" &emsp; First name"
            name="fname"
            type="text"
            value={formData.fname} 
            onChange={handleChange}
          />
          <input
            className="form-control text-light"
            placeholder=" &emsp; Last name"
            name="lname"
            type="text"
            value={formData.lname}
            onChange={handleChange}
          />
        </div>
        <div className="formgroup mb-2">
          <input
            className="form-control text-light mb-2"
            placeholder=" &emsp; Email address"
            name="email"
            type="text"
            value={formData.email} 
            onChange={handleChange}
          />
          <input
            className="form-control text-light"
            placeholder=" &emsp; Phone number"
            name="phone"
            type="number"
            value={formData.phone} 
            onChange={handleChange}
          />
        </div>
        <div className="mb-2">
          <input
            className="form-control mb-2"
            placeholder=" &emsp; Create password"
            name="password"
            type="password"
            value={formData.password} 
            onChange={handleChange}
          />
          <input
            className="form-control"
            placeholder=" &emsp; Confirm password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword} 
            onChange={handleChange}
          />
        </div>

            <div className="text-center pt-1 mb-2 pb-1">
              <Button className="mb-2 w-100" onClick={handleRegister} disabled={loading}>
                {loading ? "Registering..." : "Register"}
              </Button>
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <Typography variant="h6" sx={{ fontWeight: "light", fontSize: "12px" }} paragraph className="mb-0 ">Already have an account?
                <span><Link to="/login"><Typography variant="h6"sx={{ fontWeight: "light", fontSize: "10px" }} className="text-success d-inline" paragraph> Click Here</Typography></Link></span>
              </Typography>
            </div>

          </div>

        </Box>
      </Box>

    </Box>
    )
}