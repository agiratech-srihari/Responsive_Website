
import { Box } from "@mui/system";
import React from "react";
import CarouselDiv from "./Carousel/CarouselDiv";
import Footer from "./Footer/Footer";
import GridDiv from "./GridCont/GridDiv";
import Topbar from "./Header/Topbar";
function Home() {
  return (
    <div style={{height:'100%'}}>
        <Topbar/>
        <Box>
        <CarouselDiv/>
        </Box>
        <Box>
          <GridDiv/>
        </Box>
        <Footer/>

    </div>
  );
}

export default Home;
