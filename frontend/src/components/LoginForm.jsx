import React, { useState, useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import Button from "./elements/Button";
import { Link } from "react-router-dom";
import loginUser from "../loginUser";
import { useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../useAuth";


export const LoginForm = ({ match }) => {
  const queryClient = useQueryClient();
  const { login, updateUserId } = useAuth();
  const { userId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [flashMessage, setFlashMessage] = useState("");
  const [errorFlashMessage, setErrorFlashMessage] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

 
  const loginResultRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    console.log("Attempting login...");
  
    try {
      setLoading(true);
  
      if (!formData.email || !formData.password) {
        setError("Email and password are required.");
        return;
      }
  
      const loginResult = await login(formData);
  
      console.log("Login Result:", loginResult);
  
      if (loginResult && loginResult.error) {
        console.error("Login failed", loginResult.error);
        setErrorFlashMessage(loginResult.error.message || "Login failed. Please try again.");
      } else if (loginResult) {
        console.log("Login successful. Updating user ID...");
  
        if (loginResult.userId !== undefined) {
          updateUserId(loginResult.userId);
 
          navigate(`/dashboard/${userId}`);
        } else {
          console.error("User ID is undefined in login result.");
        }
      }
    } catch (error) {
      console.error("Login failed", error);
      setErrorFlashMessage("Login failed. Please try again.");
    } finally {
      setLoading(false);
      console.log("Login completed.");
    };
  };  

  useEffect(() => {
    const { userId: resultUserId } = loginResultRef.current || {};
  
    console.log("resultUserId:", resultUserId);
    console.log("Updated userId:", userId);
    console.log("loginResultRef.current:", loginResultRef.current);
  
    if (resultUserId !== undefined) {
      console.log("Redirecting to dashboard...");
      navigate(`/dashboard/${resultUserId}`);
    }
  }, [userId]);
  
  return (
    <Box container maxWidth="xl" className="mb-2 mx-auto gradient-form">
      <Box className="row">
        <Box
          col="6"
          sx={{
            display: "flex",
            justifyItem: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
          className="mb-5"
        >
          <div className="mx-auto my-5">
            <img
              src={require("../assets/images/gallery/login.png")}
              style={{ width: "240px" }}
              alt="logo"
            />
            <Typography variant="h4" className="mt-1 mb-3 pb-1 text-warning">
              Login Form
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: "16px" }}
              paragraph
              className="text-muted"
            >
              Please login to your account
            </Typography>
            <div>
              {flashMessage && (
                <div className="success-message">{setFlashMessage}</div>
              )}
              <div>
                {errorFlashMessage && (
                  <div className="error-message">{errorFlashMessage}</div>
                )}
              </div>
            </div>
            <div className="formgroup mb-3">
              <input
                className="form-control text-light"
                placeholder=" &emsp; Enter email address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-2">
              <input
                placeholder="&emsp; Enter password"
                className="form-control"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="text-center pt-1 mb-2 pb-1">
              <Button onClick={handleLogin} className="mb-2 w-100" disabled={loading}>
                {loading ? "Hang on..." : "Login"}
              </Button>
              <Link className="text-muted" to="#!">
                Forgot password?
              </Link>
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <Typography
                variant="h6"
                sx={{ fontWeight: "light", fontSize: "12px" }}
                paragraph
                className="mb-0 "
              >
                Don&apos;t have an account?
                <span>
                  <Link to="/register">
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "light", fontSize: "10px" }}
                      className="text-success d-inline"
                      paragraph
                    >
                      {" "}
                      Click Here
                    </Typography>
                  </Link>
                </span>
              </Typography>
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  );
};
