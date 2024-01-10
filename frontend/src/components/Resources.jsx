import React from "react";
import { Box, Typography } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/theme.css";
import "../css/theme-rtl.css";



export const Resources = () => {
    return(
        <Box className="py-6">
        <Box className="container">
          <Box className="row">
            <Typography variant="h1" className="header-title display-4 header text-start mb-5"> TOP RESOURCES</Typography>
            <Box className="col-sm-6 col-lg-3 mb-4">
              <Box className="card border-0 h-100">
                <Box className="position-relative"><img className="w-100" src={require("../assets/images/gallery/taxation.jpg")} alt="courses" />
                  <Box className="course-logo"><img src={require("../assets/images/gallery/moma.png")} alt="logo" /></Box>
                  <Box className="ps-6"><span className="badge bg-warning rounded-0">Free</span></Box>
                </Box>
                <Box className="card-body px-0 py-3">
                  <Typography variant="h5" className="mb-0 font-sans-serif fw-bold fs-md-0 fs-lg-1 text-warning">Company Law Dissertation</Typography>
                  <a className="text-muted fs--1 stretched-link text-decoration-none" href="#!">
                    Should the OECD&apos;s Model Tax Convention on Income and on Capital 2010 be ratified into UK Law?
                  </a>
                </Box>
              </Box>
            </Box>
            <Box className="col-sm-6 col-lg-3 mb-4">
              <Box className="card border-0 h-100">
                <Box className="position-relative"><img className="w-100" src={require("../assets/images/gallery/med.jpg")} alt="courses" />
                  <Box className="course-logo"><img src={require("../assets/images/gallery/moma.png")} alt="logo" /></Box>
                  <Box className="ps-6"><span className="badge bg-warning rounded-0">Paid</span></Box>
                </Box>
                <Box className="card-body px-0 py-3">
                  <Typography variant="h5" className="mb-0 font-sans-serif fw-bold fs-md-0 fs-lg-1 text-warning">Medicine Research</Typography>
                  <a className="text-muted fs--1 stretched-link text-decoration-none" href="#!">Genetic Engineering</a>
                </Box>
              </Box>
            </Box>
            <Box className="col-sm-6 col-lg-3 mb-4">
              <Box className="card border-0 h-100">
                <Box className="position-relative"><img className="w-100" src={require("../assets/images/gallery/electricity.png")} alt="courses" />
                  <Box className="course-logo"><img src={require("../assets/images/gallery/y.png")} alt="logo" /></Box>
                  <Box className="ps-6"><span className="badge bg-warning rounded-0">Free</span></Box>
                </Box>
                <Box className="card-body px-0 py-3">
                  <Typography variant="h5" className="mb-0 font-sans-serif fw-bold fs-md-0 fs-lg-1 text-warning">Electricity & Magnetism</Typography>
                  <a className="text-muted fs--1 stretched-link text-decoration-none" href="#!">
                    A Microgrid for Optimal Energy Consumption depending on Wind-Driven DFIG, DG, and Solar Photovoltaic Arrays
                  </a>
                </Box>
              </Box>
            </Box>
            <Box className="col-sm-6 col-lg-3 mb-4">
              <Box className="card border-0 h-100">
                <Box className="position-relative"><img className="w-100" src={require("../assets/images/gallery/chemistry.png")} alt="courses" />
                  <Box className="course-logo"><img src={require("../assets/images/gallery/school.png")} alt="logo" /></Box>
                  <Box className="ps-6"><span className="badge bg-warning rounded-0">Free</span></Box>
                </Box>
                <Box className="card-body px-0 py-3">
                  <Typography variant="h5" className="mb-0 font-sans-serif fw-bold fs-md-0 fs-lg-1 text-warning">Medical Research</Typography>
                  <a className="text-muted fs--1 stretched-link text-decoration-none" href="#!">Medical humanitarian missions in the developing world</a>
                </Box>
              </Box>
            </Box>
            <Box className="col-sm-6 col-lg-3 mb-4">
              <Box className="card border-0 h-100">
                <Box className="position-relative"><img className="w-100" src={require("../assets/images/gallery/oriental-art.png")} alt="courses" />
                  <Box className="course-logo"><img src={require("../assets/images/gallery/cal-arts.png")} alt="logo" /></Box>
                  <Box className="ps-6"><span className="badge bg-warning rounded-0">Free</span></Box>
                </Box>
                <Box className="card-body px-0 py-3">
                  <Typography variant="h5" className="mb-0 font-sans-serif fw-bold fs-md-0 fs-lg-1 text-warning">Modern Art</Typography>
                  <a className="text-muted fs--1 stretched-link text-decoration-none" href="#!">Abstract Expressionism</a>
                </Box>
              </Box>
            </Box>
            <Box className="col-sm-6 col-lg-3 mb-4">
              <Box className="card border-0 h-100">
                <Box className="position-relative"><img className="w-100" src={require("../assets/images/gallery/lang.jpg")}alt="courses" />
                  <Box className="course-logo"><img src={require("../assets/images/gallery/y.png")} alt="logo" /></Box>
                  <Box className="ps-6"><span className="badge bg-warning rounded-0">Free</span></Box>
                </Box>
                <Box className="card-body px-0 py-3">
                  <Typography variant="h5" className="mb-0 font-sans-serif fw-bold fs-md-0 fs-lg-1 text-warning">Sociolinguistics</Typography>
                  <a className="text-muted fs--1 stretched-link text-decoration-none" href="#!">Analyzing language attrition among most English speakers</a>
                </Box>
              </Box>
            </Box>
            <Box className="col-sm-6 col-lg-3 mb-4">
              <Box className="card border-0 h-100">
                <Box className="position-relative"><img className="w-100" src={require("../assets/images/gallery/data.jpg")} alt="courses" />
                  <Box className="course-logo"><img src={require("../assets/images/gallery/school-physics.png")} alt="logo" /></Box>
                  <Box className="ps-6"><span className="badge bg-warning rounded-0">Free</span></Box>
                </Box>
                <Box className="card-body px-0 py-3">
                  <Typography variant="h5" className="mb-0 font-sans-serif fw-bold fs-md-0 fs-lg-1 text-warning">Data Science &amp; Analytics</Typography>
                  <a className="text-muted fs--1 stretched-link text-decoration-none" href="#!">
                    Prediction and Classification of COVID-19 Death and Recovered cases using ML
                  </a>
                </Box>
              </Box>
            </Box>
            <Box className="col-sm-6 col-lg-3 mb-4">
              <Box className="card border-0 h-100">
                <Box className="position-relative"><img className="w-100" src={require("../assets/images/gallery/pm.jpg")} alt="courses" />
                  <Box className="course-logo"><img src={require("../assets/images/gallery/moma.png")} alt="logo" /></Box>
                  <Box className="ps-6"><span className="badge bg-warning rounded-0">Free</span></Box>
                </Box>
                <Box className="card-body px-0 py-3">
                  <Typography variant="h5" className="mb-0 font-sans-serif fw-bold fs-md-0 fs-lg-1 text-warning">
                    Project Management
                  </Typography>
                  <a className="text-muted fs--1 stretched-link text-decoration-none" href="#!">
                    Stakeholder Approach to Successful Adoption of Projects
                  </a>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    )
}