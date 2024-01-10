import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Icon from "@mdi/react";
import { mdiAccount } from "@mdi/js";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../css/theme.css";
import "../css/theme-rtl.css";


export const Header = () => {
    const [isPaused, setIsPaused] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleHover = () => {
        setIsPaused(!isPaused);
      };
    
      const handleClick = () => {
        setIsClicked(!isClicked);
      };
    return(
        <Box>
        <Box maxWidth="xl" className="py-3 heading">
            <Box className="container" id="topNav">
            <Box className="row justify-content-between">
                <Box className="col-auto">
                <Link to="/" className="text-decoration-none">
                        <Typography variant="h4" sx={{ fontWeight: "bold"}} className="text-warning">GLOBAL
                            <span>
                                <Typography variant="h4" sx={{ fontWeight: "bold"}} className="d-inline text-success">
                                    &nbsp;EDUCOM
                                </Typography>
                            </span>
                        </Typography>
                    </Link>
                </Box>
                <Box className="col-auto order-2 d-none d-sm-block"><a className="nav-link" href="#!"> <i className="fas fa-user text-info me-2"></i></a></Box>
                <Box className="col-auto d-none d-lg-block">
                    <Box className="d-flex align-items-center">
                        <p className="mb-0 me-3 text-light text-end fw-bolder lh-1 opacity-50">SEARCH <br />&emsp;TOPICS</p>
                        <form>
                            <Box className="input-group d-flex flex-end-center">
                                <input className="form-control form-educomsearch-control rounded-pill" id="formGroupExampleInput" type="text" placeholder="Ex: Contract Law" />
                                <img className="input-box-icon" src={require("../assets/images/illustrations/search.png")} width="36" alt="" />
                            </Box>
                        </form>
                    </Box>
                </Box>
                <Box className="col-auto">
                    <Box className="d-flex flex-end">
                        <Link to="/login">
                        <Icon
                            path={mdiAccount}
                            title="User Profile"
                            size={1}
                            horizontal
                            vertical
                            rotate={90}
                            color={isClicked ? "green" : "orange"}
                            spin={!isPaused}
                            onMouseEnter={handleHover}
                            onMouseLeave={handleHover}
                            onClick={handleClick}
                        />
                        </Link>
                    </Box>
                </Box>
                    
            </Box>
            </Box>
      </Box>
      <Box className="py-7 py-sm-8 py-lg-10 py-xxl-9 py-xxl-11 headerbanner_container"></Box>
                <Box className="mb-n9 mb-lg-n11 p-0 headerbanner"></Box>
      </Box>
    )
}