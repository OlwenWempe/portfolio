import React from "react";
import { Container } from "react-bootstrap";

const KnowledgeTab = () => {
  return (
    <Container className="col-8">
      <h2 className="d-flex justify-content-center mb-5">
        <span className="ms-3 px-2">-- </span>Compétences
        <span className="px-2"> --</span>
      </h2>
      <div id="compList">
        <img src="../assets/Images/devLang/HTML5 Logo.svg" alt="logo HTML 5" />

        <img
          src="../assets/Images/devLang/CSS3_logo_and_wordmark.svg"
          alt="logo CSS 3"
        />

        <img
          src="../assets/Images/devLang/Javascript-shield.svg"
          alt="logo Javascript"
        />

        <img
          src="../assets/Images/devLang/Official PHP Logo.svg"
          alt="logo PHP"
        />

        <img
          src="../assets/Images/devLang/sql-database-generic.svg"
          alt="logo sql"
        />

        <img
          src="../assets/Images/devLang/jquery_vertical.svg"
          alt="logo jQuery"
        />

        <img
          src="../assets/Images/devLang/Bootstrap_logo.svg"
          alt="logo Bootstrap"
        />

        <img src="../assets/Images/devLang/React Logo.svg" alt="logo React" />

        <img
          src="../assets/Images/devLang/Angular_full_color_logo.svg"
          alt="logo Angular"
        />

        <img src="../assets/Images/devLang/symfony.svg" alt="logo Symfony" />

        <img
          src="../assets/Images/devLang/WordPress_blue_logo.svg"
          alt="logo Wordpress"
        />

        <img src="../assets/Images/devLang/Git_icon.svg" alt="logo Git" />
      </div>
    </Container>
  );
};

export default KnowledgeTab;
