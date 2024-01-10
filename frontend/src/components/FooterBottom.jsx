import { Box, Typography } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/theme.css";
import "../css/theme-rtl.css";



export const FooterBottom = () => {
    return(
        <Box sx={{ backgroundColor: "#88527F"}} className="py-0">
            <Box className="container">
            <Box className="row justify-content-md-between justify-content-evenly py-4">
                <Box className="col-12 col-sm-8 col-md-6 col-lg-auto text-center text-md-start">
                <Typography variant="h5" paragraph className="fs--1 my-2 fw-light text-200">All rights Reserved &copy; CDLP Hub LTB, 2033</Typography>
                </Box>
            </Box>
            </Box>
      </Box>
    )
}