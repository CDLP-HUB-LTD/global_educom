import React from "react";
import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import john from "../assets/images/gallery/john.jpg";
import sharon from "../assets/images/gallery/sharon.jpg";
import fadeyi from "../assets/images/gallery/fadeyi.jpg";
import "../css/theme.css";
import "../css/theme-rtl.css";

export const Testimonials = () => {
  const testimonialsData = [
    {
      name: "John Snow",
      country: "Phoenix, Arizona",
      content:
        "Global Educom is an ideal location for anybody who is looking for quality resource materials for their research projects or share what they know with others. Global Educom is a worldwide platform for online learning that helps to connect with one another via knowledge. It comes highly recommended from my side.",
      image: john
    },
    {
      name: "Sharon Stone",
      country: "Vancouver, Canada",
      content:
        "Global Educom is a life-saver! The platform made me it possible for me to have a smooth research process for my thesis.",
      image: sharon
    },
    {
      name: "Fadeyi Oloro",
      country: "Ibadan, Nigeria",
      content:
        "The best thing that can happen to anyone making research for a project is Global Educom. It is so worth it! Thank you for this amazing platform",
      image: fadeyi
    }
  ];

  const NextArrow = (props) => {
    const { className, onClick } = props;
    return <button className={className} onClick={onClick} aria-label="Next"></button>;
  };

  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return <button className={className} onClick={onClick} aria-label="Previous"></button>;
  };

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <Box id="testimonial" className="my-5">
      <Box className="container mt-5">
        <h1 className="header-title display-4 header text-start mb-5"> Testimonials</h1>
        <Box className="row flex-center h-100">
          <Slider {...settings}>
            {testimonialsData.map((testimonial, index) => (
              <Box key={index} className="carousel-item">
                <Box className="row h-100 align-items-center">
                  <Box className="col-auto p-0">
                    <Box className="card border-0 h-100">
                      <Box className="card-body h-100 p-0 pe-4">
                        <Box className="d-flex align-items-start">
                          <img src={require("../assets/images/gallery/rectangle.png")} alt="rectangle" />
                          <img src={testimonial.image} alt="testimonials" width="315" />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box className="col-md-5 col-lg-6 col-xl-7 mb-4">
                    <Box
                      className="bg-holder z-index--1 quest"
                      style={{
                        backgroundPosition: "top center",
                        backgroundSize: "auto"
                      }}
                    ></Box>
                    <Typography variant="h2" className="fw-normal lh-1 mt-4 mt-lg-0">
                      {testimonial.name}
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: "light"}} className="fw-light">{testimonial.country}</Typography>
                    <Typography variant="h6" paragraph className="mt-4 pe-xxl-8 fw-light">{testimonial.content}</Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
};
