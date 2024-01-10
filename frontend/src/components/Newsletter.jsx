
import { Box, Typography } from "@mui/material";
import Button from "./elements/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/theme.css";
import "../css/theme-rtl.css";


export const Newsletter = () => {
    return(
        <Box className="bg-soft-primary mt-5">
        <Box className="container">
          <Box className="row flex-center">
            <Box className="col-lg-5 col-xl-4">
                <img className="w-100" src={require("../assets/images/illustrations/cta.png")} alt="..." />
            </Box>
            <Box className="col-lg-5 col-xl-4">
              <Typography variant="h1" className="fw-normal text-secondary mb-4 newletter">Get Regular <br />Updates from</Typography>
              <Typography variant="h4" sx={{ fontWeight: "bold"}} className="my-5 text-warning">GLOBAL<span><Typography variant="h4" sx={{ fontWeight: "bold"}} className="d-inline text-success"> EDUCOM</Typography></span></Typography>
              <Typography variant="h5" className="text-secondary fw-normal my-3">SUBSCRIBE TO NEWSLETTER </Typography>
              <form className="row gx-2 gy-2 align-items-center">
                <Box className="col">
                  <Box className="input-group-icon">
                    <label className="visually-hidden" htmlFor="inputEmailCta">Address</label>
                    <input className="form-control input-box form-eduprix-control text-light" id="inputEmailCta" type="email" placeholder="Email" />
                  </Box>
                </Box>
                <Box className="d-grid mb-5">
                  <Button type="submit">Subscribe</Button>
                </Box>
              </form>
            </Box>
          </Box>
        </Box>
      </Box>
    )
}