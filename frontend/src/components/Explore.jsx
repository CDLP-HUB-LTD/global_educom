import React from "react";
import { Box, Typography } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/theme.css";
import "../css/theme-rtl.css";


export const Explore = () => {
    return(
        <Box className="bg-secondary my-5">
        <Box className="container">
          <Box className="row g-3">
            <Typography variant="h1" className="header-title-explore display-4 header text-start mb-5">
              EXPLORE NOW
            </Typography>
            <Box className="col-sm-6 col-lg-3">
              <Box className="card card-hover h-100">
                <Box className="card-body d-flex align-items-center px-4 px-lg-2 px-xl-4 bg-light">
                  <Box className="d-flex align-items-center">
                    <Box className="icon-box bg-light">
                        <img className="educom-icon" src={require("../assets/images/icons/data-science.png")} alt="explore" />
                    </Box>
                    <Box className="flex-grow-1 ms-3">
                      <Typography variant="h4" className="fs-lg-1 text-warning mb-0">Data Science</Typography>
                      <a className="stretched-link explore-link text-primary" href="#!">78 resource materials</a>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="col-sm-6 col-lg-3">
              <Box className="card card-hover h-100">
                <Box className="card-body d-flex align-items-center px-4 px-lg-2 px-xl-4 bg-light">
                  <Box className="d-flex align-items-center">
                    <Box className="icon-box bg-light">
                        <img className="educom-icon" src={require("../assets/images/icons/business.png")} alt="explore" />
                    </Box>
                    <Box className="flex-grow-1 ms-3">
                      <Typography variant="h4" className="fs-lg-1 text-warning mb-0">Business &amp; Management</Typography>
                      <a className="stretched-link explore-link" href="#!">67 resource materials</a>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="col-sm-6 col-lg-3">
              <Box className="card card-hover h-100">
                <Box className="card-body d-flex align-items-center px-4 px-lg-2 px-xl-4 bg-light">
                  <Box className="d-flex align-items-center">
                    <Box className="icon-box bg-light">
                        <img className="educom-icon" src={require("../assets/images/icons/language.png")} alt="explore" />
                    </Box>
                    <Box className="flex-grow-1 ms-3">
                      <Typography variant="h4" className="fs-lg-1 text-warning mb-0">Language</Typography>
                      <a className="stretched-link explore-link" href="#!">85 resource materials</a>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="col-sm-6 col-lg-3">
              <Box className="card card-hover h-100">
                <Box className="card-body d-flex align-items-center px-4 px-lg-2 px-xl-4 bg-light">
                  <Box className="d-flex align-items-center">
                    <Box className="icon-box bg-light">
                        <img className="educom-icon" src={require("../assets/images/icons/information.png")} alt="explore" />
                    </Box>
                    <Box className="flex-grow-1 ms-3">
                      <Typography variant="h4" className="fs-lg-1 text-warning mb-0">Information Technology</Typography>
                      <a className="stretched-link explore-link" href="#!">98 resource materials</a>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="col-sm-6 col-lg-3">
              <Box className="card card-hover h-100">
                <Box className="card-body d-flex align-items-center px-4 px-lg-2 px-xl-4 bg-light">
                  <Box className="d-flex align-items-center">
                    <Box className="icon-box bg-light">
                        <img className="educom-icon" src={require("../assets/images/icons/film.png")} alt="explore" />
                    </Box>
                    <Box className="flex-grow-1 ms-3">
                      <Typography variant="h4" className="fs-lg-1 text-warning mb-0">Modernism in Oriental Art</Typography>
                      <a className="stretched-link explore-link" href="#!">68 resource materials</a>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="col-sm-6 col-lg-3">
              <Box className="card card-hover h-100">
                <Box className="card-body d-flex align-items-center px-4 px-lg-2 px-xl-4 bg-light">
                  <Box className="d-flex align-items-center">
                    <Box className="icon-box bg-light">
                        <img className="educom-icon" src={require("../assets/images/icons/math.png")} alt="explore" />
                    </Box>
                    <Box className="flex-grow-1 ms-3">
                      <Typography variant="h4" className="fs-lg-1 text-warning mb-0">Compositions in Visual Art</Typography>
                      <a className="stretched-link explore-link" href="#!">878 resource materials</a>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="col-sm-6 col-lg-3">
              <Box className="card card-hover h-100">
                <Box className="card-body d-flex align-items-center px-4 px-lg-2 px-xl-4 bg-light">
                  <Box className="d-flex align-items-center">
                    <Box className="icon-box bg-light">
                            <img className="educom-icon" src={require("../assets/images/icons/health.png")} alt="explore" />
                    </Box>
                    <Box className="flex-grow-1 ms-3">
                      <Typography variant="h4" className="fs-lg-1 text-warning mb-0">Health &amp; Medical</Typography>
                      <a className="stretched-link explore-link" href="#!">79 resource materials</a>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="col-sm-6 col-lg-3">
              <Box className="card card-hover h-100">
                <Box className="card-body d-flex align-items-center px-4 px-lg-2 px-xl-4 bg-light">
                  <Box className="d-flex align-items-center">
                    <Box className="icon-box bg-light">
                        <img className="educom-icon" src={require("../assets/images/icons/design.png")} alt="explore" />
                    </Box>
                    <Box className="flex-grow-1 ms-3">
                      <Typography variant="h4" className="fs-lg-1 text-warning mb-0">Design &amp; Creative</Typography>
                      <a className="stretched-link explore-link" href="#!">37 resource materials</a>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    )
}