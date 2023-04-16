import React from "react";
import Caroussel from "../components/Caroussel";
import Footer from "../components/Footer";
import Image from "../components/Image";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Portfolio = () => {
  return (
    <main className="container">
      <Logo />
      <hgroup className="col-5 ms-5 align-content-center">
        <h1 className="visually-hidden">Portfolio</h1>
        <h2 className="fs-1">Olwen Wempe</h2>
        <h2>full-stack developer</h2>
      </hgroup>
      <section className="row mt-5">
        <Navigation />
        <Image />
        <Caroussel />
        <Footer />
      </section>
    </main>
  );
};

export default Portfolio;
