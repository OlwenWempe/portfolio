import React from "react";
import ContactForm from "../components/ContactForm";
import Image from "../components/Image";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <main className="container">
      <Logo />
      <hgroup className="col-5 ms-5 align-content-center">
        <h1 className="visually-hidden">Contact</h1>
        <h2 className="fs-1">Olwen Wempe</h2>
        <h2>full-stack developer</h2>
      </hgroup>
      <section className="row mt-5">
        <Navigation />
        <Image />
        <ContactForm />
        <Footer />
      </section>
    </main>
  );
};

export default Contact;
