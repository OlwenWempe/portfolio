import React from "react";
import Footer from "../components/Footer";
import Image from "../components/Image";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import { Container } from "react-bootstrap";

const Cv = () => {
  return (
    <main className="container">
      <Logo />
      <hgroup className="col-5 ms-5 align-content-center">
        <h1 className="visually-hidden">Cv</h1>
        <h2 className="fs-1">Olwen Wempe</h2>
        <h2>full-stack developer</h2>
      </hgroup>
      <section className="row mt-5">
        <Navigation />
        <Image />
        <Container id="cv" className="col-8">
          <h2 className="d-flex justify-content-center mb-5">
            <span class="ms-3 px-2"> -- </span>CV
            <span class="px-2"> --</span>
          </h2>
          <iframe
            title="cvOlwen"
            src="../assets/Images/cvOlwenWempe.pdf"
            frameborder="0"
            height="500px"
            width="100%"
          ></iframe>
        </Container>
        <Footer />
      </section>
    </main>
  );
};

export default Cv;
