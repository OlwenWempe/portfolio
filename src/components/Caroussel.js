import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container id="portfolio" className="col-8">
      <h2 className="d-flex justify-content-center mb-5">
        <span className="ms-3 px-2"> -- </span>Portfolio
        <span className="px-2"> --</span>
      </h2>
      <Carousel
        fade
        id="carousel"
        className="py-5 mx-auto"
        activeIndex={index}
        onSelect={handleSelect}
      >
        <Carousel.Item className="item">
          <img
            className="d-block w-100 mx-auto"
            src="../assets/Images/kristen.png"
            alt="First slide"
          />
          <Carousel.Caption className="carousel-caption">
            <h3>Kristen</h3>
            <a className="carouselLink" href="https://kristen.owempe.eu/">
              Accueil Kristen
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="item">
          <img
            className="d-block w-100 mx-auto"
            src="../assets/Images/expose.png"
            alt="Second slide"
          />
          <Carousel.Caption className="carousel-caption">
            <h3>Les corneilles noires</h3>
            <a className="carouselLink" href="https://expose.owempe.eu/">
              Accueil Exposé
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="item">
          <img
            className="d-block w-100 mx-auto"
            src="../assets/Images/western-mode.png"
            alt="Third slide"
          />

          <Carousel.Caption className="carousel-caption">
            <h3>Western mode</h3>
            <a className="carouselLink" href="https://www.western-mode.fr/">
              Western mode
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default ControlledCarousel;
