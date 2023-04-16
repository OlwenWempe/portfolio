import React from "react";
import Footer from "../components/Footer";
import Image from "../components/Image";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const NotFound = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <Image />
      <h1 id="nF">Vous semblez perdu!</h1>
      <p className="text-center">
        Cliquez sur le logo çi-dessus pour revenir sur le droit chemin.
      </p>
      <Footer />
    </div>
  );
};

export default NotFound;
