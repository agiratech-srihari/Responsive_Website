
import { Box } from "@mui/system";
import React from "react";
import CarouselDiv from "./Carousel/CarouselDiv";
import Footer from "./Footer/Footer";
import Topbar from "./Header/Topbar";
function Home() {
  return (
    <div style={{postion:'relative'}}>
        <Topbar/>
        <Box>
        <CarouselDiv/>
        </Box>
        <Footer/>
    </div>
  );
}

export default Home;
