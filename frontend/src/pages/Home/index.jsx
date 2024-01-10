import React, { useEffect } from "react";
import { Banner } from "../../components/Banner";
import { Resources } from "../../components/Resources";
import { Explore } from "../../components/Explore";
import { Testimonials } from "../../components/Testimonials";
import { Newsletter} from "../../components/Newsletter";
import { Footer } from "../../components/Footer";
import { FooterBottom } from "../../components/FooterBottom";



const Home = () =>{
    useEffect(() => {
        // Check for any side effects causing re-renders
        console.log('Home component rendered');
      }, []); 
    return(
        <>
            <Banner />
            <Resources />
            <Explore />
            <Testimonials />
            <Newsletter />
            <Footer />
            <FooterBottom />
        </>
    )
}

export default Home;