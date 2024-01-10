import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/theme.css";
import "../css/theme-rtl.css";


export const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        loop: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex)
    };

  return (
    <Box className="container-fluid">
      <Box className="position-relative hero-carousel-container" id="heroCarouselContainer">
        <Box className="position-absolute translate-middle d-none d-xxl-block">
          <img src={require("../assets/images/illustrations/bg-circle.png")} alt="" />
        </Box>
        <Box className="position-absolute top-0 d-none d-lg-block" id="hero">
          <Box className="bg-carousel-soft-primary position-relative" id="heroSlidercounterContainer">
            <Box className="hero-slider-counter text-warning" id="heroSlidercounter">{`0${currentSlide + 1}`.slice(-2)} </Box>
          </Box>
        </Box>
        <Slider {...settings} className="mainSlide">
          <Box className="carousel-item">
            <img className="d-block w-100" src={require("../assets/images/gallery/header-slider-1.jpg")} height="447" alt="..." />
            <Box className="carousel-caption d-none d-sm-block">
              <Typography variant="h1" className="display-4 text-success text-start fw-light fs-2 fs-md-3 fs-lg-4 fs-xl-5"><strong>Excellent </strong><br />Proposal Feedback</Typography>
            </Box>
          </Box>
          <Box className="carousel-item">
            <img className="d-block w-100" src={require("../assets/images/gallery/header-slider-2.jpg")} height="447" alt="..." />
            <Box className="carousel-caption d-none d-sm-block">
              <Typography variant="h1" className="display-4 text-warning text-start fw-light fs-2 fs-md-3 fs-lg-4 fs-xl-5"><strong>100% </strong><br />Research Success</Typography>
            </Box>
          </Box>
          <Box className="carousel-item">
            <img className="d-block w-100" src={require("../assets/images/gallery/header-slider-3.jpg")} height="447" alt="..." />
            <Box className="carousel-caption d-none d-sm-block">
              <Typography variant="h1" className="display-4 text-success text-start fw-light fs-2 fs-md-3 fs-lg-4 fs-xl-5"><strong>Full </strong><br />Customer Support</Typography>
            </Box>
          </Box>
        </Slider>
      </Box>
      <Box className="row g-0">
        <Box className="col-3 position-relative">
          <Box className="carousel-indicators justify-content-start custom-indicators"></Box>
        </Box>
        <Box className="col-9 position-relative">
          <Box className="card">
            <Box className="card-body border-bottom border-primary p-2 px-md-4 py-md-3 py-xl-4 p-sm-3">
              <Box className="d-md-flex flex-between-center">
                <p className="mb-0 text-primary fs-2"><strong className="text-warning">100,000+ </strong> people are using our service</p>
                <Link to="/register" className="text-decoration-none text-warning fw-bold" role="button">JOIN NOW
                  <svg className="bi bi-arrow-right text-warning ms-2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                  </svg>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};