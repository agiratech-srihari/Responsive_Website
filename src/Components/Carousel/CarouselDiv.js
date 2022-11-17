import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../../assets/Images/Doc.jpg";
import image2 from "../../assets/Images/Steth.jpg";
import image3 from "../../assets/Images/Doc_Pic.jpg";
import "./CarouselDiv.css";
function CarouselDiv() {
  return (
    <Carousel variant="light">
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "50vh", objectFit: "cover" }}
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Most valuable Thing is Your Health</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac
            ipsum ut nibh hendrerit sollicitudin sed sit amet nisl. Morbi in
            lacus ac mauris vulputate iaculis.
          </p>
          <button>
              Read Article
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          style={{ height: "50vh", objectFit: "cover" }}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Most valuable Thing is Your Health</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac
            ipsum ut nibh hendrerit sollicitudin sed sit amet nisl. Morbi in
            lacus ac mauris vulputate iaculis.
          </p>
          <button>
              Read Article
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          style={{ height: "50vh", objectFit: "cover" }}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Most valuable Thing is Your Health</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac
            ipsum ut nibh hendrerit sollicitudin sed sit amet nisl. Morbi in
            lacus ac mauris vulputate iaculis.
          </p>
          <button>
              Read Article
          </button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselDiv;
